import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { EditToolbar } from '@/components/EditToolbar';
import { ContactPage } from '@/components/ContactPage';

export const metadata = {
  title: 'Yhteystiedot | Asbestipro',
  description: 'Ota yhteyttä Asbestipro:n - asbestikartoitus ja laboratoriopalvelut koko Suomessa.',
};

export default async function OtaYhteytta() {
  const content = await getPageContent('contact');
  return (
    <ContentProvider initialContent={content} page="contact">
      <ContactPage />
      <EditToolbar />
    </ContentProvider>
  );
}
