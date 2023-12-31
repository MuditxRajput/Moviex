import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../Store/movieSlice";
import { options } from "../utils/constant";
const useTrending=(name,val,index)=>{
    const dispatch = useDispatch();
    const gettingData=async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day`,options)
        const res = await data.json();
        dispatch(addTrendingMovies(res.results));
      
    }
    gettingData();
  
}
export default useTrending;