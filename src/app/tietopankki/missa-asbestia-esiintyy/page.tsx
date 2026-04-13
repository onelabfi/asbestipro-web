import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Missä asbestia esiintyy? | Asbestipro',
  description: 'Tietoa asbestin esiintymispaikoista rakennuksissa. Tyypilliset materiaalit ja sijainnit.',
};

const sections = [
  {
    id: 'materials',
    defaultTitle: 'Rakennusmateriaalit',
    defaultBody: 'Asbestia käytettiin laajasti suomalaisessa rakentamisessa 1920-luvulta 1990-luvun alkuun saakka. Yleisimpiä asbestipitoisia materiaaleja ovat asbestisementtituotteet, lattialaatat ja -liimat, putkieristeet sekä tasoitteet. Myös maaleissa, kiinnityslaasteissa ja vesikatemateriaaleissa on käytetty asbestia lujitteena.',
  },
  {
    id: 'locations',
    defaultTitle: 'Tyypilliset sijainnit',
    defaultBody: 'Putkieristeet, lattiamateriaalit ja julkisivulevyt ovat yleisimpiä asbestin löytöpaikkoja rakennuksissa. Kylpyhuoneiden vedeneristyksissä, ilmanvaihtokanavien eristeissä ja palokatkoissa esiintyy usein asbestia. Myös kattohuopa, seinien tasoitteet ja sähköasennusten suojamateriaalit voivat sisältää asbestikuituja.',
  },
  {
    id: 'identify',
    defaultTitle: 'Tunnistaminen',
    defaultBody: 'Asbestia ei voi tunnistaa silmämääräisesti, vaan ainoa varma tapa on laboratorioanalyysi. Materiaalin ikä, ulkonäkö tai käyttötarkoitus antavat viitteitä, mutta eivät riitä asbestin poissulkemiseen. Epäilyttävään materiaaliin ei tule koskea ilman suojaimia, ja näytteenotto kannattaa jättää ammattilaisen tehtäväksi.',
  },
];

export default async function MissaAsbestiaEsiintyy() {
  const content = await getPageContent('missa-asbestia');
  return (
    <ContentProvider initialContent={content} page="missa-asbestia">
      <ArticlePage page="missa-asbestia" label="Tietopankki" title="Missä asbestia esiintyy?" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
