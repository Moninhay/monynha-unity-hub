
export interface Language {
  code: string;
  name: string;
  is_active: boolean;
}

export interface Page {
  id: string;
  slug: string;
  default_lang: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Section {
  id: string;
  page_id: string;
  component_type: string;
  ordering: number;
  is_active: boolean;
  created_at: string;
}

export interface Translation {
  id: string;
  section_id: string;
  lang_code: string;
  content: Record<string, any>;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  key: string;
  default_lang: string;
  hero_image?: string;
  demo_url?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductTranslation {
  id: string;
  product_id: string;
  lang_code: string;
  name: string;
  description?: string;
  features?: any[];
  faq?: any[];
  status: string;
  created_at: string;
}

export interface Post {
  id: string;
  slug: string;
  published_at?: string;
  default_lang: string;
  cover_image?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface PostTranslation {
  id: string;
  post_id: string;
  lang_code: string;
  title: string;
  excerpt?: string;
  body?: string;
  status: string;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  lang_code: string;
  is_read: boolean;
  created_at: string;
}
