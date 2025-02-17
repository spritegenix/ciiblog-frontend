import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { blogsData } from '../data';

const Section2 = () => {
  return (
    <section>
      <div className="container max-w-4xl lg:max-w-7xl mx-auto py-6 px-4 lg:px-0 ">
        <div className="flex flex-col md:flex-row justify-center gap-7">
          <div className="grid md:grid-cols-3 gap-5 xl:w-[75%] ">
            {blogsData.slice(0, 6).map((blog, index) => (
              <div
                className="relative group h-[190px] md:w-[185px] md:h-[140px] xl:w-[286px] xl:h-44"
                key={index}
              >
                <Link href={`/${blog.id}`} className=" cursor-pointer ">
                  {/* Overlay div that will appear on hover */}
                  <div className="absolute inset-0 flex flex-col items-center text-white justify-center bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <p className=" text-center text-md font-semibold px-1 ">
                      {blog.title}
                    </p>
                    <p className="text-xs">{blog.date}</p>
                  </div>

                  {/* Image */}

                  <Image
                    src={blog.image}
                    alt="Image"
                    width={400}
                    height={170}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="md:w-[25%] space-y-5">
            {/* heading */}
            <div className="">
              <Image
                src="/banner/banner1.png"
                width={200}
                height={150}
                alt="cii banner"
                className="w-full"
              />
            </div>
            {/* tags */}
            <div className="space-y-5">
              <p className=" font-semibold text-primary">Trending Topics</p>
              <div className="flex gap-2 flex-wrap">
                {blogsData.map((blog, index) => (
                  <Link href={'#'} key={index}>
                    <p className="border border-primary py-2 px-1 w-fit text-sm text-primary font-semibold">
                      {blog.category}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
