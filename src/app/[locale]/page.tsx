"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import LogoKdsNavBarWeb from "../../assets/svg/LogoKdsNavBarWeb.svg";
import ProductsStore from "@/stores/products";
import CategoryStore from "@/stores/category";

export default function Home() {
  const Router = useRouter();
  const locale = useLocale();

  const {
    // Dataproducts,

    // loadingProducts,
    // errorGetProducts,

    // productDetails,
    successProductsNavBar,
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
    fetchDataProductsNavBar,
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
    // // loadingCategories,

    // // Subcategories
    // dataSubcategories,
    successSubcategoriesNavBar,
    successCategoriesNavBar,
    // loadingSubcategories,

    // // CRUD states for Categories

    // successAddCategory,

    // successDeleteCategory,

    // successPatchCategory,

    // CRUD states for Subcategories

    // successAddSubcategory,

    // successDeleteSubcategory,

    // successPatchSubcategory,

    // Methods
    // fetchCategories,
    // fetchSubcategories,
    fetchCategoriesNavBar,
    fetchSubcategoriesNavBar,

    // resetAllStates,
    // globalAlertNotification,
  } = CategoryStore();
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (
      successProductsNavBar &&
      successCategoriesNavBar &&
      successSubcategoriesNavBar
    ) {
      console.log("fetched succes");
      Router.replace(`/${locale}/home`);
    }
  }, [
    successProductsNavBar,
    successCategoriesNavBar,
    successSubcategoriesNavBar,
    Router,
    locale,
  ]);

  const fetchData: () => void = () => {
    const query = `/products/pagination`;

    console.log("use effect");
    fetchDataProductsNavBar(query);
    fetchCategoriesNavBar("/categories"); // Replace with your real endpoint
    fetchSubcategoriesNavBar("/subcategories/"); // Replace with your real endpoint
  };

  // useEffect(() => {
  //   // Set a timer to replace the route after 2 seconds (2000 milliseconds)
  //   const timer = setTimeout(() => {
  //     Router.replace(`/${locale}/home`);
  //   }, 2000);

  //   // Clean up the timer when the component unmounts or when dependencies change
  //   return () => clearTimeout(timer);
  // }, [Router, locale]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-8 pb-20 pt-16 gap-12 sm:px-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      {/* KDS Logo */}
      <LogoKdsNavBarWeb />

      {/* Animated Spinner and Text */}
      <div className="flex flex-col items-center animate-pulse">
        <div className="w-16 h-16 border-4 border-red-700 border-dashed rounded-full animate-spin"></div>
        <p className="mt-6 text-gray-500 text-xl font-semibold">
          Kreative Diagnostic System
        </p>
        <p className="text-sm text-gray-400 mt-2">Loading, please wait...</p>
      </div>

      {/* Footer */}
      <footer className="text-gray-300 text-xs animate-fade-in">
        &copy; {new Date().getFullYear()} KDS -All Rights Reserved
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
