"use client";
import React, { useState, useEffect } from "react";
// import { useTranslations } from "next-intl";

import LooperRedBottomRightContact from "../../../assets/svg/LooperRedBottomRightContact.svg";
import LooperRedTopLeftContact from "../../../assets/svg/LooperRedTopLeftContact.svg";
// import "./style.css";
import NavBar from "@/components/NavBar";
import { CiSearch } from "react-icons/ci";
import ProductsStore from "@/stores/products";
import CategoryStore from "@/stores/category";
import Footer from "@/components/Footer";
import InputWithIcon from "@/components/InputWithIcon";
import Dropdown from "@/components/DropDown";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

function Products() {
  // const t = useTranslations();

  // const items = ["Apple", "Banana", "Cherry"];
  // const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // const handleClear = () => {
  //   console.log("Selection cleared!");
  // };

  // const products = Array.from({ length: 20 }, (_, index) => ({
  //   name: `Product ${index + 1}`,
  //   images: [
  //     `https://picsum.photos/200/300?random=${index * 3 + 1}`,
  //     `https://picsum.photos/200/300?random=${index * 3 + 2}`,
  //     `https://picsum.photos/200/300?random=${index * 3 + 3}`,
  //   ],
  // }));

  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
  //   null
  // );

  const [page, setpage] = useState(1);
  const searchParams = useSearchParams();

  const {
    // Categories
    // dataCategories,
    dataCategoriesNavBar,
    // // loadingCategories,
    // // Subcategories
    // // dataSubcategories,
    dataSubcategoriesNavBar,
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
    // fetchCategoriesNavBar,
    // // fetchSubcategories,
    // fetchSubcategoriesNavBar,
    // resetAllStates,
    // globalAlertNotification,
  } = CategoryStore();
  const {
    fetchDataCategories,
    dataCategories,

    fetchDataSubcategories,
    dataSubcategories,

    Dataproducts,

    loadingProducts,

    successPatch,

    successDelete,

    successAddProduct,
    fetchDataProducts,

    // globalAlertNotification,
  } = ProductsStore();

  const router = useRouter();
  // const searchParams = useSearchParams();
  // const pageParam = searchParams.get("page");

  const updateQueryParams = (
    key: string,
    value: string | null,
    resetPage: boolean = false
  ) => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    if (resetPage) {
      params.set("page", "1"); // Always reset page when a filter changes
    }

    router.push(`?${params.toString()}`);
  };

  const [name, setName] = useState("");

  const handleNameChange = (value: string | null) => {
    setName(value || "");
    // updateQueryParams("name", value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateQueryParams("name", name, true); // reset page
    }
  };

  const handleCategoryChange = (value: string | null) => {
    // const categoryId = dataCategories?.data.find(
    //   (category: { name: string }) => category.name === value
    // )?.id;
    // setSelectedCategory(categoryId);
    updateQueryParams("category", value, true); // reset page
  };

  const handleSubCategoryChange = (value: string | null) => {
    // const subCategoryId = dataSubcategories.find(
    //   (subcategory: { name: string }) => subcategory.name === value
    // )?.id;
    // setSelectedSubCategory(subCategoryId);
    updateQueryParams("subCategory", value, true); // reset page
  };

  const handlePageChange = (page: number) => {
    setpage(page);
    updateQueryParams("page", page.toString());
  };

  const cats = localStorage.getItem("categoriesNavBar")
    ? JSON.parse(localStorage.getItem("categoriesNavBar") || "[]")
    : dataCategoriesNavBar?.data || [];
  const subs = localStorage.getItem("subcategoriesNavBar")
    ? JSON.parse(localStorage.getItem("subcategoriesNavBar") || "[]")
    : dataSubcategoriesNavBar?.data || [];

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = searchParams.get("page");
    setpage(pageParam ? parseInt(pageParam) : 1);
    const categoryParam = searchParams.get("category");
    const subCategoryParam = searchParams.get("subCategory");
    const nameParam = searchParams.get("name");

    // setSelectedCategory(categoryParam || null);
    // setSelectedSubCategory(subCategoryParam || null);
    setName(nameParam || "");

    const page = pageParam ? parseInt(pageParam) : 1;

    const categoryId = cats?.find(
      (category: { name: string }) => category.name === categoryParam
    )?.id;
    const subCategoryId = subs?.find(
      (subcategory: { name: string }) => subcategory.name === subCategoryParam
    )?.id;

    const query = `/products/pagination?page=${page}${
      categoryParam ? `&categoryId=${categoryId}` : ""
    }${subCategoryParam ? `&subCategoryId=${subCategoryId}` : ""}${
      name ? `&name=${nameParam}` : ``
    } `;

    fetchDataProducts(query);
  }, [searchParams.toString()]);

  useEffect(() => {
    fetchDataCategories("/categories/pagination");
  }, []);

  useEffect(() => {
    if (searchParams.get("category")) {
      // console.log("cat", selectedCategory);
      const catId = dataCategoriesNavBar?.find(
        (category: { name: string }) =>
          category.name == searchParams.get("category")
      )?.id;
      fetchDataSubcategories(`/subcategories/${catId}/category`);
    }
  }, [searchParams.get("category")]);

  // useEffect(() => {
  //   console.log("data prdycsdk");
  //   console.log(Dataproducts.data);
  // }, [Dataproducts]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = searchParams.get("page");
    const categoryParam = searchParams.get("category");
    const subCategoryParam = searchParams.get("subCategory");

    // setSelectedCategory(categoryParam || null);
    // setSelectedSubCategory(subCategoryParam || null);

    const page = pageParam ? parseInt(pageParam) : 1;

    const categoryId = dataCategoriesNavBar?.find(
      (category: { name: string }) => category.name === categoryParam
    )?.id;
    const subCategoryId = dataSubcategoriesNavBar?.find(
      (subcategory: { name: string }) => subcategory.name === subCategoryParam
    )?.id;

    const query = `/products/pagination?page=${page}${
      categoryParam ? `&categoryId=${categoryId}` : ""
    }${subCategoryParam ? `&subCategoryId=${subCategoryId}` : ""}`;

    console.log("add", successAddProduct);
    console.log("delete", successDelete);
    console.log("patch", successPatch);
    if (successAddProduct || successDelete || successPatch) {
      console.log("kmlna");
      fetchDataProducts(query);
    }
    // if (successPatch) {
    // fetchDataProducts(query);}
  }, [successAddProduct, successPatch, successDelete]);

  // useEffect(() => {
  //   if (successAddProduct ) {
  //     fetchDataProducts(`/products/pagination?page=1&limit=20`);
  //     setAddEditModal(false);
  //   }
  // }, [successAddProduct, successPatch, successDelete]);

  return (
    <div>
      <NavBar
      // currentScreen={2}
      // categories={dataCategoriesNavBar || []}
      // products={Dataproducts?.data || []}
      // subCategories={dataSubcategoriesNavBar || []}
      />
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
                onKeyDown={handleKeyDown}
                // label="Search"
                icon={<CiSearch className="text-gray-600" />}
                placeholder={"search product"}
                type="text"
                id="email"
                name="email"
                className="min-w-[300px]  w-full sm:w-[48%] lg:w-[30%]"
                value={name}
                onChange={(e: { target: { value: string | null } }) =>
                  handleNameChange(e.target.value)
                } // Replace setValue with onChange
              />

              <Dropdown
                className="min-w-[300px]  w-full sm:w-[48%] lg:w-[30%]"
                placeholder={"Category"}
                items={
                  dataCategories?.data?.map(
                    (category: { name: string }) => category.name
                  ) || []
                }
                value={searchParams.get("category")}
                setValue={handleCategoryChange}
                // onClear={handleClear}
              />
              {(searchParams.get("category") ||
                searchParams.get("subCategory") ||
                dataSubcategories?.length != 0) && (
                <Dropdown
                  className="min-w-[300px]  w-full sm:w-[48%] lg:w-[30%]"
                  placeholder={"sous-catégorie"}
                  items={
                    dataSubcategories?.map(
                      (subcategory: { name: string }) => subcategory.name
                    ) || []
                  }
                  value={searchParams.get("subCategory")}
                  setValue={handleSubCategoryChange}
                  // onClear={handleClear}
                />
              )}
            </div>
            {loadingProducts && (
              <div
                style={{ zIndex: 4 }}
                className="flex flex-wrap gap-8 justify-center items-center mt-10"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map(
                  (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    product: any,
                    index: React.Key | null | undefined
                  ) => (
                    <div
                      key={index}
                      className={`relative w-80 h-70 cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-100 animate-pulse`}
                    >
                      <div className="w-full h-3/4 bg-gray-300 flex items-center justify-center">
                        <div className="w-2/3 h-2/3 bg-gray-200 rounded" />
                      </div>

                      <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-white flex items-center justify-between">
                        <div className="w-2/3 h-5 bg-gray-300 rounded" />
                        <div className="w-5 h-5 bg-gray-300 rounded-full" />
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
            {!loadingProducts && (
              <div
                style={{ zIndex: 4 }}
                className="flex flex-wrap gap-8 justify-center items-center mt-10"
              >
                {Dataproducts?.data?.map(
                  (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    product: any,
                    index: React.Key | null | undefined
                  ) => (
                    <ProductCard key={index} product={product} />
                  )
                )}
              </div>
            )}
            <div className="mt-10 mb-20 flex  w-full justify-end">
              <Pagination
                totalPages={Dataproducts?.meta?.total}
                itemsPerPage={20}
                currentPage={page}
                onPageChange={handlePageChange}
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
