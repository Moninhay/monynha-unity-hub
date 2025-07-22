
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const SUPPORTED_LOCALES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt-br', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = SUPPORTED_LOCALES.find(locale => locale.code === i18n.language) || SUPPORTED_LOCALES[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    // In a real app, you'd also update the URL path
  };

  const handleLoginClick = () => {
    window.location.href = 'https://monynha.me/login';
  };

  const navigation = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'arms', path: '/arms' },
    { key: 'solutions', path: '/solutions' },
    { key: 'blog', path: '/blog' },
    { key: 'contact', path: '/contact' }
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigation.map(({ key, path }) => (
        <Link
          key={key}
          to={path}
          className={`${
            mobile ? 'block px-3 py-2 text-base' : 'text-sm'
          } font-medium transition-colors hover:text-primary ${
            location.pathname === path ? 'text-primary' : 'text-foreground/70'
          }`}
          onClick={() => mobile && setIsOpen(false)}
        >
          {t(`nav.${key}`)}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-sky-600">
            <span className="text-sm font-bold text-white">M</span>
          </div>
          <span className="font-bold text-xl">Monynha</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2">
                <Globe className="h-4 w-4 mr-1" />
                <span className="text-sm">{currentLocale.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {SUPPORTED_LOCALES.map((locale) => (
                <DropdownMenuItem
                  key={locale.code}
                  onClick={() => changeLanguage(locale.code)}
                  className={locale.code === i18n.language ? 'bg-accent' : ''}
                >
                  <span className="mr-2">{locale.flag}</span>
                  {locale.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleLoginClick}>
              {t('nav.login')}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700">
              {t('nav.start_project')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                <NavLinks mobile />
                <div className="border-t pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" onClick={handleLoginClick}>
                    {t('nav.login')}
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-sky-600">
                    {t('nav.start_project')}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
