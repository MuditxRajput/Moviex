import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from '../Store/movieSlice';
import { options } from "../utils/constant";
import useMovieVideo from "./useMoviesVideo";
// import useMovieVideo from "./useMoviesVideo";
export const usePopularMovies=()=>
{
    const{getVideo} =  useMovieVideo();
    const dispatch = useDispatch();
    const getPopularMovies=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options)
        const res = await data.json();
        dispatch(addPopularMovies(res.results))
        let val = Math.floor(Math.random() * 10);
        getVideo(res.results[val].id)
        

    }
    useEffect(()=>{
        getPopularMovies();

    },[])

}