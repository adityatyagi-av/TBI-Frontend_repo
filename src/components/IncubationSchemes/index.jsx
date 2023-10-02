import Link from "next/link";
const schemes=[
  {
    id:1,
    name:"NIDHI EIR",
    description:"KIET-TBI, is one of the 10 selected NIDHI-EIR centers as PEP.The NIDHI-EIR Programme would provide subsistence grant upto Rs.30,000 per month to entrepreneurs with promising potential.",
    link:"/incubation/nidhieir"
  },
  {
    id:2,
    name:"NIDHI PRAYAS",
    description:"DST supported National Initiative for Developing and Harnessing Innovation (NIDHI) programs About NIDHI- Promotion and Acceleration of Young and Aspiring innovators and start-ups (PRAYAS) program focuses on supporting innovators to develop their innovative idea into prototypes. This program would attract a large number of youngsters to come forward to try out their ideas without actually worrying about failure.",
    link:"/incubation/nidhiprayas"
  },
  {
    id:3,
    name:"Tide 2.0 Grant",
    description:"The TIDE 2.0 program primarily focuses on nurturing valid Proof of Concept (PoC) ideas, elevating them to prototypes or Minimum Viable Products (MVPs). This scheme is dedicated to fortifying nearly 200 technology startups in strategically chosen domains of national significance. As a recipient of the MEITY TIDE-Grant, you can access substantial support, with grants of up to ₹700,000",
    link:"/incubation/tidegrant"
  },
  {
    id:4,
    name:"Tide 2.0 Eir",
    description:"It serves as a supportive platform for aspiring entrepreneurs, offering them the tools to nurture their innovative ideas within a technology-driven ecosystem.  As a beneficiary of the MEITY TIDE-EIR support, you have the potential to receive up to ₹30,000 per month, with a minimum grant of ₹10,000 per month for a 12-month duration. You can access support up to ₹3,60,000. ",
    link:"/incubation/tideeir"
  },
  {
    id:5,
    name:"MSME IDEA Hackathon",
    description:"The objective of the scheme is to promote and support untapped creativity and to promote adoption of latest technologies in MSMEs that seek the validation of their ideas at the proof-of-concept level.Up to maximum of Rs. 15 lakh per idea shall be provided to HI for developing and nurturing the ideas",
    link:"/incubation/msme"
  },
  {
    id:6,
    name:"Twaran",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam inventore quas voluptates est ipsum adipisci, recusandae delectus! Ullam, magni?",
    link:"/incubation/twaran"
  },
  {
    id:7,
    name:"iDEX",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam inventore quas voluptates est ipsum adipisci, recusandae delectus! Ullam, magni?",
    link:"/incubation/idex"
  },
  {
    id:8,
    name:"Startup In UP",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam inventore quas voluptates est ipsum adipisci, recusandae delectus! Ullam, magni?",
    link:"/incubation/upstartup"
  }
  
]
export const IncubationSchemes = () => {
  
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">TBI KIET</span>
            </span>{' '}
            INCUBATION SCHEMES
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          {schemes.map((scheme)=>{
            return(
              <Link key="id"
            href={scheme.link}
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    {scheme.name}
                  </h6>
                  <p className="text-sm text-gray-900">
                    {scheme.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
            )
          })}
          
         
        
         
          
        </div>
        <div className="text-center">
            
          <Link
            href="/inucbation"
            className="inline-flex items-center bg-blue-900 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </Link>
        </div>
      </div>
    );
  };