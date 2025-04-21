"use client";
import React, { useState } from "react";
// import { useTranslations } from "next-intl";

import LooperRedBottomRightContact from "../../../assets/svg/LooperRedBottomRightContact.svg";
import LooperRedTopLeftContact from "../../../assets/svg/LooperRedTopLeftContact.svg";
// import "./style.css";
import NavBar from "@/components/NavBar";
import { CiSearch } from "react-icons/ci";

import Footer from "@/components/Footer";
import InputWithIcon from "@/components/InputWithIcon";
import Dropdown from "@/components/DropDown";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";

function Products() {
  // const t = useTranslations();

  const items = ["Apple", "Banana", "Cherry"];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClear = () => {
    console.log("Selection cleared!");
  };

  const products = Array.from({ length: 20 }, (_, index) => ({
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
      <div className="min-h-screen relative flex flex-col justify-center items-center px-4   bg-cover  bg-white">
        <div className="w-[90%] mt-20  flex justify-start ">
          <h3 className="text-gray-600 mb-10 text-4xl font-semibold">
            Products
          </h3>
        </div>
        <div className="w-[90%]  flex justify-center items-center">
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
            className="w-full flex justify-center items-center flex-col "
          >
            <div
              style={{ zIndex: 48 }}
              className="w-full flex flex-wrap gap-2 justify-start items-center"
            >
              <InputWithIcon
                icon={<CiSearch className="text-gray-600" />}
                placeholder={"search product"}
                type="text"
                id="email"
                name="email"
                className="min-w-[300px]  w-full sm:w-[48%] lg:w-[30%]"
              />

              <Dropdown
                className="min-w-[300px]  w-full sm:w-[48%] lg:w-[30%]"
                placeholder={"category"}
                items={items}
                value={selectedItem}
                setValue={setSelectedItem}
                onClear={handleClear}
              />

              <Dropdown
                className="min-w-[300px]  w-full sm:w-[48%] lg:w-[30%]"
                placeholder={"sub-category"}
                items={items}
                value={selectedItem}
                setValue={setSelectedItem}
                onClear={handleClear}
              />
            </div>
            <div
              style={{ zIndex: 4 }}
              className="flex flex-wrap gap-8 justify-center items-center mt-10"
            >
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  images={product.images}
                />
              ))}
            </div>
            <div className="mt-10 mb-20 flex  w-full justify-end">
              <Pagination
                totalPages={20}
                itemsPerPage={10}
                currentPage={1}
                onPageChange={() => console.log("object")}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
