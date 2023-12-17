import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='absolute w-200px md:w-[600px] md:mx-[50px] md:my-[200px] text-slate-200'>
        <div className='font-bold md:text-4xl md:p-3 '>{title}</div>
    <div className='hidden'>{description}</div>
    </div>
    
  )
}

export default VideoTitle