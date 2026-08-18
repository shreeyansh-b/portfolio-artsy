import { Link, createFileRoute } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'

import { formatNoteDate, getNote } from '../../content/notes'
import { getWorkProject } from '../../content/work'

export const Route = createFileRoute('/notes/$slug')({
  head: ({ params }) => {
    const note = getNote(params.slug)

    return {
      meta: [
        { title: note ? `${note.title} — Shreeyansh Bhardwaj` : 'Notes — Shreeyansh Bhardwaj' },
        { name: 'description', content: note?.body.split('\n\n')[0] ?? 'A note by Shreeyansh Bhardwaj.' },
      ],
    }
  },
  component: NoteStory,
})

function NoteStory() {
  const { slug } = Route.useParams()
  const note = getNote(slug)
  const relatedWork = note?.workSlug ? getWorkProject(note.workSlug) : undefined

  if (!note) {
    return (
      <main className="page-frame py-10 md:py-14">
        <p className="eyebrow">Note / not found</p>
        <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">Nothing here yet.</h1>
      </main>
    )
  }

  return (
    <main>
      <article className="page-frame py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Note / {formatNoteDate(note.date)}</p>
          <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.84] italic tracking-[-0.05em] text-plum">{note.title}</h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {note.tags.map((tag) => <span className="border border-ink/25 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em]" key={tag}>{tag}</span>)}
          </div>
          {relatedWork ? <Link className="mt-7 inline-block border-b border-magenta pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-plum transition-transform hover:translate-x-1" params={{ slug: relatedWork.slug }} resetScroll={true} to="/work/$slug">From work / {relatedWork.title} ↗</Link> : null}
          <div className="note-content mt-12">
            <ReactMarkdown>{note.body}</ReactMarkdown>
          </div>
        </div>
      </article>
      <div className="border-t border-ink/20 px-5 py-8 md:px-8">
        <Link className="eyebrow mx-auto block max-w-3xl transition-colors hover:text-magenta" resetScroll={true} to="/notes">← All notes</Link>
      </div>
    </main>
  )
}
