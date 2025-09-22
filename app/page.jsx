import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Journey from "@/components/Journey";
import Posibility from "@/components/Posibility";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <Goals />
      <Journey />
      <Posibility />
      <InfoSection />
    </main>
  );
};

export default page;
