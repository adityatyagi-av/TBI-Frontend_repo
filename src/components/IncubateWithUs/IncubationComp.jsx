/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NidhiEirInfo from './NidhiEIR'
function IncubationComp() {
    return (

        <section className="bg-white  max-w-screen-xl mx-auto py-11">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:-mx-6">
                    <div className="lg:w-3/4 lg:px-6">
                        <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div>
                            <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 ">
                                What do you want to know about UI
                            </h1>

                            <div className="flex items-center mt-6">

                                <div className="mr-6">
                                    <NidhiEirInfo />
                                </div>
                                <div className="ml-6">
                                    <h1 className="text-sm text-gray-700 ">Amelia. Anderson</h1>
                                    <p className="text-sm text-gray-500 ">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                        <div>
                            <h3 className="text-blue-900 font-semibold capitalize">NIDHI EIR</h3>

                            <p className="block mt-2 font-medium text-gray-700 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur a neque.
                            </p>
                        </div>

                        <hr className="my-6 border-gray-200" />

                        <div>
                            <p className="block mt-2 font-medium text-gray-700 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur a neque.
                            </p>
                        </div>

                        <hr className="my-6 border-gray-200" />
                        <div>
                            <p className="block mt-2 font-medium text-gray-700 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur a neque.
                            </p>
                        </div>

                        <hr className="my-6 border-gray-200" />
                        <div>
                            <p className="block mt-2 font-medium text-gray-700 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur a neque.
                            </p>
                        </div>

                        <hr className="my-6 border-gray-200" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IncubationComp
