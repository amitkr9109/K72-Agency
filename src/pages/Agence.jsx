import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import Footer from '../components/projects/Footer';

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6"
  ]

  useGSAP(function() {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 20%",
        end: "top -100%",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if(elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })

  })

  return (
    <>
      <main className='mb-20 overflow-hidden'>
        <div className="image-heading-div-container">
          <div ref={imageDivRef} className="image-div lg:w-[15vw] lg:h-[42vh] w-[28vw] h-[16vh] rounded-3xl absolute lg:top-[20%] lg:left-[30%] top-[1%] left-[23%] overflow-hidden">
            <img ref={imageRef} className='w-full h-full object-cover object-center' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
          </div>
          <div className="heading-paragraph-div font-[font2] relative">
            <div className="heading-section flex flex-col items-center justify-center text-center lg:mt-[55vh] mt-[30vh]">
              <h1 className='uppercase text-[20vw] leading-[17vw]'>SEVEN7Y TWO</h1>
            </div>
            <div className="paragraph-section lg:pl-[42vw]">
              <p className='lg:w-[55vw] lg:text-[52px] lg:leading-[7vh] text-[21.1px] leading-[3.5vh] p-2 mt-28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
            </div>
          </div>
        </div>
        <div className="paragraph-div min-h-screen w-full font-[font2]">
          <div className="left-right-div flex gap-[31%] lg:px-32 px-2 lg:py-40 py-64">
            <div className="left">
              <h2 className='capitalize text-xl'>expertise</h2>
            </div>
            <div className="right">
              <h2 className='capitalize w-[5vw] text-xl'>strategy advertising branding design content</h2>
            </div>
          </div>
          <div className="first-second-third-div flex lg:justify-between lg:flex-row lg:px-32 flex-col px-2 gap-10">
            <p className='lg:w-[22vw] lg:text-lg text-xl'>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
            <p className='lg:w-[25vw] lg:text-lg text-xl'>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
            <p className='lg:w-[17vw] lg:text-lg text-lg'>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Agence