'use client';

import Link from 'next/link';
import { Editable } from '@/components/Editable';

export function PricingCards() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <Editable id="home.pricing.label" defaultContent="Palvelumme" page="home" as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id="home.pricing.title" defaultContent="Valitse sinulle sopiva palvelu" page="home" as="h2" className="text-3xl sm:text-4xl font-bold mb-12" />

        <div className="grid md:grid-cols-2 gap-0 bg-[#111b2e] rounded-2xl overflow-hidden border border-white/5">
          {/* Kartoitus */}
          <div className="p-8 md:border-r border-b md:border-b-0 border-white/5">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider mb-4">Asbestikartoitus</p>
            <div className="mb-4">
              <Editable id="home.pricing.survey.price" defaultContent="alkaen 119€" page="home" as="span" className="text-3xl font-bold" />
              <span className="text-gray-400 ml-2 text-sm">sis. alv</span>
            </div>
            <Editable id="home.pricing.survey.desc" defaultContent="Hinta sisältää kaiken: kartoituksen, kaikki näytteet, laboratorioanalyysin, kilometrikorvauksen, alv:n ja raportin." page="home" as="p" className="text-gray-400 text-sm mb-6" />
            <ul className="space-y-3 mb-8">
              {['Kaikki näytteet kuuluvat hintaan', 'Laboratorioanalyysi sisältyy', 'Kilometrikorvaus sisältyy', 'ALV sisältyy hintaan', 'Lakisääteinen raportti'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/tilaa" className="block bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-3.5 rounded-lg transition-colors">
              Tilaa kartoitus
            </Link>
          </div>

          {/* Näyte */}
          <div className="p-8">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider mb-4">Asbestinäyte</p>
            <div className="mb-4">
              <Editable id="home.pricing.sample.price" defaultContent="39,90€" page="home" as="span" className="text-3xl font-bold" />
              <span className="text-gray-400 ml-2 text-sm">+ alv / näyte</span>
            </div>
            <Editable id="home.pricing.sample.desc" defaultContent="Ota näyte itse materiaalista ja lähetä se postitse laboratorioomme. Tulokset sähköpostiin nopeasti." page="home" as="p" className="text-gray-400 text-sm mb-6" />
            <ul className="space-y-3 mb-8">
              {['Ota näyte itse ohjeiden mukaan', 'Lähetä postitse mistä vain Suomessa', 'SEM-EDS laboratorioanalyysi', 'ISO 22262-1 -standardin mukainen', 'Tulokset sähköpostiin'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/tilaa" className="block bg-white/5 border border-white/10 hover:bg-white/10 text-white text-center font-medium py-3.5 rounded-lg transition-colors">
              Tilaa näyteanalyysi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
