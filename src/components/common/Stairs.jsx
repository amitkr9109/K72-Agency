import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {

    const currentPath = useLocation().pathname;

    const stairsParentRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(function () {
        const tl = gsap.timeline();

        tl.to(stairsParentRef.current, {
            display: "block"
        });
        tl.from(".stair", {
            height: 0,
            stagger: {
                amount: -0.35
            }
        });
        tl.to(".stair", {
            y: "100%",
            stagger: {
                amount: -0.35
            }
        });
        tl.to(stairsParentRef.current, {
            display: "none"
        });
        tl.to(".stair", {
            y: "0%"
        });

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.5
        })
    }, [currentPath]);

  return (
    <>
      <main className='h-screen w-full'>
        <div ref={stairsParentRef} className="h-full w-full fixed z-20 top-0">
            <div className="w-full h-full flex">
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
            </div>
        </div>
        <div ref={pageRef}>
            {props.children}
        </div>
      </main>
    </>
  )
}

export default Stairs
