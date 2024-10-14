import Image from 'next/image'
import React from 'react'

const Infrastructure = () => {
  return (
    <>
      <section className="bg-white px-4">
        <div className="container  py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Everything You Need  <br /> to Take Your Startup to the Next Level</h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize "> Coworking Space</h1>

                <p className="text-gray-500 ">
                  Work alongside like-minded entrepreneurs and innovators
                  TBI Kiet offers shared work areas where you can set up your startup, collaborate with others, and work in a professional environment.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Continuous Capital Support</h1>

                <p className="text-gray-500 ">
                  Grants and Support Schemes for Growth
                  TBI KIET offers a range of funding opportunities through schemes like Nidhi EIR,Nidhi Prayaas and Tide.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Global Networking Opportunities </h1>

                <p className="text-gray-500 ">
                  Connecting Entrepreneurs to a World of Opportunities
                  Connect with entrepreneurs, investors, and industry experts from around the world. Expand your network and tap into valuable resources to grow your startup on a global scale.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Best Industry Mentors:</h1>

                <p className="text-gray-500 ">
                  Mentors to Guide you the best
                  Our experienced mentors bring years of industry expertise to help you navigate the challenges and opportunities of entrepreneurship.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <Image className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" width={448} height={448} />
            </div>
          </div>
        </div>
      </section>



      <div className='overflow-y-hidden mt-6'>
        <div className="xl:mx-auto xl:container md:px-6 py-12">
          <div className="lg:flex flex-row-reverse gap-10 items-center justify-center lg:space-x-2 ">
            <div className>
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 mt-0 text-gray-800">Office Space</p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">At TBI, we offer an engaging office space designed to foster creativity and teamwork among startups and entrepreneurs.</p>
              <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                <Image src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png" alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" width={2048} height={2048} />
              </div>
              <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-7">
                      <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg" alt="clock" />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">Flexible Hours</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Enjoy flexible working hours to enhance productivity</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg" alt="Friendly" />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">Collaborative Environment</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Open workstations promote teamwork and idea sharing.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg" alt="Creative" />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">Fully Equipped Facilities</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">High-speed internet and essential supplies are readily available.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg" alt="Achievments" />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">Recognition of Success
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Celebrate achievements to inspire and motivate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <Image width={100} height={100} src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png" alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>


        <section className=" mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col ">
              <h1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">We provide you <br /> a variety of Softwares </h1>
            </div>
            <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
              <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Ready to use components</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Hight Quality UI you can reply on</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Coded by Developers for Developers</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product.</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image width={100} height={100} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">The Last UI kit you’ll ever need</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </>

  )
}

export default Infrastructure
