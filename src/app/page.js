import MyCarousel from '@/components/Carousel/Carousel'
import FAQ from '@/components/FAQ/FAQ'
import Hero from '@/components/Hero/Hero'
import { IncubationSchemes } from '@/components/IncubationSchemes'
import KeyPoints from '@/components/KeyPoints/Facilities'
import Stats from '@/components/Stats/Stats'
import Testimonials from '@/components/Testimonials/Testimonials'
import TopMentors from '@/components/TopMentors/TopMentors'
import TopStartups from '@/components/TopStartups'


export default function Home() {
  return (
    <>
      <title>TBI-KIET</title>
      <main className="overflow-hidden font-poppins max-w-screen-xl mx-auto ">
        <Hero />
        <MyCarousel />
        <Stats />
        <TopMentors />
        <IncubationSchemes />
      </main>
      <TopStartups />
      <main className="overflow-hidden font-poppins max-w-screen-xl mx-auto ">

        <KeyPoints />
        <Testimonials />
        <FAQ />
      </main>

    </>
  )
}
