import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream p-8 text-ink">
      <div className="max-w-lg border border-current p-8">
        <p className="font-mono text-sm uppercase tracking-[0.2em]">Portfolio scaffold</p>
        <h1 className="mt-4 font-display text-5xl leading-none">Personal archive</h1>
        <p className="mt-6 text-lg leading-relaxed">
          TanStack Start, static prerendering, and Tailwind are ready for the indie-inspired portfolio.
        </p>
      </div>
    </main>
  )
}
