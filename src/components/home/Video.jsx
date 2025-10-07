import React from 'react'

const Video = () => {
  return (
    <>
      <main className='video-div h-full w-full'>
        <video autoPlay loop muted className='w-full h-full object-cover' src="../../../k72video.mp4"></video>
      </main>
    </>
  )
}

export default Video
