"use client";
import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import LooperRedTopLeftSectionThree from "../assets/svg/LooperRedTopLeftSectionThree.svg";
import LooperGreyTopRightSectionThree from "../assets/svg/LooperGreyTopRightSectionThree.svg";

const ScaleCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: false,
  });

  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);

  const findCenteredSlide = useCallback(() => {
    if (!emblaApi) return;

    const viewport = emblaApi.rootNode().getBoundingClientRect();
    const slides = emblaApi.slideNodes();

    let closestIndex = 0;
    let smallestDistance = Infinity;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const viewportCenter = viewport.left + viewport.width / 2;
      const distance = Math.abs(viewportCenter - slideCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setCenteredIndex(closestIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Scroll to the middle product
    const middleIndex = Math.floor(products.length / 2);
    emblaApi.scrollTo(middleIndex);

    // Setup listeners after initial scroll
    findCenteredSlide();
    emblaApi.on("select", findCenteredSlide);
    emblaApi.on("scroll", findCenteredSlide);
    emblaApi.on("resize", findCenteredSlide);
  }, [emblaApi, findCenteredSlide]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const products = Array.from({ length: 20 }, (_, index) => ({
    name: `Product ${index + 1}`,
    images: [
      `https://picsum.photos/200/300?random=${index * 3 + 1}`,
      `https://picsum.photos/200/300?random=${index * 3 + 2}`,
      `https://picsum.photos/200/300?random=${index * 3 + 3}`,
    ],
  }));

  return (
    <div className="relative bg-white overflow-hidden flex justify-center items-center max-w-[100vw] h-[600px]">
      <div
        className="-mt-14"
        style={{ zIndex: 1, position: "absolute", top: "0", left: "0" }}
      >
        <LooperRedTopLeftSectionThree />
      </div>
      <div
        className="-mt-14"
        style={{ zIndex: 1, position: "absolute", top: "0", right: "0" }}
      >
        <LooperGreyTopRightSectionThree />
      </div>
      {/* Prev Button */}
      <button onClick={scrollPrev} className=" z-20 hidden md:block">
        <FaChevronLeft size={20} className="text-gray-600" />
      </button>

      {/* Carousel */}
      <div className="flex flex-col items-center justify-center w-[90%]  h-full">
        <p className="text-4xl font-bold text-center mb-12">
          <span className="text-gray-700">Our</span>{" "}
          <span className="text-red-700">Products</span>{" "}
        </p>
        <div
          style={{ zIndex: 10 }}
          className="overflow-hidden w-[100%]"
          ref={emblaRef}
        >
          <div className="flex">
            {products.map((product, index) => (
              <div
                key={index}
                className={`
                flex justify-center items-start
                flex-shrink-0
                px-2 
                transition-transform duration-300 ease-in-out 
                ${
                  index === centeredIndex
                    ? "scale-[99%] z-10"
                    : "scale-80 opacity-100"
                }
                w-[70%] sm:w-1/2 md:w-1/3
              `}
              >
                <ProductCard name={product.name} images={product.images} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <button onClick={scrollNext} className=" z-20 hidden md:block">
        <FaChevronRight size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

export default ScaleCarousel;
