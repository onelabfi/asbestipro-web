'use client';

import { useRef, useCallback } from 'react';
import { useContent } from './ContentProvider';

type EditableProps = {
  id: string;
  defaultContent: string;
  page: string;
  as?: string;
  className?: string;
};

export function Editable({ id, defaultContent, page, as = 'div', className = '' }: EditableProps) {
  const { content, isEditMode, updateContent } = useContent();
  const ref = useRef<HTMLDivElement>(null);
  const displayContent = content[id] || defaultContent;

  const handleBlur = useCallback(() => {
    if (ref.current) {
      const newValue = ref.current.innerText;
      if (newValue !== displayContent) {
        updateContent(id, newValue, page);
      }
    }
  }, [id, page, displayContent, updateContent]);

  const Component = as as keyof JSX.IntrinsicElements;

  if (!isEditMode) {
    return <Component className={className}>{displayContent}</Component>;
  }

  return (
    <div
      ref={ref}
      className={`${className} outline-dashed outline-1 outline-blue-500/0 hover:outline-blue-500/50 focus:outline-blue-500 focus:outline-2 transition-all cursor-text rounded-sm`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      dangerouslySetInnerHTML={{ __html: displayContent }}
    />
  );
}
