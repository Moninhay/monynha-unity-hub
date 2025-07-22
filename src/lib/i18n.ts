
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.arms': 'Arms',
      'nav.solutions': 'Solutions',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.login': 'Login',
      'nav.start_project': 'Start Your Project',
      
      // Home page
      'home.hero.title': 'Everyone enters through the same door',
      'home.hero.subtitle': 'Monynha Softwares: Technology with pride, diversity, and resistance',
      'home.hero.cta_primary': 'Start Your Project',
      'home.hero.cta_secondary': 'Learn More',
      
      // Footer
      'footer.tagline': 'Technology with pride and resistance',
      
      // Loading
      'loading': 'Loading...',
    }
  },
  'pt-br': {
    translation: {
      // Navigation
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.arms': 'Braços',
      'nav.solutions': 'Soluções',
      'nav.blog': 'Blog',
      'nav.contact': 'Contato',
      'nav.login': 'Entrar',
      'nav.start_project': 'Iniciar Seu Projeto',
      
      // Home page
      'home.hero.title': 'Todo mundo entra pela mesma porta',
      'home.hero.subtitle': 'Monynha Softwares: Tecnologia com orgulho, diversidade e resistência',
      'home.hero.cta_primary': 'Iniciar Seu Projeto',
      'home.hero.cta_secondary': 'Saiba Mais',
      
      // Footer
      'footer.tagline': 'Tecnologia com orgulho e resistência',
      
      // Loading
      'loading': 'Carregando...',
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.about': 'Acerca',
      'nav.arms': 'Brazos',
      'nav.solutions': 'Soluciones',
      'nav.blog': 'Blog',
      'nav.contact': 'Contacto',
      'nav.login': 'Iniciar Sesión',
      'nav.start_project': 'Iniciar Tu Proyecto',
      
      // Home page
      'home.hero.title': 'Todos entran por la misma puerta',
      'home.hero.subtitle': 'Monynha Softwares: Tecnología con orgullo, diversidad y resistencia',
      'home.hero.cta_primary': 'Iniciar Tu Proyecto',
      'home.hero.cta_secondary': 'Saber Más',
      
      // Footer
      'footer.tagline': 'Tecnología con orgullo y resistencia',
      
      // Loading
      'loading': 'Cargando...',
    }
  },
  fr: {
    translation: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.about': 'À Propos',
      'nav.arms': 'Bras',
      'nav.solutions': 'Solutions',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.login': 'Connexion',
      'nav.start_project': 'Démarrer Votre Projet',
      
      // Home page
      'home.hero.title': 'Tout le monde entre par la même porte',
      'home.hero.subtitle': 'Monynha Softwares: Technologie avec fierté, diversité et résistance',
      'home.hero.cta_primary': 'Démarrer Votre Projet',
      'home.hero.cta_secondary': 'En Savoir Plus',
      
      // Footer
      'footer.tagline': 'Technologie avec fierté et résistance',
      
      // Loading
      'loading': 'Chargement...',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
