import { useDispatch } from "react-redux";
import { addTopRated } from "../Store/movieSlice";
import { options } from "../utils/constant";
const useTopRated=()=>{
    const dispatch = useDispatch();
    const gettingData=async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated`,options)
        const res = await data.json();
        dispatch(addTopRated(res.results));
      
    }
    gettingData();
  
}
export default useTopRated;