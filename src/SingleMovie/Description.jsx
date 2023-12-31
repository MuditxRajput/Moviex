import React from 'react'
import { useSelector } from 'react-redux'

const Description = () => {
    const desc = useSelector((state)=>state?.movies?.singleMovies?.overview)
  return (
    <div>
        <h3 className='text-white text-xl font-semibold mt-8'>Overview</h3>
        <p className='text-white '>
            {desc}
        </p>
    </div>
  )
}

export default Description