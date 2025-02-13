'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full !h-[500px]"
      >
        <SwiperSlide className="group relative">
          <Link href={'#'} className=" cursor-pointer">
            {/* Overlay div that will appear on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <h1 className="text-white text-center text-5xl font-semibold">
                Ease of doing business gets fresh impetus
              </h1>
            </div>

            {/* Image */}
            <Image
              src={'/New-Indian-Express.png'}
              alt="Image"
              width={1800}
              height={500}
              className="w-full h-full object-cover"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="group relative">
          <Link href={'#'} className=" cursor-pointer">
            {/* Overlay div that will appear on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <h1 className="text-white text-center text-5xl font-semibold">
                Ease of doing business gets fresh impetus
              </h1>
            </div>

            {/* Image */}
            <Image
              src={'/New-Indian-Express.png'}
              alt="Image"
              width={1800}
              height={500}
              className="w-full h-full object-cover"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
