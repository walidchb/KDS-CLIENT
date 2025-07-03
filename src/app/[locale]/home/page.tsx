"use client";
import React, { FC } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionOne from "@/components/SectionOneHome";
import SectionTwo from "@/components/SectionTwoHome";
import SectionThree from "@/components/SectionThreeHome";
import ProductsStore from "@/stores/products";
import CategoryStore from "@/stores/category";
// import { useEffect } from "react";
// import { EmblaOptionsType } from "embla-carousel";

// const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Home: FC = () => {
  const {
    // Dataproducts,
    // loadingProducts,
    // errorGetProducts,
    // productDetails,
    // successProducts,
    // errorDynamicTable,
    // successDynamicTable,
    // fetchDataDynamicTable,
    // errorGetProductDetails,
    // loadingProductDetails,
    // dataPatchProduct,
    // loadingPatch,
    // errorPatch,
    // successPatch,
    // dataDeleteProduct,
    // loadingDelete,
    // errorDelete,
    // successDelete,
    // dataAddProduct,
    // loadingAddProduct,
    // errorAddProduct,
    // successAddProduct,
    // fetchDataProducts,
    // fetchDataProductDetails,
    // resetProductDetails,
    // resetDynamicTable,
    // patchProduct,
    // deleteProduct,
    // addProduct,
  } = ProductsStore();

  const {
    // Categories
    // dataCategories,
    // dataCategoriesNavBar,
    // // loadingCategories,
    // // Subcategories
    // // dataSubcategories,
    // dataSubcategoriesNavBar,
    // // loadingSubcategories,
    // // // CRUD states for Categories
    // // successAddCategory,
    // // successDeleteCategory,
    // // successPatchCategory,
    // // CRUD states for Subcategories
    // // successAddSubcategory,
    // // successDeleteSubcategory,
    // // successPatchSubcategory,
    // // Methods
    // fetchCategories,
    // fetchSubcategories,
    // resetAllStates,
    // globalAlertNotification,
  } = CategoryStore();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData: () => void = () => {
  //   const query = `/products/pagination`;

  //   console.log("use effect");
  //   fetchDataProductsNavBar(query);
  //   fetchCategoriesNavBar("/categories"); // Replace with your real endpoint
  //   fetchSubcategoriesNavBar("/subcategories/"); // Replace with your real endpoint
  // };
  return (
    <div className="w-full ">
      <NavBar
        currentScreen={1}
        // categories={dataCategoriesNavBar || []}
        // products={Dataproducts?.data || []}
        // subCategories={dataSubcategoriesNavBar || []}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer showContact={true} />
    </div>
  );
};

export default Home;
