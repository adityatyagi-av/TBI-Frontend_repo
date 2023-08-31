import MyCarousel from '@/components/Carousel/Carousel'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'


export default function Home() {
  return (
  
    <main className="overflow-hidden font-poppins ">
      <Hero/>
      <h1 className="max-w-2xl  mb-5 mx-[20rem]  text-center self-center font-poppins font-semibold sm:text-[52px] text-[52px] text-secondary sm:leading-[100px] leading-[75px] ">Our Sponsors</h1>
      <MyCarousel/>
    </main>
  )
}
