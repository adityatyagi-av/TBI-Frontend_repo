/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function EachPastEventCard({ imgUrl, title, desc }) {
    const words = desc.split(" ");
    const first10Words = words.slice(0, 10);
    const slicedDesc = first10Words.join(" ");
    const slugTitle = title.replace(/\s+/g, '-').toLowerCase().split(' ').join('-');
    return (
        <div className='py-4'>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src={imgUrl} alt={title} />

            <div className="group relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white shadow-md hover:bg-blue-900 rounded-md">
                <h2 className="font-semibold text-gray-800 group-hover:text-white text-lg md:text-xl">
                    {title}
                </h2>

                <p className="mt-3 text-sm text-gray-500 group-hover:text-blue-50 md:text-sm">
                    {slicedDesc}
                </p>

                <Link href={`/events/${slugTitle}`} className="mt-3 text-base font-medium text-blue-800 group-hover:text-green-400 cursor-pointer">Check It Out</Link>
            </div>
        </div>
    )
}

export default EachPastEventCard
