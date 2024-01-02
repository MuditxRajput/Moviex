import React from 'react';
import { useSelector } from 'react-redux';

const Genres = () => {
    const Genres = useSelector((state)=>state?.movies?.singleMovies?.genres)
    // console.log(Genres);s
  return (
    <div className=' flex justify-center md:justify-start mt-3 md:mt-0  gap-1'>
        {Genres?.map((val)=><div key={val.id} className=' bg-pink-600 rounded-md px-1 py-1  lg:px-2 lg:py-1 text-xs text-white   '>{val.name}</div>)}
    </div>
  )
}

export default Genres