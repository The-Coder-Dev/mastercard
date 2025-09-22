"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMenu } from "react-icons/tb";

const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Goals",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <div className="w-full fixed py-10 flex items-center justify-center z-[999]">
      <div className="w-[20vw] bg-white rounded-full px-2 py-2 flex items-center justify-between ring ring-primary gap-2">
        <Link href="/">
          <Image src="/Logo.png" width={40} height={50} alt="Logo" className="pl-3 w-80 " />
        </Link>
        <div className="hidden md:flex">
          <div className="flex gap-6 text-primary">
            {Links.map((item) => (
              <div
                key={item.id}
                className="relative h-6 overflow-hidden group hover:text-green"
              >
                {/* Default text */}
                <Link
                  href={item.url}
                  className="block transition-transform duration-300  group-hover:-translate-y-16 "
                >
                  {item.title}
                </Link>

                {/* Hover text (slides in) */}
                <Link
                  href={item.url}
                  className="absolute left-0 top-16 block transition-transform  duration-300 group-hover:-translate-y-16"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Link href="/">
          <button className="border-primary/30 border-2 p-2 rounded-full text-primary cursor-pointer">
             <TbMenu />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
