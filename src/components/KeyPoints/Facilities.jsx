/* eslint-disable @next/next/no-img-element */

import Button from "../Button/Button"
const features = [
    {
        id: "feature-1",
        title: "Infrastucture",
        content:
            "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
        id: "feature-2",
        title: "Tech Aid",
        content:
            "We take proactive steps make sure your information and transactions are secure.",
    },
    {
        id: "feature-3",
        title: "Support",
        content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];
const FeatureCard = ({ title, content }) => (
    <div className={`flex flex-row p-6 rounded-[20px] mb-6 group hover:bg-blue-900 hover:cursor-pointer`}>
        <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
            <img src="https://via.placeholder.com/150" alt="icon" className='w-[60%] h-[60%] object-contain rounded-full' />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className='font-poppins font-semibold  text-[18px] leading-[23px] mb-1 group-hover:text-white'>{title}</h4>
            <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 group-hover:text-gray-200'>{content}</p>
        </div>
    </div>
)


const KeyPoints = () => {
    return (
        <section id='features' className="flex md:flex-row flex-col sm:py-16 py-6">
            <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className="font-poppins font-semibold sm:text-[48px] text-[40px] sm:leading-[76.8px] leading-[66.8px] w-full">Facilities Provided By <br className='sm:block hidden' /> Technology Business Incubator KIET </h2>
                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo vero velit harum placeat nostrum, soluta alias beatae nesciunt! Voluptatem, sequi saepe? </p>
                <div className="mt-5">
                    <Button content={'Check It Out'} />
                </div>
            </div>

            <div className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id}{
                        ...feature} index={index} />
                ))}
            </div>

        </section>
    )
}

export default KeyPoints