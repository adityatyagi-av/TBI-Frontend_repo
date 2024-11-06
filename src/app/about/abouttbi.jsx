import Image from 'next/image'
import React from 'react'

const AboutTbi = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <h1 className="text-2xl font-semibold capitalize lg:text-5xl lg:ml-4 ">
            <span className="text-blue-900">About TBI</span> <br />
          </h1>

          {/* <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make great decision delightfull for everyone</h2> */}
          <p className="font-normal text-base leading-6 text-gray-600 mt-6"> During last 11 years our remarkable growth has been endorsed by NSTEDB, DST, GoI by approving flagship programme of Ministry i.e. Nationa Initiative for Developing and Harnessing Innovations-Entrepreneur in Residence (NIDHI-EIR) under this scheme we are giving fellowship of RS. 20000 to 30000 per month for next one year to 12 aspirants. <br /> (Details Link:
            <a href="http://www.nidhi-eir.in/pdfs/NIDHI-EIR_guideline.pdf" className='text-gray-400'> http://www.nidhi-eir.in/pdfs/NIDHI-EIR_guideline.pdf</a> )</p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <Image className="lg:block hidden w-full" src='/Gallery/image1.png' alt="  TBI BUILDING" width={2048} height={2048} quality={100} />
          <Image className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" width={100} height={100} />
          <Image className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" width={100} height={100} />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">“ TBI-KIET is a registered body under Society Registration Act 1860 as Krishna Path Incubation Society-TBI in 2007. TBI-KIET was jointly promoted by NSTEDB, Department of Science & Technology, Govt. of India and KIET Group of Institutions, Ghaziabad. The DST, Govt. of India supported initially for 5 years and further it was expected that TBI-KIET should be self supportive. Since 2012 TBI-KIET is self supportive and showing satisfactory growth in terms of no. of startup incubated, mentored and graduated. This is the only incubator across country which promote only first generation entrepreneurs. TBI-KIET has been ranked 8th among all best TBI/STEP by Economic Times on 11/02/2011. Till date 85 incubatees have been promoted and 50 graduated from TBI-KIET. The core strength and thrust area of the TBI-KIET is ICT, Robotics Automation, Solar Energy, Automobile, E-mobility . TBI-KIET has dedicated state of the art, 05 Storyedfurnished building having furnished cubicles alongwith internet and 24×7 power supply. Apart from this we have specialized lab facilities viz. IoT, Fab Lab, D-Link, IoS Apple, Block Chain, NI-LabView Lab and dedicated Innovation lab with robotics facilities. TBI-KIET has strong Governing Body comprises of Representatives from Government, Industry, Bank, R&D Institutions and Academia.”</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6"></p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            {/* <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" /> */}
            {/* <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" /> */}
            <iframe className='lg:block hidden w-full' width="560" height="290" src="https://www.youtube.com/embed/1jFPnqSC0-U?si=s31SoNhsHzwZO8HH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className='lg:hidden sm:block hidden w-full h-3/4' width="560" height="290" src="https://www.youtube.com/embed/1jFPnqSC0-U?si=s31SoNhsHzwZO8HH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className='sm:hidden block w-full' width="560" height="290" src="https://www.youtube.com/embed/1jFPnqSC0-U?si=s31SoNhsHzwZO8HH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <section className="bg-white  mt-20">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            SHRI ATUL GARG
          </h1>
          <p className="text-xl font-medium text-blue-500 ">Honourable Minister of State of Medical and Health, Family Welfare, Mother and Child Welfare, Govt. of U.P.</p>



          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-9">
            <div className="absolute w-full bg-blue-900 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-900 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">

              <Image className="h-[80] w-[80] md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="/chairman.jpeg" width={1024} height={1024} quality={100} alt="client photo" />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">CHAIRMAN OPEN LETTER</p>
                  <p className="text-blue-200 ">A letter from our chairman</p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-white md:text-sm"> “Entrepreneur is the growth indicator of any country and to spread Entrepreneurial culture in any society Entrepreneurship, Innovation & Incubation are very effective tools. The GDP of any country is the growth indicator and this depend on the number of enterprise, product developed, employment generated and value of currency. In last four year India has shown remarkable growth in the area of entrepreneurship by way of innovative scheme viz. Startup India, Make in India, Made in India and Standup India. I would like to share that our global rank in innovation was earlier 87 now which came down to 57 and expecting to down it 36 rank within one year. All this shows that we are moving in right direction and able to create a developed country…

                  ”.</p>

              </div>
            </div>
          </main>
        </div>
      </section>
      <section className="bg-white  mt-10">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            LATE SHRI SATENDRA KUMAR
          </h1>
          <p className="text-xl font-medium text-blue-500 ">(Founder General Manager)</p>



          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-9">
            <div className="absolute w-full bg-blue-900 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-900 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">

              <Image className="h-[80] w-[80] md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="/chairman.jpg" width={2048} height={2048} quality={100}  alt="client photo" />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">GENERAL MANAGER OPEN LETTER</p>
                  <p className="text-blue-200 ">A letter from our general manager</p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-white md:text-sm"> “With the objective to promote an entrepreneurship culture in the institute and in the adjoining area to produce entrepreneurs on continuous basis in order to generate wealth & self employment, the Technology Business Incubator (TBI) was established jointly by the National Science & Technology Entrepreneurship Development Board (NSTEDB), Ministry of Science & Technology, Government of India and Krishna Institute of Engineering & Technology, Ghaziabad in Dec. 2007…”.
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
