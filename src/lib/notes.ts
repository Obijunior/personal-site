import { getCollection } from "astro:content";

export interface NoteCard {
	slug: string;
	title: string;
	date: Date;
	tag: string;
	blurb: string;
	dateLabel: string;
}

const fmt = (d: Date) =>
	`${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;

export async function getPublishedNotes(): Promise<NoteCard[]> {
	const entries = await getCollection("notes", ({ data }) => data.draft !== true);
	return entries
		.map((e) => ({
			slug: e.id,
			title: e.data.title,
			date: e.data.date,
			tag: e.data.tag,
			blurb: e.data.blurb,
			dateLabel: fmt(e.data.date),
		}))
		.sort((a, b) => b.date.getTime() - a.date.getTime());
}
