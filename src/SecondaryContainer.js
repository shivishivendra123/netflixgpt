import React from 'react'
import TopRated from './TopRated'
import NowPlaying from './NowPlaying'

const SecondaryContainer = () => {
  return (
    <div className='bg-black'>
        <TopRated/>
        <NowPlaying/>
    </div>
  )
}

export default SecondaryContainer