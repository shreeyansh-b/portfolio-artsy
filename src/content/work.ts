type WorkMedia = {
  src: string
  alt: string
}

type WorkMediaBlock =
  | {
      layout: 'hero'
      items: readonly [WorkMedia]
    }
  | {
      layout: 'pair'
      items: readonly [WorkMedia, WorkMedia]
    }

export type WorkProject = {
  slug: string
  title: string
  year: string
  format: string
  summary: string
  storyLead: string
  story: string
  role: string
  tools: readonly string[]
  repository: string
  media: readonly WorkMediaBlock[]
}

export const workProjects: readonly WorkProject[] = [
  {
    slug: 'meme-generator',
    title: 'Meme generator',
    year: '2024',
    format: 'Web experiment',
    summary: 'An image-first little editor for picking a meme, making it your own, and sending it on its way.',
    storyLead: 'Making a meme should feel like playing with one.',
    story: 'The interface keeps the template library close, lets text move freely, and gives the canvas enough room to be the point—not another complicated editor to figure out.',
    role: 'Design + frontend',
    tools: ['React', 'TypeScript', 'Konva', 'React Query'],
    repository: 'https://github.com/shreeyansh-b/vite-meme',
    media: [
      {
        layout: 'hero',
        items: [{
          src: '/work/meme-generator/cover.jpg',
          alt: 'Meme generator shown on a laptop',
        }],
      },
      {
        layout: 'pair',
        items: [
          {
            src: '/work/meme-generator/ipad.jpg',
            alt: 'Meme generator canvas shown on an iPad',
          },
          {
            src: '/work/meme-generator/surface.jpg',
            alt: 'Meme generator workspace shown on a desk',
          },
        ],
      },
    ],
  },
]

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug)
}
