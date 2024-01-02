import React from 'react';
import { useNavigate } from 'react-router-dom';
const H_Movie_card = ({data}) => {
    const navigate = useNavigate();
    const handleNavigation = (val) => {
        navigate(`/single/${val.id}`)
    
      };
    console.log(data);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-3 lg:grid-cols-5 lg:gap-4 lg:mx-2 xl:mx-2 xl:grid-cols-7 xl:gap-4  mt-8" >
      {data?.map((val)=>
        <div className='    flex flex-col   ' onClick={() => handleNavigation(val)}>
            <div className='  flex justify-center '>
                <img src={"https://image.tmdb.org/t/p/original/"+val.poster_path} alt="" className=' rounded-lg' />
            </div>
            <div className='text-white md:text-md xl:text-lg 2xl:text-xl flex justify-center h-12  '>
                {val.original_title}
            </div>
        </div>
        
      )}
    </div>
  )
}

export default H_Movie_card