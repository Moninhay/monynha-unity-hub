
-- Create languages table for multilingual support
CREATE TABLE public.languages (
  code VARCHAR(10) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert supported languages
INSERT INTO public.languages (code, name) VALUES
  ('en', 'English'),
  ('pt-br', 'Português (Brasil)'),
  ('es', 'Español'),
  ('fr', 'Français');

-- Create pages table
CREATE TABLE public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  default_lang VARCHAR(10) REFERENCES public.languages(code) DEFAULT 'en',
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create sections table for page content blocks
CREATE TABLE public.sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE,
  component_type VARCHAR(50) NOT NULL, -- 'hero', 'cards', 'values', 'timeline', etc.
  ordering INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create translations table for section content
CREATE TABLE public.translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES public.sections(id) ON DELETE CASCADE,
  lang_code VARCHAR(10) REFERENCES public.languages(code),
  content JSONB NOT NULL, -- Flexible content structure
  status VARCHAR(20) DEFAULT 'published', -- 'draft', 'published', 'archived'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key VARCHAR(100) UNIQUE NOT NULL, -- 'boteco-pro', 'barnostri', etc.
  default_lang VARCHAR(10) REFERENCES public.languages(code) DEFAULT 'en',
  hero_image VARCHAR(500),
  demo_url VARCHAR(500),
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create product translations
CREATE TABLE public.product_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  lang_code VARCHAR(10) REFERENCES public.languages(code),
  name VARCHAR(200) NOT NULL,
  description TEXT,
  features JSONB, -- Array of features
  faq JSONB, -- Array of FAQ items
  status VARCHAR(20) DEFAULT 'published',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create posts table for blog
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE,
  default_lang VARCHAR(10) REFERENCES public.languages(code) DEFAULT 'en',
  cover_image VARCHAR(500),
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create post translations
CREATE TABLE public.post_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.posts(id) ON DELETE CASCADE,
  lang_code VARCHAR(10) REFERENCES public.languages(code),
  title VARCHAR(300) NOT NULL,
  excerpt TEXT,
  body TEXT,
  status VARCHAR(20) DEFAULT 'published',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  subject VARCHAR(300),
  message TEXT NOT NULL,
  lang_code VARCHAR(10) REFERENCES public.languages(code) DEFAULT 'en',
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for anonymous read access to published content
CREATE POLICY "Anonymous users can view active languages" ON public.languages
  FOR SELECT USING (is_active = true);

CREATE POLICY "Anonymous users can view published pages" ON public.pages
  FOR SELECT USING (is_published = true);

CREATE POLICY "Anonymous users can view active sections of published pages" ON public.sections
  FOR SELECT USING (
    is_active = true AND 
    EXISTS (SELECT 1 FROM public.pages WHERE id = sections.page_id AND is_published = true)
  );

CREATE POLICY "Anonymous users can view published translations" ON public.translations
  FOR SELECT USING (status = 'published');

CREATE POLICY "Anonymous users can view published products" ON public.products
  FOR SELECT USING (is_published = true);

CREATE POLICY "Anonymous users can view published product translations" ON public.product_translations
  FOR SELECT USING (status = 'published');

CREATE POLICY "Anonymous users can view published posts" ON public.posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Anonymous users can view published post translations" ON public.post_translations
  FOR SELECT USING (status = 'published');

-- Allow anyone to insert contact messages
CREATE POLICY "Anyone can submit contact messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Create triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON public.pages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_translations_updated_at BEFORE UPDATE ON public.translations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON public.posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert initial pages
INSERT INTO public.pages (slug, is_published) VALUES
  ('home', true),
  ('about', true),
  ('arms', true),
  ('solutions', true),
  ('contact', true);
