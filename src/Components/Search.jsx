import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// debounding karte h 
import { useDispatch } from 'react-redux';
import useSearch from '../Hooks/useSearch';
import { addSearch } from '../Store/movieSlice';
const Search = () => {
    const[search,setSearch] = useState(null);
    // const[query,setQuery] = useState(null);
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const handleSearch=()=>{
        // console.log(search);
        if(search)
        {
            navigation(`/searchMovies/${search}`);
        }
        
    }

    const {userSearchMovie} = useSearch(search);
    useEffect(()=>{
        if(userSearchMovie!=null)
        {
          console.log(userSearchMovie);
          dispatch(addSearch(userSearchMovie))
          
        }
    },[userSearchMovie])

  return (
    <div className="w-[300px] sm:w-[500px] flex relative">
          <input
            className="rounded-full py-1 sm:py-3 w-full px-3 outline-none border-none "
            type="search"
            placeholder="Search for a movie or tv show..."
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button className=" absolute rounded-r-full text-white bg-gradient-to-r from-orange-600 to-pink-600 py-1 sm:py-3 px-2 sm:px-6 right-0 outline-none hover:cursor-pointer " 
          onClick={handleSearch}
          >
            Search
          </button>
        </div>
  )
}

export default Search