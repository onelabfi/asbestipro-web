import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { ArticlePage } from '@/components/ArticlePage';
import { EditToolbar } from '@/components/EditToolbar';

export const metadata = {
  title: 'Artikkelit | Asbestipro',
  description: 'Asiantuntija-artikkeleita asbestista, asbestikartoituksesta ja asbestinäytteistä.',
};

const sections = [
  {
    id: 'intro',
    defaultTitle: 'Ajankohtaista',
    defaultBody: 'Lue asiantuntija-artikkeleita asbestista ja asbestikartoituksesta. Julkaisemme säännöllisesti ajankohtaisia kirjoituksia asbestilainsäädännöstä, turvallisista työmenetelmistä ja alan uusimmista tutkimustuloksista. Artikkelimme on kirjoitettu ymmärrettävästi sekä rakennusalan ammattilaisille että kotitalousremontoijille.',
  },
];

export default async function Artikkelit() {
  const content = await getPageContent('artikkelit');
  return (
    <ContentProvider initialContent={content} page="artikkelit">
      <ArticlePage page="artikkelit" label="Tietopankki" title="Kaikki artikkelit" sections={sections} />
      <EditToolbar />
    </ContentProvider>
  );
}
