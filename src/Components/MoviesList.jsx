import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import Popular from './Popular'
import TopRated from './TopRated'
import Trending from './Trending'
const MoviesList = () => {
  const TrendingMovies = useSelector((state) => state?.movies?.trendingMovies);
  const PopularMovies = useSelector((state)=>state?.movies?.popular);
  const TopRatedMovies = useSelector((state)=>state?.movies?.topRated);

  return (
    <div className=' bg-black-start w-full   '>
      <div className='mx-5 md:mx-10 -mt-2 flex  flex-col  gap-10   '>
        <div className=''>
          <Trending/>
          <MovieCard data = {TrendingMovies}/>
        </div>
        <div>
          <Popular/>
          <MovieCard data = {PopularMovies}/>
        </div>
        <div>
          <TopRated/>
          <MovieCard data = {TopRatedMovies}/>
        </div>
          
      </div>
    </div>
  )
}

export default MoviesList