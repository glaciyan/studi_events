import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const notices = defineCollection({
  loader: glob({ pattern: ["*.md"], base: "src/data/notices" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      event_start: z.coerce.date().optional(),
      event_end: z.coerce.date().optional(),
      institution: z.array(z.enum(["HTWG", "UNI"])),
      tags: z.array(z.string()), // TODO
      cover: z
        .object({
          image: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = { notices };
