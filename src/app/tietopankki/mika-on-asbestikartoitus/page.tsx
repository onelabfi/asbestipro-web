import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Mikä on asbestikartoitus? | Asbestipro',
  description: 'Tietoa asbestikartoituksesta: mitä se tarkoittaa, milloin se tarvitaan ja kuka sen tekee.',
};

const sections = [
  {
    id: 'definition',
    defaultTitle: 'Määritelmä',
    defaultBody: 'Asbestikartoitus on lakisääteinen tutkimus, jossa selvitetään rakennuksen asbestipitoiset materiaalit ja niiden kunto. Kartoitus perustuu valtioneuvoston asetukseen 798/2015, joka edellyttää asbestikartoitusta ennen purkutöitä. Tutkimuksessa otetaan materiaalinäytteet, jotka analysoidaan laboratoriossa asbestikuitujen varalta.',
  },
  {
    id: 'when',
    defaultTitle: 'Milloin kartoitus tarvitaan?',
    defaultBody: 'Kartoitus on tehtävä ennen purku-, saneeraus- ja korjaustöitä rakennuksissa, jotka on rakennettu tai peruskorjattu ennen vuotta 1994. Velvoite koskee kaikkia rakennustyyppejä: asuintaloja, toimistoja, teollisuusrakennuksia ja julkisia tiloja. Myös pienemmissä remonteissa, kuten kylpyhuone- ja keittiöremonteissa, kartoitus on usein tarpeen.',
  },
  {
    id: 'who',
    defaultTitle: 'Kuka tekee kartoituksen?',
    defaultBody: 'Asbestikartoituksen tekee pätevä asbestikartoittaja, jolla on tehtävään vaadittava koulutus ja kokemus. Kartoittajan tulee olla riippumaton urakoitsijasta eikä hän saa osallistua saman kohteen purkutöihin. Pätevyysvaatimukset on määritelty valtioneuvoston asetuksessa ja kartoittajarekisteriä ylläpitää Työterveyslaitos.',
  },
];

export default async function MikaOnAsbestikartoitus() {
  const content = await getPageContent('mika-asbestikartoitus');
  return (
    <ContentProvider initialContent={content} page="mika-asbestikartoitus">
      <ArticlePage page="mika-asbestikartoitus" label="Tietopankki" title="Mikä on asbestikartoitus?" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
