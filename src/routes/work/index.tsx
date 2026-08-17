import { createFileRoute } from '@tanstack/react-router'

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
          <a className="group block" href={`/work/${project.slug}`} key={project.slug}>
            <article className="page-frame relative isolate grid gap-7 overflow-hidden py-8 md:grid-cols-12 md:items-end md:py-12">
              <span aria-hidden="true" className="pointer-events-none absolute right-8 top-1/2 -z-10 -translate-y-1/2 scale-95 font-display text-[clamp(7rem,15vw,14rem)] leading-none text-transparent opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] will-change-[opacity,transform] [-webkit-text-stroke:1px_rgb(193_58_131_/_0.45)] group-hover:scale-100 group-hover:opacity-100">0{index + 1}</span>
              <span className="relative z-10 font-mono text-xs tracking-[0.18em] text-magenta md:col-span-1">0{index + 1}</span>
              <div className="relative z-10 md:col-span-5">
                <p className="eyebrow">{project.format} / {project.year}</p>
                <h2 className="mt-3 font-display text-4xl leading-[0.9] italic tracking-tight md:text-5xl">{project.title}</h2>
              </div>
              <p className="relative z-10 max-w-sm text-base leading-relaxed text-ink/70 md:col-span-4">{project.summary}</p>
              <span className="relative z-10 w-fit border-b border-transparent pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-[border-color,transform] duration-300 group-hover:translate-x-1 group-hover:border-magenta md:col-span-2 md:justify-self-end">Open story ↗</span>
            </article>
          </a>
        ))}
      </section>
    </main>
  )
}
