import React from 'react';
import { useSelector } from 'react-redux';
import Description from './Description';
import Genres from './Genres';
import MovieInfo from './MovieInfo';
import Youtube from './Youtube';
const SingleMovieBackground = () => {
    const background_Img = useSelector((state)=>state?.movies?.singleMovies?.backdrop_path)
    // console.log(background_Img);
    const singleMovieDetail = useSelector((state)=>state?.movies?.singleMovies);
  return (
    <div className=" relative w-full flex justify-center   items-center bg-black-start h-[960px] sm:h-[550px] ">
      <img
        src={"https://image.tmdb.org/t/p/original" + background_Img}
        alt="BackGround Picture"
        className=" rounded-lg  opacity-10 w-full h-full overflow-hidden object-cover"
      />
      <div className="  absolute flex  flex-col sm:flex-row w-full sm:mt-0 sm:justify-around  -mt-12 ">
       <div className='xl:w-[500px]  flex justify-center xl:justify-end '>
        <img src={"https://image.tmdb.org/t/p/original/"+singleMovieDetail?.poster_path} alt="" className=' w-36 -mt-16 sm:-mt-0  md:w-56 object-cover lg:w-60 rounded-xl' />
       </div>
       <div className='  md:w-[500px] lg:w-[680px] flex flex-col '>
           <div className=' md:mb-1 lg:mb-2'>
            <h3 className=' text-md flex justify-center md:justify-start text-2xl mt-2 md:mt-0 sm:text-xl md:text-2xl lg:text-4xl text-white font-semibold'>{singleMovieDetail.title}</h3>
            <p className=' text-slate-400 flex justify-center md:justify-start text-xs sm:text-sm md:text-md font-thin'>{singleMovieDetail.tagline}</p>
           </div>
           <div>
            <Genres/>
            <Youtube/>
            <Description/>
            <MovieInfo/>
           </div>
       </div>
      </div>
      <div className=" absolute w-full h-[90px] sm:h-[50px] bg-gradient-to-t from-black-start  bottom-0  ">
        
      </div>
      {/* <TopCast/> */}
    </div>
  )
}

export default SingleMovieBackground