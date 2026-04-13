import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Asbesti - Tietoa asbestista | Asbestipro',
  description: 'Kattava tietopaketti asbestista: mitä asbesti on, missä sitä esiintyy, terveysriskit ja lainsäädäntö.',
};

const sections = [
  { id: 'what', defaultTitle: 'Mitä asbesti on?', defaultBody: 'Asbesti on luonnossa esiintyvä mineraalikuitu, jota käytettiin laajasti rakennusmateriaaleissa 1920-1990 -luvuilla. Asbestia käytettiin sen erinomaisten eristävien, palonkestävien ja lujuusominaisuuksien vuoksi. Suomessa asbestin käyttö rakentamisessa kiellettiin vuonna 1994.' },
  { id: 'types', defaultTitle: 'Asbestilajit', defaultBody: 'Yleisimmät asbestilajit ovat krysotiili (valkoinen asbesti), amosiitti (ruskea asbesti) ja krokidoliitti (sininen asbesti). Suomessa yleisimmin esiintyvä asbestilaji on krysotiili, mutta myös amosiittia ja antofylliittia tavataan.' },
  { id: 'health', defaultTitle: 'Terveysriskit', defaultBody: 'Asbesti on vaarallista vain, kun sen kuidut vapautuvat ilmaan ja hengitetään sisään. Asbestialtistus voi aiheuttaa vakavia sairauksia, kuten asbestoosia, keuhkosyöpää ja mesoteliooma. Oireet voivat ilmaantua vasta 10-40 vuoden kuluttua altistumisesta.' },
  { id: 'where', defaultTitle: 'Missä asbestia esiintyy?', defaultBody: 'Asbestia voi löytyä mm. putkieristeistä, lattiamateriaaleista (vinyylilaattojen liima ja tasoitteet), kattomateriaaleista, seinälevyistä, maaleista, liimoissa, tasoitteissa ja tiivisteissä. Kaikki ennen vuotta 1994 rakennetut tai korjatut rakennukset voivat sisältää asbestia.' },
  { id: 'law', defaultTitle: 'Lainsäädäntö', defaultBody: 'Valtioneuvoston asetus asbestityön turvallisuudesta (798/2015) velvoittaa tekemään asbestikartoituksen ennen purku- tai korjaustöitä kaikissa ennen vuotta 1994 rakennetuissa kohteissa. Työn tilaaja on vastuussa kartoituksen teettämisestä. Asbestipurku on luvanvaraista työtä, ja sen saa tehdä vain valtuutettu purkuyritys.' },
];

export default async function AsbestiPage() {
  const content = await getPageContent('asbesti');
  return (
    <ContentProvider initialContent={content} page="asbesti">
      <ArticlePage page="asbesti" label="Tietoa asbestista" title="Asbesti" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
