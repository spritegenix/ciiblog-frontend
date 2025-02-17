import React from 'react';
import Slider from './Slider';
import Link from 'next/link';
import { blogData, blogsData } from '../data';

const ScrollSection = () => {
  return (
    <section className="">
      <div className="max-w-4xl xl:max-w-7xl mx-auto py-10 border-b-2 border-gray-300">
        <div className="flex flex-col space-y-3  ">
          <div className="flex pt-3">
            <div className="font-bold text-4xl   translate-x-16 md:translate-x-14 text-gray-500 -rotate-90">
              {blogsData[0].category}
            </div>
            <div className="-translate-x-14 xl:-translate-x-12">
              <Slider />
            </div>
          </div>

          <div className="text-end -translate-x-6 xl:-translate-x-20 ">
            <Link href={'#'} className="bg-primary text-white p-2 text-sm">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
