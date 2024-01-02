import { useEffect, useState } from "react";
import { options } from "../utils/constant";

const useSearch = (name) => {
  const [userSearchMovie, setUserSearchMovie] = useState(null);
  useEffect(() => {
    if (name != null && name != undefined) {
      // console.log();
      const fetchData = async () => {
            const data = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${name}`,
          options
        );
        const res = await data.json();
        // console.log(res);
        setUserSearchMovie(res.results);
      };
      fetchData();
    }
  }, [name]);

  return {userSearchMovie}
};
export default useSearch;
