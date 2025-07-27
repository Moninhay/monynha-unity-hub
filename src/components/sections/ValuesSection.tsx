import { Heart, Shield, Zap } from 'lucide-react';

const iconMap = {
  Heart,
  Shield,
  Zap,
};

interface Value {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ValuesContent {
  title: string;
  values: Value[];
}

interface ValuesSectionProps {
  content: ValuesContent;
}

export const ValuesSection = ({ content }: ValuesSectionProps) => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.values.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};