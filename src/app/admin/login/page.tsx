'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowser } from '@/lib/supabase-browser';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = getSupabaseBrowser();
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });

      if (authError) {
        setError(`Virhe: ${authError.message}`);
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from('admin_users')
        .select('role')
        .eq('user_id', data.user.id)
        .single() as { data: { role: string } | null };

      if (!profile || profile.role !== 'admin') {
        await supabase.auth.signOut();
        setError('Ei käyttöoikeuksia');
        setLoading(false);
        return;
      }

      router.push('/?edit=1');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError(`Kirjautuminen epäonnistui: ${message}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-[#111b2e] border border-white/10 rounded-xl p-8">
          <h1 className="text-xl font-bold text-center mb-6">Kirjaudu sisään</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Sähköposti</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="email@asbesti.pro"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Salasana</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            {error && <p className="text-red-400 text-sm bg-red-500/10 px-3 py-2 rounded-lg">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium disabled:opacity-50 transition-colors"
            >
              {loading ? 'Kirjaudutaan...' : 'Kirjaudu'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
