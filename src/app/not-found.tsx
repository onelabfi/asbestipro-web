import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Sivua ei löytynyt</h2>
        <p className="text-gray-400 mb-8">Etsimääsi sivua ei valitettavasti löytynyt. Sivu on saatettu poistaa tai osoite on virheellinen.</p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Etusivulle
          </Link>
          <Link href="/tilaa" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Tilaa kartoitus
          </Link>
        </div>
      </div>
    </div>
  );
}
