import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Asbestinäyte itse | Asbestipro',
  description: 'Ohjeet asbestinäytteen ottamiseen itse. Tarvikkeet, näytteenotto ja lähetys.',
};

const sections = [
  {
    id: 'howto',
    defaultTitle: 'Näytteenotto-ohjeet',
    defaultBody: 'Käytä suojaimia näytettä ottaessasi: vähintään FFP3-hengityssuojainta ja kertakäyttökäsineitä. Kostuta tutkittava materiaali vedellä ennen näytteenottoa, jotta asbestikuidut eivät leviä hengitysilmaan. Leikkaa tai murra materiaalista noin 3x3 senttimetrin kokoinen pala ja sulje se välittömästi muovipussiin.',
  },
  {
    id: 'tools',
    defaultTitle: 'Tarvikkeet',
    defaultBody: 'Hengityssuojain (FFP3-luokka), muovipussi näytteelle, kertakäyttökäsineet ja terävä työkalu näytteen irrottamiseen ovat välttämättömät tarvikkeet. Suihkupullo veden sumuttamiseen helpottaa pölyn hallintaa näytteenoton aikana. Merkitse jokainen näytepussi selkeästi: näytteen ottopaikka, päivämäärä ja materiaalitype.',
  },
  {
    id: 'shipping',
    defaultTitle: 'Lähetys',
    defaultBody: 'Pakkaa näyte tiiviisti suljettuun muovipussiin ja aseta pussi tukevaan kirjekuoreen tai pieneen pakettiin. Liitä mukaan tilaustiedot: nimesi, yhteystiedot, näytteen ottopaikka ja laskutusosoite. Lähetä näyte postitse laboratorioömme — osoite löytyy tilausvahvistuksesta, jonka saat tilauksen yhteydessä.',
  },
];

export default async function AsbestinayteItse() {
  const content = await getPageContent('naytte-itse');
  return (
    <ContentProvider initialContent={content} page="naytte-itse">
      <ArticlePage page="naytte-itse" label="Tietopankki" title="Asbestinäyte itse" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
