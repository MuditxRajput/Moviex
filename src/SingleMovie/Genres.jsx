import React from 'react';
import { useSelector } from 'react-redux';

const Genres = () => {
    const Genres = useSelector((state)=>state?.movies?.singleMovies?.genres)
    // console.log(Genres);s
  return (
    <div className=' flex  gap-1'>
        {Genres?.map((val)=><div key={val.id} className=' bg-pink-600 rounded-md px-2 py-1 text-xs text-white   '>{val.name}</div>)}
    </div>
  )
}

export default Genres