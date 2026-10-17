import { getCollection, type CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

export async function getNotes() {
  const notes = await getCollection('notes', ({ data }) => data.published || import.meta.env.DEV);
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id));
}

export function getTags(notes: Note[]) {
  return [...new Set(notes.flatMap((note) => note.data.tags))].sort();
}

export function formatTag(tag: string) {
  const label = tag.replaceAll('-', ' ').replace(/\b(ai|api|cli|css|html|llm|sdk|ui|ux)\b/g, (word) => word.toUpperCase());
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function noteUrl(note: Note) {
  return `/notes/${note.id.split('/').map(encodeURIComponent).join('/')}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
