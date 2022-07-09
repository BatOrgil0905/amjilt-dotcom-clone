import React from 'react';
import { BannerTextOne } from '../RandomText';
import { ThirdText } from '../RandomText';
import { TeacherPic } from '../BackgroundImages';

const SectionTwo = () => {
  return (
    <section className='bg-gray-50 py-4'>
        <BannerTextOne />
        <div className='px-[6%] my-12 lg:my-2'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                <ThirdText />
                <TeacherPic />
            </div>
        </div>
    </section>
  )
}

export default SectionTwo