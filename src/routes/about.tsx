import { createFileRoute } from '@tanstack/react-router'

import { ComingSoon } from '../components/coming-soon'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return <ComingSoon eyebrow="04 / About" title="Hi, I’m Shreeyansh.">A short bio and the links worth keeping will live here.</ComingSoon>
}
