import { usePageContent } from '@/hooks/useContent';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { SectionRenderer } from '@/components/sections/SectionRenderer';

export const ArmsPage = () => {
  const { data, isLoading, error } = usePageContent('arms');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    console.error('Error loading arms page:', error);
    return <div className="min-h-screen">Error loading content</div>;
  }

  if (!data?.sections) {
    return <div className="min-h-screen">No content available</div>;
  }

  return (
    <div className="min-h-screen">
      {data.sections.map((section) => (
        <SectionRenderer
          key={section.id}
          component_type={section.component_type}
          content={section.content}
        />
      ))}
    </div>
  );
};