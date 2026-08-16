import type { ReactNode } from 'react'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

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
  return (
    <RootDocument>
      <Outlet />
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
