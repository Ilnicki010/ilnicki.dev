import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { loomId } from './lib/loom';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string().trim().min(1),
    date: z.coerce.date(),
    description: z.string().trim().default(''),
    tags: z.array(
      z.string().trim().toLowerCase().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'Use lowercase tag names with hyphens, for example: ai-coding.',
      }),
    ).default([]).transform((tags) => [...new Set(tags)]),
    published: z.boolean().default(false),
    loom: z.object({
      url: z.string().refine((url) => loomId(url) !== null, {
        message: 'Use a Loom share URL: https://www.loom.com/share/your-video-id',
      }),
      title: z.string().trim().min(1),
    }).optional(),
  }).refine((note) => !note.published || note.description.length > 0, {
    message: 'Published entries need a description.',
    path: ['description'],
  }),
});

export const collections = { notes };
