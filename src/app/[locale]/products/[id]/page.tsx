"use client";

import React, { useCallback, useEffect } from "react";
import { useLocale } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight, FaFileDownload } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import LooperRedBottomRightContact from "../../../../assets/svg/LooperRedBottomRightContact.svg";
import LooperRedTopLeftContact from "../../../../assets/svg/LooperRedTopLeftContact.svg";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductsStore from "@/stores/products";
import { IColumnType, Table } from "@/components/Table";
import TableLoader from "@/components/TableLoader";
// import ProductCard from "@/components/ProductCard";
import CategoryStore from "@/stores/category";
import { useTranslations } from "next-intl";

const Product = () => {
  const t = useTranslations();

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
    // loadingCategories,
    // Subcategories
    // dataSubcategories,
    // dataCategoriesNavBar,
    // dataSubcategoriesNavBar,
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
    // resetAllStates,
    // globalAlertNotification,
  } = CategoryStore();
  const locale = useLocale();
  const { id } = useParams();

  const {
    // Dataproducts,

    // loadingProducts,
    // errorGetProducts,

    productDetails,

    // errorDynamicTable,
    // successDynamicTable,
    // fetchDataDynamicTable,
    // errorGetProductDetails,
    loadingProductDetails,
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
    fetchDataProductDetails,
    resetProductDetails,
    // resetDynamicTable,
    // patchProduct,
    // deleteProduct,
    // addProduct,
  } = ProductsStore();

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData: () => void = () => {
  //   const query = `/products/pagination?page=${1}`;

  //   console.log("use effect");
  //   fetchDataProducts(query);
  //   fetchCategories("/categories"); // Replace with your real endpoint
  //   fetchSubcategories("/subcategories/"); // Replace with your real endpoint
  // };
  useEffect(() => {
    // Fetch product details and dynamic table data when the modal opens
    // and the product ID is available
    if (id) {
      fetchDataProductDetails(`/products/${id}/`);

      // fetchDataDynamicTable(`/products/${product}/dynamic`);
    }

    // Cleanup function to reset product details and dynamic table data
    return () => {
      resetProductDetails();
    };
  }, [id, fetchDataProductDetails]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const transformData = (data: Record<string, string | string[]>) => {
    const keys = Object.keys(data);
    const length = Array.isArray(data[keys[0]])
      ? (data[keys[0]] as string[]).length
      : 1;

    const result = Array.from({ length }).map((_, index) => {
      const row: Record<string, string> = {};
      keys.forEach((key) => {
        const value = data[key];
        row[key] = Array.isArray(value) ? value[index] : (value as string);
      });
      return row;
    });

    return result;
  };

  // const transformedData = transformData(
  //   productDetails?.DynamicProduct[0]
  //     ? productDetails?.DynamicProduct[0]?.fields
  //     : {}
  // );

  const generateColumns = (
    data: Record<string, string[]>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): IColumnType<any>[] => {
    return Object.keys(data).map((key) => ({
      key,
      title: key.charAt(0).toUpperCase() + key.slice(1),
      renderTitle: () => (
        <span className="text-center">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </span>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, row: any) => (
        <span className="text-center">{row[key]}</span>
      ),
      width: 200,
    }));
  };

  // if (loadingProductDetails) {
  //   return <div className="text-center py-10">Loading...</div>;
  // }

  async function downloadFile(url: string, filename: string) {
    const response = await fetch(url);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename; // 👈 your custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(link.href); // cleanup
  }

  const ProductDetailsSkeleton = () => {
    return (
      <div className="min-h-screen relative  flex flex-col justify-center items-center px-4 bg-white ">
        <div className="w-[90%] mt-20 flex justify-start">
          <div className="flex mb-10 items-center">
            <div className="bg-gray-300 h-10 w-40 rounded mr-4" />
            <div className="bg-gray-200 h-6 w-24 rounded" />
          </div>
        </div>

        <div className="w-[90%] flex justify-center items-center">
          <div className="absolute top-[40px] right-0 z-10">
            <LooperRedBottomRightContact />
          </div>
          <div className="absolute top-0 left-0 z-10">
            <LooperRedTopLeftContact />
          </div>

          <div className="z-20 w-full flex flex-col justify-center items-start space-y-4">
            <div className="w-full h-[400px] bg-gray-300 rounded-lg relative" />

            <div className="my-4 h-5 w-60 bg-gray-200 rounded" />

            <div className="text-3xl bg-gray-200 h-8 w-40 mb-4 rounded" />

            <div className="bg-gray-200 h-4 w-full max-w-[700px] rounded" />
            <div className="bg-gray-200 h-4 w-full max-w-[500px] rounded" />

            <ul className="list-disc pl-5 space-y-2 mt-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <li key={idx} className="text-black text-sm font-semibold">
                  <div className="h-4 w-64 bg-gray-200 rounded" />
                </li>
              ))}
            </ul>

            <div className="w-full mt-4 mb-8 space-y-2">
              {/* Simulated Table Skeleton */}
              <div className="bg-gray-200 h-8 w-full rounded" />
              <div className="bg-gray-100 h-6 w-full rounded" />
              <div className="bg-gray-100 h-6 w-full rounded" />
              <div className="bg-gray-100 h-6 w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar
      // currentScreen={2}
      // categories={dataCategoriesNavBar || []}
      // products={Dataproducts?.data || []}
      // subCategories={dataSubcategoriesNavBar || []}
      />
      {loadingProductDetails ? (
        ProductDetailsSkeleton()
      ) : (
        <div className="min-h-screen relative flex flex-col justify-center items-center px-4 bg-cover bg-white">
          <div className="w-[90%] mt-20 flex justify-start">
            <h3 className="flex justify-start mb-10 items-center">
              <span className="text-gray-600 mr-2 text-4xl font-semibold whitespace-nowrap">
                {t("Products")} /
              </span>

              <span
                className="text-red-700 text-2xl font-medium break-all"
                style={{
                  wordBreak: "break-all",
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {productDetails.name || t("No name available")}
              </span>

              {/* <span className="text-red-700 text-2xl font-medium">
                {productDetails.name || t("No name available")} jhgfujkajdhfa
                ioasdfuhsoijfghsdpfjgsdpfjgsdpfjsdp;fjbsd;kfjgsd;fj */}
            </h3>
          </div>

          <div className="w-[90%] flex justify-center items-center">
            <div className="absolute top-[40px] right-0 z-10">
              <LooperRedBottomRightContact />
            </div>
            <div className="absolute top-0 left-0 z-10">
              <LooperRedTopLeftContact />
            </div>

            <div className=" w-full flex mb-32 flex-col justify-center items-start">
              {productDetails?.ImageProduct?.length > 0 && (
                <div className="w-full h-[400px] bg-white relative">
                  <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full">
                      {productDetails?.ImageProduct.map(
                        (
                          src: { image: string | undefined },
                          index: React.Key | null | undefined
                        ) => (
                          <div
                            className="min-w-full  h-full flex justify-center"
                            key={index}
                          >
                            {/* <Image
                    src={src?.image}
                    alt={`Slide ${index}`}
                    className="rounded-lg object-cover"
                  /> */}
                            <img
                              src={src?.image}
                              alt={`Slide ${index}`}
                              className="rounded-lg object-cover"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow rounded-full z-10"
                  >
                    <FaChevronLeft className="text-gray-600" size={20} />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow rounded-full z-10"
                  >
                    <FaChevronRight className="text-gray-600" size={20} />
                  </button>
                </div>
              )}

              <Link
                href={`/${locale}/contact`}
                className="my-4 flex hover:underline text-red-700 text-lg font-medium justify-start items-center"
              >
                <span className="mr-2">Contact us for more information</span>
                <FaArrowRightLong />
              </Link>

              <span className="text-3xl text-gray-500 mb-6 font-bold">
                {productDetails?.name || t("No name available")}{" "}
                <span className="text-gray-500 whitespace-nowrap">
                  ({productDetails.ref || t("No Ref")}){/* </span> */}
                </span>
              </span>

              <p className="text-black mb-6 text-sm font-semibold">
                {productDetails?.description || t("No description available")}
              </p>

              <ul className="list-disc space-y-2 pl-5">
                {productDetails?.ListDescription?.map((feature, idx) => (
                  <li key={idx} className="text-black text-sm font-semibold">
                    {feature?.description}
                  </li>
                )) || <li>{t("No features listed")}</li>}
              </ul>

              <div className="w-full my-4">
                {loadingProductDetails ? (
                  <TableLoader />
                ) : productDetails?.DynamicProduct?.length !== 0 ? (
                  productDetails.DynamicProduct.map((item, index) => {
                    return (
                      <div key={index} className="w-full my-4">
                        <Table
                          data={transformData(item.fields)}
                          columns={generateColumns(item.fields)}
                        />
                      </div>
                    );
                  })
                ) : null}
              </div>

              {productDetails?.customImages?.filter(
                (img) => img.customImage.type === 1
              ).length > 0 && (
                <label className="block text-black font-bold my-8">
                  {t("Characteristics")}
                </label>
              )}
              {productDetails?.customImages?.filter(
                (img) => img.customImage.type === 1
              ).length > 0 && (
                <div className="flex text-black flex-wrap flex-row gap-x-16 gap-y-8 justify-start items-start">
                  {productDetails?.customImages
                    .filter((img) => img.customImage.type === 1)
                    .map((img, index) => (
                      <div
                        className="   flex flex-col items-center justify-center"
                        key={index}
                      >
                        <img
                          src={img.customImage.image}
                          alt={`Characteristic Image ${index}`}
                          className="rounded-lg h-60 w-60"
                        />
                        <div className="text-center mt-1">
                          {img.customImage.name}
                        </div>
                      </div>
                    ))}{" "}
                </div>
              )}

              {/* display steps images */}

              {productDetails?.customImages?.filter(
                (img) => img.customImage.type === 3
              ).length > 0 && (
                <label className="block text-black font-bold my-8">
                  {t("Steps")}
                </label>
              )}
              {productDetails?.customImages?.filter(
                (img) => img.customImage.type === 3
              ).length > 0 && (
                <div className="flex text-black flex-wrap flex-row gap-x-16 gap-y-8 justify-start items-start">
                  {productDetails?.customImages
                    .filter((img) => img.customImage.type === 3)
                    .map((img, index) => (
                      <div
                        className="   flex flex-col items-center justify-center"
                        key={index}
                      >
                        <img
                          src={img.customImage.image}
                          alt={`Characteristic Image ${index}`}
                          className="rounded-lg h-60 w-60"
                        />
                        {/* <div className="text-center mt-1">
                          {img.customImage.name}
                        </div> */}
                      </div>
                    ))}{" "}
                </div>
              )}

              {/* machine images */}
              {productDetails?.customImages?.filter(
                (img) => img.customImage.type === 1
              ).length > 0 && (
                <label className="block text-black font-bold my-8">
                  {t("Validated On")}
                </label>
              )}
              {productDetails?.customImages?.length > 0 && (
                <div className="flex text-black flex-wrap flex-row gap-x-16 gap-y-8 justify-start items-start">
                  {productDetails?.customImages
                    .filter((img) => img.customImage.type === 2)
                    .map((img, index) => (
                      <div
                        className="   flex flex-col items-center justify-center"
                        key={index}
                      >
                        <img
                          src={img.customImage.image}
                          alt={`Characteristic Image ${index}`}
                          className="rounded-lg h-60 w-60"
                        />
                        <div className="text-center mt-1">
                          {img.customImage.name}
                        </div>
                      </div>
                    ))}{" "}
                </div>
              )}

              <div className="flex text-black hover:text-blue-400 w-full justify-end gap-4 mt-6">
                {/* <label className="block  font-bold my-8">Technical Sheet</label> */}
                {productDetails?.technicalSheet ? (
                  <div
                    onClick={() => {
                      if (typeof productDetails.technicalSheet === "string") {
                        downloadFile(
                          productDetails.technicalSheet,
                          `${productDetails.name}-technical-sheet.pdf`
                        );
                      }
                    }}
                    className="flex flex-col items-center space-x-2 cursor-pointer"
                  >
                    <FaFileDownload className="w-12 h-12 mb-2" />
                    <span className="hover:underline">
                      {t("Technical Sheet")}
                    </span>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    {t("No technical sheet available")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Product;
