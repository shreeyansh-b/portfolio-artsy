import type { ReactNode } from 'react'
import { HeadContent, Outlet, Scripts, createRootRoute, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'A personal archive of creative work, photographs, and notes.',
      },
      { title: 'Shreeyansh Bhardwaj — Personal Archive' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const pathname = useLocation({ select: (location) => location.pathname })
  const prefersReducedMotion = useReducedMotion()

  return (
    <RootDocument>
      <AnimatePresence initial={false} mode="wait">
        <motion.main
          key={pathname}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8, filter: 'blur(3px)' }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="site-grain min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
