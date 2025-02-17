import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { blogsData } from '../data';

const MostRead = () => {
  return (
    <div className="container  max-w-4xl xl:max-w-7xl mx-auto py-6 bg-white  px-4 lg:px-0">
      <h5 className="text-center pb-4 font-bold text-primary">Most Read</h5>
      <div className="grid md:grid-cols-3 md:gap-y-0 gap-y-5 ">
        {blogsData.slice(3, 6).map((blog) => (
          <div key={blog.id} className="flex flex-col md:flex-row gap-3 px-1">
            <Link
              href={`/${blog.id}`}
              className="md:w-[160px] xl:w-[60%] h-[140px] xl:h-[170px]"
            >
              <Image
                src={blog.image}
                alt="image"
                width={240}
                height={140}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="space-y-2 md:w-[45%] xl:w-[30%] text-primary text-center md:block flex justify-around items-center flex-col md:text-start">
              <p className=" text-lg md:text-xs xl:text-sm font-semibold text-wrap">
                {blog.title.substring(0, 40)}
              </p>
              <p className=" text-[12px]">{blog.date}</p>
              <Link href={`/${blog.id}`}>
                <p className=" text-[12px]  w-fit border-b-[1px] border-primary ">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
