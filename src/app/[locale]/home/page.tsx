import React, { FC } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionOne from "@/components/SectionOneHome";
import SectionTwo from "@/components/SectionTwoHome";
import SectionThree from "@/components/SectionThreeHome";
import { EmblaOptionsType } from "embla-carousel";

// const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Home: FC = () => {
  return (
    <div className="w-full ">
      <NavBar currentScreen={1} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer showContact={true} />
    </div>
  );
};

export default Home;
