'use client';

import Link from 'next/link';
import { Editable } from '@/components/Editable';

const pricingTiers = [
  { area: 'PK-seutu (Helsinki, Espoo, Vantaa)', price: '119€', cities: ['Helsinki', 'Espoo', 'Vantaa'] },
  { area: 'Lähialue', price: '199€', cities: ['Vihti', 'Lohja', 'Kirkkonummi', 'Klaukkala', 'Nurmijärvi', 'Järvenpää', 'Sipoo', 'Kerava', 'Tuusula', 'Hyvinkää', 'Riihimäki', 'Porvoo'] },
  { area: 'Tampere & Turku', price: '219€', cities: ['Tampere', 'Turku', 'Salo', 'Naantali', 'Nokia', 'Kangasala', 'Lempäälä', 'Pirkkala'] },
  { area: 'Muu Suomi', price: '239€', cities: ['Lahti', 'Jyväskylä', 'Kuopio', 'Oulu', 'Pori', 'Lappeenranta', 'Kouvola', 'Hämeenlinna'] },
];

export function PricingPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <Editable id="hinta.label" defaultContent="Hinnasto" page="hinta" as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id="hinta.title" defaultContent="Asbestikartoitus hinta" page="hinta" as="h1" className="text-3xl sm:text-4xl font-bold mb-4" />
        <Editable id="hinta.desc" defaultContent="Hinta sisältää kaiken: kartoituksen, kaikki näytteet, laboratorioanalyysin, kilometrikorvauksen, alv:n ja raportin. Ei piilokustannuksia." page="hinta" as="p" className="text-gray-400 text-lg mb-12" />

        <div className="space-y-6">
          {pricingTiers.map((tier, i) => (
            <div key={i} className="bg-[#111b2e] border border-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{tier.area}</h3>
                <span className="text-blue-500 text-2xl font-bold">{tier.price}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.cities.map(city => (
                  <span key={city} className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full">{city}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#111b2e] border border-white/5 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Asbestinäyte</h3>
          <div className="flex items-center justify-between">
            <Editable id="hinta.sample.desc" defaultContent="Ota näyte itse ja lähetä postitse. Laboratorioanalyysi SEM-EDS elektronimikroskoopilla." page="hinta" as="p" className="text-gray-400 text-sm" />
            <span className="text-blue-500 text-2xl font-bold shrink-0 ml-4">39,90€ <span className="text-sm text-gray-400">+ alv</span></span>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/tilaa" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg inline-block">
            Tilaa kartoitus
          </Link>
        </div>
      </div>
    </section>
  );
}
