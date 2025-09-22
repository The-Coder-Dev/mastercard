import React from 'react'
import Image from 'next/image'

const InfoSection = () => {
  return (
    <div className="w-full h-screen bg-[#F9471B] px-10 py-15 flex flex-col gap-10 justify-between">
        <h1 className="text-white text-6xl max-w-2xl font-medium">
          Like you've never known us before.
        </h1>
        <div className="flex items-center justify-center">
          <Image
            src="/HeroImg.png"
            className="rounded-full"
            width={800}
            height={200}
            alt=""
          />
        </div>
        <p className="text-white text-md max-w-md tracking-tight">
          We're helping financial institutions and businesses worldwide
          transform the way we pay and get paid.
        </p>
      </div>
  )
}

export default InfoSection