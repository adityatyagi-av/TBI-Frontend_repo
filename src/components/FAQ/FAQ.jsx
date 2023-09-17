/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FAQBanner from "./FAQBanner.jsx";


const FAQ = () => {
    return (
        <div className="parent sm:py-16 py-6">
            <div className="py-9">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                    Frequently Asked Questions
                </h1>

                <div className="flex mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            <div className=" max-w-3xl mx-auto">
                <FAQBanner />
            </div>
        </div>
    );
};
export default FAQ;
