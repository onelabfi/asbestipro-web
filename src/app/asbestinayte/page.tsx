import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Asbestinäyte | Asbestipro',
  description: 'Asbestinäytteen analysointi SEM-EDS elektronimikroskoopilla. Lähetä näyte ja saat tulokset nopeasti.',
};

const sections = [
  {
    id: 'what',
    defaultTitle: 'Asbestinäytteen analysointi',
    defaultBody: 'Analysoimme asbestinäytteitä SEM-EDS elektronimikroskoopilla, joka on luotettavin menetelmä asbestin tunnistamiseen. Analyysi tunnistaa kaikki kuusi asbestimineraalia ja erottaa ne muista kuitumateriaaleista. Menetelmä täyttää ISO 22262-1 -standardin vaatimukset ja tuottaa juridisesti pätevän tuloksen.',
  },
  {
    id: 'howto',
    defaultTitle: 'Näin otat näytteen',
    defaultBody: 'Ota näyte materiaalista käyttäen hengityssuojainta ja suojakäsineitä. Leikkaa tai murra pieni pala (noin 3x3 cm) tutkittavasta materiaalista ja aseta se suljettavaan muovipussiin. Kostuta materiaali vedellä ennen näytteenottoa, jotta asbestikuidut eivät leviä ilmaan.',
  },
  {
    id: 'shipping',
    defaultTitle: 'Näytteen lähettäminen',
    defaultBody: 'Pakkaa näyte tiiviisti suljettuun muovipussiin ja merkitse pussi selkeästi näytteen ottopaikalla. Lähetä näyte postitse laboratorioömme osoitteeseen, joka löytyy tilausvahvistuksesta. Voit myös tuoda näytteen suoraan toimipisteellemme arkipäivisin.',
  },
  {
    id: 'results',
    defaultTitle: 'Tulokset',
    defaultBody: 'Laboratoriotulokset valmistuvat tavallisesti 1–3 arkipäivän kuluessa näytteen saapumisesta. Tulokset toimitetaan sähköpostitse ja ne sisältävät analyysiraportin sekä valokuvat mikroskooppinäkymistä. Pikapalveluna tulokset on mahdollista saada jo saman päivän aikana.',
  },
];

export default async function AsbestinaytePage() {
  const content = await getPageContent('asbestinayte');
  return (
    <ContentProvider initialContent={content} page="asbestinayte">
      <ArticlePage page="asbestinayte" label="Palvelut" title="Asbestinäyte" sections={sections} />

      <section className="pb-20">
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

      <EditToolbar />
    </ContentProvider>
  );
}
