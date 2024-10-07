import Image from "next/image"
import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white mt-8 mb-0 bottom-0 max-w-screen-xl mx-auto ">
            <hr />
            <div className="container p-6 mx-auto">
                <div className="lg:flex ">
                    <div className="w-full  lg:w-2/5">
                        <div className="px-6  flex flex-col items-center text-center ">
                            <Link href="#">
                                <div className="flex flex-row">
                                    <Image src="/tbilogo.svg" className="mr-4" alt="image" width={70} height={70} />
                                    <Image src="/kietlogo.svg" alt="image" width={78} height={72} />
                                </div>
                            </Link>

                            <p className="max-w-sm mt-2 text-gray-500 ">TBI-KIET, promoted by NSTEDB, DST, Govt. of India, supports first-generation entrepreneurs with a focus on ICT, Robotics, and E-mobility. Ranked 8th among TBI/STEP by Economic Times in 2011</p>

                            <div className="flex mt-6  pr-5">
                                <Link href="https://www.linkedin.com/school/kiet-group-of-institutions/posts/?feedView=all"
                                    className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                    aria-label="Linkedin">
                                   
                                     <FaLinkedinIn />
                                </Link>
                                 

                                <Link href="https://www.facebook.com/tbikiet"
                                    className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                    aria-label="Facebook">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                        </path>
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className=" mt-6 lg:mt-0 lg:flex-1  flex justify-end  max-lg:justify-center   max-sm:ml-8">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    ">

                            <div>
                                <h3 className="text-gray-700 uppercase font-extrabold   ">About</h3>
                                <Link href="/about" className="block mt-2 text-sm text-gray-600  hover:underline">About TBI</Link>
                                <Link href="/about" className="block mt-2 text-sm text-gray-600  hover:underline">Objectives</Link>
                                <Link href="/about" className="block mt-2 text-sm text-gray-600  hover:underline">Milestones</Link>
                                <Link href="/about" className="block mt-2 text-sm text-gray-600  hover:underline">Teams</Link>
                            </div>




                            <div>
                                <h3 className="text-gray-700 uppercase font-extrabold  ">Incubation</h3>
                                <Link href="/incubation/nidhieir" className="block mt-2 text-sm text-gray-600  hover:underline">Nidhi EIR</Link>
                                <Link href="/incubation/nidhiprayas" className="block mt-2 text-sm text-gray-600  hover:underline">Nidhi Prayas</Link>
                                <Link href="/incubation/tideeir" className="block mt-2 text-sm text-gray-600  hover:underline">Tide 2.0</Link>
                                <Link href="/incubation/msme" className="block mt-2 text-sm text-gray-600  hover:underline">MSME</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase font-extrabold  ">Incubation</h3>

                                <Link href="/incubation/startincubation" className="block mt-2 text-sm text-gray-600  hover:underline">Start Incubation</Link>
                                <Link href="/incubation/idex" className="block mt-2 text-sm text-gray-600  hover:underline">IDEX</Link>
                                <Link href="/incubation/preIncubation" className="block mt-2 text-sm text-gray-600  hover:underline">Pre Incubation</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase hover:text-blue-900  hover:font-semibold font-extrabold  ">Mentors</h3>
                                <Link href="/mentors" className="block mt-2 text-sm text-gray-600  hover:underline">Technical Mentors </Link>
                                <Link href="/mentors" className="block mt-2 text-sm text-gray-600  hover:underline">Bussiness Mentors</Link>
                                <Link href="/mentors" className="block mt-2 text-sm text-gray-600  hover:underline">Financial Mentors</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase hover:text-blue-900  hover:font-semibold font-extrabold  ">Facilities</h3>
                                <Link href="/facilities" className="block mt-2 text-sm text-gray-600  hover:underline">Infrastructure</Link>
                                <Link href="/facilities" className="block mt-2 text-sm text-gray-600  hover:underline">Support</Link>
                                <Link href="/facilities" className="block mt-2 text-sm text-gray-600  hover:underline">Tech Aid</Link>
                            </div>


                            <div>
                                <h3 className="text-gray-700 uppercase hover:text-blue-900  hover:font-semibold font-extrabold ">Events</h3>
                                <Link href="/events" className="block mt-2 text-sm text-gray-600  hover:underline">Past Events  </Link>
                                
                                <Link href="/events" className="block mt-2 text-sm text-gray-600  hover:underline">Live  Events</Link>
                                <Link href="/events" className="block mt-2 text-sm text-gray-600  hover:underline">Upcoming  Events</Link>
                            </div>
                            <div>
                                <h3 className="text-gray-700 uppercase font-extrabold ">Contact</h3>
                                <span className="block mt-2 text-sm text-gray-600  hover:underline">+91 9873816176</span>

                                <span className="block mt-2 text-sm text-gray-600  hover:underline">+91 9756277542</span>
                                <span className="block mt-2 text-sm text-gray-600  hover:underline">tbikiet@gmail.com</span>
                            </div>
                        </div>
                    </div>


                </div>
                <hr className="h-px my-6 bg-gray-200 border-none " />

                <div className=" flex justify-center text-center">
                  &copy; {new Date().getFullYear()} TBI KIET. All rights reserved.
                   
                </div>
            </div>
        </footer>
    )
}

export default Footer
