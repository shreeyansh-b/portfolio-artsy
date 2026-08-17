import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  head: () => ({
    meta: [
      { title: 'Work — Shreeyansh Bhardwaj' },
      { name: 'description', content: 'Small experiments and project stories by Shreeyansh Bhardwaj.' },
    ],
  }),
  component: WorkLayout,
})

function WorkLayout() {
  return <Outlet />
}
