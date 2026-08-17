import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { ArchiveArt } from '../components/archive-art'
import { ArchiveLightbox } from '../components/archive-lightbox'
import { archiveFrames, archiveThemes } from '../content/archive'

export const Route = createFileRoute('/archive')({
  head: () => ({
    meta: [
      { title: 'Archive — Shreeyansh Bhardwaj' },
      { name: 'description', content: 'A privacy-conscious archive of photographs organised by feeling, not location.' },
    ],
  }),
  component: Archive,
})

function Archive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <main>
      <section className="page-frame grid gap-8 py-10 md:grid-cols-12 md:py-14">
        <div className="md:col-span-4">
          <p className="eyebrow">01 / Archive</p>
          <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">Keep what<br />felt like<br />something.</h1>
        </div>
        <div className="flex max-w-md flex-col justify-end md:col-span-5 md:col-start-7">
          <p className="text-lg leading-relaxed text-ink/75">A privacy-conscious collection of frames, arranged by feeling instead of place or date.</p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">Select a frame to look closer / esc to return</p>
        </div>
      </section>

      <div className="border-y border-ink/20 px-5 py-4 md:px-8">
        <p className="mx-auto max-w-7xl font-display text-2xl italic text-plum">12 frames / 3 small worlds / no map required.</p>
      </div>

      <div className="page-frame py-16 md:py-24">
        {archiveThemes.map((theme) => (
          <section className="archive-theme" id={theme.id} key={theme.id}>
            <div className="mb-7 flex flex-col gap-4 border-b border-ink/25 pb-5 md:flex-row md:items-end md:justify-between">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-magenta">{theme.index}</span>
                <h2 className="font-display text-5xl italic text-plum md:text-6xl">{theme.title}</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink/65">{theme.note}</p>
            </div>
            <div className="archive-grid">
              {theme.frames.map((frame) => (
                <button
                  aria-label={`Open frame ${frame.label}: ${frame.caption}`}
                  className={`archive-frame archive-frame-${frame.shape}`}
                  key={frame.id}
                  onClick={() => setActiveIndex(archiveFrames.findIndex((archiveFrame) => archiveFrame.id === frame.id))}
                  type="button"
                >
                  <ArchiveArt frame={frame} />
                  <span className="archive-frame-caption">{frame.caption}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {activeIndex !== null ? (
        <ArchiveLightbox
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      ) : null}
    </main>
  )
}
