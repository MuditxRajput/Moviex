import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useSingleMovie from '../Hooks/useSingleMovie';
import SingleMovieBackground from '../SingleMovie/SingleMovieBackground';
import TopCast from '../SingleMovie/TopCast';
const SingleMovie = () => {
  const { id } = useParams();
  const[getData,setGetData] = useState(false)
  // Call the hook and pass the movie ID
  const { singleMovieDetail } = useSingleMovie(id);

  // Use useEffect to log the detailed movie when it's available
  const detailedMovie = useSelector((state) => state?.movies?.singleMovies);
  useEffect(() => {
    if (singleMovieDetail) {
      setGetData(true)
      
    }
  }, [singleMovieDetail]);
    if(getData==false)
    {
      return<div className=''>Loading</div>
    }

  return (
    <div className=' absolute bg-black-start   top-0 w-full'>
      <SingleMovieBackground/>
      <TopCast/>
     
    </div>
  );
};

export default SingleMovie;
