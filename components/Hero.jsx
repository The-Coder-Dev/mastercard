"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    const titleAnima = new SplitType(titleRef.current, { type: "words" });
    gsap.from(titleAnima.words, {
      y: 80,
      opacity: 0,
      stagger: 0.06,
      delay:0.4,
      ease: "power2.out",
    })
    return () => titleAnima.revert();
  }, []);
  return (
    <div className="h-screen w-full p-3 bg-white">
      <div className="w-full h-full rounded-2xl md:rounded-4xl bg-hero ">
        <div className="w-full h-full  flex items-end justify-center md:flex md:items-end md:justify-center pb-30 ">
          <div className="w-fit h-fit flex items-center justify-center overflow-hidden px-8">
            <h1 ref={titleRef} className="leading-tight text-white text-4xl md:text-6xl text-center font-medium">
              Get to know today's Mastercard
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
