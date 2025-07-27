import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Store, Globe, Users } from 'lucide-react';

const iconMap = {
  Code,
  Store,
  Globe,
  Users,
};

interface HubCard {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  url: string;
}

interface HubCardsContent {
  title: string;
  subtitle: string;
  cards: HubCard[];
}

interface HubCardsSectionProps {
  content: HubCardsContent;
}

export const HubCardsSection = ({ content }: HubCardsSectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-xl text-muted-foreground">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon];
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href={card.url} target="_blank" rel="noopener noreferrer">
                      Visit
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