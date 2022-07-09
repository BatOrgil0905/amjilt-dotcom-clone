import React from 'react';
import { QRAPPLE, QRANDROID, Apple, Android } from '../BackgroundImages';

const SectionNine = () => {
  return (
    <section className='bg-white'>
        <div className='my-24 px-[6%]'>
            <div className='flex flex-col items-center justify-center mx-4'>
                <div className='flex flex-row justify-center items-center gap-4 my-2'>
                    <QRAPPLE/>
                    <QRANDROID />
                </div>
                <div className='flex flex-row justify-center items-center gap-4 my-2'>
                    <Apple />
                    <Android />
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionNine