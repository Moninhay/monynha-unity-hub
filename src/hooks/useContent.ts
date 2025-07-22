
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import type { Page, Section, Translation } from '@/types/cms';

export const usePageContent = (slug: string) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return useQuery({
    queryKey: ['page-content', slug, currentLang],
    queryFn: async () => {
      console.log(`Fetching content for page: ${slug}, language: ${currentLang}`);
      
      // Get page
      const { data: page, error: pageError } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (pageError || !page) {
        console.error('Page not found:', pageError);
        throw new Error(`Page ${slug} not found`);
      }

      // Get sections for this page
      const { data: sections, error: sectionsError } = await supabase
        .from('sections')
        .select('*')
        .eq('page_id', page.id)
        .eq('is_active', true)
        .order('ordering');

      if (sectionsError) {
        console.error('Error fetching sections:', sectionsError);
        throw sectionsError;
      }

      // Get translations for all sections
      const sectionIds = sections?.map(s => s.id) || [];
      const { data: translations, error: translationsError } = await supabase
        .from('translations')
        .select('*')
        .in('section_id', sectionIds)
        .eq('status', 'published');

      if (translationsError) {
        console.error('Error fetching translations:', translationsError);
        throw translationsError;
      }

      // Organize content by section with fallback logic
      const sectionsWithContent = sections?.map(section => {
        const sectionTranslations = translations?.filter(t => t.section_id === section.id) || [];
        
        // Try current language first, then default language, then any available
        let content = sectionTranslations.find(t => t.lang_code === currentLang)?.content;
        if (!content) {
          content = sectionTranslations.find(t => t.lang_code === page.default_lang)?.content;
        }
        if (!content && sectionTranslations.length > 0) {
          content = sectionTranslations[0].content;
        }

        return {
          ...section,
          content: content || {}
        };
      }) || [];

      return {
        page,
        sections: sectionsWithContent
      };
    },
    enabled: !!slug,
  });
};
