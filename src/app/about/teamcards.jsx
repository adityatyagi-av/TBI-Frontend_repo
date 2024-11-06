import Image from 'next/image'
import React from 'react'

const TeamCard = ({ team }) => {

    return (
        <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">{team.name}</h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
                    {team.desc}
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {
                        team.members.map((member) => (

                            <div key={member.id}>
                                <div className="flex flex-col items-center shadow-xl p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
                                    <Image className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300  quality={100} " width={512} height={512} src={`${member.imagesrc}`} alt="" />

                                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">{member.name}</h1>

                                    <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">{member.role}</p>

                                    <div className="flex mt-3 -mx-2">
                                        <a href={`${member.linkedin}`} className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Reddit">

                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                            </svg>
                                        </a>

                                        <a href={`${member.twitter}`} className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Facebook">
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                                <path d="M 17.214844 2.9863281 A 1.250125 1.250125 0 0 0 16.277344 3.4648438 L 12.351562 8.3339844 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.1855469 12.257812 L 3.7773438 18.964844 A 1.250125 1.250125 0 1 0 5.7226562 20.535156 L 10.703125 14.359375 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.869141 10.433594 L 18.222656 5.0351562 A 1.250125 1.250125 0 0 0 17.214844 2.9863281 z"></path>
                                            </svg>
                                        </a>


                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default TeamCard
