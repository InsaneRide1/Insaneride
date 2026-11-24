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
      // Big-number callouts shown on case study cards and pages, e.g. { value: '30%', label: 'Fewer support calls' }.
      highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // 'contain' shows the whole cover centred in the banner instead of cropping it to fill.
      // CSS object-position for the banner crop, e.g. 'center 4%' to start a little below the top.
      coverPosition: z.string().optional(),
      coverFit: z.enum(['cover', 'contain']).default('cover'),
      // true = gallery shows same-size cropped tiles in a grid (click opens the full image).
      galleryGrid: z.boolean().default(false),
      // How grouped gallery items show: 'collage' = overlapping tiles across the row; 'thumb' = one thumbnail (the first item) that opens them all.
      galleryGroupStyle: z.enum(['collage', 'thumb']).default('collage'),
      // Columns for the grid gallery on wide screens.
      galleryColumns: z.union([z.literal(2), z.literal(3)]).default(3),
      gallery: z
        .array(
          z.object({
            src: image().optional(), // an image next to the Markdown file
            video: z.string().optional(), // or a muted looping video in public/, e.g. /media/demo.mp4
            alt: z.string(),
            caption: z.string().optional(),
            // Small labels shown on the image, e.g. ['Client: Infusionsoft', 'Product: Lead Gen'].
            tags: z.array(z.string()).optional(),
            // Consecutive items with the same group show as one collage; clicking it opens them all stacked.
            group: z.string().optional(),
            // CSS object-position for cropped grid tiles, e.g. 'left center'.
            position: z.string().optional(),
          }),
        )
        .default([]),
      link: z.string().url().optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
