/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import SchemeCard from "../SchemeCard";
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
const schemes=[
    {id:1},
    {id:2},
    {id:3}
]


const SchemeCarousel = () => {
    return (
        <div className="parent">
            <div className="py-5">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Here our Schemes
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
                autoPlaySpeed={3500}
                swipeable={true}
                arrows={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListclassName="custom-dot-list-style"
            >
                {schemes.map((scheme,index) => {
                    return (
                        <SchemeCard key="index"/>

                    );
                })}
            </Carousel>
        </div>
    );
};
export default SchemeCarousel;
