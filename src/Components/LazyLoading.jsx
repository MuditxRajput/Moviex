import React from "react";
import LazyLoad from "react-lazy-load";

const LazyLoading = (val) => {
  // console.log(val.img);
  return (
    <LazyLoad>
      <img
        src={val.img}
        alt="images"
        className="  sm:w-32 md:h-64 md:w-48 object-cover rounded-lg"
        // className={''}
        // style={{ transition: "filter 0.5s" }}
        
      />
    </LazyLoad>
  );
};

export default LazyLoading;
