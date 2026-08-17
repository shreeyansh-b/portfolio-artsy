import type { ReactNode } from 'react'

export function ComingSoon({ eyebrow, title, children }: Readonly<{ eyebrow: string; title: string; children: ReactNode }>) {
  return (
    <main className="page-frame py-10 md:py-14">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-3xl font-display text-[clamp(3.75rem,6vw,6rem)] leading-[0.82] italic tracking-[-0.05em] text-plum">{title}</h1>
      <div className="mt-12 max-w-xl border border-ink/25 bg-cream/75 p-6 text-lg leading-relaxed shadow-[8px_8px_0_0_rgba(62,39,95,0.14)]">
        {children}
      </div>
    </main>
  )
}
