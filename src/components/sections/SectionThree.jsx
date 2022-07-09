import React from 'react';
import { FourthText } from '../RandomText';
import { DivicePics } from '../BackgroundImages';

const SectionThree = () => {
  return (
    <section className='mt-40'>
        <div className='px-[6%]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                <FourthText />
                <DivicePics />
            </div>
        </div>
    </section>
  )
}

export default SectionThree