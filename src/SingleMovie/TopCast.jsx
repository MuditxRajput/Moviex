import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCast from "../Hooks/useCast";
import Logo from '../images/avatar.png';
const TopCast = () => {
  const { id } = useParams();
  const { cast } = useCast(id);
  const [castinfo, setCastInfo] = useState(null);
  // console.log(castDetail);
  useEffect(() => {
    if (cast) {
      setCastInfo(cast);
    }
  }, [cast]);
  if (castinfo == null) return <div className="text-white">Loading....</div>;
  return (
    <div className=" -mt-1 text-white bg-black-start">
      <div className="text-white text-xl md:text-lg mx-4 md:mx-5 lg:mx-10 mb-3 "> Top cast</div>
      <div className="flex overflow-x-auto no-scrollbar gap-2  w-full ">
        {castinfo?.cast?.map((val) => (
          <div className="rounded-lg mx-2 flex-none  w-36 sm:w-32 lg:w-48 ">
            <div className=" flex justify-center  ">
                <img className=" rounded-full h-20 w-20 sm:h-36 sm:w-36 shadow-md shadow-black-start" src={val?.profile_path!=null?"https://image.tmdb.org/t/p/w500"+val?.profile_path:Logo} alt="" />
            </div>
            <div className=" flex text-xs sm:text-md mt-1 whitespace-nowrap ">{val?.original_name}</div>
            <div className="flex text-xs sm:text-md  ">{val?.character}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCast;
