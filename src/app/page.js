import MyCarousel from '@/components/Carousel/Carousel'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'


export default function Home() {
  return (

    <main className="overflow-hidden font-poppins max-w-screen-2xl mx-auto ">
      <Hero />
      <h3 className="text-2xl font-semibold text-gray-800 md:text-2xl lg:text-5xl px-3 ">Our <span className='text-secondary'>Sponsors</span></h3>
      <MyCarousel />
    </main>
  )
}
