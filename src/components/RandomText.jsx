import React from 'react';
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";

export const TextFirst = () => {
    return (
      <>
        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          AMJILT 2.0
        </h1>
        <div className="mt-6 lg:mt-10">
          <p className="text-md lg:text-xl text-white">
            INTEGRATED SCHOOL SYSTEM
          </p>
          <p className="text-sm lg:text-md mt-2 w-64 text-white">
            Perfect administration for school management
          </p>
        </div>
        <div className='flex flex-row my-3'>
            <img className="mr-3 lg:mr-6 w-[115px] lg:w-[137px] h-[40px] lg:h-[45px]" src={google} alt="" />
            <img className="w-[115px] lg:w-[137px] h-[40px] lg:h-[45px]" src={apple} alt="" />
        </div>
      </>
    );
}

export const SecondText = () => {
  return (
    <div classname="flex flex-col">
      <h1 className="text-3xl font-bold text-blue-500">'AMJILT DOTCOM' LLC</h1>
      <p className="mt-4 w-11/12 leading-8">
        'Amjilt Dotcom' LLC was established in 2015 as a subsidiary of 'Tom
        Amjilt' LLC. Operates in the field of digital technology and software,
        and since 2017 has been developing the 'Amjilt 2.0' system for the
        education sector in the latest programming languages, such as React JS,
        React Native, Express JS, and MongoDB. Working with a team of Mongolia's
        best programmers, we are constantly evolving, improving, and looking for
        new ways to use it in other parts of the world in the future.
      </p>
    </div>
  );
}

export const BannerTextOne = () => {
  return(
    <div className='w-7/12 lg:w-5/12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-r-full'>
      <p className='text-sm lg:text-xl text-white py-2 px-5 text-right'>DIGITAL TRANSITION - 2020 / 2021</p>
    </div>
  )
}

export const BannerTextTwo = () => {
  return (
    <div className="absolute right-0 my-16 w-11/12 bg-gradient-to-r from-sky-500 to-sky-500 rounded-l-full">
      <p className="text-sm lg:text-xl text-white py-2 px-5 text-left">
        CAN BE CONNECTED FROM COMPUTER - TABLET - MOBILE PHONE - LAPTOP DEVICES
      </p>
    </div>
  );
}

export const ThirdText = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-blue-500 text-right">
        REASONS TO USE AMJILT 2.0 SYSTEM
      </h1>
      <p className="mt-4 leading-8 text-right">
        Globally, the digital transition has begun with private and public
        organizations converting all information related to their operations
        into data versions. In addition to analyzing all of its operations, the
        organization has a growing database that will never be deleted. Amjilt
        2.0 integrated school system is a national digital project for long-term
        development.
      </p>
    </div>
  );
}

export const FourthText = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-blue-500 text-right">
        AMJILT 2.0 SYSTEM
      </h1>
      <p className="mt-6 leading-8 text-left">
        The Amjilt 2.0 system has four basic access rights: school
        administrations, teachers, students, and parents. The access is a
        complex system with its own modules. The system is an advanced
        application designed to make the digital transition to the education
        sector, to facilitate the work of teachers and staff, and to improve the
        quadruple communication between students, parents, teachers, and school
        administrators.
      </p>
    </div>
  );
}

export const SixOne = () => {
  return (
    <div className="w-full h-[100px] border border-white rounded-2xl bg-transparent">
      <div className="flex !items-center justify-center">
        <h1 className="text-md text-white font-semibold text-center my-4">
          School will have integrated database
        </h1>
      </div>
    </div>
  );
}

export const SixTwo = () => {
  return (
    <div className="w-full h-[100px] border border-white rounded-2xl bg-transparent">
      <div className="flex !items-center justify-center">
        <h1 className="text-md text-white font-semibold text-center my-4">
          Analyze on student's statistic info.
        </h1>
      </div>
    </div>
  );
}

export const SixThree = () => {
  return (
    <div className="w-full h-[100px] border border-white rounded-2xl bg-transparent">
      <div className="flex !items-center justify-center">
        <h1 className="text-md text-white font-semibold text-center my-4">
          Student, parent, teacher and school administrator will form a
          quadruple connection
        </h1>
      </div>
    </div>
  );
}

export const SixFour = () => {
  return (
    <div className="w-full h-[100px] border border-white rounded-2xl bg-transparent">
      <div className="flex !items-center justify-center">
        <h1 className="text-md text-white font-semibold text-center my-4">
          Students can watch previous lesson
        </h1>
      </div>
    </div>
  );
}

export const SixFive = () => {
  return (
    <div className="w-full h-[100px] border border-white rounded-2xl bg-transparent">
      <div className="flex !items-center justify-center">
        <h1 className="text-md text-white font-semibold text-center my-4">
          School management will have full monitor the info of teachers and
          staff
        </h1>
      </div>
    </div>
  );
}

export const SixSix = () => {
  return (
    <div className="w-full h-[100px] border border-white rounded-2xl bg-transparent">
      <div className="flex !items-center justify-center">
        <h1 className="text-md text-white font-semibold text-center my-4">
          Parents can regularly monitor their child's attendance and grades
        </h1>
      </div>
    </div>
  );
}

export const SecurityText = () => {
  return (
    <div className="w-full lg:w-1/2">
      <p className="text-lg leading-6">
        The school data is the property of the school and is placed in the most
        reliable national data center in Mongolia based on the provisions of the
        Law on Confidentiality of Organizations of Mongolia.
      </p>
    </div>
  );
} 

export const Browse = () => {
  return (
    <p className="mx-3 text-md lg:text-xl font-bold text-gray-500">
      www.amjilt.com
    </p>
  );
}

export const Mail = () => {
  return (
    <p className="mx-3 text-md lg:text-xl font-bold text-gray-500">
      www.amjilt.com
    </p>
  );
}

export const Contact = () => {
  return (
    <>
      <p class="mx-3 text-md lg:text-xl font-bold text-gray-500">
        (+976) 8953-6060
      </p>
      <p class="mx-3 text-md lg:text-xl font-bold text-gray-500">
        (+976) 8651-6060
      </p>
      <p class="mx-3 text-md lg:text-xl font-bold text-gray-500">
        (+976) 9016-6060
      </p>
    </>
  );
}

export const BottomText =() => {
  return (
    <div>
      <h1 className="text-2xl text-gray-500 text-center font-bold mt-24 mb-6">
        AMJILTDOTCOM LLC - AMJILT 2.0 SYSTEM
      </h1>
    </div>
  );
}