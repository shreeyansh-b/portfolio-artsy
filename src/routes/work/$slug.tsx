import { createFileRoute } from '@tanstack/react-router'

import { getWorkProject } from '../../content/work'

export const Route = createFileRoute('/work/$slug')({
  head: ({ params }) => {
    const project = getWorkProject(params.slug)

    return {
      meta: [
        { title: project ? `${project.title} — Shreeyansh Bhardwaj` : 'Work — Shreeyansh Bhardwaj' },
        { name: 'description', content: project?.summary ?? 'A project story by Shreeyansh Bhardwaj.' },
      ],
    }
  },
  component: WorkStory,
})

function WorkStory() {
  const { slug } = Route.useParams()
  const project = getWorkProject(slug)

  if (!project) {
    return (
      <main className="page-frame py-16 md:py-24">
        <p className="eyebrow">Work / not found</p>
        <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">Nothing here yet.</h1>
      </main>
    )
  }

  return (
    <main>
      <section className="page-frame py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">{project.format} / {project.year}</p>
            <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">{project.title}</h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-ink/72 md:col-span-4 md:col-start-9">{project.summary}</p>
        </div>
      </section>

      <section className="border-y border-ink/25 bg-plum px-5 py-5 text-cream md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.15em]">
          <span>Role / {project.role}</span>
          <span>Tools / {project.tools.join(' · ')}</span>
          <a className="transition-colors hover:text-[#f7d77b]" href={project.repository} rel="noreferrer" target="_blank">Repository ↗</a>
        </div>
      </section>

      {project.media.filter((block) => block.layout === 'hero').map((block) => (
        <section className="page-frame py-10 md:py-16" key={block.items[0].src}>
          <figure className="border border-ink/65 bg-[#2b2354] p-2 shadow-[10px_10px_0_0_rgba(62,39,95,0.2)] md:p-3">
            <img alt={block.items[0].alt} className="block h-auto w-full" src={block.items[0].src} />
          </figure>
        </section>
      ))}

      <section className="page-frame grid gap-12 py-12 md:grid-cols-12 md:py-20">
        <p className="eyebrow md:col-span-3">The short story</p>
        <div className="md:col-span-7">
          <p className="max-w-[18ch] font-display text-4xl leading-[0.95] italic text-plum md:text-5xl">{project.storyLead}</p>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">{project.story}</p>
        </div>
      </section>

      {project.media.filter((block) => block.layout === 'pair').map((block) => (
        <section className="border-y border-ink/20 bg-[#e7d9ee]/45 py-12 md:py-20" key={block.items.map((item) => item.src).join('-')}>
          <div className="page-frame grid gap-5 md:grid-cols-2">
            {block.items.map((item, index) => (
              <figure className={`border border-ink/55 bg-cream p-2 shadow-[7px_7px_0_0_rgba(34,19,49,0.15)] md:p-3 ${index % 2 === 1 ? 'md:translate-y-16' : ''}`} key={item.src}>
                <img alt={item.alt} className="block h-auto w-full" loading="lazy" src={item.src} />
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="page-frame flex justify-end py-16 md:py-24">
        <a className="round-link" href="/work">More things in the works ↗</a>
      </section>
    </main>
  )
}
