import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='absolute w-[600px] mx-[50px] my-[200px] text-slate-200'>
        <div className='font-bold text-4xl p-3 '>{title}</div>
    <div>{description}</div>
    </div>
    
  )
}

export default VideoTitle