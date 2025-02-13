import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Section2 = () => {
  const duplicates = Array(6).fill(0);
  return (
    <section>
      <div className="container max-w-7xl mx-auto py-6">
        <div className="flex gap-x-10 ">
          <div className="grid grid-cols-3 gap-5 w-[75%]">
            {duplicates.map((_, index) => (
              <div className="relative group w-[286px] h-44" key={index}>
                <Link href={'#'} className=" cursor-pointer ">
                  {/* Overlay div that will appear on hover */}
                  <div className="absolute inset-0 flex flex-col items-center text-white justify-center bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <p className=" text-center text-md font-semibold px-1">
                      Ease of doing business gets fresh impetus
                    </p>
                    <p className="text-xs">12 Jan 2025</p>
                  </div>

                  {/* Image */}

                  <Image
                    src={'/New-Indian-Express.png'}
                    alt="Image"
                    width={400}
                    height={170}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="w-[25%] space-y-5">
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
              <p className=" font-semibold">Trending Topics</p>
              <div className="flex gap-2 flex-wrap">
                {duplicates.map((_, index) => (
                  <Link href={'#'} key={index}>
                    <p className="border border-primary py-2 px-1 w-fit text-sm text-primary font-semibold">
                      Industry
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
