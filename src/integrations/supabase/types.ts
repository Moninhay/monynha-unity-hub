export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_read: boolean | null
          lang_code: string | null
          message: string
          name: string
          subject: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_read?: boolean | null
          lang_code?: string | null
          message: string
          name: string
          subject?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_read?: boolean | null
          lang_code?: string | null
          message?: string
          name?: string
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_messages_lang_code_fkey"
            columns: ["lang_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
        ]
      }
      languages: {
        Row: {
          code: string
          created_at: string | null
          is_active: boolean | null
          name: string
        }
        Insert: {
          code: string
          created_at?: string | null
          is_active?: boolean | null
          name: string
        }
        Update: {
          code?: string
          created_at?: string | null
          is_active?: boolean | null
          name?: string
        }
        Relationships: []
      }
      pages: {
        Row: {
          created_at: string | null
          default_lang: string | null
          id: string
          is_published: boolean | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          default_lang?: string | null
          id?: string
          is_published?: boolean | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          default_lang?: string | null
          id?: string
          is_published?: boolean | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pages_default_lang_fkey"
            columns: ["default_lang"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
        ]
      }
      post_translations: {
        Row: {
          body: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          lang_code: string | null
          post_id: string | null
          status: string | null
          title: string
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          lang_code?: string | null
          post_id?: string | null
          status?: string | null
          title: string
        }
        Update: {
          body?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          lang_code?: string | null
          post_id?: string | null
          status?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_translations_lang_code_fkey"
            columns: ["lang_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "post_translations_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          cover_image: string | null
          created_at: string | null
          default_lang: string | null
          id: string
          is_published: boolean | null
          published_at: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          cover_image?: string | null
          created_at?: string | null
          default_lang?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          cover_image?: string | null
          created_at?: string | null
          default_lang?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_default_lang_fkey"
            columns: ["default_lang"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
        ]
      }
      product_translations: {
        Row: {
          created_at: string | null
          description: string | null
          faq: Json | null
          features: Json | null
          id: string
          lang_code: string | null
          name: string
          product_id: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          faq?: Json | null
          features?: Json | null
          id?: string
          lang_code?: string | null
          name: string
          product_id?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          faq?: Json | null
          features?: Json | null
          id?: string
          lang_code?: string | null
          name?: string
          product_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_translations_lang_code_fkey"
            columns: ["lang_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "product_translations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          created_at: string | null
          default_lang: string | null
          demo_url: string | null
          hero_image: string | null
          id: string
          is_published: boolean | null
          key: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          default_lang?: string | null
          demo_url?: string | null
          hero_image?: string | null
          id?: string
          is_published?: boolean | null
          key: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          default_lang?: string | null
          demo_url?: string | null
          hero_image?: string | null
          id?: string
          is_published?: boolean | null
          key?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_default_lang_fkey"
            columns: ["default_lang"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          institution: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          institution: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          institution?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sections: {
        Row: {
          component_type: string
          created_at: string | null
          id: string
          is_active: boolean | null
          ordering: number | null
          page_id: string | null
        }
        Insert: {
          component_type: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          ordering?: number | null
          page_id?: string | null
        }
        Update: {
          component_type?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          ordering?: number | null
          page_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sections_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      translations: {
        Row: {
          content: Json
          created_at: string | null
          id: string
          lang_code: string | null
          section_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          content: Json
          created_at?: string | null
          id?: string
          lang_code?: string | null
          section_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: Json
          created_at?: string | null
          id?: string
          lang_code?: string | null
          section_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "translations_lang_code_fkey"
            columns: ["lang_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "translations_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
