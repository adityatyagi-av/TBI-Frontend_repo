import MyCarousel from '@/components/Carousel/Carousel'
import Hero from '@/components/Hero/Hero'
import Newsletter from '@/components/Newsletter/Newsletter'
import Stats from '@/components/Stats/Stats'
import Testimonials from '@/components/Testimonials/Testimonials'
// import Image from 'next/image'


export default function Home() {
  return (
    <>
      <title>TBI-KIET</title>
      <main className="overflow-hidden font-poppins max-w-screen-xl mx-auto ">
        <Hero />
        <MyCarousel />
        <Stats />
        <Testimonials />
        <Newsletter />
      </main>
    </>
  )
}
