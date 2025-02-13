import { categories, socialLinks } from '@/app/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-screen-2xl  bg-primary h-8"></div>
      <div className="">
        <div className="flex container max-w-7xl mx-auto gap-4 items-end justify-between">
          <Link href={'/'} className="w-[246px] h-[108px]">
            <Image
              src={'/cii-logo.png'}
              width={300}
              height={108}
              alt="cii-logo"
            />
          </Link>

          <div className="">
            <ul className="flex gap-3 text-end pb-1">
              {categories.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-primary font-semibold pb-2 border-b-[3px] border-transparent hover:border-primary active:border-b-4 active:border-primary"
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="pb-2">
            <div className="relative">
              <BiSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                className="py-2 pl-10 pr-6 ring-2 ring-gray-500 rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Search..."
              />
            </div>
            <div className="flex gap-2 py-2">
              {socialLinks.map(({ name, Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-xl transition duration-300 border-2 rounded-full p-1 border-primary"
                >
                  <Icon /> {/* Rendering the icon here */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
