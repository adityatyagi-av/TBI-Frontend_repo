"use client"

import React from 'react'
import Button from '../Button/Button'
import { Player } from '@lottiefiles/react-lottie-player';
function Hero() {
    return (
        <section className=" py-11 ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                <div className="mr-auto place-self-center lg:col-span-7 ">
                    <h1 className="max-w-2xl font-poppins font-semibold sm:text-[72px] text-[52px] text-headingColor sm:leading-[100px] leading-[75px]">Technology Business Incubator <span className='text-secondary'>KIET</span></h1>

                    <p className="max-w-xl mt-11 mb-6 text-center sm:text-left font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">TBI-KIET is a registered body under Society Registration Act 1860 as Krishna Path Incubation Society-TBI in 2007. TBI-KIET was jointly promoted by NSTEDB, Department of Science & Technology, Govt. of India and KIET Group of Institutions, Ghaziabad. </p>
                    <Button content={'Incubate'} />
                </div>

                <div className="lg:mt-0 lg:col-span-5 lg:flex ">
                    <Player
                        autoplay
                        controls
                        loop
                        mode="normal"
                        src="https://lottie.host/6b09f1bb-dff5-4bf4-a213-d72b4b7362af/hRlvLIcKYn.json"
                        style="width: 320px"
                    ></Player>
                </div>
            </div>
        </section>
    )
}

export default Hero
