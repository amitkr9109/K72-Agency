import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../context/NavContext';

const FullScreenNav = () => {

    const [navOpen, setNavOpen] = useContext(NavbarContext);

    const fullNavLinksRef = useRef(null);
    const fullScreenRef = useRef(null);

    function gsapAnimation () {
        const tl = gsap.timeline();

        tl.to(".fullscreennav", {
            display: "block"
        });

        tl.to(".stairs", {
            height: "100%",
            stagger: {
                amount: -0.2
            }
        });

        tl.to(".hover-applied-div-container", {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.2
            }
        });

        tl.to(".nav-left-right-part-div", {
            opacity: 1
        });
    }

    function gsapAnimationReverse () {
        const tl = gsap.timeline();

        tl.to(".hover-applied-div-container", {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.2
            }
        });

        tl.to(".stairs", {
            height: 0,
            stagger: {
                amount: 0.2
            }
        });

        tl.to(".nav-left-right-part-div", {
            opacity: 0
        });

        tl.to(".fullscreennav", {
            display: "none"
        });
    }

    useGSAP(function () {
        if(navOpen) {
            gsapAnimation();
        }
        else {
            gsapAnimationReverse();
        }
    }, [navOpen]);

  return (
    <>
      <main ref={fullScreenRef} className='fullscreennav hidden h-screen w-full absolute bg-black text-white overflow-hidden z-50'>
        <div className="stairs-div h-screen w-full fixed">
            <div className="w-full h-full flex">
                <div className="stairs h-full w-1/5 bg-black"></div>
                <div className="stairs h-full w-1/5 bg-black"></div>
                <div className="stairs h-full w-1/5 bg-black"></div>
                <div className="stairs h-full w-1/5 bg-black"></div>
                <div className="stairs h-full w-1/5 bg-black"></div>
            </div>
        </div>
        <div ref={fullNavLinksRef} className="nav-sections-all-div-container relative">
            <div className="nav-left-right-part-div w-full flex items-start justify-between pr-2">
                <div className="left-part p-5">
                    <div className="w-36 cursor-pointer">
                        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                </div>
                <div onClick={() => setNavOpen(false)} className="right-part h-24 w-28 relative p-2 cursor-pointer active:scale-95">
                    <div className="h-36 w-0.5 bg-[#D3FD50] -rotate-45 absolute origin-top"></div>
                    <div className="h-36 w-0.5 bg-[#D3FD50] right-0 rotate-45 absolute origin-top"></div>
                </div>
            </div>
            <div className="all-down-sections-container font-[font2] flex flex-col cursor-pointer py-20">
                <div className="hover-applied-div-container origin-top border-y-[0.1px] border-t-white relative">
                    <h1 className='uppercase text-center text-[7vw] leading-[11vh] pt-10'>projects</h1>
                    <div className="paragraph-image-div-move-container absolute flex top-0 h-[17vh] bg-[#D3FD50] text-black">
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>pour tout voir</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>pour tout voir</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                        </div>
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>pour tout voir</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>pour tout voir</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hover-applied-div-container origin-top border-y-[0.1px] border-t-white relative">
                    <h1 className='uppercase text-center text-[7vw] leading-[11vh] pt-10'>agency</h1>
                    <div className="paragraph-image-div-move-container absolute flex top-0 h-[17vh] bg-[#D3FD50] text-black">
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>know us</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_20%]' src="https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>know us</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_16%]' src="https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6" alt="" />
                        </div>
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>know us</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_20%]' src="https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>know us</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_16%]' src="https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hover-applied-div-container origin-top border-y-[0.1px] border-t-white relative">
                    <h1 className='uppercase text-center text-[7vw] leading-[11vh] pt-10'>contact</h1>
                    <div className="paragraph-image-div-move-container absolute flex top-0 h-[17vh] bg-[#D3FD50] text-black">
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>send us a fax</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_20%]' src="https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>send us a fax</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_20%]' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
                        </div>
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>send us a fax</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_20%]' src="https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>send us a fax</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover object-[50%_20%]' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hover-applied-div-container origin-top border-y-[0.1px] border-t-white relative">
                    <h1 className='uppercase text-center text-[7vw] leading-[11vh] pt-10'>blog</h1>
                    <div className="paragraph-image-div-move-container absolute flex top-0 h-[17vh] bg-[#D3FD50] text-black">
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>read articles</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>read articles</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                        </div>
                        <div className="paragraph-image-div-move flex items-center">
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>read articles</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                            <h2 className='whitespace-nowrap uppercase text-center text-[8vw]'>read articles</h2>
                            <img className='h-[13vh] -mt-3 shrink-0 w-96 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default FullScreenNav
