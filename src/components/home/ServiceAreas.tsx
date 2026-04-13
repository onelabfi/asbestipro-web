'use client';

import Link from 'next/link';
import { Editable } from '@/components/Editable';

const cities = [
  'Helsinki', 'Espoo', 'Vantaa', 'Vihti',
  'Lohja', 'Kirkkonummi', 'Klaukkala', 'Nurmijärvi',
  'Järvenpää', 'Sipoo', 'Kerava', 'Tuusula',
  'Tampere', 'Turku', 'Salo', 'Naantali',
];

function citySlug(name: string) {
  return name.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/å/g, 'a');
}

export function ServiceAreas() {
  return (
    <section className="py-20 sm:py-28 bg-[#070e1a]">
      <div className="max-w-5xl mx-auto px-4">
        <Editable id="home.areas.label" defaultContent="Palvelualueet" page="home" as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id="home.areas.title" defaultContent="Asbestikartoitus koko Suomessa" page="home" as="h2" className="text-3xl sm:text-4xl font-bold mb-12" />

        <div className="bg-[#111b2e] border border-white/5 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {cities.map((city, i) => (
              <Link
                key={city}
                href={`/${citySlug(city)}`}
                className={`p-4 sm:p-5 hover:bg-white/5 transition-colors ${i < cities.length - 4 ? 'border-b border-white/5' : ''} ${(i + 1) % 4 !== 0 ? 'border-r border-white/5' : ''}`}
              >
                <p className="font-medium text-sm text-white">{city}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/asbestikartoitus-hinta" className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors">
            Katso kaikki kaupungit ja hinnat →
          </Link>
        </div>
      </div>
    </section>
  );
}
