import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#141413] w-full pt-10 pb-10 flex items-center justify-center flex-col gap-4">
        <Image src="/Logo.png" width={60} height={50} alt=""/>
        <h1 className="text-[#817e7a] text-5xl md:text-9xl font-bold ">MASTERCARD</h1>
    </div>
  );
};

export default Footer;
