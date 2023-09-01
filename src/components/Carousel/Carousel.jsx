'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
const MyCarousel = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 md:text-xl lg:text-2xl px-3 text-center">Our <span className='text-secondary'>Sponsors</span></h3>
      <Carousel className="mx-auto py-14"
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}

        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 2,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 3,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={1000}
      >
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
        <Image src="/tbilogo.svg" width={50} height={50} alt="image" />
      </Carousel>
    </div>
  )
}
export default MyCarousel;