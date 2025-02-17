import { socialLinks } from '@/app/data';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className=" bg-primary  ">
      <div className="bg-primary py-3"></div>
      <div className="bg-white flex flex-col md:flex-row justify-center items-center p-2 gap-x-4 gap-y-2">
        <input
          type="text"
          placeholder="Enter Your Email Address"
          className="border-2 py-2 px-10 text-sm"
        />
        <button className="bg-primary py-2 px-8 text-white font-semibold">
          SUBSCRIBE NOW!
        </button>
      </div>
      <div className="max-w-4xl xl:max-w-6xl mx-auto text-white text-sm font-light  px-4 lg:px-0">
        <div className="grid gap-y-10 md:gap-y-0 md:grid-cols-4 text-start">
          <ul className="space-y-2 p-2">
            <li className="py-3">Leadership</li>
            <li className="py-3">Vision & Mission</li>
            <li className="py-3">How to Become a Member ?</li>
            <li className="py-3">Contact Us : info@cii.in</li>
            <li className="py-3">Helpline:1800 103 1244</li>
          </ul>
          <ul className="space-y-2 p-2">
            <li className="py-3">Economy Update</li>
            <li className="py-3">International</li>
            <li className="py-3">Development Initiatives</li>
            <li className="py-3">Centres of Excellence</li>
            <li className="py-3">CII Foundation (CSR)</li>
          </ul>
          <ul className="space-y-2 p-2">
            <li className="py-3">Sectoral Portfolio</li>
            <li className="py-3">Trade Fairs</li>
            <li className="py-3">Awards/Recognition</li>
            <li className="py-3">Market Facilitation Services</li>
            <li className="py-3">Publications</li>
            <li className="py-3">Journals & Newsletters</li>
          </ul>
          <ul className="space-y-2 p-2 text-center">
            <p className="">Follow Us</p>
            <div className="flex justify-center gap-2 py-2">
              {socialLinks.map(({ name, Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary/80 text-xl transition duration-300 border-2 rounded-full p-1 lg:p-2 border-white"
                >
                  <Icon size={15} className="" />{' '}
                  {/* Rendering the icon here */}
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className="bg-white h-[1px] my-5"></div>
        <p className="text-white text-center text-sm pb-4">
          Copyright © 2024 Confederation of Indian Industry (CII). All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
