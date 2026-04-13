import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Asbestikartoitus | Asbestipro',
  description: 'Ammattimainen asbestikartoitus koko Suomessa. Lakisääteinen kartoitus ennen purku- ja saneeraustöitä.',
};

const sections = [
  {
    id: 'what',
    defaultTitle: 'Mitä asbestikartoitus on?',
    defaultBody: 'Asbestikartoitus on lakisääteinen tutkimus, joka on tehtävä ennen vuotta 1994 valmistuneiden rakennusten purku- ja saneeraustöitä. Kartoituksessa selvitetään rakennuksessa käytetyt asbestipitoiset materiaalit ja niiden sijainti. Tutkimuksen suorittaa pätevöitynyt asbestikartoittaja, joka ottaa materiaalinäytteet laboratorioanalyysiin.',
  },
  {
    id: 'process',
    defaultTitle: 'Kartoituksen kulku',
    defaultBody: 'Asiantuntija tulee kohteeseen ja käy läpi kaikki tutkittavat tilat ja rakenteet järjestelmällisesti. Kartoittaja ottaa näytteet epäillyistä materiaaleista ja dokumentoi havainnot valokuvin. Kenttätyö kestää tyypillisesti muutamasta tunnista yhteen työpäivään kohteen laajuudesta riippuen.',
  },
  {
    id: 'report',
    defaultTitle: 'Kartoitusraportti',
    defaultBody: 'Raportti sisältää tiedot kaikista tutkituista materiaaleista, näytetulokset sekä pohjapiirustukset asbestiesiintymien sijainneista. Raportissa esitetään toimenpidesuositukset ja asbestipurkutyön turvallisuusohjeet. Kartoitusraportti toimitetaan tilaajalle sähköisessä muodossa yleensä viikon kuluessa kenttäkäynnistä.',
  },
  {
    id: 'pricing',
    defaultTitle: 'Hinnoittelu',
    defaultBody: 'Hinta riippuu kohteen sijainnista, koosta ja tutkittavien materiaalien määrästä. Asunto- ja rivitalokohteissa hinta on tyypillisesti 390–890 euroa sisältäen näytteet ja laboratorioanalyysit. Pyydä tarjous omaan kohteeseesi — annamme tarjouksen yleensä saman päivän aikana.',
  },
];

export default async function Asbestikartoitus() {
  const content = await getPageContent('asbestikartoitus');
  return (
    <ContentProvider initialContent={content} page="asbestikartoitus">
      <ArticlePage page="asbestikartoitus" label="Palvelut" title="Asbestikartoitus" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
