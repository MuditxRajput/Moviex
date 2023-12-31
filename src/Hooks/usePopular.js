import { useDispatch } from "react-redux";
import { addPopular } from "../Store/movieSlice";
import { options } from "../utils/constant";
const useTrending=(name,val,index)=>{
    const dispatch = useDispatch();
    const gettingData=async()=>{
        const data = await fetch(`
        https://api.themoviedb.org/3/movie/popular`,options)
        const res = await data.json();
        dispatch(addPopular(res.results));
      
    }
    gettingData();
  
}
export default useTrending;