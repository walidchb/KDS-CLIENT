import React, { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

type ProductCardProps = {
  images: string[];
  name: string;
  scaled?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ images, name, scaled }) => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
  const locale = useLocale();

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayInterval.current = setInterval(scrollNext, 2000);
  }, [scrollNext]);

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      stopAutoplay();
    };
  }, [stopAutoplay]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <>
      <div
        onClick={() => router.push(`/${locale}/products/product`)}
        style={{ zIndex: 4 }}
        className={`relative ${
          scaled ? "w-96 h-80" : "w-80 h-70"
        }  cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-105`}
        onMouseEnter={() => {
          setIsHovered(true);
          startAutoplay();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          stopAutoplay();
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Embla Carousel */}
        <div className="w-full h-3/4" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div key={index} className="embla__slide min-w-full">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`absolute bottom-0 left-0 w-full flex items-center justify-between px-4 py-3 transition-all duration-300 ease-in-out ${
            isHovered ? "bg-red-500" : "bg-white"
          }`}
        >
          <span
            className={`text-lg font-semibold transition-colors ${
              isHovered ? "text-white" : "text-black"
            }`}
            style={{
              whiteSpace: "normal",
              overflow: "visible",
              wordBreak: "break-word",
            }}
          >
            {name}
          </span>
          {isHovered && (
            <FaChevronRight
              className={`w-6 h-6 transition-all transform ${
                isHovered ? "text-white translate-x-2" : "text-gray-700"
              }`}
            />
          )}
        </div>
      </div>

      {/* Floating Product Name */}
      {isHovered && (
        <div
          className="fixed z-50 bg-black text-white px-4 py-2 rounded shadow-lg pointer-events-none"
          style={{
            top: cursorPos.y + 20,
            left: cursorPos.x + 20,
            whiteSpace: "nowrap",
            maxWidth: "300px",
          }}
        >
          {name}
        </div>
      )}
    </>
  );
};

export default ProductCard;
