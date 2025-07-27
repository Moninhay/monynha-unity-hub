import { supabase } from '@/integrations/supabase/client';

/**
 * Get the public URL for a file in the public-images bucket
 */
export const getPublicImageUrl = (path: string): string => {
  const { data } = supabase.storage
    .from('public-images')
    .getPublicUrl(path);
  
  return data.publicUrl;
};

/**
 * Upload a file to the public-images bucket
 */
export const uploadPublicImage = async (
  path: string,
  file: File,
  options?: { cacheControl?: string; upsert?: boolean }
) => {
  const { data, error } = await supabase.storage
    .from('public-images')
    .upload(path, file, {
      cacheControl: options?.cacheControl || '3600',
      upsert: options?.upsert || false,
    });

  if (error) {
    throw error;
  }

  return {
    ...data,
    publicUrl: getPublicImageUrl(data.path),
  };
};

/**
 * Delete a file from the public-images bucket
 */
export const deletePublicImage = async (path: string) => {
  const { error } = await supabase.storage
    .from('public-images')
    .remove([path]);

  if (error) {
    throw error;
  }

  return true;
};

/**
 * List files in the public-images bucket
 */
export const listPublicImages = async (folder?: string) => {
  const { data, error } = await supabase.storage
    .from('public-images')
    .list(folder || '', {
      limit: 100,
      offset: 0,
    });

  if (error) {
    throw error;
  }

  return data.map(file => ({
    ...file,
    publicUrl: getPublicImageUrl(`${folder ? folder + '/' : ''}${file.name}`),
  }));
};