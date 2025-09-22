"use client";
import React, { useEffect } from "react";
import GoalsButton from "./GoalsButton";

const Goals = () => {
  return (
    <section className=" h-[200vh] px-3 py-5 bg-white">

      <div id="box1" className=" sticky top-3 bg-hero left-0 h-screen rounded-2xl w-full md:rounded-4xl"></div>
      {/* Top Div */}
      <div className=" w-full h-screen bg-orange-02/50 rounded-4xl -mt-10 backdrop-blur-[30px] overflow-hidden flex items-center justify-center flex-col p-5 gap-7">
        <div className="flex items-center flex-col-reverse justify-center gap-4">
          <h1 className="text-white text-5xl font-medium text-center">
            Let's talk about your goals
          </h1>
          <div className="bg-blur text-white p-3 rounded-full">
            <h1>01</h1>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center gap-5">
          <div className="w-full max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
            <GoalsButton url="/" title="Protect and build trust" />
            <GoalsButton url="/" title="Strengthen customer relationships" />
            <GoalsButton url="/" title="Make data-guided decisions" />
            <GoalsButton url="/" title="Grow responsibly and sustainably" />
            <GoalsButton url="/" title="Innovate and Scale" />
            <GoalsButton url="/" title="Provide choice and access" />
          </div>
          {/* Button */}
          <button className="w-[150px] bg-primary h-[50px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:left-0 before:-bottom-full before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:bottom-0 text-[#fff] hover:text-primary">
            Discover
          </button>
        </div>
      </div>
    </section>
  );
};

export default Goals;
