import { createFileRoute } from '@tanstack/react-router'

import { ComingSoon } from '../components/coming-soon'

export const Route = createFileRoute('/work')({ component: Work })

function Work() {
  return <ComingSoon eyebrow="03 / Work" title="Things that wanted to exist.">Work is a loose lab for projects and experiments, with short stories rather than conventional case studies.</ComingSoon>
}
