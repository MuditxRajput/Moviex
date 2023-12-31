import { useDispatch } from "react-redux";
import { addBackgroundVideo } from "../Store/movieSlice";
import { options } from "../utils/constant";
const useMovieVideo=()=>{
    const dispatch = useDispatch();
    const getVideo=async(id)=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`,options)
        const res = await data.json();
        // console.log(res);
        dispatch(addBackgroundVideo(res.backdrops))
    }
    // useEffect(()=>{
    //     getVideo();
    // },[])

    return {getVideo};
    
}
export default useMovieVideo;