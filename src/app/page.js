import MyCarousel from '@/components/Carousel/Carousel'
import FAQ from '@/components/FAQ/FAQ'
import Hero from '@/components/Hero/Hero'
import KeyPoints from '@/components/KeyPoints/Facilities'
import Stats from '@/components/Stats/Stats'
import Testimonials from '@/components/Testimonials/Testimonials'
import TopMentors from '@/components/TopMentors/TopMentors'


export default function Home() {
  return (
    <>
      <title>TBI-KIET</title>
      <main className="overflow-hidden font-poppins max-w-screen-xl mx-auto ">
        <Hero />
        <MyCarousel />
        <Stats />
        <TopMentors />
        <KeyPoints />
        <Testimonials />
        <FAQ />
      </main>
    </>
  )
}
