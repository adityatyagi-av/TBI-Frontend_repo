import Image from 'next/image'
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
const rows = [
    {
      key: "1",
      name: "Saurav Kumar",
      designation: "Head (HI), KIET Group of Institutions",
      role: "Chairman",
     
    },
    {
      key: "2",
      name: "Saurav Kumar",
      designation: "Advisor, KIET Group of Institutions",
      role: "Member",
      
    },
    {
        key: "3",
        name: "Saurav Kumar",
        designation: " Representative of NSTEDB, DST, Govt. of India, New Delhi",
        role: "Member",
        
      },
    {
      key: "4",
      name: "Saurav Kumar",
      designation: " Additional Advisor, Micro Small & Medium Enterprises, Govt. of India, New Delhi",
      role: "Member",
      
    },
    {
      key: "5",
      name: "Saurav Kumar",
      designation: "Lead Bank Manager, Syndicate Bank, Ghaziabad",
      role: "Member",
      
    },
    {
        key: "6",
        name: "Saurav Kumar",
        designation: "Representative of SIDBI, New Delhi",
        role: "Member",
        
      },
      {
        key: "7",
        name: "Saurav Kumar",
        designation: "Representative of Industries Department, U.P.",
        role: "Member",
        
      },
      {
        key: "8",
        name: "Saurav Kumar",
        designation: "Representative of National Research Development Corp., New Delhi",
        role: "Member",
        
      },
      {
        key: "9",
        name: "Saurav Kumar",
        designation: "Leading Entrepreneur",
        role: "Member",
        
      },
      {
        key: "10",
        name: "Saurav Kumar",
        designation: "R&D Expert, KIET, Ghaziabad",
        role: "Member",
        
      },
      {
        key: "11",
        name: "Saurav Kumar",
        designation: "Dean (Academic), KIET, Ghaziabad",
        role: "Member",
        
      },
      {
        key: "12",
        name: "Saurav Kumar",
        designation: "General Manager, TBI-KIET, Ghaziabad",
        role: "Ex-Officio Member Secretary",
        
      },

  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
        key: "designation",
        label: "Designation",
      },

    {
      key: "role",
      label: "ROLE",
    },
    
  ];


const AboutTbi = () => {
  return (
    <>
    <section className="bg-white mt-6">
    <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-[90vh] mt-0 bg-blue-900 dark:bg-gray-800 lg:block"></div>

        <div
            className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-2xl font-semibold capitalize lg:text-5xl lg:ml-4 ">
                <span class="text-blue-900">About TBI</span> <br/> 
            </h1>

            <div className="mt-8 lg:mt-6 lg:flex lg:items-center">

            <iframe className='object-cover object-center w-full lg:w-[32rem] rounded-lg' width="560" height="290" src="https://www.youtube.com/embed/1jFPnqSC0-U?si=s31SoNhsHzwZO8HH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <div className="mt-4 lg:px-10 lg:mt-0">
                
                    
                    <p className="max-w-2xl mt-2 text-white dark:text-gray-400">
                        “ TBI-KIET is a registered body under Society Registration Act 1860 as Krishna Path Incubation Society-TBI in 2007. TBI-KIET was jointly promoted by NSTEDB, Department of Science & Technology, Govt. of India and KIET Group of Institutions, Ghaziabad. The DST, Govt. of India supported initially for 5 years and further it was expected that TBI-KIET should be self supportive. Since 2012 TBI-KIET is self supportive and showing satisfactory growth in terms of no. of startup incubated, mentored and graduated. This is the only incubator across country which promote only first generation entrepreneurs. TBI-KIET has been ranked 8th among all best TBI/STEP by Economic Times on 11/02/2011. Till date 85 incubatees have been promoted and 50 graduated from TBI-KIET. The core strength and thrust area of the TBI-KIET is ICT, Robotics Automation, Solar Energy, Automobile, E-mobility . TBI-KIET has dedicated state of the art, 05 Storyedfurnished building having furnished cubicles alongwith internet and 24×7 power supply. Apart from this we have specialized lab facilities viz. IoT, Fab Lab, D-Link, IoS Apple, Block Chain, NI-LabView Lab and dedicated Innovation lab with robotics facilities. TBI-KIET has strong Governing Body comprises of Representatives from Government, Industry, Bank, R&D Institutions and Academia.”
                    </p>
                    <br />
                    <br />
                    <p className=" font-semibold text-gray-500 max-w-2xl">

                    During last 11 years our remarkable growth has been endorsed by NSTEDB, DST, GoI by approving flagship programme of Ministry i.e. Nationa Initiative for Developing and Harnessing Innovations-Entrepreneur in Residence (NIDHI-EIR) under this scheme we are giving fellowship of RS. 20000 to 30000 per month for next one year to 12 aspirants. <br /> (Details Link:
                    <a href="http://www.nidhi-eir.in/pdfs/NIDHI-EIR_guideline.pdf" className='text-gray-400'> http://www.nidhi-eir.in/pdfs/NIDHI-EIR_guideline.pdf</a> )
                    </p>
                </div>
            </div>

            
        </div>
    </div>
</section>
    <section className="bg-white dark:bg-gray-900 mt-20">
    <div className="max-w-6xl px-6 py-10 mx-auto">
    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
    SHRI ATUL GARG
        </h1>
        <p className="text-xl font-medium text-blue-500 ">Hon’ble Minister of State of Medical and Health, Family Welfare, Mother and Child Welfare, Govt. of U.P.</p>

        

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-9">
            <div className="absolute w-full bg-blue-900 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-blue-900 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
             
                <Image className="h-[80] w-[80] md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="/chairman.jpeg" width={70} height={70} alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-white">CHAIRMAN OPEN LETTER</p>
                        <p className="text-blue-200 ">A letter from our chairman</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-sm"> “Entrepreneur is the growth indicator of any country and to spread Entrepreneurial culture in any society Entrepreneurship, Innovation & Incubation are very effective tools. The GDP of any country is the growth indicator and this depend on the number of enterprise, product developed, employment generated and value of currency. In last four year India has shown remarkable growth in the area of entrepreneurship by way of innovative scheme viz. Startup India, Make in India, Made in India and Standup India. I would like to share that our global rank in innovation was earlier 87 now which came down to 57 and expecting to down it 36 rank within one year. All this shows that we are moving in right direction and able to create a developed country…

                    ”.</p>
                    
                </div>
            </div>
        </main>
    </div>
</section>
<section className="bg-white dark:bg-gray-900 mt-10">
    <div className="max-w-6xl px-6 py-10 mx-auto">
    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
    LATE SHRI SATENDRA KUMAR
        </h1>
        <p className="text-xl font-medium text-blue-500 ">(Founder General Manager)</p>

        

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-9">
            <div className="absolute w-full bg-blue-900 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-blue-900 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
             
                <Image className="h-[80] w-[80] md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="/chairman.jpg" width={70} height={70} alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-white">GENERAL MANAGER OPEN LETTER</p>
                        <p className="text-blue-200 ">A letter from our general manager</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-sm"> “With the objective to promote an entrepreneurship culture in the institute and in the adjoining area to produce entrepreneurs on continuous basis in order to generate wealth & self employment, the Technology Business Incubator (TBI) was established jointly by the National Science & Technology Entrepreneurship Development Board (NSTEDB), Ministry of Science & Technology, Government of India and Krishna Institute of Engineering & Technology, Ghaziabad in Dec. 2007…”.
                    <br />
                    <br />
                    Please feel free to contact: Mr. Saurav Kumar (Dy. General Manager), Mobile: +91 99990 17712</p>
                    
                </div>
            </div>
        </main>
    </div>
</section>
<h1 className="mt-12 mb-5 self-center text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
Board of Governers
        </h1>
<Table aria-label="Board of Members" fullWidth={false} isStriped={true}>
      <TableHeader>
        {columns.map((column) =>
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rows.map((row) =>
          <TableRow key={row.key}>
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

</>
  )
}

export default AboutTbi
