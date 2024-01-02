import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";

const BackgroundVideo = () => {
  const image = useSelector((state) => state?.movies?.popularMovies);
  // console.log(image[0]);
  let val = Math.floor(Math.random() * 20);
  return (
    <div className=" relative w-full flex justify-center items-center bg-black-start h-[350px] sm:h-[550px]">
      {/* <div className=" "> */}
      <img
        src={"https://image.tmdb.org/t/p/original" + image[val]?.backdrop_path}
        alt="BackGround Picture"
        className=" rounded-lg  opacity-50 w-full h-full overflow-hidden object-fit"
      />
      <div className="  absolute flex flex-col justify-center items-center gap-2">
        <h2 className=" text-5xl sm:text-6xl  md:text-8xl text-white font-semibold">Welcome</h2>
        <p className="  text-white text-sm sm:text-xl md:text-2xl">Millions of movies,TV shows and people to discover.</p>
        <p className="text-white text-sm sm:text-lg md:text-2xl">Explore now.</p>
        <Search/>
      </div>
      <div className=" absolute w-full h-[170px] bg-gradient-to-t from-black-start  bottom-0  ">
        
      </div>
    </div>
  );
};

export default BackgroundVideo;
