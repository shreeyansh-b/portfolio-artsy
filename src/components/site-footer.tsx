const footerLines = ['made slowly, with feeling.', 'small moments, kept close.', 'still looking around.']

export function SiteFooter() {
  const line = footerLines[new Date().getDate() % footerLines.length]

  return (
    <footer className="border-t border-ink/20 px-5 py-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl italic">{line}</p>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] text-ink/70">
          <a className="hover:text-magenta" href="https://github.com/shreeyansh-b" rel="noreferrer" target="_blank">GitHub ↗</a>
          <span aria-hidden="true">•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
