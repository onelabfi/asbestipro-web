'use client';

import { useState } from 'react';
import { Editable } from '@/components/Editable';

const faqs = [
  { id: 'faq1', q: 'Miksi asbestikartoitus on pakollinen ennen remonttia?', a: 'Lainsäädäntö velvoittaa tekemään asbestikartoituksen kaikissa ennen vuotta 1994 rakennetuissa kohteissa ennen purku- tai korjaustöitä. Työn tilaaja on vastuussa kartoituksen teettämisestä.' },
  { id: 'faq2', q: 'Voinko ottaa asbestinäytteen itse?', a: 'Kyllä. Voit tilata asbestinäytteen analysoinnin hintaan 39,90€ + alv. Otat näytteen itse ohjeiden mukaisesti ja lähetät sen postitse laboratorioomme.' },
  { id: 'faq3', q: 'Kuinka nopeasti saan tulokset?', a: 'Laboratoriotulokset valmistuvat yleensä samana päivänä kun näytteet saapuvat laboratorioon. Kartoitusraportti toimitetaan 1 arkipäivän kuluessa.' },
  { id: 'faq4', q: 'Paljonko asbestikartoitus maksaa?', a: 'Asbestikartoituksen hinta riippuu kaupungista. PK-seudulla hinta on 119€ sis. alv, muualla Suomessa 199-239€. Hinta sisältää kaiken: kartoituksen, kaikki näytteet, laboratorioanalyysin, kilometrikorvauksen, alv:n ja raportin.' },
  { id: 'faq5', q: 'Mistä tietää, onko rakennuksessa asbestia?', a: 'Asbestia ei voi tunnistaa silmämääräisesti. Kaikissa ennen vuotta 1994 rakennetuissa tai korjatuissa rakennuksissa voi olla asbestia. Ainoa varma tapa on laboratorioanalyysi.' },
  { id: 'faq6', q: 'Mitä tapahtuu, jos kartoituksessa löytyy asbestia?', a: 'Kartoitusraportissa kerrotaan, missä asbestia löytyi ja annetaan suositukset jatkotoimenpiteistä. Asbestipurku on teetettävä valtuutetulla purkuyrityksellä.' },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <Editable id={`home.${faq.id}.q`} defaultContent={faq.q} page="home" as="span" className="text-base font-medium pr-4" />
        <svg className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5">
          <Editable id={`home.${faq.id}.a`} defaultContent={faq.a} page="home" as="p" className="text-gray-400 text-sm leading-relaxed" />
        </div>
      )}
    </div>
  );
}

export function FAQPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4">
        <Editable id="home.faq.label" defaultContent="UKK" page="home" as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id="home.faq.title" defaultContent="Usein kysytyt kysymykset" page="home" as="h2" className="text-3xl sm:text-4xl font-bold mb-8" />
        {faqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
      </div>
    </section>
  );
}
