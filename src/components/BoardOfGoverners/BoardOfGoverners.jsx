/* eslint-disable @next/next/no-img-element */
import React from 'react'
function BoardOfGoverners() {
    return (
        <section className="bg-white max-w-screen-xl mx-auto p-4">
            <div className="container px-6 py-10 mx-auto">
                <div className="xl:flex xl:items-center xL:-mx-4">
                    <div className="xl:w-1/2 xl:mx-4">
                        <div className="py-3">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                                Our Board Members
                            </h1>

                            <div className="flex mx-auto mt-3">
                                <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                            </div>
                        </div>

                        <p className="max-w-md mt-4 text-gray-500">
                            Meet the visionary leaders at TBI KIET, driving innovation and fostering growth through their expertise and forward-thinking approach.                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2  md:grid-cols-2">
                        <div>
                            <img className="object-cover rounded-xl h-[274px] w-[344px] aspect-square" src="/boardmembers/Shri Atul Garg, Chairman.jpg" alt="Shri Atul Garg" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Shri Atul Garg</h1>

                            <p className="mt-2 text-gray-500 capitalize">Chairman</p>
                        </div>

                        <div>
                            <img className="object-cover rounded-xl aspect-square  h-[274px] w-[344px]" src="/boardmembers/Shri Sarish Aggrawal, General Secretary.jpg" alt="Shri Sarish Aggrawal" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Shri Sarish Aggrawal</h1>

                            <p className="mt-2 text-gray-500 capitalize">General Secretary</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 gap-8 mt-8 xl:mt-0 md:grid-cols-2 lg:grid-cols-5 px-2 lg:px-7">
             <div>
                            <img className="object-cover rounded-xl h-[274px] w-[344px] aspect-square" src="/boardmembers/Shri Sunil Gupta, Treasurer.jpg
" alt="Shri Sunil Gupta" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Shri Sunil Gupta</h1>

                            <p className="mt-2 text-gray-500 capitalize">Treasurer</p>
                        </div>
                <div>
                    <img className="object-cover rounded-xl h-[274px] aspect-square " src="/boardmembers/Dr_SP_Mishra_Member.png" alt="Dr_SP_Mishra_Member" />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize"> Dr S.P Mishra</h1>

                    <p className="mt-2 text-gray-500 capitalize">Member</p>
                </div>
                <div>
                    <img className="object-cover rounded-xl h-[274px] aspect-square" src="/boardmembers/Shri BHISHAM KUMAR Makkar, Member.jpg" alt="Shri BHISHAM KUMAR Makkar" />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Shri Bhisham Kumar Makkar</h1>

                    <p className="mt-2 text-gray-500 capitalize">Member</p>
                </div>
                <div>
                    <img className="object-cover rounded-xl h-[274px] w-[344px] aspect-square" src="/boardmembers/Shri G.D. Jain.jpg" alt="Shri G.D. Jain" />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Shri G.D. Jain</h1>

                    <p className="mt-2 text-gray-500 capitalize">Member</p>
                </div>
                <div>
                    <img className="object-cover rounded-xl h-[274px] w-[344px] aspect-square" src="boardmembers/Shri Neeraj Chaudhary, Ex-Officio Member.jpg  " alt="Shri Neeraj Chaudhary" />

                    <h1 className="mt-4 text-2xl font-semibold  text-gray-700 capitalize"> Shri Neeraj Chaudhary</h1>

                    <p className="mt-2 text-gray-500 capitalize"> Ex-Officio Member</p>
                </div>
            </div>
        </section>
    )
}

export default BoardOfGoverners
