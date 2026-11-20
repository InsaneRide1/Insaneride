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
      // 'case-study' = long research + design write-up; 'project' = short write-up + gallery.
      depth: z.enum(['case-study', 'project']).default('project'),
      discipline: z.enum(['ux', 'print', 'illustration']),
      client: z.string().optional(),
      years: z.string(),
      role: z.string().optional(),
      team: z.string().optional(),
      outcome: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      link: z.string().url().optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
