import React from 'react';
import "../../App.css";
import { SixOne, SixTwo, SixThree, SixFour, SixFive, SixSix } from '../RandomText';

const SectionSix = () => {
  return (
    <section>
      <div className="banner-img my-4 px-[6%]">
        <h1 className="pt-24 text-4xl font-bold text-white text-center">
          SYSTEM ADVANTAGE
        </h1>
        <div className="my-24 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SixOne/>
            <SixTwo/>
            <SixThree/>
            <SixFour/>
            <SixFive/>
            <SixSix/>
        </div>
      </div>
    </section>
  );
}

export default SectionSix