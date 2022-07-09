import React from 'react';
import { Laptop } from '../BackgroundImages';
import { SecondText } from '../RandomText';

const SectionOne = () => {
  return (
    <section className='bg-gray-50'>
        <div className='px-[6%] py-[4%]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                <Laptop />
                <SecondText />
            </div>
        </div>
    </section>
  )
}

export default SectionOne