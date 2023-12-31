import React from 'react';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../Store/movieSlice';
import { options } from '../utils/constant';
import Button from './Button';

const Trending = () => {
    const dispatch = useDispatch();
    // dispatch
    const onTabChange=async(val,index)=>{
      const data = await fetch(`https://api.themoviedb.org/3/trending/movie/${val.toLowerCase()}`,options)
      const res = await data.json();
      // dispatch(addShimmer(true));
      // setTimeout(() => {
        dispatch(addTrendingMovies(res.results))
        // dispatch(addShimmer(false));
       
      // }, 300);

    
    }
  return (
    <div>
        <div className='flex justify-between mx-2'>
            <p className='text-white text-xl'>Trending</p>
            <Button data={["Day","Week"]} 
            onTabChange ={onTabChange}/>
            
        </div>

    </div>
  )
}

export default Trending