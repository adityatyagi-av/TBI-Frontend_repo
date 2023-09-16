import React from 'react'
import Image from 'next/image'
function EachPastEventCard() {
    return (
        <div className='py-4'>
            <Image width={100} height={100} className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

            <div className="group relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white shadow-md hover:bg-blue-900 rounded-md">
                <p className="font-semibold text-gray-800 group-hover:text-white md:text-xl">
                    All the features you want to know
                </p>

                <p className="mt-3 text-sm text-gray-500 group-hover:text-blue-50 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p>

                <p className="mt-3 text-base font-medium text-blue-800 group-hover:text-green-400 cursor-pointer">Check It Out</p>
            </div>
        </div>
    )
}

export default EachPastEventCard
