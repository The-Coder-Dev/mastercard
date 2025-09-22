"use client"
import { GoArrowRight } from "react-icons/go";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
const Link = [
  {
    id: 1,
    title: "Protect and build trust",
  },
  {
    id: 2,
    title: "Strengthen customer relationships",
  },
  {
    id: 3,
    title: "Make data-guided decisions",
  },
  {
    id: 4,
    title: "Grow responsibly and substainably",
  },
  {
    id: 5,
    title: "Innovate and scale",
  },
  {
    id: 6,
    title: "Provide choice and access",
  },
];

const Posibility = () => {
  const headRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(()=> {
    const headAnim = new SplitType(headRef.current, {types:"words"});
    gsap.from(headAnim.words, {
      y:100,
      opacity:0,  
      stagger:0.06,
      ease:"power2.Out",
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top 80%",
        toggleActions: "play none none reverse",
      }
    })
  })

  return (
    <div className="flex items-center justify-start  w-full min-h-screen flex-col gap-10 md:gap-20  pb-40 bg-white">
      <div ref={containerRef} className="flex items-center justify-center flex-col gap-7 px-3">
        <div className="overflow-hidden">
        <h1 ref={headRef}  className="text-4xl md:text-7xl font-semibold font-[montserrat] max-w-5xl text-center leading-tight">
          Together, the possibilities are priceless.
        </h1>
        </div>
        <p className=" text-sm md:text-xl text-center font-[montserrat] font-medium">
          Explore the highlights behind each goal we can achieve together.
        </p>
      </div>
      {/* Hover Section */}
      <div className=" flex flex-col  w-full h-full relative ">
        {Link.map((items, index) => {
          return (
            <div
              key={index}
              className="flex font-[montserrat] cursor-pointer group hover:bg-black hover:text-white transition-all duration-300 ease-in-out font-medium items-center justify-center  text-center flex-col-reverse md:flex md:items-center md:justify-center md:flex-row gap-5 px-5 border-black/30 border-b-[1px] text-3xl md:text-6xl py-10 text-black"
            >
              {items.title}
              <GoArrowRight
                size={34}
                className=" border-[1px] p-2 group-hover:bg-primary  group-hover:text-white group-hover:border group-hover:w-15 transition-all duration-300 rounded-full  border-black/10"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posibility;
