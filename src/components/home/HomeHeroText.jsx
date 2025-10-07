import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <>
      <main className='text-white flex flex-col items-center font-[font1] lg:pt-2 pt-[32vh]'>
        <div className="uppercase lg:text-[9vw] text-[12vw] lg:leading-[8vw] leading-[12vw]">The spark for</div>
        <div className="uppercase lg:text-[8vw] text-[12vw] lg:leading-[8vw] leading-[12vw] flex items-center justify-center">all <div className="lg:h-[15vh] lg:w-[18vw] h-[5vh] w-[20vw] rounded-full overflow-hidden"><Video /></div> things</div>
        <div className="uppercase lg:text-[8vw] text-[12vw] lg:leading-[8vw] leading-[12vw]">creative</div>
        <p className='lg:w-[21vw] lg:ml-[78vw] w-[80vw] ml-[23vw] mt-10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      </main>
    </>
  )
}

export default HomeHeroText
