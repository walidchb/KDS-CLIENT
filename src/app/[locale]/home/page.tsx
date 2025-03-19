import React, { FC } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionOne from "@/components/SectionOneHome";
import SectionTwo from "@/components/SectionTwoHome";

const Home: FC = () => {
  return (
    <div className="w-[100vw] ">
      <NavBar currentScreen={1} />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
};

export default Home;
