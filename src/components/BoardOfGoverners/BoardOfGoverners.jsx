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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                        <div>
                            <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">John Doe</h1>

                            <p className="mt-2 text-gray-500 capitalize">Full stack developer</p>
                        </div>

                        <div>
                            <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Mia</h1>

                            <p className="mt-2 text-gray-500 capitalize">Graphic Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 gap-8 mt-8 xl:mt-0 md:grid-cols-2 lg:grid-cols-4 px-2 lg:px-7">
                <div>
                    <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">John Doe</h1>

                    <p className="mt-2 text-gray-500 capitalize">Full stack developer</p>
                </div>
                <div>
                    <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Mia</h1>

                    <p className="mt-2 text-gray-500 capitalize">Graphic Designer</p>
                </div>
                <div>
                    <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Mia</h1>

                    <p className="mt-2 text-gray-500 capitalize">Graphic Designer</p>
                </div>
                <div>
                    <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">John Doe</h1>

                    <p className="mt-2 text-gray-500 capitalize">Full stack developer</p>
                </div>
            </div>
        </section>
    )
}

export default BoardOfGoverners
