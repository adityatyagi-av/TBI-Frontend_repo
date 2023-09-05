"use client"

import React from 'react'
import Button from '../Button/Button'
import { Player } from '@lottiefiles/react-lottie-player';
function TechIncubation() {
    return (
        <section className="px-3 py-14 w-full overflow-x-hidden mb-1 ">
            <div className="grid max-w-screen-2xl px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-13 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 ">
                    <h1 className="max-w-2xl font-poppins font-semibold sm:text-[52px] text-[32px] text-headingColor ">Technical <span className='text-secondary'>Incubation</span></h1>

                    <p className="max-w-xl mt-11 mb-6 text-center sm:text-left font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl">TBI-KIET is a registered body under Society Registration Act 1860 as Krishna Path Incubation Society-TBI in 2007. TBI-KIET was jointly promoted by NSTEDB, Department of Science & Technology, Govt. of India and KIET Group of Institutions, Ghaziabad. </p>
                    <p className="max-w-xl  mb-6 text-center sm:text-left font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">TBI-KIET is a registered body under Society Registration Act 1860 as Krishna Path Incubation Society-TBI in 2007. TBI-KIET was jointly promoted by NSTEDB, Department of Science & Technology, Govt. of India and KIET Group of Institutions, Ghaziabad. </p>

                    <Button content={'View Details'} />
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

export default TechIncubation
