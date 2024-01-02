import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSearch from "../Hooks/useSearch";
import { addSearch } from "../Store/movieSlice";
const HeaderMenu = () => {
  const [search, setSearch] = useState(null);
  // const[query,setQuery] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSearch = () => {
    // console.log(search);
    if (search) {
      navigation(`/searchMovies/${search}`);
    }
  };

  const { userSearchMovie } = useSearch(search);
  useEffect(() => {
    if (userSearchMovie != null) {
      console.log(userSearchMovie);
      dispatch(addSearch(userSearchMovie));
    }
  }, [userSearchMovie]);
  // const menuOpen  = useSelector((state)=>state?.movies?.menuOpen)
  return (
    <div className=" hidden sm:flex sm:flex-col px-2 ">
      <ul className="text-white flex gap-6 justify-center items-center">
        <li>Shows</li>
        <li>Movies</li>
        <div className=" relative w-52" >
        <input
          className="rounded-lg px-2 py-1 text-black outline-none"
          placeholder="Search "
          type="search"
          name=""
          id=""
          onChange={(e) => setSearch(e.target.value)}

          
        />
        <button className=" absolute rounded-r-full text-white bg-gradient-to-r from-orange-600 to-pink-600 py-1 right-0 outline-none hover:cursor-pointer " 
          onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </ul>
    </div>
  );
};

export default HeaderMenu;
