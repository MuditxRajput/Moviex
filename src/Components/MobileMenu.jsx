import React, { useState } from 'react';

const MobileMenu = () => {
  const[scrollY,setScrollY] = useState(0);
 
  return (
    <div className=' absolute transition transform z-50 bg-black-start w-full h-[82px]   '>
    <ul className='text-white  flex flex-col mx-16 gap-3 mt-3 '>
        <li>Shows</li> 
        <li>Movies</li>
        {/* <input className='rounded-lg px-2 py-1' placeholder='Search ' type="search" name="" id="" /> */}
      </ul>
    </div>
  )
}

export default MobileMenu