import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#141413] w-full pt-10 pb-5 flex items-center justify-center flex-col gap-4">
        <Image src="/Logo.png" width={60} height={50} alt=""/>
        <h1 className="text-[#817e7a] text-6xl md:text-9xl font-bold ">MASTERCARD</h1>
        <p className="uppercase text-zinc-700">- made by Dev -</p>
    </div>
  );
};

export default Footer;
