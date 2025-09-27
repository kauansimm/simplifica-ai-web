import { NavBar } from '@/components/content/nav-bar'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='max-w-[1200px] mx-auto min-h-[200vh]'>
      <NavBar />
      <main className='px-6'>
        <h1>
          Main
        </h1>
      </main>
    </div>
  )
}
