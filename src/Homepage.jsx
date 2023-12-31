import Body from './Components/Body';
import usePopular from './Hooks/usePopular';
import { usePopularMovies } from './Hooks/usePopularMovies';
import useTopRated from './Hooks/useTopRated';
import useTrending from './Hooks/useTrending';
const Homepage = () => {
  usePopularMovies()
  useTrending();
  usePopular();
  useTopRated()
  return (
    <>
    <Body/>
    {/* <Footer/> */}
    </>
  )
}

export default Homepage