"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);


  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=40%", // scroll distance
        pin: true,
        scrub: true,
      });

      // Shrink video on scroll
      gsap.to(videoRef.current, {
        scale: 0.6,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "+=40%",
          scrub: true,
        },
      });

    return () => ctx.revert();
  }, []);
})

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center p-3 flex-col bg-white"
    >
      {/* Background video */}
      <div
        ref={videoRef}
        className="bg-amber-700 w-full h-full md:h-full rounded-2xl"
      >
        <video
          src="/start.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
