"use client"
import React from 'react'
import CountUp from 'react-countup'
import EachStatsCard from './EachStatsCard'
function Stats() {
    return (
        <section className="text-gray-600 body-font max-w-screen-xl mx-auto">
            <div className="container py-7 mx-auto">
                <div className="py-9">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                        Some Statistics
                    </h1>

                    <div className="flex mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                    </div>
                </div>
                <div className="flex flex-wrap text-center">
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-secondary'}
                        text={'text-white'} />
                    <EachStatsCard end={987}
                        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.'}
                        bg={'bg-white'}
                        text={'text-gray-900'} />


                </div>
            </div>
        </section>
    )
}

export default Stats
