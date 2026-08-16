import { createFileRoute } from '@tanstack/react-router'

import { ComingSoon } from '../components/coming-soon'

export const Route = createFileRoute('/notes')({ component: Notes })

function Notes() {
  return <ComingSoon eyebrow="02 / Notes" title="For later, or right now.">Notes will be sourced from local Markdown, statically prerendered, and designed for slow reading.</ComingSoon>
}
