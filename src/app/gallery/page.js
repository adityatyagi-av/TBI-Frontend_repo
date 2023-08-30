/* eslint-disable @next/next/no-img-element */
import React from 'react'
function page() {
    return (
        <div>
            <section>
                <div class="relative grid w-full bg-blue-900 h-96 lg:h-[32rem] place-items-center">
                    <div class="flex flex-col items-center mx-auto text-center">
                        <h1 class="text-4xl font-semibold text-white uppercase md:text-6xl">TBI KIET GALLERY</h1>

                        <p class="mt-6 text-lg leading-5 text-white">Have a look at our gallery</p>

                        <a href="#about" class="mt-8 cursor-pointer animate-bounce">
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
                                <path
                                    d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>

                <svg class="fill-blue-900" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
                </svg>
            </section>
            <section class="container px-6 py-8 mx-auto lg:py-16">
                <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl ">Browse Our Projects</h3>

                <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
                    <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1644453/screenshots/17056773/media/00509f74e765da294440886db976943a.png?compress=1&resize=1000x750&vertical=top"
                            alt="" />
                    </a>

                    <a href="#" class="transition-all duration-500 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96 "
                            src="https://cdn.dribbble.com/userupload/3233220/file/original-e80767b5947df65a0f1ab4dab4964679.png?compress=1&resize=1024x768"
                            alt="" />
                    </a>

                    <a href="#" class="transition-all duration-500 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1644453/screenshots/14748860/media/25f53296059b741ac1c083be9f41745b.png?compress=1&resize=1000x750&vertical=top"
                            alt="" />
                    </a>

                    <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/878428/screenshots/17307425/media/01782a518148ce7ef2e790473c888b1f.png?compress=1&resize=1000x750&vertical=top"
                            alt="" />
                    </a>

                    <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1930709/screenshots/11466872/media/e50b0f02160a77397eb4a76782d23966.png?compress=1&resize=1000x750&vertical=top"
                            alt="" />
                    </a>

                    <a href="#" class="transition-all duration-500 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1644453/screenshots/14403641/media/21e305eb9c8255b6e3367f0ca52c6668.png?compress=1&resize=1000x750&vertical=top"
                            alt="" />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default page
