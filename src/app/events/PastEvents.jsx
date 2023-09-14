/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import EachPastEventCard from './EachPastEventCard'

const RecentEvents = () => {
    return (

        <section className="bg-white max-w-screen-xl mx-auto">
            <div className="container px-6 py-10 mx-auto">
                <div className="py-9">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                        Browse some of our previous events!
                    </h1>

                    <div className="flex mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                    <EachPastEventCard />
                    <EachPastEventCard />
                    <EachPastEventCard />
                    <EachPastEventCard />
                    <EachPastEventCard />
                    <EachPastEventCard />
                </div>
            </div>
        </section>
    )
}

export default RecentEvents
