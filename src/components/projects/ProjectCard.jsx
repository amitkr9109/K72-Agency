import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
        <div className="group lg:w-1/2 lg:h-full hover:rounded-[50px] overflow-hidden transition-all duration-500 cursor-pointer relative">
            <img className='w-full h-full object-cover' src={props.image1} alt="" />
            <div className="inner-part-paragraph opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center w-full h-full hover:bg-black/25 transition-all duration-500">
                <h2 className='font-[font1] uppercase text-white border-2 rounded-full px-5 text-2xl pt-2'>view project</h2>
            </div>
        </div>
        <div className="group lg:w-1/2 lg:h-full hover:rounded-[50px] overflow-hidden transition-all duration-500 cursor-pointer relative">
            <img className='w-full h-full object-cover' src={props.image2} alt="" />
            <div className="inner-part-paragraph opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center w-full h-full hover:bg-black/25 transition-all duration-500">
                <h2 className='font-[font1] uppercase text-white border-2 rounded-full px-5 text-2xl pt-2'>view project</h2>
            </div>
        </div>
    </>
  )
}

export default ProjectCard
