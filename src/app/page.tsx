import { getPageContent } from '@/lib/content';
import { ContentProvider } from '@/components/ContentProvider';
import { EditToolbar } from '@/components/EditToolbar';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBadges } from '@/components/home/TrustBadges';
import { ThreeSteps } from '@/components/home/ThreeSteps';
import { PricingCards } from '@/components/home/PricingCards';
import { TargetAudiences } from '@/components/home/TargetAudiences';
import { FAQPreview } from '@/components/home/FAQPreview';
import { ServiceAreas } from '@/components/home/ServiceAreas';
import { CTABanner } from '@/components/home/CTABanner';

export default async function HomePage() {
  const content = await getPageContent('home');

  return (
    <ContentProvider initialContent={content} page="home">
      <HeroSection />
      <TrustBadges />
      <ThreeSteps />
      <PricingCards />
      <TargetAudiences />
      <FAQPreview />
      <ServiceAreas />
      <CTABanner />
      <EditToolbar />
    </ContentProvider>
  );
}
