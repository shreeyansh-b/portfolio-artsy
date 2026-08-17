import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notes')({
  head: () => ({
    meta: [
      { title: 'Notes — Shreeyansh Bhardwaj' },
      { name: 'description', content: 'Small notes, fragments, and things worth holding onto.' },
    ],
  }),
  component: NotesLayout,
})

function NotesLayout() {
  return <Outlet />
}
