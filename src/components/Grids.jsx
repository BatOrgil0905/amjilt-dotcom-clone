import React from 'react'
import gridImgOne from "../assets/images/grid-1.jpg";
import gridImgTwo from "../assets/images/grid-2.jpg";
import gridImgThree from "../assets/images/grid-3.jpg";
import gridImgFour from "../assets/images/grid-4.jpg";

import { ChartIcon, HouseIcon, ClipListIcon, ClipCheckIcon, FileIcon, NewspaperIcon,DesktopIcon, MessageIcon, AddressIcon, ImageIcon } from './Icons';

export const GridOne = () => {
    return (
      <div className="w-full h-full shadow-xl rounded-3xl bg-white duration-300 hover:shadow-sm">
        <div className="flex flex-col">
          <img
            className="w-auto h-[150px] rounded-t-2xl"
            src={gridImgOne}
            alt="headmaster"
          />
          <div className="px-2">
            <h1 className="my-2 text-lg font-bold">SCHOOL ADMINISTRATION</h1>
            <p className="mt-4 mb-2 text-[13px] text-gray-500">
              Attendance and grade information of all students can be viewed by
              year, quarter, and day on the dashboard. Also, there are ways to
              make announcements, send statements and plan training programs..
            </p>
          </div>
        </div>
      </div>
    );
}

export const GridTwo = () => {
    return (
      <div className="w-full h-[400px] lg:h-[375px] shadow-xl rounded-3xl bg-white duration-300 hover:shadow-sm">
        <div className="flex flex-col">
          <img
            className="w-auto h-[150px] rounded-t-2xl"
            src={gridImgTwo}
            alt="ClassRoom"
          />
          <div className="px-3 py-2">
            <h1 className="my-2 text-lg font-bold">STUDENTS</h1>
            <p className="mt-4 text-[13px] text-gray-500">
              Attendance results, complete classes, study advanced courses, and
              exchange information can be acquainted.
            </p>
          </div>
        </div>
      </div>
    );
}

export const GridThree = () => {
    return (
      <div className="w-full h-[400px] lg:h-[375px] shadow-xl rounded-3xl bg-white duration-300 hover:shadow-sm">
        <div className="flex flex-col">
          <img
            className="w-auto h-[150px] rounded-t-2xl"
            src={gridImgThree}
            alt="Teachers"
          />
          <div className="px-3 py-2">
            <h1 className="my-2 text-lg font-bold">TEACHERS</h1>
            <p className="mt-4 text-[13px] text-gray-500">
              Enable to take online exams, import lessons, take and give
              homeworks, communicate with parents, schedule class timetables,
              and monitor work hours.
            </p>
          </div>
        </div>
      </div>
    );
}

export const GridFour = () => {
  return (
    <div className="w-full h-[400px] lg:h-[375px] shadow-xl rounded-3xl bg-white duration-300 hover:shadow-sm">
      <div className="flex flex-col">
        <img
          className="w-auto h-[150px] rounded-t-2xl"
          src={gridImgFour}
          alt="DudesAtWork"
        />
        <div className="px-3 py-2">
          <h1 className="my-2 text-lg font-bold">PARENTS</h1>
          <p className="mt-4 text-[13px] text-gray-500">
            You can view your child's attendance, marks and payment information.
            Pay the payments online, submit a proposal to the school
            administration, and receive announcements.
          </p>
        </div>
      </div>
    </div>
  );
};

export const BlueGridOne = () => {
    return (
      <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
        <div className="flex my-8 items-center justify-center gap-4">
          <ChartIcon />
          <h1 className="text-xl text-white ">GRADING SYSTEM</h1>
        </div>
      </div>
    );
}

export const BlueGridTwo = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <HouseIcon />
        <h1 className="text-xl text-white ">SUBMIT HOMEWORK</h1>
      </div>
    </div>
  );
};

export const BlueGridThree = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <ClipListIcon />
        <h1 className="text-xl text-white ">INVOCE</h1>
      </div>
    </div>
  );
};

export const BlueGridFour = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <ClipCheckIcon />
        <h1 className="text-xl text-white ">ATTENDANCE</h1>
      </div>
    </div>
  );
};

export const BlueGridFive = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <FileIcon />
        <h1 className="text-xl text-white ">LESSON SCHEDULE</h1>
      </div>
    </div>
  );
};

export const BlueGridSix = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <NewspaperIcon />
        <h1 className="text-xl text-white ">WORK PLANNING</h1>
      </div>
    </div>
  );
};

export const BlueGridSeven = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <DesktopIcon />
        <h1 className="text-xl text-white ">ONLINE EXAM</h1>
      </div>
    </div>
  );
};

export const BlueGridEight = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <MessageIcon />
        <h1 className="text-xl text-white ">ANNOUNCEMENTS</h1>
      </div>
    </div>
  );
};

export const BlueGridNine = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <AddressIcon />
        <h1 className="text-xl text-white ">NFT CARD</h1>
      </div>
    </div>
  );
};

export const BlueGridTen = () => {
  return (
    <div className="w-full h-[100px] rounded-2xl bg-sky-500 duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <div className="flex my-8 items-center justify-center gap-4">
        <ImageIcon />
        <h1 className="text-xl text-white ">CONTENT</h1>
      </div>
    </div>
  );
};