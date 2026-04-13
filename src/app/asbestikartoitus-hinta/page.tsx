import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { EditToolbar } from '@/components/EditToolbar';
import { PricingPage } from '@/components/PricingPage';

export const metadata = {
  title: 'Asbestikartoitus hinta | Asbestipro',
  description: 'Asbestikartoituksen hinnat kaupungeittain. Alkaen 119€ sis. alv.',
};

export default async function AsbestikartoitusHinta() {
  const content = await getPageContent('hinta');
  return (
    <ContentProvider initialContent={content} page="hinta">
      <PricingPage />
      <EditToolbar />
    </ContentProvider>
  );
}
