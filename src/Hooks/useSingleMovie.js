import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSingleMovies } from '../Store/movieSlice';
import { options } from '../utils/constant';
const useSingleMovie=(id)=>{
    
    const[singleMovieDetail,setSingleMovieDetail] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchData =async()=>{
            if(id!=null && id!=undefined)
            {
                
                
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}`,options);
                const res = await data.json();
                // console.log(res);
                dispatch(addSingleMovies(res))
                setSingleMovieDetail(res);
                
            }
        }
        fetchData();
    },[id])
    return {singleMovieDetail};
}

export default useSingleMovie;