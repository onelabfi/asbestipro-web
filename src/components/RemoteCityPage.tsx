import Link from 'next/link';
import { seoSections } from '@/lib/seo-content';

export function RemoteCityPage({ name, region }: { name: string; region: string }) {
  return (
    <>
      <section className="py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-8">
            Asbestinäyte {name}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="bg-[#111b2e] border border-white/10 rounded-2xl p-6 max-w-xs text-center md:text-left">
              <h2 className="font-semibold text-base mb-2">Asbestikartoitus {name}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Kun remontoit ja tarvitset asbestikartoituksen {name} {region} saat meiltä Suomen edullisimmat asbestinäytteet. Tulokset jopa huomenna.
              </p>
            </div>

            <div>
              <p className="text-[7rem] sm:text-[9rem] md:text-[11rem] font-bold leading-none text-white tracking-tight">
                39,90€
              </p>
              <p className="text-gray-400 text-lg mt-2">+ ALV / näyte</p>
            </div>
          </div>

          <Link href="https://www.kartoittaja.fi/login" target="_blank" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium uppercase tracking-wider px-12 py-4 rounded-lg transition-colors text-base mt-10">
            Tilaa
          </Link>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-400">
            <a href="mailto:info@asbesti.pro" className="hover:text-white transition-colors">Email: info@asbesti.pro</a>
            <a href="tel:+35845784444444" className="hover:text-white transition-colors">Puh: +358 45 78 444 444</a>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <a href="https://www.kartoittaja.fi/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-[#111b2e] border border-blue-500/20 rounded-2xl p-6 group hover:border-blue-500/40 transition-colors">
            <img src="/qr-kartoittaja.png" alt="QR: Kartoittaja.fi" className="w-20 h-20 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div>
              <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Ota ilmainen Kartoittaja.fi avuksi</p>
              <p className="text-sm text-gray-400 mt-1">Dokumentoi näytteet, seuraa analyysin etenemistä ja saat raportin sähköpostiin.</p>
              <p className="text-xs text-blue-500 mt-2">Skannaa QR puhelimella →</p>
            </div>
          </a>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          {seoSections.map(section => (
            <div key={section.id}>
              <h2 className="text-xl font-bold mb-3">{section.title(name)}</h2>
              <p className="text-gray-400 leading-relaxed text-sm">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#070e1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Tilaa asbestinäyte {name}</h2>
          <p className="text-gray-400 mb-6">Ota näyte itse ja lähetä postitse. Tulokset nopeasti.</p>
          <Link href="https://www.kartoittaja.fi/login" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors inline-block">
            Tilaa näyteanalyysi
          </Link>
        </div>
      </section>
    </>
  );
}
