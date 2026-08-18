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
    slug: 'loggo',
    title: 'Loggo',
    year: '2025',
    format: 'CLI tool',
    summary: 'A local Go CLI for ingesting structured logs, then finding the useful parts without standing up an observability stack.',
    storyLead: 'Keeping logs searchable should not require a whole service.',
    story: 'Loggo streams log files into a local Badger database, keys them by timestamp and service, and maintains a level index for faster filtering. Queries stay close to the terminal: service, level, time range, fields, limits, and optional colour—enough structure to find a signal without leaving the command line.',
    role: 'Backend tooling',
    tools: ['Go', 'Cobra', 'Badger'],
    repository: 'https://github.com/shreeyansh-b/go-log-aggregator',
    media: [],
  },
  {
    slug: 'a-room-full-of-lights',
    title: 'A room full of lights',
    year: '2024',
    format: 'Graphics study',
    summary: 'Interactive OpenGL scene exploring materials, camera movement, and how different lights change a space.',
    storyLead: 'Learning what makes a few cubes feel like they exist in a room.',
    story: 'Built from lower-level graphics pieces: vertex data, shaders, textured materials, a first-person camera, directional light, and four attenuated point lights. Less finished product, more learning to make light, depth, and movement feel convincing.',
    role: 'Graphics programming',
    tools: ['C++', 'OpenGL', 'GLSL', 'GLFW', 'GLM', 'GLAD'],
    repository: 'https://github.com/shreeyansh-b/open-gl-prac',
    media: [],
  },
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
