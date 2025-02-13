import React from 'react';
import Slider from './Slider';
import Link from 'next/link';

const ScrollSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto py-10 border-b-2 border-gray-5400">
        <div className="  ">
          <div className="flex pt-3">
            <div className="font-bold text-4xl translate-x-14 text-gray-500 -rotate-90">
              Economy
            </div>
            <div className="-translate-x-12">
              <Slider />
            </div>
          </div>

          <div className="text-end -translate-x-20 ">
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
