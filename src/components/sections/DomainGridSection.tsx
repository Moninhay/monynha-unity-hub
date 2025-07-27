import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Store, Globe, Users, BookOpen, Zap } from 'lucide-react';

const iconMap = {
  Code,
  Store,
  Globe,
  Users,
  BookOpen,
  Zap,
};

interface Domain {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  url: string;
  color: 'primary' | 'secondary' | 'accent';
}

interface DomainGridContent {
  title: string;
  subtitle: string;
  domains: Domain[];
}

interface DomainGridSectionProps {
  content: DomainGridContent;
}

export const DomainGridSection = ({ content }: DomainGridSectionProps) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40';
      case 'accent':
        return 'border-accent/20 hover:border-accent/40';
      default:
        return 'border-primary/20 hover:border-primary/40';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
          <p className="text-xl text-muted-foreground">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.domains.map((domain, index) => {
            const IconComponent = iconMap[domain.icon];
            return (
              <Card 
                key={index} 
                className={`text-center transition-all duration-300 hover:scale-105 ${getColorClasses(domain.color)}`}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{domain.title}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <a href={domain.url} target="_blank" rel="noopener noreferrer">
                      Explore
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};