'use client';

import { Editable } from '@/components/Editable';

const steps = [
  { num: '01', id: 'step1', title: 'Tilaa verkossa', desc: 'Täytä tilauslomake tai soita meille. Valitse asbestikartoitus tai asbestinäyte.' },
  { num: '02', id: 'step2', title: 'Kartoitus tai näyte', desc: 'Asiantuntija tulee kohteeseen kartoitusta varten tai otat näytteen itse ja lähetät postilla.' },
  { num: '03', id: 'step3', title: 'Tulokset nopeasti', desc: 'Saat kartoitusraportin ja laboratoriotulokset sähköpostiisi.' },
];

export function ThreeSteps() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <Editable id="home.steps.label" defaultContent="Näin se toimii" page="home" as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id="home.steps.title" defaultContent="Asbestikartoitus kolmessa vaiheessa" page="home" as="h2" className="text-3xl sm:text-4xl font-bold mb-12" />

        <div className="grid md:grid-cols-3 gap-0 bg-[#111b2e] rounded-2xl overflow-hidden border border-white/5">
          {steps.map((step, i) => (
            <div key={step.id} className={`p-8 ${i < steps.length - 1 ? 'md:border-r border-b md:border-b-0 border-white/5' : ''}`}>
              <span className="text-blue-500 text-3xl font-bold">{step.num}</span>
              <Editable id={`home.${step.id}.title`} defaultContent={step.title} page="home" as="h3" className="text-lg font-semibold mt-4 mb-2" />
              <Editable id={`home.${step.id}.desc`} defaultContent={step.desc} page="home" as="p" className="text-gray-400 text-sm leading-relaxed" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
