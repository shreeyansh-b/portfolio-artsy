import { createFileRoute } from '@tanstack/react-router'

import { aboutContent } from '../content/about'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — Shreeyansh Bhardwaj' },
      { name: 'description', content: 'A short note from Shreeyansh Bhardwaj.' },
    ],
  }),
  component: About,
})

function About() {
  return (
    <main>
      <section className="page-frame grid gap-8 py-10 md:grid-cols-12 md:py-14">
        <div className="md:col-span-7">
          <p className="eyebrow">{aboutContent.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">{aboutContent.title}</h1>
        </div>
        <p className="max-w-md self-end text-lg leading-relaxed text-ink/72 md:col-span-4 md:col-start-9">{aboutContent.introduction}</p>
      </section>

      <section className="border-y border-ink/20 bg-plum px-5 py-14 text-cream md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
          <p className="eyebrow text-cream/60 md:col-span-3">A small note</p>
          <p className="max-w-3xl font-display text-4xl leading-[0.98] italic md:col-span-7 md:text-5xl">{aboutContent.note}</p>
        </div>
      </section>

      <section className="page-frame py-14 md:py-20">
        <p className="eyebrow">Elsewhere</p>
        <div className="mt-7 border-y border-ink/20">
          {aboutContent.links.map((link, index) => (
            <a className="group block border-b border-ink/20 last:border-b-0" href={link.href} key={link.href} rel="noreferrer" target="_blank">
              <div className="grid gap-5 py-8 md:grid-cols-12 md:items-end md:py-12">
                <span className="font-mono text-xs tracking-[0.18em] text-magenta md:col-span-1">0{index + 1}</span>
                <div className="md:col-span-6">
                  <h2 className="font-display text-4xl leading-[0.9] italic tracking-tight text-plum md:text-5xl">{link.label}</h2>
                  <p className="mt-3 text-base text-ink/65">{link.detail}</p>
                </div>
                <span className="w-fit border-b border-transparent pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-[border-color,transform] duration-300 group-hover:translate-x-1 group-hover:border-magenta md:col-span-2 md:col-start-11 md:justify-self-end">Visit ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
