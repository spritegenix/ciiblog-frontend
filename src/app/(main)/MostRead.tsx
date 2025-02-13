import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MostRead = () => {
  const dupllicate = Array(3).fill(0);
  return (
    <div className="container max-w-7xl mx-auto py-6 bg-white">
      <h5 className="text-center pb-4 font-bold text-primary">Most Read</h5>
      <div className="grid grid-cols-3">
        {dupllicate.map((_, index) => (
          <Link href={'#'} className="flex gap-3 px-1" key={index}>
            <div className=" w-[60%] h-[170px]">
              <Image
                src="/New-Indian-Express.png"
                alt="image"
                width={240}
                height={140}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 w-[30%] text-primary">
              <p className=" text-sm font-semibold text-wrap">
                GDP data has to be Comprehensive and include Productivity &
                Quality
              </p>
              <p className=" text-[12px]">12 Jan 2025</p>
              <p className=" text-[12px]  w-fit border-b-[1px] border-primary ">
                Read More
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
