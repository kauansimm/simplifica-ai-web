import { NavBar } from '@/components/content/nav-bar'
import { createFileRoute } from '@tanstack/react-router'
import { MainDiv } from '@/components/theme/main-div'
import { Header } from './_components/header'
import { ChevronDownScroll } from './_components/chevron-down-scroll'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-primary'>
      <MainDiv
        className='min-h-screen content-between py-4'
      >
        <NavBar />
        <Header />
        <ChevronDownScroll />
      </MainDiv>
    </div>
  )
}
