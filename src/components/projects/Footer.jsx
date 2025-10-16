import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer-div w-full min-h-[600px] bg-black text-white font-[font2] flex flex-col justify-between">
        <div className="left-right-div flex lg:flex-row lg:items-center lg:justify-between flex-col px-5 py-2">
          <div className="left-div flex gap-2 items-center">
            <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50] transition-all duration-300'>fb</h2>
            <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50] transition-all duration-300'>ig</h2>
            <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50] transition-all duration-300'>in</h2>
            <h2 className='uppercase border rounded-full lg:px-8 px-5 py-1 lg:text-6xl pt-2 cursor-pointer hover:text-[#D3FD50] transition-all duration-300'>be</h2>
          </div>

          <div className="right-div lg:pt-1 pt-[35vh] text-center">
            <h2 className='uppercase border rounded-full px-10 py-1 lg:text-7xl text-5xl w-fit mx-auto pt-2 cursor-pointer text-[#D3FD50] hover:scale-105 transition-all duration-300'>contact</h2>
            <p className="text-gray-400 text-sm mt-3 uppercase tracking-wider">let's create something remarkable together</p>
          </div>
        </div>
        <div className="info-section text-center lg:text-left px-5 lg:px-20 mt-10">
          <h3 className="text-[#D3FD50] uppercase text-lg mb-3">about us</h3>
          <p className="text-gray-400 text-sm max-w-[700px] mx-auto lg:mx-0 leading-relaxed">We are a creative digital agency focused on design, motion, and storytelling — delivering bold and immersive brand experiences across platforms.</p>

          <div className="mt-6 flex flex-col lg:flex-row lg:justify-between lg:items-center text-gray-400 text-sm gap-3">
            <div>
              <p>📍 Montreal, Canada</p>
              <p>✉️ info@k72studio.com</p>
            </div>
            <p className="uppercase mt-4 lg:mt-0">
              © 2025 K72 Studio — All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Policy Links */}
        <div className="left-div lg:flex gap-10 items-center justify-center mb-5 mt-10 flex-wrap px-5 text-center">
          <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50] transition-all duration-200'>privacy policy</h2>
          <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50] transition-all duration-200'>privacy notice</h2>
          <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50] transition-all duration-200'>ethics report</h2>
          <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50] transition-all duration-200'>consent choices</h2>
          <h2 className='uppercase text-sm cursor-pointer hover:text-[#D3FD50] transition-all duration-200'>terms & conditions</h2>
        </div>
      </div>
    </>
  )
}

export default Footer
