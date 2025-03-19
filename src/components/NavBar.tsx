"use client";
import React from "react";
import { usePathname } from "next/navigation";
import FrIcon from "../assets/svg/fr.svg";
import EnIcon from "../assets/svg/uk.svg";
import LogoKdsNavBarWeb from "../assets/svg/LogoKdsNavBarWeb.svg";
import LogoKdsNavBarMobile from "../assets/svg/LogoKdsNavBarMobile.svg";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface NavBarProps {
  currentScreen: number;
}

const NavBar: React.FC<NavBarProps> = ({ currentScreen }) => {
  const t = useTranslations();
  const pathName = usePathname();
  const locale = useLocale();
  //   const [navigation, setNavigation] = useState([
  //     { name: t("Home"), href: `/${locale}/home`, current: currentScreen === 1 },
  //     {
  //       name: t("Products"),
  //       href: `/${locale}/products`,
  //       current: currentScreen === 2,
  //     },
  //     {
  //       name: t("About us"),
  //       href: `/${locale}/aboutUs`,
  //       current: currentScreen === 3,
  //     },
  //     {
  //       name: t("Contact us"),
  //       href: `/${locale}/contact`,
  //       current: currentScreen === 4,
  //     },
  //   ]);

  const navigation = [
    { name: t("Home"), href: `/${locale}/home`, current: currentScreen === 1 },
    {
      name: t("Products"),
      href: `/${locale}/products`,
      current: currentScreen === 2,
    },
    {
      name: t("About us"),
      href: `/${locale}/aboutUs`,
      current: currentScreen === 3,
    },
    {
      name: t("Contact us"),
      href: `/${locale}/contact`,
      current: currentScreen === 4,
    },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-100">
      {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> */}
      <div className="relative px-8 flex h-[70px] sm:h-[100px] items-center justify-between">
        <div className="absolute inset-y-0 left-4 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group cursor-pointer relative inline-flex items-center justify-center rounded-md p-2 text-red-400 hover:bg-red-700 hover:text-white ">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <FaBars
              aria-hidden="true"
              className="block size-6 group-data-open:hidden"
            />
            <FaTimes
              aria-hidden="true"
              className="hidden size-6 group-data-open:block"
            />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-end sm:justify-between ">
          <div className="hidden sm:flex shrink-0 items-center">
            <LogoKdsNavBarWeb />
          </div>
          <div className="sm:hidden flex shrink-0 items-center">
            <LogoKdsNavBarMobile />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? " text-black border-b-2 border-red-700"
                      : "text-black  hover:text-red-700",
                    " px-3 py-2  font-medium text-md"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <Link
                className="text-black hover:text-blue-500 hover:underline flex justify-center items-center"
                href={`/${locale === "en" ? "fr" : "en"}${pathName.slice(3)}`}
              >
                <div className="rounded-full flex justify-center items-center overflow-hidden h-[30px] w-[30px]">
                  {locale === "en" ? <FrIcon /> : <EnIcon />}{" "}
                </div>
                <span className="ml-2">{locale === "en" ? "Fr" : "Eng"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <DisclosurePanel
        style={{ zIndex: 200 }}
        className="bg-white w-full absolute left-0 top-[70px] sm:hidden"
      >
        <div className="flex flex-col w-full  items-start justify-center space-y-1 px-6 pt-2 pb-3">
          {navigation.map((item) => (
            <div key={item.name} className="w-full">
              <DisclosureButton
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? " text-black border-b-2 border-red-700"
                    : "text-black  hover:text-red-700",
                  "  py-2  text-sm font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
              <div className="w-full h-[0.5px] my-4 bg-gray-200"></div>
            </div>
          ))}
          <Link
            className="text-black hover:text-blue-500 hover:underline flex justify-center items-center"
            href={`/${locale === "en" ? "fr" : "en"}${pathName.slice(3)}`}
          >
            <div className="rounded-full flex justify-center items-center overflow-hidden h-[30px] w-[30px]">
              {locale === "en" ? <FrIcon /> : <EnIcon />}{" "}
            </div>
            <span className="ml-2">{locale === "en" ? "Fr" : "Eng"}</span>
          </Link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
