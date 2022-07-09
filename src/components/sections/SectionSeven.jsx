import React from 'react';
import { SecurityText } from '../RandomText';

const SectionSeven = () => {
  return (
    <section>
        <div className='my-12 px-[6%]'>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl text-center lg:text-right font-bold text-blue-500'>SECURITY</h1>
                </div>

                <SecurityText/>
            </div>
        </div>
    </section>
  )
}

export default SectionSeven