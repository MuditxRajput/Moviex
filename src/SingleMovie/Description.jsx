import React from 'react'
import { useSelector } from 'react-redux'

const Description = () => {
    const desc = useSelector((state)=>state?.movies?.singleMovies?.overview)
  return (
    <div>
        <h3 className='text-white text-xl mb-1  mx-4 md:mx-0 md:text-lg lg:text-xl font-semibold mt-8'>Overview</h3>
        <p className='text-white text-xs md:text-sm mx-4 md:mx-0 '>
            {desc}
        </p>
    </div>
  )
}

export default Description