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
    <div className="mx-10 text-white bg-black-start">
      <div className="text-white text-lg mx-10 mb-3"> Top cast</div>
      <div className="flex overflow-x-auto no-scrollbar gap-2  w-full ">
        {castinfo?.cast?.map((val) => (
          <div className="rounded-lg mx-2 flex-none  w-20  sm:w-32 lg:w-48 ">
            <div className="h-40 flex justify-center">
                <img className=" rounded-full h-36  w-40 shadow-md shadow-black-start" src={val?.profile_path!=null?"https://image.tmdb.org/t/p/w500"+val?.profile_path:Logo} alt="" />
            </div>
            <div className=" flex justify-center items-center whitespace-nowrap ">{val?.original_name}</div>
            <div className="flex justify-center items-center">{val?.character}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCast;
