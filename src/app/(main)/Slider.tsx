'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slider = () => {
  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative h-[244px] w-[500px] xl:w-[800px]">
      {/* Swiper Component */}
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef?.current;
          swiper.params.navigation.nextEl = nextRef?.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide
            className="w-[250px] h-auto xl:w-[351.069px] xl:h-[264px]"
            key={index}
          >
            <Link
              href={'#'}
              className="cursor-pointer space-y-4 flex flex-col justify-start items-start"
            >
              {/* Image Container */}
              <div className="w-[240px] h-[140px] xl:w-[351px] xl:h-[160px] overflow-hidden">
                <Image
                  src={'/New-Indian-Express.png'}
                  alt="Image"
                  width={1800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Description */}
              <h5 className="text-base text-start">
                PM addressed the inaugural sessio....
              </h5>
              <p className="text-xs text-primary">10 Jan 2025</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-[40%] -left-12 transform -translate-y-1/2  text-black px-3 py-2 rounded-full z-10"
      >
        <IoIosArrowBack size={40} />
      </button>

      <button
        ref={nextRef}
        className="absolute top-[40%] -right-12 xl:-right-3 transform -translate-y-1/2  text-black px-3 py-2 rounded-full z-10"
      >
        <IoIosArrowForward size={40} />
      </button>
    </div>
  );
};

export default Slider;
