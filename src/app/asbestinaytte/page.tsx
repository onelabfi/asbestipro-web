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

export default async function Asbestinaytte() {
  const content = await getPageContent('asbestinaytte');
  return (
    <ContentProvider initialContent={content} page="asbestinaytte">
      <ArticlePage page="asbestinaytte" label="Palvelut" title="Asbestinäyte" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
