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
import { blogsData } from '@/app/data';

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
        {blogsData.slice(0, 3).map((data) => (
          <SwiperSlide className="group relative" key={data.id}>
            <Link href={`/${data.id}`} className=" cursor-pointer">
              {/* Overlay div that will appear on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <h1 className="text-white text-center text-3xl lg:text-5xl font-semibold text-wrap lg:w-10/12">
                  {data.title}
                </h1>
              </div>

              {/* Image */}
              <Image
                src={data.image}
                alt="Image"
                width={1800}
                height={500}
                className="w-full h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
