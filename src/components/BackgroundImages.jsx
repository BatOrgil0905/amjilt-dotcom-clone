import React from 'react'
import "../App.css";
import phone from "../assets/images/bg-2.png";
import laptop from "../assets/images/bg3.png";
import teacher from "../assets/images/bg4.png";
import bannerOne from "../assets/images/bg5.png";
import bannerTwo from "../assets/images/banner2.png";
import divices from "../assets/images/bg6.png";

import boxOne from "../assets/images/box1.jpg";
import boxTwo from "../assets/images/box2.jpg";
import boxThree from "../assets/images/box3.jpg";
import boxFour from "../assets/images/box4.jpg";

import appleQR from "../assets/images/qr-apple.png";
import androidQR from "../assets/images/qr-android.png";
import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png";

export const Phone = () => {
    return(
        <img className='w-[180px] h-[210px] lg:w-[386.495px] lg:h-[419.34px]' src={phone} alt="phone" />
    )
}

export const Laptop = () => {
    return(
        <img className='h-auto max-w-auto duration-300 hover:-translate-y-3' src={laptop} alt="bigLaptop"/>
    )
}

export const TeacherPic = () => {
    return(
        <img className="h-auto w-full lg:w-[50%] border-3 border-white rounded-full duration-300 hover:-translate-y-3" src={teacher} alt="teacher's teaching lesson" />
    )
}

export const BannerOne = () => {
    return(
        <div>
            <img className="w-full h-full m-0 lg:-mt-14" src={bannerOne} alt="bannerpicOne" />
        </div>
    )
}

export const BannerTwo = () => {
    return(
        <div className='my-8'>
            <img className='w-full h-full shadow-xl' src={bannerTwo} alt="discouts" />
        </div>
    )
}

export const DivicePics = () => {
    return(
        <img className="h-auto w-full lg:w-2/3 duration-300 hover:-translate-y-3" src={divices} alt="divices" />
    )
}

export const BoxOne = () => {
  return (
    <div className="w-full h-[350px] rounded-lg">
      <img src={boxOne} alt="box1" />
    </div>
  );
};

export const BoxTwo = () => {
  return (
    <div className="w-full h-[350px] rounded-lg">
      <img src={boxTwo} alt="box1" />
    </div>
  );
};

export const BoxThree = () => {
  return (
    <div className="w-full h-[350px] rounded-lg">
      <img src={boxThree} alt="box1" />
    </div>
  );
};

export const BoxFour = () => {
  return (
    <div className="w-full h-[350px] rounded-lg">
      <img src={boxFour} alt="box1" />
    </div>
  );
};

export const QRAPPLE = () => {
    return(
        <img className='w-1/3 h-1/3' src={appleQR} alt="appleQR" />
    )
}

export const QRANDROID = () => {
  return <img className="w-1/3 h-1/3" src={androidQR} alt="appleQR" />;
};

export const Apple = () => {
  return <img className="w-1/2 h-1/2" src={apple} alt="appleQR" />;
};

export const Android = () => {
  return <img className="w-1/2 h-1/2" src={google} alt="appleQR" />;
};