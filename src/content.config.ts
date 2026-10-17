import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      category: z.enum(['Residencial', 'Paisajismo', 'Interiorismo', 'Dirección de Obra']),
      location: z.string(),
      year: z.number(),
      surfaceArea: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(1),
      coverImage: image(),
      coverAlt: z.string(),
      galleryImages: z.array(image()).optional(),
    }),
});

export const collections = {
  projects,
};
