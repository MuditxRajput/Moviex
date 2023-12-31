import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Footer from './Footer'
import MoviesList from './MoviesList'

const Body = () => {
  return (
    <>
   
    <div className=' absolute w-full top-0 '>
      <BackgroundVideo/>  
      <MoviesList/>
      <Footer/>
    </div>
    </>
  )
}

export default Body