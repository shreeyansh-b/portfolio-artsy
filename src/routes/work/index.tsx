import { createFileRoute } from '@tanstack/react-router'

import { IndexedListRow, IndexedListRowAction } from '../../components/indexed-list-row'
import { workProjects } from '../../content/work'

export const Route = createFileRoute('/work/')({ component: WorkIndex })

function WorkIndex() {
  return (
    <main>
      <section className="page-frame grid gap-8 py-10 md:grid-cols-12 md:py-14">
        <div className="md:col-span-5">
          <p className="eyebrow">03 / Work</p>
          <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">Things that<br />wanted to exist.</h1>
        </div>
        <p className="max-w-md self-end text-lg leading-relaxed text-ink/70 md:col-span-5 md:col-start-8">A small lab for interfaces, experiments, and ideas that were more fun to make real.</p>
      </section>

      <section className="border-y border-ink/20">
        {workProjects.map((project, index) => (
          <IndexedListRow href={`/work/${project.slug}`} index={index} key={project.slug}>
            <div className="relative z-10 md:col-span-5">
              <p className="eyebrow">{project.format} / {project.year}</p>
              <h2 className="mt-3 font-display text-4xl leading-[0.9] italic tracking-tight md:text-5xl">{project.title}</h2>
            </div>
            <p className="relative z-10 max-w-sm text-base leading-relaxed text-ink/70 md:col-span-4">{project.summary}</p>
            <IndexedListRowAction>Open story ↗</IndexedListRowAction>
          </IndexedListRow>
        ))}
      </section>
    </main>
  )
}
