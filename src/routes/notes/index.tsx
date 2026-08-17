import { createFileRoute } from '@tanstack/react-router'

import { IndexedListRow, IndexedListRowAction } from '../../components/indexed-list-row'
import { formatNoteDate, notes } from '../../content/notes'

export const Route = createFileRoute('/notes/')({ component: NotesIndex })

function NotesIndex() {
  const featuredNote = notes.find((note) => note.featured)
  const smallerNotes = notes.filter((note) => !note.featured)

  return (
    <main>
      <section className="page-frame grid gap-8 py-10 md:grid-cols-12 md:py-14">
        <div className="md:col-span-5">
          <p className="eyebrow">02 / Notes</p>
          <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">For later,<br />or right now.</h1>
        </div>
        <p className="max-w-md self-end text-lg leading-relaxed text-ink/70 md:col-span-5 md:col-start-8">Small writing about the things that linger: a bit of weather, a passing thought, a song before the next one.</p>
      </section>

      {featuredNote ? (
        <section className="border-y border-ink/20 bg-plum px-5 py-12 text-cream md:px-8 md:py-16">
          <a className="mx-auto block max-w-7xl" href={`/notes/${featuredNote.slug}`}>
            <p className="eyebrow text-cream/60">Featured note / {formatNoteDate(featuredNote.date)}</p>
            <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
              <h2 className="font-display text-5xl leading-[0.86] italic tracking-tight md:col-span-7 md:text-7xl">{featuredNote.title}</h2>
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-base leading-relaxed text-cream/75">{featuredNote.body.split('\n\n')[0]}</p>
                <span className="mt-6 inline-block border-b border-cream/50 pb-1 text-xs font-semibold uppercase tracking-[0.16em]">Read slowly ↗</span>
              </div>
            </div>
          </a>
        </section>
      ) : null}

      <section className="py-14 md:py-20">
        <div className="page-frame">
          <p className="eyebrow">More to keep around</p>
        </div>
        <div className="mt-7 border-y border-ink/20">
          {smallerNotes.map((note, index) => (
            <IndexedListRow href={`/notes/${note.slug}`} index={index} key={note.slug}>
              <div className="relative z-10 md:col-span-5">
                <p className="eyebrow">{note.tags.join(' / ')}</p>
                <h2 className="font-display text-4xl leading-[0.9] italic tracking-tight md:whitespace-nowrap md:text-5xl">{note.title}</h2>
              </div>
              <span className="relative z-10 text-xs font-medium uppercase tracking-[0.16em] text-ink/60 md:col-span-4">{formatNoteDate(note.date)}</span>
              <IndexedListRowAction>Open ↗</IndexedListRowAction>
            </IndexedListRow>
          ))}
        </div>
      </section>
    </main>
  )
}
