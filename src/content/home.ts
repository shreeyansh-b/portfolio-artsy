import { archiveFrames, archiveThemes } from './archive'
import { notes } from './notes'
import { workProjects } from './work'

const featuredArchiveTheme = archiveThemes.find((theme) => theme.id === 'in-between')
const featuredWork = workProjects.find((project) => project.slug === 'meme-generator')
const featuredNote = notes.find((note) => note.featured)

if (!featuredArchiveTheme || !featuredWork || !featuredNote) {
  throw new Error('Home featured content points to missing Archive, Note, or Work content.')
}

export const homeFeaturedItems = [
  {
    variant: 'archive',
    href: '/archive',
    eyebrow: `Archive / ${archiveFrames.length} frames`,
    title: featuredArchiveTheme.title,
    action: 'View the archive ↗',
  },
  {
    variant: 'note',
    href: `/notes/${featuredNote.slug}`,
    eyebrow: `Note / ${featuredNote.date}`,
    title: featuredNote.title,
    action: 'Read the note ↗',
  },
  {
    variant: 'work',
    href: `/work/${featuredWork.slug}`,
    eyebrow: `Work / ${featuredWork.year}`,
    title: featuredWork.title,
    action: 'See the project ↗',
  },
] as const
