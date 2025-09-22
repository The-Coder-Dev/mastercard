import Link from "next/link";
import React from "react";

const GoalsButton = ({ title, url }) => {
  return (
    //Parent Div
    <Link href={url}>
    <div className="border-[1px] border-white/40 px-7 py-2 rounded-full  text-white/40 hover:text-white hover:border-white transition-all duration-300 group inline-block">
      <div className="flex flex-col h-6 overflow-hidden relative">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-6">
            {title}
        </div>
        <div className="absolute top-6 left-0 transform transition-transform duration-300 group-hover:-translate-y-6">
            {title}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default GoalsButton;
