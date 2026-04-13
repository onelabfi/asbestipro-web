'use client';

import { Editable } from '@/components/Editable';

export function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <Editable id="contact.label" defaultContent="Yhteystiedot" page="contact" as="p" className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3" />
        <Editable id="contact.title" defaultContent="Ota yhteyttä" page="contact" as="h1" className="text-3xl sm:text-4xl font-bold mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Suomen Asbestipro Oy</h3>
              <div className="text-gray-400 space-y-1 text-sm">
                <p>Y-tunnus: 1581184-2</p>
                <p>Ukkohauentie 11-13A</p>
                <p>02170 Espoo</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Yhteystiedot</h3>
              <div className="space-y-2">
                <a href="tel:+35845784444444" className="block text-blue-500 hover:text-blue-400 transition-colors">+358 45 78 444 444</a>
                <a href="mailto:info@asbesti.pro" className="block text-blue-500 hover:text-blue-400 transition-colors">info@asbesti.pro</a>
              </div>
            </div>
            <div>
              <Editable id="contact.hours" defaultContent="Asiakaspalvelu arkisin klo 8-17" page="contact" as="p" className="text-gray-400 text-sm" />
            </div>
          </div>

          <div className="bg-[#111b2e] border border-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Lähetä viesti</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nimi" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500" />
              <input type="email" placeholder="Sähköposti" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500" />
              <input type="tel" placeholder="Puhelin" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500" />
              <textarea rows={4} placeholder="Viesti" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 resize-none" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
                Lähetä
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
