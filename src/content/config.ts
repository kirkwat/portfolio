import { defineCollection, z } from "astro:content";

const cert = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    featured: z.number().min(1).optional(),
  }),
});

const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    longTitle: z.string().min(1),
    description: z.string().min(1),
    image: z.string(),
    featured: z.number().min(1).optional(),
    technologies: z.array(z.object({ name: z.string(), color: z.string() })),
    links: z.object({
      site: z.string().url().optional(),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
    }),
  }),
});

export const collections = {
  cert,
  project,
};
