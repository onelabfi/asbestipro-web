import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Asbestilainsäädäntö | Asbestipro',
  description: 'Asbestia koskeva lainsäädäntö Suomessa. Vastuut, velvoitteet ja seuraamukset.',
};

const sections = [
  {
    id: 'law',
    defaultTitle: 'Lainsäädäntö',
    defaultBody: 'Valtioneuvoston asetus 798/2015 asbestityön turvallisuudesta määrittelee asbestikartoituksen ja asbestipurkutyön vaatimukset. Asetuksen mukaan rakennuttajan tai muun tilaajan on huolehdittava asbestikartoituksen teettämisestä ennen purkutyötä. Asbestin käyttö rakennusmateriaaleissa kiellettiin Suomessa vuonna 1994.',
  },
  {
    id: 'responsibility',
    defaultTitle: 'Vastuut',
    defaultBody: 'Työn tilaaja on vastuussa asbestikartoituksen teettämisestä ja kartoitustietojen välittämisestä urakoitsijalle. Urakoitsijan velvollisuus on noudattaa asbestipurkutyön turvallisuusmääräyksiä ja tehdä purkutyöilmoitus aluehallintovirastolle. Työntekijöiden altistuminen asbestille on estettävä asianmukaisilla suojaimilla ja työmenetelmillä.',
  },
  {
    id: 'penalties',
    defaultTitle: 'Seuraamukset',
    defaultBody: 'Laiminlyönneistä voi seurata työturvallisuusrikkomus tai -rikos, joista voidaan tuomita sakkoja tai vankeutta. Työsuojeluviranomainen voi keskeyttää purkutyön välittömästi, jos asbestikartoitusta ei ole tehty tai turvallisuusmääräyksiä rikotaan. Tilaaja voi joutua korvausvastuuseen, jos asbestille altistumisesta aiheutuu terveyshaittoja työntekijöille.',
  },
];

export default async function Asbestilainsaadanto() {
  const content = await getPageContent('lainsaadanto');
  return (
    <ContentProvider initialContent={content} page="lainsaadanto">
      <ArticlePage page="lainsaadanto" label="Tietopankki" title="Asbestilainsäädäntö" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
