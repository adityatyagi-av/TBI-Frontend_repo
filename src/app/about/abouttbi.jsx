import Image from 'next/image'
import React from 'react'

const AboutTbi = () => {
  return (
    <>
    <section class="bg-white dark:bg-gray-900">
    <div class="max-w-6xl px-6 py-10 mx-auto">
    <h1 class="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
    SHRI ATUL GARG
        </h1>
        <p class="text-xl font-medium text-blue-500 ">Hon’ble Minister of State of Medical and Health, Family Welfare, Mother and Child Welfare, Govt. of U.P.</p>

        

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-9">
            <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
             
                <Image class="h-[80] w-[80] md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="/chairman.jpeg" width={70} height={70} alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">CHAIRMAN OPEN LETTER</p>
                        <p class="text-blue-200 ">A letter from our chairman</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-sm"> “Entrepreneur is the growth indicator of any country and to spread Entrepreneurial culture in any society Entrepreneurship, Innovation & Incubation are very effective tools. The GDP of any country is the growth indicator and this depend on the number of enterprise, product developed, employment generated and value of currency. In last four year India has shown remarkable growth in the area of entrepreneurship by way of innovative scheme viz. Startup India, Make in India, Made in India and Standup India. I would like to share that our global rank in innovation was earlier 87 now which came down to 57 and expecting to down it 36 rank within one year. All this shows that we are moving in right direction and able to create a developed country…

                    ”.</p>
                    
                </div>
            </div>
        </main>
    </div>
</section>
<section class="bg-white dark:bg-gray-900 mt-10">
    <div class="max-w-6xl px-6 py-10 mx-auto">
    <h1 class="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
    LATE SHRI SATENDRA KUMAR
        </h1>
        <p class="text-xl font-medium text-blue-500 ">(Founder General Manager)</p>

        

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-9">
            <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
             
                <Image class="h-[80] w-[80] md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="/chairman.jpg" width={70} height={70} alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">GENERAL MANAGER OPEN LETTER</p>
                        <p class="text-blue-200 ">A letter from our general manager</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-sm"> “With the objective to promote an entrepreneurship culture in the institute and in the adjoining area to produce entrepreneurs on continuous basis in order to generate wealth & self employment, the Technology Business Incubator (TBI) was established jointly by the National Science & Technology Entrepreneurship Development Board (NSTEDB), Ministry of Science & Technology, Government of India and Krishna Institute of Engineering & Technology, Ghaziabad in Dec. 2007…”.
                    <br />
                    <br />
                    Please feel free to contact: Mr. Saurav Kumar (Dy. General Manager), Mobile: +91 99990 17712</p>
                    
                </div>
            </div>
        </main>
    </div>
</section>
</>
  )
}

export default AboutTbi
