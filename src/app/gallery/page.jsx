/* eslint-disable @next/next/no-img-element */
import React from 'react'
function page() {
    return (
        <div>
            <section>
                <div className="relative grid w-full bg-blue-900  h-96 lg:h-[32rem] place-items-center">
                    <div className="flex flex-col items-center mx-auto text-center">
                        <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">TBI KIET GALLERY</h1>

                        <p className="mt-6 text-lg leading-5 text-white">Have a look at our gallery</p>

                        <a href="#gallery" className="mt-8 cursor-pointer animate-bounce">
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
                                <path
                                    d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                                    fill="white" />
                            </svg>
                        </a>
                        </div>
                </div>

                <svg className="fill-blue-900" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
                </svg>
            </section>
            <section id='gallery' className="container px-6 py-8 mx-auto lg:py-16 max-w-screen-xl">
                <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl ">Browse Our Projects</h3>

                <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
                    <a href="#" className="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src='/Gallery/image1.png'
                            alt="" />
                    </a>

                    <a href="#" className="transition-all duration-500 hover:scale-105">
                        <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96 "
                            src="/Gallery/image2.png"
                            alt="" />
                    </a>

                    <a href="#" className="transition-all duration-500 hover:scale-105">
                        <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="/Gallery/image4.png"
                            alt="" />
                    </a>

                    <a href="#" className="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="/Gallery/image6.png"
                            alt="" />
                    </a>

                    <a href="#" className="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="/Gallery/image3.png"
                            alt="" />
                    </a>

                    <a href="#" className="transition-all duration-500 hover:scale-105">
                        <img className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="/Gallery/image7.png"
                            alt="" />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default page
