"use client"

import React from 'react'
import Button from '../Button/Button'
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
function Hero() {
    return (
        <section className="px-3 py-6 w-full overflow-x-hidden mb-1 ">
            <div className="grid max-w-screen-2xl px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-13 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 ">
                    <h1 className="max-w-2xl font-poppins font-semibold sm:text-[72px] text-[52px] text-headingColor sm:leading-[100px] leading-[75px]">Technology Business Incubator <span className='text-secondary'>KIET</span></h1>

                    <h2 className="max-w-xl mt-11 mb-6 text-center sm:text-left font-semibold text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
                        TBI-KIET: The Technology Business Incubator that Empowers Startups.{' '}
                        <span className="max-w-xl mt-11 mb-6 text-center sm:text-left font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
                            We provide the resources, mentorship, and support you need to turn your idea into a successful business.
                        </span>
                    </h2>
                    <Link href='/incubation/social-incubation'>
                        <Button content={'Incubate With Us'} />
                    </Link>
                </div>

                <div className="lg:mt-0 lg:col-span-5 lg:flex ">
                    <Player
                        autoplay
                        controls
                        loop
                        mode="normal"
                        src="https://lottie.host/6b09f1bb-dff5-4bf4-a213-d72b4b7362af/hRlvLIcKYn.json"
                    ></Player>
                </div>
            </div>
        </section>
    )
}

export default Hero
