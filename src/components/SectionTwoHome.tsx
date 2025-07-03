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
          Spécialisés dans l’importation et la distribution de matériel
          médico-chirurgical et de dispositifs médicaux, nous accompagnons les
          professionnels de santé avec des solutions fiables, innovantes et
          adaptées à leurs besoins. Nos domaines d’expertise couvrent un large
          éventail, allant de la biopsie, la PCR en temps réel, le caryotype et
          la cytogénétique, jusqu’à d’autres secteurs clés du diagnostic et de
          la recherche biomédicale. Grâce à une veille constante et une
          sélection rigoureuse de nos produits, nous nous engageons à garantir
          performance, sécurité et qualité dans chaque équipement proposé.
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
