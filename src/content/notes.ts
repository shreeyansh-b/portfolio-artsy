export type Note = {
  slug: string
  title: string
  date: string
  tags: readonly string[]
  featured: boolean
  body: string
}

const noteFiles = import.meta.glob<string>('./notes/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

function parseNote(source: string, path: string): Note {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

  if (!match) {
    throw new Error(`Note ${path} needs front matter wrapped in --- lines.`)
  }

  const fields = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const divider = line.indexOf(':')
        return [line.slice(0, divider).trim(), line.slice(divider + 1).trim()]
      }),
  )
  const slug = path.split('/').pop()?.replace(/\.md$/, '')

  if (!slug || !fields.title || !fields.date) {
    throw new Error(`Note ${path} needs a title and date.`)
  }

  return {
    slug,
    title: fields.title,
    date: fields.date,
    tags: fields.tags?.split(',').map((tag) => tag.trim()).filter(Boolean) ?? [],
    featured: fields.featured === 'true',
    body: match[2].trim(),
  }
}

export const notes = Object.entries(noteFiles)
  .map(([path, source]) => parseNote(source, path))
  .sort((a, b) => b.date.localeCompare(a.date))

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug)
}

export function formatNoteDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}
