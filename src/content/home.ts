import { archiveFrames, archiveThemes } from './archive'
import { workProjects } from './work'

const featuredArchiveTheme = archiveThemes.find((theme) => theme.id === 'in-between')
const featuredWork = workProjects.find((project) => project.slug === 'meme-generator')

if (!featuredArchiveTheme || !featuredWork) {
  throw new Error('Home featured content points to missing Archive or Work content.')
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
    href: '/notes',
    eyebrow: 'Note / coming soon',
    title: 'The weather was on our side.',
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
