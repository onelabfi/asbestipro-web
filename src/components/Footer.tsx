import Link from 'next/link';

const palvelut = [
  { label: 'Asbestikartoitus', href: '/asbestikartoitus' },
  { label: 'Asbestinäyte', href: '/asbestinayte' },
  { label: 'Hinnasto', href: '/hinnasto' },
  { label: 'Asbestikartoitus hinta', href: '/asbestikartoitus-hinta' },
  { label: 'Luotettavuus', href: '/luotettavuus' },
];

const tietopankki = [
  { label: 'Mikä on asbestikartoitus?', href: '/tietopankki/mika-on-asbestikartoitus' },
  { label: 'Missä asbestia esiintyy?', href: '/tietopankki/missa-asbestia-esiintyy' },
  { label: 'Asbestilainsäädäntö', href: '/tietopankki/asbestilainsaadanto' },
  { label: 'Asbestinäyte itse', href: '/tietopankki/asbestinayte-itse' },
  { label: 'Kaikki artikkelit', href: '/tietopankki/artikkelit' },
];

const kaupungit = [
  { label: 'Helsinki', href: '/asbestikartoitus-hinta' },
  { label: 'Espoo', href: '/asbestikartoitus-hinta' },
  { label: 'Tampere', href: '/asbestikartoitus-hinta' },
  { label: 'Turku', href: '/asbestikartoitus-hinta' },
  { label: 'Vantaa', href: '/asbestikartoitus-hinta' },
];

export function Footer() {
  return (
    <footer className="bg-[#070e1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Palvelut</h3>
            <ul className="space-y-3">
              {palvelut.map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Tietopankki</h3>
            <ul className="space-y-3">
              {tietopankki.map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Kaupungit</h3>
            <ul className="space-y-3">
              {kaupungit.map(l => (
                <li key={l.label}><Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 mt-8">Yhteystiedot</h3>
            <ul className="space-y-3">
              <li><Link href="/ukk" className="text-sm text-gray-400 hover:text-white transition-colors">UKK</Link></li>
              <li><Link href="/asbesti" className="text-sm text-gray-400 hover:text-white transition-colors">Asbesti</Link></li>
              <li><Link href="/ota-yhteytta" className="text-sm text-gray-400 hover:text-white transition-colors">Ota yhteyttä</Link></li>
              <li><a href="tel:+35845784444444" className="text-sm text-gray-400 hover:text-white transition-colors">+358 45 78 444 444</a></li>
              <li><a href="mailto:info@asbesti.pro" className="text-sm text-gray-400 hover:text-white transition-colors">info@asbesti.pro</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-white">Asbesti</span>
              <span className="text-xl font-black text-blue-500">Pro</span>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Suomen Asbestipro Oy</p>
              <p>Y-tunnus: 1581184-2</p>
              <p>Ukkohauentie 11-13A</p>
              <p>02170 Espoo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; 2026 Suomen Asbestipro Oy. Kaikki oikeudet pidätetään.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>ISO 22262-1 Standardi</span>
            <span>&bull;</span>
            <span>SEM-EDS</span>
            <span>&bull;</span>
            <span>Suomi</span>
          </div>
        </div>
        <div className="text-center pb-4">
          <span className="text-xs text-gray-600">Powered by Artificial Innovations</span>
        </div>
      </div>
    </footer>
  );
}
