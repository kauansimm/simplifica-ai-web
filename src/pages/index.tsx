import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>
        isso é um titulo
      </h1>
      <h2>
        isso é um subtitulo
      </h2>
    </div>
  )
}
