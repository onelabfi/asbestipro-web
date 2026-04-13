import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { EditToolbar } from '@/components/EditToolbar';
import { Editable } from '@/components/Editable';
import Link from 'next/link';

export const metadata = {
  title: 'Tilaa asbestikartoitus | Asbestipro',
  description: 'Tilaa asbestikartoitus tai asbestinäyte. Syötä osoite, valitse aika ja maksa suoraan.',
};

export default async function TilaaPage() {
  const content = await getPageContent('tilaa');

  return (
    <ContentProvider initialContent={content} page="tilaa">
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-3">Tilauslomake</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Tilaa asbestikartoitus</h1>
          <p className="text-gray-400 mb-8">
            Syötä osoite, valitse aika ja maksa suoraan. Hintaan kuuluu kaikki tarvittavat näytteet,
            laboratorioanalyysi ja lakisääteinen raportti - ei piilokustannuksia.
            Kysyttävää? <a href="tel:+35845784444444" className="text-blue-500">+358 45 78 444 444</a>.
          </p>

          <div className="bg-[#111b2e] border border-white/5 rounded-xl p-8 text-center">
            <p className="text-gray-400 mb-4">Tilauslomake on tulossa pian.</p>
            <p className="text-gray-500 text-sm mb-6">Sillä välin voit tilata soittamalla tai sähköpostilla.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+35845784444444" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Soita: +358 45 78 444 444
              </a>
              <a href="mailto:info@asbesti.pro" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                info@asbesti.pro
              </a>
            </div>
          </div>
        </div>
      </section>
      <EditToolbar />
    </ContentProvider>
  );
}
