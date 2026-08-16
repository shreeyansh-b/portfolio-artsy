import type { ArchiveFrame } from '../content/archive'

export function ArchiveArt({ frame, large = false }: Readonly<{ frame: ArchiveFrame; large?: boolean }>) {
  return (
    <div aria-hidden="true" className={`archive-art archive-art-${frame.palette} ${large ? 'archive-art-large' : ''}`}>
      <span className="archive-art-wave archive-art-wave-one" />
      <span className="archive-art-wave archive-art-wave-two" />
      <span className="archive-art-grain" />
      <span className="archive-art-number">{frame.label}</span>
    </div>
  )
}
