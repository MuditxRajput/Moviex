import dayjs from 'dayjs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
const MovieCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const Shimmer = useSelector((state) => state?.movies?.shimmer);
  const handleNavigation = (val) => {
    navigation(`/single/${val.id}`)

  };
  return Shimmer ? (
    <Loading />
  ) : (
    <div className="flex h-40 md:h-72 lg:h-96  gap-3 overflow-x-auto no-scrollbar my-3  ">
      {data?.map((val, index) => (
        <div
          key={index}
          className="relative rounded-lg  flex-none  w-20 h-24 md:52   sm:w-32 lg:w-48"
          onClick={() => handleNavigation(val)}
        >
          <div>
            <img src={`https://image.tmdb.org/t/p/original/${val.poster_path}`} alt=""  className=' object-cover rounded-lg'/>
          </div>
          {/* <LazyLoading img={`https://image.tmdb.org/t/p/original/${val.poster_path}`} /> */}
          <div className="text-white  text-xs sm:text-md md:text-xl md:mt-6  w-20 md:w-28 lg:w-48 whitespace-nowrap overflow-hidden overflow-ellipsis ">
            {val.title}
          </div>
          <div className="text-white text-xs sm:text-md md:text-lg  md:w-48 whitespace-nowrap overflow-hidden overflow-ellipsis ">
            {dayjs(val.release_date).format('MMM D, YYYY')}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
