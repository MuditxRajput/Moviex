import dayjs from 'dayjs'
import React from 'react'
import { useSelector } from 'react-redux'
const MovieInfo = () => {
    const MovieInfo = useSelector((state)=>state?.movies?.singleMovies)
    // console.log(MovieInfo);
  return (
    <div className='mt-4 mx-4 md:mx-0'>
        <div className='flex gap-6'>
            <div className='mb-2'>
                <p className=' text-white font-semibold' >Status: <span className='font-thin text-slate-400'>{MovieInfo?.status}</span></p>
                
            </div>
            <div className='mb-2'>
                <p className=' text-white font-semibold' >Release Date: <span className='font-thin text-slate-400'> {dayjs(MovieInfo.release_date).format('MMM D, YYYY')}</span></p>
            </div>
            <div className='mb-2'>
                <p className=' text-white font-semibold' >Runtime: <span className='font-thin text-slate-400'>{MovieInfo?.runtime} min</span></p>
            </div>
        </div>
        <hr/>
        <div className='flex gap-6'>
            <div className='mb-2'>
            <p className=' text-white font-semibold' >Productions: <span className='font-thin text-slate-400'>{MovieInfo?.production_companies[0]?.name}</span></p>
            </div>
        </div>
        <hr/>
        <div className='flex gap-6'>
            <div className='mb-2'>
                <p className=' text-white font-semibold' >Budget: <span className='font-thin text-slate-400'>{MovieInfo?.budget}</span></p>
                
            </div>
            <div className='mb-2'>
                <p className=' text-white font-semibold' >Revenue: <span className='font-thin text-slate-400'> {MovieInfo?.revenue}</span></p>
            </div>
            <div className='mb-2'>
                <p className=' text-white font-semibold' >Production Country: <span className='font-thin text-slate-400'>{MovieInfo?.production_countries[0]?.name}</span></p>
            </div>
        </div>
        <hr/>
    </div>
    

  )
}

export default MovieInfo