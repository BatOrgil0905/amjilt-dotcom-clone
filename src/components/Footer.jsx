import React from 'react';
import { Browse, Mail, Contact, BottomText } from "./RandomText";
import { BrowseIcon, EnvelopeIcon, MobileIcon } from './Icons';

const Footer = () => {
  return (
    <footer>
      <div className="my-8 px-[6%] flex flex-col lg:flex-row gap-4">
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] bg-blue-500 rounded-full">
            <BrowseIcon />
          </div>
          <Browse />
        </div>

        <div className="flex items-center">
          <div className="w-[50px] h-[50px] bg-blue-500 rounded-full">
            <EnvelopeIcon />
          </div>
          <Mail />
        </div>

        <div className="flex items-center">
          <div className="w-[50px] h-[50px] bg-blue-500 rounded-full">
            <MobileIcon />
          </div>
          <Contact />
        </div>
      </div>
      <BottomText />
    </footer>
  );
}

export default Footer