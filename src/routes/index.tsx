import { createFileRoute } from '@tanstack/react-router'

import { AnimatedLink } from '../components/animated-link'
import { homeFeaturedItems } from '../content/home'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Shreeyansh Bhardwaj — Personal Archive' },
      {
        name: 'description',
        content: 'A small archive of things made and noticed by Shreeyansh Bhardwaj.',
      },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <main>
      <section className="page-frame grid gap-8 py-8 md:grid-cols-12 md:py-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Personal archive / 2026</p>
          <h1 className="mt-6 max-w-xl font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">
            things made<br />&amp; noticed.
          </h1>
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink/75">
            A small archive of creative work, hazy frames, and notes from somewhere in between.
          </p>
          <AnimatedLink className="mt-8" href="#featured">Start looking <span aria-hidden="true">↓</span></AnimatedLink>
        </div>

        <div className="relative grid min-h-[540px] grid-cols-6 grid-rows-6 gap-3 md:col-span-7 md:min-h-[650px]">
          <a className="art-card art-card-main col-span-5 row-span-5" href="/archive">
            <span className="art-label">01 / Soft focus</span>
            <span className="art-caption">the light stayed for a little longer</span>
          </a>
          <a className="art-card art-card-note col-start-5 col-end-7 row-start-5 row-end-7 -ml-5 -mt-1" href="/notes">
            <span className="art-label">02 / Note</span>
            <span className="font-display text-3xl leading-none italic">on taking the long way home</span>
          </a>
          <a className="art-card art-card-work col-start-1 col-end-3 row-start-6 row-end-7 -mr-2 mt-3" href="/work">
            <span className="art-label">03 / Work</span>
            <span className="text-sm leading-tight">small systems, bright ideas.</span>
          </a>
        </div>
      </section>

      <section className="page-frame py-20 md:py-28" id="featured">
        <div className="flex flex-col gap-5 border-b border-ink/25 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">A little bit of everything</p>
            <h2 className="mt-3 font-display text-5xl italic text-plum md:text-6xl">Worth keeping around.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/65">Three ways of looking at the same life: through a screen, a lens, and a half-finished thought.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {homeFeaturedItems.map((item) => (
            <a className={`feature-card feature-${item.variant}`} href={item.href} key={item.href}>
              <span className="eyebrow">{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <span>{item.action}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/20 bg-plum px-5 py-16 text-cream md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
          <p className="eyebrow text-cream/60 md:col-span-3">A note from here</p>
          <p className="font-display text-4xl leading-[0.95] italic md:col-span-7 md:text-6xl">Not a résumé. More like a place to leave the door open.</p>
          <AnimatedLink className="round-link-inverse h-fit border-cream/70 md:col-span-2" href="/about">About me ↗</AnimatedLink>
        </div>
      </section>
    </main>
  )
}
