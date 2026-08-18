import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'

type IndexedListRowProps = {
  href: string
  index: number
  children: ReactNode
}

export function IndexedListRow({ href, index, children }: Readonly<IndexedListRowProps>) {
  const label = String(index + 1).padStart(2, '0')

  return (
    <Link className="group block border-b border-ink/20 last:border-b-0" resetScroll={true} to={href}>
      <article className="page-frame relative isolate grid gap-7 overflow-hidden py-8 md:min-h-[17rem] md:grid-cols-12 md:items-end md:py-12">
        <span aria-hidden="true" className="pointer-events-none absolute right-8 top-1/2 -z-10 -translate-y-1/2 scale-95 font-display text-[clamp(7rem,15vw,14rem)] leading-none text-transparent opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] will-change-[opacity,transform] [-webkit-text-stroke:1px_rgb(193_58_131_/_0.45)] group-hover:scale-100 group-hover:opacity-100">{label}</span>
        <span className="relative z-10 font-mono text-xs tracking-[0.18em] text-magenta md:col-span-1">{label}</span>
        {children}
      </article>
    </Link>
  )
}

export function IndexedListRowAction({ children }: Readonly<{ children: ReactNode }>) {
  return <span className="relative z-10 w-fit border-b border-transparent pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-[border-color,transform] duration-300 group-hover:translate-x-1 group-hover:border-magenta md:col-span-2 md:justify-self-end">{children}</span>
}
