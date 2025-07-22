
import { usePageContent } from '@/hooks/useContent';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export const AboutPage = () => {
  const { data, isLoading, error } = usePageContent('about');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    console.error('Error loading about page:', error);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Monynha</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Monynha Softwares represents more than technology—it embodies resistance, pride, and technological democratization. 
            Our identity celebrates diversity, LGBTQIA+ culture, and Brazilian peripheral origins.
          </p>
          <p className="mb-6">
            We speak directly to underrepresented communities, promoting open and accessible technology for all. 
            Through our integrated ecosystem of platforms, we're building a more inclusive digital future.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            To democratize technology by creating inclusive, accessible solutions that empower diverse communities 
            and promote social equity through innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
