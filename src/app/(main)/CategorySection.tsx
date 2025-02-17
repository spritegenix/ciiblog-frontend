import React from 'react';
import ScrollSection from './ScrollSection';
import Image from 'next/image';

const CategorySection = () => {
  return (
    <div className="container xl:max-w-7xl max-w-4xl md:h-[650px] xl:h-[800px] py-6 mx-auto md:overflow-hidden mb-10  px-4 lg:px-0">
      <div className="flex flex-col md:flex-row justify-center gap-x-5">
        {/* Left Scrollable Section */}
        <div className="md:w-[70%] xl:w-[80%] overflow-auto max-h-[650px] xl:max-h-[750px] no-scrollbar">
          <div className="space-y-5">
            <ScrollSection />
            <ScrollSection />
            <ScrollSection />
            <ScrollSection />
            <ScrollSection />
          </div>
        </div>

        {/* Right Scrollable Image Section */}
        <div className="md:w-[30%] xl:w-[30%]  md:max-h-[650px] xl:max-h-[800px] no-scrollbar">
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
