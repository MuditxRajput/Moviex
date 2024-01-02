import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import H_Movie_card from '../Horizontal_Movie_Card/H_Movie_card';

const SearchItems = () => {
  const  {query}  = useParams();
  const search_movie = useSelector((state)=>state.movies.search);
  console.log(search_movie);
  return (
    <div className="absolute top-0 w-full bg-black-start">
      <div className=' mt-16 md:mt-20 xl:mt-24 '>
        <p className='text-white mx-4 text-lg  md:text-xl lg:text-2xl xl:text-3xl capitalize '>Search items: {query}</p>
      </div>
      <div className=' '>
        <H_Movie_card data ={search_movie}/>
      </div>
    </div>
  );
};

export default SearchItems;
