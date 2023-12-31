import React from 'react'
import LoadingShimmer from './LoadingShimmer'

const Loading = () => {
  return (
    <div className='flex gap-3 lg:gap-10 w-full mt-10 h-64'>
      <div>
      <LoadingShimmer/>
      </div>
      <div>
      <LoadingShimmer/>
      </div>
      <div>
      <LoadingShimmer/>
      </div>
      <div>
      <LoadingShimmer/>
      </div>
      <div>
      <LoadingShimmer/>
      </div>
      <div>
      <LoadingShimmer/>
      </div>
      <div>
      <LoadingShimmer/>
      </div>
      
    </div>
  )
}

export default Loading