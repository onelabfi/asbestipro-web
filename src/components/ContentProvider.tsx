'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { getSupabaseBrowser } from '@/lib/supabase-browser';

type ContentContextType = {
  content: Record<string, string>;
  isEditMode: boolean;
  isAdmin: boolean;
  updateContent: (id: string, value: string, page: string) => void;
};

const ContentContext = createContext<ContentContextType>({
  content: {},
  isEditMode: false,
  isAdmin: false,
  updateContent: () => {},
});

export function useContent() {
  return useContext(ContentContext);
}

export function ContentProvider({
  children,
  initialContent,
  page,
}: {
  children: ReactNode;
  initialContent: Record<string, string>;
  page: string;
}) {
  const [content, setContent] = useState(initialContent);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const debounceTimers = useRef<Record<string, NodeJS.Timeout>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const editParam = params.get('edit') === '1';

    if (editParam) {
      const supabase = getSupabaseBrowser();
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          supabase
            .from('admin_users')
            .select('role')
            .eq('user_id', session.user.id)
            .single()
            .then(({ data }: { data: { role: string } | null }) => {
              if (data?.role === 'admin') {
                setIsEditMode(true);
                setIsAdmin(true);
              }
            });
        }
      });
    }
  }, []);

  const updateContent = useCallback((id: string, value: string, contentPage: string) => {
    setContent(prev => ({ ...prev, [id]: value }));

    if (debounceTimers.current[id]) {
      clearTimeout(debounceTimers.current[id]);
    }

    debounceTimers.current[id] = setTimeout(async () => {
      const supabase = getSupabaseBrowser();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase.from('content_blocks') as any).upsert({
        id,
        content: value,
        page: contentPage,
        updated_at: new Date().toISOString(),
      });
    }, 1500);
  }, []);

  return (
    <ContentContext.Provider value={{ content, isEditMode, isAdmin, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}
