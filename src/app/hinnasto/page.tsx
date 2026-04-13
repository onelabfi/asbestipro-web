import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Hinnasto | Asbestipro',
  description: 'Asbestikartoituksen ja asbestinäytteiden hinnat. Selkeä ja läpinäkyvä hinnoittelu ilman piilokustannuksia.',
};

const sections = [
  {
    id: 'survey',
    defaultTitle: 'Asbestikartoitus',
    defaultBody: 'Hinta sisältää kaiken: kartoittajan käynnin kohteessa, näytteenoton, laboratorioanalyysit ja kirjallisen raportin. Asuntojen ja rivitalojen kartoitushinnat alkavat 390 eurosta ja määräytyvät kohteen koon ja sijainnin mukaan. Suuremmille kohteille, kuten taloyhtiöille ja toimitiloille, annamme erillisen tarjouksen.',
  },
  {
    id: 'sample',
    defaultTitle: 'Asbestinäyte',
    defaultBody: '39,90 € + alv per näyte, kun lähetät näytteen itse laboratorioomme analysoitavaksi. Hinta sisältää SEM-EDS-analyysin ja kirjallisen laboratorioraportin. Useamman näytteen analysoinnista saat määräalennuksen — kysy tarjous sähköpostitse tai puhelimitse.',
  },
  {
    id: 'included',
    defaultTitle: 'Mitä hintaan sisältyy',
    defaultBody: 'Kartoitus, näytteet, laboratorioanalyysi ja raportti kuuluvat kaikki samaan kokonaishintaan. Emme veloita erikseen matkakuluja pääkaupunkiseudulla eikä laboratorioanalyysistä tule lisämaksuja. Saat aina kiinteän hinnan ennen työn aloittamista, joten yllätyksiä ei tule.',
  },
];

export default async function Hinnasto() {
  const content = await getPageContent('hinnasto-page');
  return (
    <ContentProvider initialContent={content} page="hinnasto-page">
      <ArticlePage page="hinnasto-page" label="Palvelut" title="Hinnasto" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
