import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import img1 from "../assets/images/slider1.png";
import img2 from "../assets/images/slider2.png";
import img3 from "../assets/images/slider3.png";
import img4 from "../assets/images/slider4.jpg";
import img5 from "../assets/images/slider5.png";
import img6 from "../assets/images/slider6.png";
import img7 from "../assets/images/slider7.jpg";
import img8 from "../assets/images/slider8.jpg";
import img9 from "../assets/images/slider9.jpg";
import img10 from "../assets/images/slider10.jpg";

export const SwiperCompany = () => {
    return (
      <>
        <div className='my-2 flex flex-row items-center justify-center'>
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img1} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img2} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img3} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img4} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img5} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img6} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img7} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img8} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img9} alt="img1" />
          <img className="w-[100px] mx-2 h-[90px] grayscale duration-300 hover:grayscale-0" src={img10} alt="img1" />
        </div>
        {/* <Splide
          options={{
            perPage: 10,
            type: 'loop',
            arrows: false,
            pagination: false,
            gap: 30,
            autoplay: true,

            breakpoints: {
              320: {
                perPage: 4,
              },
              640: {
                perPage: 6,
              },
              768: {
                perPage: 8,
              },
              1024: {
                perPage: 10,
              },
            },
          }}
          className="my-2 glex flex-row"
        >
          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img1}
              alt="img1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img2}
              alt="img2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img3}
              alt="img3"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img4}
              alt="img4"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img5}
              alt="img5"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img6}
              alt="img6"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img7}
              alt="img7"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img8}
              alt="img8"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img9}
              alt="img9"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="grayscale w-full h-auto duration-300 hover:grayscale-0"
              src={img10}
              alt="img10"
            />
          </SplideSlide>
        </Splide> */}
      </>
    );
}