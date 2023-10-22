/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Chip } from "@nextui-org/react";
import JoinUs from '../JoinUs';
import { useEffect, useState } from 'react';

function Page({ params }) {
    const title = params.id;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (title) {
            const apiUrl = `http://127.0.0.1:8000/past-events/${title}/`;

            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((responseData) => {
                    setData(responseData);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [title]);
    return (
        <div className=" flex flex-col mx-auto ">
            <section className="bg-white max-w-screen-xl mx-auto container px-2 py-11">
                <div className="container px-6 py-10 mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold font-poppins text-gray-800 capitalize lg:text-3xl ">
                            {data.title}
                        </h1>

                        <div className="flex mx-auto mt-2">
                            <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                        </div>
                    </div>
                    <div className="mt-7 lg:-mx-6 lg:flex lg:items-center">
                        <div className='w-full lg:mx-6 lg:w-1/2'>
                            <img className="object-cover w-full  rounded-xl h-72 lg:h-96" src={`http://127.0.0.1:8000${data.image}`} alt="" />
                            <div>

                                <div className="flex items-center mt-6">
                                    <img className="object-cover object-center w-10 h-12 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                    <div className="mx-4">
                                        <h1 className="text-md font-medium text-gray-700">Hosted By</h1>
                                        <p className="text-sm text-gray-500">Technology Business Incubator KIET</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" lg:w-1/3 lg:mx-auto lg:-mt-12 mt-4 ">
                            <div className=" overflow-hidden bg-white ">
                                <div className='pb-3'>
                                    <iframe title='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8737422744807!2d77.49449147624586!3d28.753186378590044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1689486947062!5m2!1sen!2sin" className='border-0 w-full h-full rounded-md shadow-sm' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div>
                                    <div className="py-4">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <svg className='object-cover h-12' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="clock"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"></path><path d="M17.515,14.143,13,11.434V6a1,1,0,0,0-2,0v6a1.075,1.075,0,0,0,.485.857l5,3a1,1,0,1,0,1.03-1.714Z"></path></svg>
                                                <p className="ml-4 font-poppins text-sm leading-6 text-gray-700 font-medium " tabIndex="0" role="link">{data.eventDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <svg className='object-cover h-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="location"><path fill="#e3e2e1" d="M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z"></path><path fill="#e82327" d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z"></path></svg>
                                                <p className="ml-4 font-poppins text-sm leading-6 font-medium text-gray-700 " tabIndex="0" role="link">{data.venue}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='mt-7 lg:-mx-6 lg:flex lg:items-center'>
                        <div className='w-full lg:w-[48%] '>
                            <div className="p-8 mt-8 space-y-8 rounded-lg">
                                <h2 className="text-2xl font-semibold font-poppins capitalize lg:text-3xl ">
                                    Details of Event
                                </h2>
                                <div className="flex items-center justify-between">
                                    <p className="font-poppins text-lg sm:text-xl">{data.description}</p>
                                </div>
                            </div>
                        </div>


                        <div className='w-full lg:w-1/3 mx-auto'>
                            <div className="p-8 mt-8 space-y-8">
                                <div className="flex-1 flex justify-center items-start flex-col">
                                    <h2 className="font-poppins font-semibold sm:text-[48px] text-[40px] sm:leading-[76.8px] leading-[66.8px] w-full">Registrations <span className='text-secondary'>Closed</span></h2>
                                    <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>Registrations for this event are now closed </p>
                                </div>
                                <div >
                                    <Chip className='mx-2 my-2' size="md">Entrepreneurship</Chip>
                                    <Chip className='mx-2 my-2' size="md">Business</Chip>
                                    <Chip className='mx-2 my-2' size="md">Incubation</Chip>
                                    <Chip className='mx-2 my-2' size="md">Startups</Chip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <JoinUs />
                </div >
            </section >
        </div>
    )
}

export default Page
