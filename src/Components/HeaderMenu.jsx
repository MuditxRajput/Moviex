import React from 'react'

const HeaderMenu = () => {
  // const menuOpen  = useSelector((state)=>state?.movies?.menuOpen)
  return (
    <div className=' hidden sm:flex sm:flex-col px-2 '>
    <ul className='text-white flex gap-6 justify-center items-center'>
        <li>Shows</li>
        <li>Movies</li>
        <input className='rounded-lg px-2 py-1' placeholder='Search ' type="search" name="" id="" />
      </ul>
    </div>
  )




}

export default HeaderMenu