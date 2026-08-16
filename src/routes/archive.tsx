import { createFileRoute } from '@tanstack/react-router'

import { ComingSoon } from '../components/coming-soon'

export const Route = createFileRoute('/archive')({ component: Archive })

function Archive() {
  return <ComingSoon eyebrow="01 / Archive" title="Soft focus, held close.">The themed photograph archive is the next page in the build. It will use a collage on larger screens and a quiet grid on smaller ones.</ComingSoon>
}
