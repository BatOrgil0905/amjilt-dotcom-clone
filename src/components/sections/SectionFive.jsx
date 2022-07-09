import React from 'react';
import { BlueGridOne, BlueGridTwo, BlueGridThree, BlueGridFour, BlueGridFive, BlueGridSix, BlueGridSeven, BlueGridEight, BlueGridNine, BlueGridTen } from '../Grids';

const SectionFive = () => {
  return (
    <section>
        <div className='my-12 px-[6%]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
                <BlueGridOne />
                <BlueGridTwo />
                <BlueGridThree />
                <BlueGridFour />
                <BlueGridFive />
                <BlueGridSix />
                <BlueGridSeven />
                <BlueGridEight />
                <BlueGridNine />
                <BlueGridTen />
            </div>
        </div>
    </section>
  )
}

export default SectionFive