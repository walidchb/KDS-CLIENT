"use client";
import React from "react";
import LoopersectiontwogreyleftBottom from "../assets/svg/loopersectiontwogreyleftBottom.svg";
import LoopersectiontwogreyrightTop from "../assets/svg/loopersectiontwogreyrightTop.svg";
import LoopersectiontworedleftTop from "../assets/svg/loopersectiontworedleftTop.svg";
import LoopersectiontworedrightBottom from "../assets/svg/loopersectiontworedrightBottom.svg";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const SectionTwo = () => {
  const Router = useRouter();
  const locale = useLocale();
  return (
    <div className="w-full bg-gray-100 h-[550px] px-[20px] md:px[100px] lg:px-[200px] relative">
      <div style={{ zIndex: 1, position: "absolute", bottom: "0", left: "0" }}>
        <LoopersectiontwogreyleftBottom />
      </div>
      <div style={{ zIndex: 1, position: "absolute", top: "0", right: "0" }}>
        <LoopersectiontwogreyrightTop />
      </div>
      <div
        className="hidden sm:block"
        style={{ zIndex: 1, position: "absolute", top: "0", left: "0" }}
      >
        <LoopersectiontworedleftTop />
      </div>
      <div
        className="hidden sm:block"
        style={{ zIndex: 1, position: "absolute", bottom: "0", right: "0" }}
      >
        <LoopersectiontworedrightBottom />
      </div>
      <div className="flex   flex-col justify-center items-start gap-4 h-full px-4">
        <h3 className="text-red-700 text-4xl">Kreative diagnostic system</h3>
        <p className="text-black text-xl mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
          mauris nec arcu sodales faucibus. Aenean hendrerit sagittis fermentum.
          Etiam tristique dolor malesuada ante gravida hendrerit. Proin sodales
          ante est, nec vestibulum ante faucibus at. Nam accumsan sodales tellus
          quis tempor.
        </p>
        <div className="w-full flex justify-end">
          <button
            onClick={() => Router.push(`/${locale}/products`)}
            className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            <span>See Products</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              <i className="text-lg">
                <FaArrowRight />
              </i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
