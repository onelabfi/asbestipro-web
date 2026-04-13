import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { EditToolbar } from '@/components/EditToolbar';
import { FAQFullPage } from '@/components/FAQFullPage';

export const metadata = {
  title: 'UKK - Usein kysytyt kysymykset | Asbestipro',
  description: 'Vastaukset yleisimpiin kysymyksiin asbestikartoituksesta, asbestinäytteistä, hinnoista ja prosessista.',
};

export default async function UKKPage() {
  const content = await getPageContent('ukk');
  return (
    <ContentProvider initialContent={content} page="ukk">
      <FAQFullPage />
      <EditToolbar />
    </ContentProvider>
  );
}
