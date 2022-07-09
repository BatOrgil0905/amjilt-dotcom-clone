import React from 'react';
import { BoxOne, BoxTwo, BoxThree, BoxFour } from '../BackgroundImages';

const SectionEight = () => {
  return (
    <section>
        <div className='my-16 px-[6%]'>
            <h1 className='my-4 text-4xl font-bold text-center text-blue-500'>ACHIEVEMENTS BY USING AMJILT 2.0 SYSTEM</h1>
            <div className='my-6 grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <BoxOne />
                <BoxTwo />
                <BoxThree />
                <BoxFour />
            </div>
        </div>
    </section>
  )
}

export default SectionEight