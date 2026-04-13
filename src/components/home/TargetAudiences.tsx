'use client';

import { Editable } from '@/components/Editable';

const audiences = [
  { id: 'audience1', title: 'Kotitaloudet', desc: 'Remontoit ja haluat selvittää, sisältävätkö materiaalit asbestia.' },
  { id: 'audience2', title: 'Taloyhtiöt', desc: 'Putkiremontti, julkisivuremontti tai muu korjaushanke edessä.' },
  { id: 'audience3', title: 'Rakennusyritykset', desc: 'Tarvitset luotettavan kartoituksen ja laboratoriopalvelun.' },
  { id: 'audience4', title: 'Asbestikartoittajat', desc: 'Haet edullista ja nopeaa laboratoriopalvelua.' },
];

export function TargetAudiences() {
  return (
    <section className="py-20 sm:py-28 bg-[#070e1a]">
      <div className="max-w-7xl mx-auto px-4">
        <Editable id="home.audiences.label" defaultContent="Kenelle" page="home" as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id="home.audiences.title" defaultContent="Palvelemme kaikkia, jotka tarvitsevat asbestikartoitusta" page="home" as="h2" className="text-3xl sm:text-4xl font-bold mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map(a => (
            <div key={a.id} className="bg-[#111b2e] border border-white/5 rounded-xl p-6">
              <Editable id={`home.${a.id}.title`} defaultContent={a.title} page="home" as="h3" className="text-lg font-semibold mb-2" />
              <Editable id={`home.${a.id}.desc`} defaultContent={a.desc} page="home" as="p" className="text-gray-400 text-sm leading-relaxed" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
