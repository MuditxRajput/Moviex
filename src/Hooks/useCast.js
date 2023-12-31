import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCast } from '../Store/singleMovie';
import { options } from "../utils/constant";
const useCast=(id)=>{
    const dispatch = useDispatch();
    const[cast,setCast] =useState(null);
    useEffect(()=>{
            const gettingData=async()=>{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`,options)
            const res = await data.json();
            dispatch(addCast(res));
            setCast(res);
        }
        gettingData();
    },[id])

   
    return {cast};
}
export default useCast;