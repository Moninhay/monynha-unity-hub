import { Button } from '@/components/ui/button';

interface HeroContent {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    url: string;
  };
  secondaryCta: {
    text: string;
    url: string;
  };
}

interface HeroSectionProps {
  content: HeroContent;
}

export const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {content.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {content.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href={content.primaryCta.url} target="_blank" rel="noopener noreferrer">
              {content.primaryCta.text}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={content.secondaryCta.url}>
              {content.secondaryCta.text}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};