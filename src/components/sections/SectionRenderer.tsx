import { HeroSection } from './HeroSection';
import { HubCardsSection } from './HubCardsSection';
import { ValuesSection } from './ValuesSection';
import { TimelineSection } from './TimelineSection';
import { DomainGridSection } from './DomainGridSection';

interface SectionRendererProps {
  component_type: string;
  content: any;
}

export const SectionRenderer = ({ component_type, content }: SectionRendererProps) => {
  switch (component_type) {
    case 'hero':
      return <HeroSection content={content} />;
    case 'hub-cards':
      return <HubCardsSection content={content} />;
    case 'values':
      return <ValuesSection content={content} />;
    case 'timeline':
      return <TimelineSection content={content} />;
    case 'domain-grid':
      return <DomainGridSection content={content} />;
    default:
      console.warn(`Unknown section type: ${component_type}`);
      return null;
  }
};