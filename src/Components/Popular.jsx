import React from 'react';
import { useDispatch } from 'react-redux';
import { addPopular } from '../Store/movieSlice';
import { options } from '../utils/constant';
import Button from './Button';
const Popular = () => {
  const dispatch = useDispatch();
    const onTabChange=async(val,index)=>{
      console.log(val.toLowerCase());
      const data = await fetch(`https://api.themoviedb.org/3/${val.toLowerCase()}/popular`,options)
      const res = await data.json();
      dispatch(addPopular(res.results))
    }
  return (
    <div>
    <div className='flex justify-between mx-2'>
        <p className='text-white text-xl'>Popular</p>
        <Button data={["Movie","Tv"]}
        onTabChange ={onTabChange}/>
        
    </div>

</div>
  )
}

export default Popular