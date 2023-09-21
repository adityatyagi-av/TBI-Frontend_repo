import ContactForm from '@/components/ContactForm/ContactForm';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const page = () => {


    return (
        <>
            <div className="flex justify-center items-center bg-white mt-0 py-14 max-w-screen-xl mx-auto px-3">
                <div className="container mx-auto my-4 px-4 lg:px-20">

                    <ContactForm />

                    <div
                        className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl ">
                        <div className="flex flex-col text-white">
                            <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                tincidunt arcu diam,
                                eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                            </p>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Main Office</h2>
                                    <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                                    <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8  mx-1 items-center justify-center flex pt-1 text-secondary ">
                                    <a href="">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8  mx-1 items-center justify-center flex pt-1 text-secondary ">
                                    <a href="">
                                        <FaYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page