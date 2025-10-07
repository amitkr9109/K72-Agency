import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <>
      <main className='flex items-center justify-center gap-5 font-[font2]'>
        <Link to="/projects" className='uppercase lg:text-[4vw] text-[7vw] border-3 lg:px-10 px-5 py-2 leading-[3vw] lg:pt-5 pt-3 font-bold text-white border-white hover:border-[#D3fd05] rounded-full active:scale-95 hover:text-[#D3fd05] transition-all'>projects</Link>
        <Link to="agence" className='uppercase lg:text-[4vw] text-[7vw] border-3 lg:px-10 px-5 py-2 leading-[3vw] lg:pt-5 pt-3 font-bold text-white border-white hover:border-[#D3fd05] rounded-full active:scale-95 hover:text-[#D3fd05] transition-all'>agency</Link>
      </main>
    </>
  )
}

export default HomeBottomText
