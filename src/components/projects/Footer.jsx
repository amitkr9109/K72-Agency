import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer-div w-full h-[500px] bg-black text-white font-[font2] flex flex-col justify-between">
          <div className="left-right-div flex lg:flex-row lg:items-center lg:justify-between flex-col px-5 py-2">
            <div className="left-div flex gap-2 items-center">
              <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50]'>fb</h2>
              <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50]'>ig</h2>
              <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50]'>in</h2>
              <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50]'>be</h2>
            </div>
            <div className="right-div lg:pt-1 pt-[35vh]">
              <h2 className='uppercase border rounded-full px-10 py-1 lg:text-7xl text-5xl w-fit pt-2 cursor-pointer text-[#D3FD50]'>contact</h2>
            </div>
          </div>
          <div className="left-div lg:flex gap-10 items-center justify-center mb-5 ml-5">
            <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50]'>privacy policy</h2>
            <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50]'>privacy notice</h2>
            <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50]'>ethics report</h2>
            <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50]'>consent choices</h2>
          </div>
        </div>
    </>
  )
}

export default Footer
