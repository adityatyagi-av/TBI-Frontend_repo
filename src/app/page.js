import MyCarousel from '@/components/Carousel/Carousel'
import Hero from '@/components/Hero/Hero'
import Stats from '@/components/Stats/Stats'
import Testimonials from '@/components/Testimonials/Testimonials'
// import Image from 'next/image'


export default function Home() {
  return (

    <main className="overflow-hidden font-poppins max-w-screen-xl mx-auto ">
      <Hero />
      <MyCarousel />
      <Stats />
      <Testimonials />
    </main>
  )
}
