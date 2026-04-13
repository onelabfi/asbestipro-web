'use client';

import { useState } from 'react';
import Link from 'next/link';

const palvelutLinks = [
  { label: 'Asbestikartoitus', href: '/asbestikartoitus' },
  { label: 'Asbestinäyte', href: '/asbestinaytte' },
  { label: 'Hinnasto', href: '/hinnasto' },
  { label: 'Asbestikartoitus hinta', href: '/asbestikartoitus-hinta' },
  { label: 'Luotettavuus', href: '/luotettavuus' },
];

const tietopankkiLinks = [
  { label: 'Mikä on asbestikartoitus?', href: '/tietopankki/mika-on-asbestikartoitus' },
  { label: 'Missä asbestia esiintyy?', href: '/tietopankki/missa-asbestia-esiintyy' },
  { label: 'Asbestilainsäädäntö', href: '/tietopankki/asbestilainsaadanto' },
  { label: 'Asbestinäyte itse', href: '/tietopankki/asbestinaytte-itse' },
  { label: 'Kaikki artikkelit', href: '/tietopankki/artikkelit' },
];

function Dropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
        {label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 w-64 z-50"><div className="bg-[#111b2e] border border-white/10 rounded-lg shadow-xl py-2">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
              {link.label}
            </Link>
          ))}
        </div></div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            <span className="text-white">Asbesti</span>
            <span className="text-blue-500 font-black">Pro</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Dropdown label="Palvelut" links={palvelutLinks} />
            <Dropdown label="Tietopankki" links={tietopankkiLinks} />
            <Link href="/asbesti" className="text-sm text-gray-300 hover:text-white transition-colors">Asbesti</Link>
            <Link href="/ukk" className="text-sm text-gray-300 hover:text-white transition-colors">UKK</Link>
            <Link href="/ota-yhteytta" className="text-sm text-gray-300 hover:text-white transition-colors">Yhteystiedot</Link>
            <Link href="/tilaa" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Tilaa kartoitus
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#111b2e] border-t border-white/5 px-4 py-4 space-y-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Palvelut</p>
          {palvelutLinks.map(l => <Link key={l.href} href={l.href} className="block text-sm text-gray-300 py-1">{l.label}</Link>)}
          <p className="text-xs text-gray-500 uppercase tracking-wider pt-2">Tietopankki</p>
          {tietopankkiLinks.map(l => <Link key={l.href} href={l.href} className="block text-sm text-gray-300 py-1">{l.label}</Link>)}
          <div className="border-t border-white/5 pt-3 space-y-2">
            <Link href="/asbesti" className="block text-sm text-gray-300">Asbesti</Link>
            <Link href="/ukk" className="block text-sm text-gray-300">UKK</Link>
            <Link href="/ota-yhteytta" className="block text-sm text-gray-300">Yhteystiedot</Link>
            <Link href="/tilaa" className="block bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center mt-2">Tilaa kartoitus</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
