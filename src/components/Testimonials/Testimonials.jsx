/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimonials.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
    }
};
const testimonialsData = [
    {
        name: 'Robert',
        company: 'CTO, Robert Consultency',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
        imageSrc: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
        name: 'Jeny Doe',
        company: 'CEO, Jeny Consultency',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
        imageSrc: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
        name: 'Ema Watson',
        company: 'Marketing Manager at Stech',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
        imageSrc: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        name: 'John Doe',
        company: 'CEO, ABC Corp',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
        imageSrc: 'https://via.placeholder.com/150', // Placeholder image
    },
];
const Testimonials = () => {
    return (
        <div className="parent">
            <div className="py-9">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our clients are saying
                </h1>

                <div className="flex mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                autoPlay
                autoPlaySpeed={2500}
                swipeable={true}
                arrows={false}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListclassName="custom-dot-list-style"
            >
                {testimonialsData.map((testimonial, index) => {
                    return (
                        <div className="p-3" key={index}>
                            <div className="p-8 border rounded-lg text-gray-500 hover:bg-blue-900 hover:text-gray-50 shadow-md ">
                                <p className="leading-loose  ">
                                    {testimonial.text}
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-100" src={testimonial.imageSrc} alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold">{testimonial.name}</h1>
                                        <span className="text-sm">{testimonial.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </Carousel>
        </div>
    );
};
export default Testimonials;
