import { useState } from 'react'

import { AnimatedLink } from './animated-link'

const navigation = [
  { href: '/archive', label: 'Archive' },
  { href: '/notes', label: 'Notes' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="relative z-30 border-b border-ink/20 bg-cream/90 px-5 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a className="group inline-flex items-baseline" href="/" onClick={closeMenu}>
          <span className="font-display text-2xl italic tracking-tight">shreeyansh</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <AnimatedLink href="https://github.com/shreeyansh-b" rel="noreferrer" target="_blank">
            GitHub <span aria-hidden="true">↗</span>
          </AnimatedLink>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          className="grid size-10 place-items-center border border-ink/60 text-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">{menuOpen ? 'Close navigation' : 'Open navigation'}</span>
          <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full min-h-[calc(100vh-73px)] border-b border-ink bg-plum px-6 py-8 text-cream md:hidden"
          id="mobile-navigation"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/55">Look around</p>
          <div className="mt-8 flex flex-col border-t border-cream/25">
            {navigation.map((item, index) => (
              <a
                className="flex items-center justify-between border-b border-cream/25 py-5 font-display text-5xl italic"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
                <span className="font-sans text-base not-italic">0{index + 1}</span>
              </a>
            ))}
          </div>
          <a
            className="mt-10 inline-flex border border-cream px-4 py-3 text-sm uppercase tracking-[0.16em]"
            href="https://github.com/shreeyansh-b"
            rel="noreferrer"
            target="_blank"
          >
            GitHub ↗
          </a>
        </nav>
      ) : null}
    </header>
  )
}
