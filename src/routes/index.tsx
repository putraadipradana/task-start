import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">Hello</div>
  )
}
