"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import LooperRedBottomRightContact from "../../../../assets/svg/LooperRedBottomRightContact.svg";
import LooperRedTopLeftContact from "../../../../assets/svg/LooperRedTopLeftContact.svg";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

function Product() {
  const t = useTranslations();
  const locale = useLocale();

  const images = [
    `https://picsum.photos/200/300?random=5`,
    `https://picsum.photos/200/300?random=6`,
    `https://picsum.photos/200/300?random=7`,
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const products = Array.from({ length: 10 }, (_, index) => ({
    name: `Product ${index + 1}`,
    images: [
      `https://picsum.photos/200/300?random=${index * 3 + 1}`,
      `https://picsum.photos/200/300?random=${index * 3 + 2}`,
      `https://picsum.photos/200/300?random=${index * 3 + 3}`,
    ],
  }));
  return (
    <div>
      <NavBar currentScreen={2} />
      <div className="min-h-screen relative flex flex-col justify-center items-center px-4 bg-cover bg-white">
        <div className="w-[90%] mt-20 flex justify-start">
          <h3 className=" flex justify-start  mb-10 items-center">
            <span className="text-gray-600 mr-2 text-4xl font-semibold">
              Products /{" "}
            </span>
            <span className="text-red-700 text-2xl font-medium">
              Maxicore-M Reusable Biopsy Gun
            </span>
          </h3>
        </div>

        <div className="w-[90%] flex justify-center items-center ">
          <div
            style={{ zIndex: 1, position: "absolute", top: "40", right: "0" }}
          >
            <LooperRedBottomRightContact />
          </div>
          <div style={{ zIndex: 1, position: "absolute", top: "0", left: "0" }}>
            <LooperRedTopLeftContact />
          </div>

          <div
            style={{ zIndex: 4 }}
            className="w-full flex justify-center items-start flex-col"
          >
            {/* ✅ Carousel with Embla Carousel starts here */}
            <div className="w-full h-[400px] bg-gray-300 relative">
              <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                  {images.map((src, index) => (
                    <div
                      className="min-w-full  h-full flex justify-center"
                      key={index}
                    >
                      <img
                        src={src}
                        alt={`Slide ${index}`}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow rounded-full z-10"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow rounded-full z-10"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            {/* ✅ Carousel ends here */}

            <Link
              href={`/${locale}/contact`}
              className="my-4 flex hover:underline text-red-700 text-lg font-medium justify-start items-center"
            >
              <span className="mr-2">Contact us for more information </span>
              <span>
                {" "}
                <FaArrowRightLong />
              </span>
            </Link>

            <span className="text-3xl text-gray-500 mb-6 font-bold">
              Maxicore-M Reusable Biopsy Gun
            </span>

            <p className="text-black mb-6 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li className="text-black text-sm font-semibold">
                The Maxicore-M Reusable Biopsy Gun is a reusable device that is
                used to obtain core biopsy samples from soft tissue.
              </li>
              <li className="text-black text-sm font-semibold">
                The device is designed to be used with disposable needles and is
                compatible with needles of different lengths and diameters.
              </li>
              <li className="text-black text-sm font-semibold">
                The Maxicore-M Reusable Biopsy Gun is
                <span className="text-red-700"> CE marked</span> and is
                manufactured in accordance with the requirements of the Medical
                Devices Directive 93/42/EEC.
              </li>
            </ul>

            <div className="overflow-x-auto w-full mt-6 text-black">
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Header 1
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Header 2
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Header 3
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Header 4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 1 Col 1
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 1 Col 2
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 1 Col 3
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 1 Col 4
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 2 Col 1
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 2 Col 2
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 2 Col 3
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 2 Col 4
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 3 Col 1
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 3 Col 2
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 3 Col 3
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Row 3 Col 4
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-6 w-full h-[1px] bg-gray-300"></div>

            <span className="text-3xl text-gray-500 my-6 font-bold border-b-4 border-red-700">
              Related Products
            </span>
            <div
              style={{ zIndex: 4 }}
              className="flex flex-wrap gap-8 justify-between items-center my-10"
            >
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  images={product.images}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
