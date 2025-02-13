import React from 'react';
import ScrollSection from './ScrollSection';
import Image from 'next/image';

const CategorySection = () => {
  return (
    <div className="container max-w-7xl h-[750px] py-6 mx-auto overflow-hidden">
      <div className="flex justify-center gap-x-5">
        {/* Sticky Left Sidebar */}
        <div className="w-[80%]">
          <div className="sticky top-5 h-screen overflow-auto no-scrollbar">
            <ScrollSection />
            <ScrollSection />
            <ScrollSection />
            <ScrollSection />
            <ScrollSection />
          </div>
        </div>

        {/* Right Scrollable Image Section */}
        <div className=" overflow-auto">
          <div className="pt-5 space-y-8">
            <Image
              src={'/banner/banner2.png'}
              alt="podcast"
              width={400}
              height={400}
            />
            <Image
              src={'/banner/banner3.png'}
              alt="podcast"
              width={400}
              height={400}
            />
            <Image
              src={'/banner/banner4.png'}
              alt="podcast"
              width={400}
              height={400}
            />
            <Image
              src={'/banner/banner5.png'}
              alt="podcast"
              width={400}
              height={400}
            />
            <Image
              src={'/banner/banner6.png'}
              alt="podcast"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
