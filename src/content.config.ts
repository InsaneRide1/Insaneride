import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is one Markdown file in src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number(),
      role: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Optional cover image, relative to the Markdown file (e.g. ./images/cover.jpg).
      cover: image().optional(),
      coverAlt: z.string().optional(),
      link: z.string().url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { projects };
