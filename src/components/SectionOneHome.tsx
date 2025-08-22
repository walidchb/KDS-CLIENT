"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/Biopsie-medium.jpg",
  "/Caryotype-medium.jpg",
  "/cytogénétique-medium.jpg",
  "/PCR-medium.jpg",
];

const SectionOne = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto play effect
  useEffect(() => {
    if (!embla) return;
    const interval = setInterval(() => {
      embla.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [embla]);

  // Update selected index
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative w-full h-[500px] ">
      <div className="overflow-hidden h-full relative" ref={emblaRef}>
        <div className="flex w-full h-full">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0} // Optimize loading for the first image
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => embla && embla.scrollPrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full "
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={() => embla && embla.scrollNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full "
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => embla && embla.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === index ? "bg-red-700" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
