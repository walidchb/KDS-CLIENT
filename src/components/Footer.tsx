"use client";
import React, { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslations, useLocale } from "next-intl";

import LogoKdsFooter from "../assets/svg/LogoKdsFooter.svg";
import Loopergreyleftfooter from "../assets/svg/Loopergreyleftfooter.svg";
import LooperRedRightFooter from "../assets/svg/LooperRedRightFooter.svg";
import { VscSend } from "react-icons/vsc";
import { useRouter } from "next/navigation";

// import LogoKdsFooterWeb from "../assets/svg/LogoKdsFooterWeb.svg";
// import LogoKdsFooterMobile from "../assets/svg/LogoKdsFooterMobile.svg";
import { FiPhone } from "react-icons/fi";

// import { useTranslations } from "next-intl";

interface FooterProps {
  showContact?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showContact }) => {
  const t = useTranslations();
  const router = useRouter();

  const locale = useLocale();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerSections = [
    {
      title: t("About us"),
      items: [t("KDS about paragraph")],
    },
    {
      title: t("Contacts"),
      items: [
        <div className="flex justify-start items-center" key="ContactsOne">
          <FiPhone className="" />{" "}
          <span className="ml-2 text-gray-600 font-medium">
            {t("Phone numbers")}
          </span>
        </div>,
        "+213 (0) 775 248 016",
        "+213 (0) 23 602 214",
        <div className="flex justify-start items-center" key="ContactsOne">
          <FiPhone />{" "}
          <span className="ml-2 text-gray-600 font-medium">
            {t("Fax number")}
          </span>
        </div>,
        "+213 (0) 22 602 213",
      ],
    },
    {
      title: "",
      items: [
        <div className="flex justify-start items-center" key="ContactsOne">
          <IoLocationOutline />{" "}
          <span className="ml-2 text-gray-600 font-medium">
            {t("Localisation")}
          </span>
        </div>,
        t("Rue Omar Boursas Section 21 iLot 59 Local N01 RDC Kouba - Alger"),
      ],
    },
    {
      title: "",
      items: [
        <div className="flex justify-start items-center" key="ContactsOne">
          <MdOutlineEmail />{" "}
          <span className="ml-2 text-gray-600 font-medium">{t("E-mail")}</span>
        </div>,
        "cmkdslabs@gmail.com",
      ],
    },
  ];

  return (
    <footer className="relative p-4 bg-gray-200 sm:p-6 ">
      <div style={{ zIndex: 1, position: "absolute", bottom: "0", left: "0" }}>
        <Loopergreyleftfooter />
      </div>
      <div style={{ zIndex: 1, position: "absolute", bottom: "0", right: "0" }}>
        <LooperRedRightFooter />
      </div>
      {showContact && (
        <div className="absolute right-0 -top-[35px] w-full flex justify-center items-center">
          <div className="flex w-[90%] sm:w-[80%] justify-between items-center px-4 sm:px-20 h-[70px] rounded-xl bg-gray-600 text-white">
            <h3 className="text-md sm:text-xl">{t("Contact us via e-mail")}</h3>
            <button
              onClick={() => router.push(`/${locale}/contact`)}
              className="flex cursor-pointer items-center gap-2 px-2 sm:px-6 py-1 sm:py-3 bg-red-700 text-white rounded-full hover:bg-gray-700 transition-all duration-300"
            >
              <span>{t("Contact us")}</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                <i className="text-lg">
                  <VscSend />
                </i>
              </span>
            </button>
          </div>
        </div>
      )}
      <div style={{ zIndex: 2 }} className="mx-auto max-w-screen-xl">
        <div className="flex justify-around items-start flex-wrap">
          <div className="  flex justify-center items-center min-w-[300px] ">
            <LogoKdsFooter />
          </div>
          <div
            className={`w-[${(
              windowWidth - 300
            ).toString()}px] flex flex-wrap justify-center md:justify-start items-start gap-8 `}
          >
            {footerSections.map((section, index) => (
              <div className="mt-[30px] w-[200px]" key={index}>
                {section.title != "" ? (
                  <h2 className="mb-6 text-lg font-semibold text-red-700 uppercase ">
                    {section.title}
                  </h2>
                ) : (
                  <h2 className="oppacity-0 mb-11 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    {section.title}
                  </h2>
                )}
                <ul className="text-black ">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2 last:mb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[30px] flex w-full  items-center justify-center">
          <span className="text-sm text-red-500 sm:text-center ">
            © 2025{" "}
            <a href="https://flowbite.com" className="hover:underline">
              KDS
            </a>
            {t("All rights")}{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
