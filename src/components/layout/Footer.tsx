
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/monynha', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/monynha', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/monynha', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { key: 'about', path: '/about' },
    { key: 'arms', path: '/arms' },
    { key: 'solutions', path: '/solutions' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-sky-600">
                <span className="text-sm font-bold text-white">M</span>
              </div>
              <span className="font-bold text-xl">Monynha</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div className="space-y-4">
            <h3 className="font-semibold">Monynha Ecosystem</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://monynha.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  monynha.tech
                </a>
              </li>
              <li>
                <a
                  href="https://monynha.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  monynha.store
                </a>
              </li>
              <li>
                <a
                  href="https://monynha.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  monynha.online
                </a>
              </li>
              <li>
                <a
                  href="https://monynha.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  monynha.me
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@monynha.com</p>
              <p>São Paulo, Brasil</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Monynha Softwares. All rights reserved.</p>
          <div className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and pride</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
