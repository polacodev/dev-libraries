import { defineCollection, z } from 'astro:content';

const libraryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    libraries: z.array(
      z.object({
        libraryTitle: z.string(),
        libraryDescription: z.string(),
        libraryIcon: z.string(),
        libraryURL: z.string().url(),
      }),
    ),
  }),
});

const contributorCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    contributors: z.array(
      z.object({
        contributorName: z.string(),
        contributorImageURL: z.string().url(),
        contributorGithubURL: z.string().url(),
      }),
    ),
  }),
});

export const collections = { libraries: libraryCollection, contributors: contributorCollection };
