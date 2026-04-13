import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Luotettavuus | Asbestipro',
  description: 'Luotettava asbestikartoitus ja laboratorioanalyysi. ISO-standardin mukainen tutkimus ja kokeneet asiantuntijat.',
};

const sections = [
  {
    id: 'lab',
    defaultTitle: 'Laboratorio',
    defaultBody: 'SEM-EDS elektronimikroskoopilla tehtävä analyysi on tarkin menetelmä asbestin tunnistamiseen rakennusmateriaaleista. Laitteisto mahdollistaa sekä kuitujen morfologisen tunnistamisen että alkuainekoostumuksen määrittämisen. Laboratoriossamme analysoidaan vuosittain tuhansia näytteitä ja tulokset ovat aina jäljitettävissä.',
  },
  {
    id: 'standards',
    defaultTitle: 'Standardit',
    defaultBody: 'ISO 22262-1 -standardin mukainen analyysimenetelmä varmistaa tulosten luotettavuuden ja vertailukelpoisuuden. Noudatamme kaikessa toiminnassamme valtioneuvoston asetusta 798/2015 asbestityön turvallisuudesta. Laboratorion laadunvarmistus sisältää säännölliset vertailumittaukset ja sisäiset auditoinnit.',
  },
  {
    id: 'team',
    defaultTitle: 'Asiantuntijat',
    defaultBody: 'Kokeneet kartoittajat tunnistavat asbestipitoiset materiaalit tehokkaasti ja tietävät, mistä näytteet tulee ottaa. Kartoittajillamme on asbestikartoittajan pätevyys ja vuosien kokemus erilaisista rakennuskohteista. Koulutamme henkilöstöämme jatkuvasti ja seuraamme alan lainsäädännön kehitystä.',
  },
];

export default async function Luotettavuus() {
  const content = await getPageContent('luotettavuus');
  return (
    <ContentProvider initialContent={content} page="luotettavuus">
      <ArticlePage page="luotettavuus" label="Palvelut" title="Luotettavuus" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
