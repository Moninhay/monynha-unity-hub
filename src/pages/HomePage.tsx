
import { useTranslation } from 'react-i18next';
import { usePageContent } from '@/hooks/useContent';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Store, Users, Shield, Globe, Zap } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-violet-50 via-sky-50 to-violet-50 dark:from-violet-950/20 dark:via-sky-950/20 dark:to-violet-950/20">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 text-white px-8 py-6 text-lg">
              {t('home.hero.cta_primary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              {t('home.hero.cta_secondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HubCardsSection = () => {
  const hubCards = [
    {
      title: 'Tech Hub',
      description: 'Open source projects and developer resources',
      icon: Code,
      href: 'https://monynha.tech',
      color: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Store',
      description: 'Products and services marketplace',
      icon: Store,
      href: 'https://monynha.store',
      color: 'from-sky-500 to-blue-600'
    },
    {
      title: 'Platform',
      description: 'Business management and analytics',
      icon: Globe,
      href: 'https://monynha.online',
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Community',
      description: 'Connect with other creators and developers',
      icon: Users,
      href: 'https://monynha.me',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Monynha Ecosystem</h2>
          <p className="text-xl text-muted-foreground">Discover our integrated platforms and services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${card.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group-hover:text-primary"
                    onClick={() => window.open(card.href, '_blank')}
                  >
                    Visit <ArrowRight className="ml-1 h-4 w-4" />
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

const ValuesSection = () => {
  const values = [
    { icon: Shield, title: 'Pride & Authenticity', description: 'Celebrating diverse identities openly' },
    { icon: Users, title: 'Inclusion & Accessibility', description: 'Technology that welcomes everyone' },
    { icon: Zap, title: 'Innovation & Resistance', description: 'Breaking barriers through tech' }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground">What drives us every day</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-sky-600 mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const HomePage = () => {
  const { data, isLoading, error } = usePageContent('home');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    console.error('Error loading home page:', error);
  }

  return (
    <div className="w-full">
      <HeroSection />
      <HubCardsSection />
      <ValuesSection />
    </div>
  );
};
