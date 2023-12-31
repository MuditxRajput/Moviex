import React from 'react'

const LoadingShimmer = () => {
  return (
  <div class="animate-pulse">
    <div class=" h-36 sm:h-64 mx-2  w-20  sm:w-32 lg:w-48 rounded-lg bg-slate-200"></div>
    <div class="h-3  rounded-lg bg-slate-300  mt-6  w-16 lg:w-48 "></div>
    <div class="mt-2 h-3 w-20 lg:w-48 rounded-lg bg-slate-200"></div>
  </div>


  
  )
}

export default LoadingShimmer