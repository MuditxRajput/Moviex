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
    <div className=" relative w-full flex justify-center items-center bg-black-start h-[350px] sm:h-[550px]">
      <img
        src={"https://image.tmdb.org/t/p/original" + background_Img}
        alt="BackGround Picture"
        className=" rounded-lg  opacity-10 w-full h-full overflow-hidden object-fit"
      />
      <div className="  absolute w-[1250px]  flex flex-col sm:flex-row justify-evenly ">
       <div className=''>
        <img src={"https://image.tmdb.org/t/p/original/"+singleMovieDetail?.poster_path} alt="" className=' w-60 rounded-xl' />
       </div>
       <div className=' w-[650px] flex flex-col'>
           <div className='mb-2'>
            <h3 className='text-4xl text-white font-semibold'>{singleMovieDetail.title}</h3>
            <p className=' text-slate-400 font-thin'>{singleMovieDetail.tagline}</p>
           </div>
           <Genres/>
           <Youtube/>
           <Description/>
           <MovieInfo/>
       </div>
      </div>
      <div className=" absolute w-full h-[100px] bg-gradient-to-t from-black-start  bottom-0  ">
        
      </div>
      {/* <TopCast/> */}
    </div>
  )
}

export default SingleMovieBackground