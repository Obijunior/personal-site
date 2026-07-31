import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		tag: z.string(),
		blurb: z.string(),
		readingTime: z.string().default("~5 min"),
		draft: z.boolean().default(false),
	}),
});

export const collections = { notes };
