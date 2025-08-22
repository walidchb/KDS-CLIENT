"use client";
import React, { useState } from "react";
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
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import ProductsStore from "@/stores/products";
import CategoryStore from "@/stores/category";

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
  Category: Category;
}

interface ProductType {
  id: string;
  name: string;
  ref: string;
  specName: string;
  SubCategory: SubCategory | null;
  ImageProduct: { image: string }[];
}

interface NavBarProps {
  currentScreen?: number;
  // categories: Category[];
  // subCategories: SubCategory[];
  // products: ProductType[];
}

interface StaticNavItem {
  name: string;
  href: string;
  current: boolean;
  isProductCategory?: false;
}

interface SubCategoryItem {
  id: string;
  name: string;
  category: { id: string; name: string };
}

interface ProductNavItem {
  id: string;
  name: string;
  isProductCategory: true;
  subCategories: SubCategoryItem[];
  productsBySub?: Record<
    string,
    { id: string; name: string; products: ProductType[] }
  >;
}

type NavItem = StaticNavItem | ProductNavItem;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function groupCategories(
  cats: Category[],
  subs: SubCategory[]
): ProductNavItem[] {
  return cats.map((cat) => ({
    id: cat.id,
    name: cat.name,
    isProductCategory: true,
    subCategories: subs
      .filter((s) => s.Category.id === cat.id)
      .map((s) => ({
        id: s.id,
        name: s.name,
        category: { id: cat.id, name: cat.name },
      })),
  }));
}

function groupProductsBySubCategory(products: ProductType[]) {
  return products.reduce((acc, prod) => {
    const sub = prod.SubCategory;
    if (sub) {
      if (!acc[sub.id]) {
        acc[sub.id] = { id: sub.id, name: sub.name, products: [] };
      }
      if (acc[sub.id].products.length < 5) {
        acc[sub.id].products.push(prod);
      }
    }
    return acc;
  }, {} as Record<string, { id: string; name: string; products: ProductType[] }>);
}

const NavBar: React.FC<NavBarProps> = ({ currentScreen }) => {
  const {
    // Dataproducts,
    DataproductsNavBar,
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
    dataCategoriesNavBar,
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
    // fetchSubcategories,

    // resetAllStates,
    // globalAlertNotification,
  } = CategoryStore();
  const t = useTranslations();
  const locale = useLocale();
  const pathName = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [toggledDropdown, setToggledDropdown] = useState<string | null>(null);

  const productslocal = localStorage.getItem("productsNavBar")
    ? JSON.parse(localStorage.getItem("productsNavBar") || "[]")
    : DataproductsNavBar?.data || [];

  const productNavItems = groupCategories(
    localStorage.getItem("categoriesNavBar")
      ? JSON.parse(localStorage.getItem("categoriesNavBar") || "[]")
      : dataCategoriesNavBar?.data || [],
    localStorage.getItem("subcategoriesNavBar")
      ? JSON.parse(localStorage.getItem("subcategoriesNavBar") || "[]")
      : dataSubcategoriesNavBar?.data || []
  );
  const productsBySub = groupProductsBySubCategory(productslocal.data);

  productNavItems.forEach((cat) => {
    cat.productsBySub = {};
    cat.subCategories.forEach((sub) => {
      if (productsBySub[sub.id]) {
        cat.productsBySub![sub.id] = productsBySub[sub.id];
      }
    });
  });

  const staticNav: StaticNavItem[] = [
    { name: t("Home"), href: `/${locale}/home`, current: currentScreen === 1 },
    // {
    //   name: t("Products"),
    //   href: `/${locale}/products`,
    //   current: currentScreen === 2,
    // },
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

  const navigation: NavItem[] = [
    ...staticNav.slice(0, 1),
    ...productNavItems,
    ...staticNav.slice(1, 3),
  ];

  return (
    <Disclosure as="nav" className="bg-gray-100" style={{ zIndex: 200 }}>
      <div className="relative px-8 flex h-[70px] lg:h-[100px] items-center justify-between">
        <div className="absolute inset-y-0 left-4 flex items-center lg:hidden">
          <DisclosureButton className="group inline-flex items-center p-2 text-red-400 hover:bg-red-700 hover:text-white rounded-md">
            <span className="sr-only">Open main menu</span>
            <FaBars className="block group-data-open:hidden" />
            <FaTimes className="hidden group-data-open:block" />
          </DisclosureButton>
        </div>

        <div className="flex flex-1 items-center justify-end lg:justify-between">
          <div className="hidden lg:flex">
            <LogoKdsNavBarWeb />
          </div>
          <div className="lg:hidden">
            <LogoKdsNavBarMobile />
          </div>

          <div className="hidden lg:ml-6 lg:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <div
                  key={
                    "isProductCategory" in item && item.isProductCategory
                      ? item.id
                      : item.name
                  }
                  className="relative"
                  onMouseEnter={() =>
                    "isProductCategory" in item &&
                    item.isProductCategory &&
                    setOpenDropdown(item.name)
                  }
                  onMouseLeave={() =>
                    "isProductCategory" in item &&
                    item.isProductCategory &&
                    setOpenDropdown(null)
                  }
                >
                  {"isProductCategory" in item && item.isProductCategory ? (
                    <button className="px-3  text-md flex items-center text-black hover:text-red-700">
                      {item.name}
                      <FaChevronDown className="ml-2 text-xs" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        "px-3 py-2 font-medium text-md",
                        item.current
                          ? "border-b-2 border-red-700 text-black"
                          : "hover:text-red-700 text-black"
                      )}
                    >
                      {item.name}
                    </a>
                  )}

                  {"isProductCategory" in item &&
                    item.isProductCategory &&
                    openDropdown === item.name && (
                      <div className="absolute left-0 w-[300px] bg-white rounded-md shadow-lg z-10 p-4">
                        {item.subCategories.map((sub) => {
                          const isOpen = toggledDropdown === sub.id;
                          const hasProducts =
                            item.productsBySub?.[sub.id]?.products.length;
                          return (
                            <div key={sub.id} className="mb-4 border-b pb-2">
                              <button
                                onClick={() =>
                                  setToggledDropdown((prev) =>
                                    prev === sub.id ? null : sub.id
                                  )
                                }
                                className="w-full flex  text-black justify-between text-left  hover:text-red-700 hover:underline"
                              >
                                <span>{sub.name}</span>
                                <FaChevronDown
                                  className={`inline ml-2 text-xs transition-transform duration-200 ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {isOpen && (
                                <div className="mt-2 space-y-2">
                                  {hasProducts ? (
                                    item.productsBySub?.[sub.id]?.products.map(
                                      (prod) => (
                                        <Link
                                          key={prod.id}
                                          href={`/${locale}/products/${prod.id}`}
                                          className="flex items-center space-x-2"
                                        >
                                          {prod.ImageProduct[0]?.image && (
                                            <img
                                              src={prod.ImageProduct[0].image}
                                              alt={prod.name}
                                              className="w-8 h-8 object-cover rounded"
                                            />
                                          )}
                                          <span className="text-sm text-black hover:underline">
                                            {prod.specName || prod.name}{" "}
                                          </span>
                                        </Link>
                                      )
                                    )
                                  ) : (
                                    <span className="text-xs text-gray-500">
                                      {t("No products")}
                                    </span>
                                  )}
                                </div>
                              )}
                              {hasProducts && isOpen && (
                                <Link
                                  href={`/${locale}/products?category=${sub.category.name}&&subCategory=${sub.name}`}
                                  className="text-xs mt-2 text-blue-500 hover:underline"
                                >
                                  {t("View all products in")} {sub.name}
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                </div>
              ))}
              <Link
                href={`/${locale === "en" ? "fr" : "en"}${pathName.slice(3)}`}
                className="flex items-center text-black hover:text-blue-500 hover:underline"
              >
                <div className="h-7 w-7 rounded-full overflow-hidden flex">
                  {locale === "en" ? <FrIcon /> : <EnIcon />}
                </div>
                <span className="ml-2">{locale === "en" ? "Fr" : "Eng"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel
        style={{ zIndex: 200 }}
        className="bg-white w-full absolute left-0 top-[70px]  lg:hidden"
      >
        <div className="flex flex-col w-full  items-start justify-center space-y-1 px-6 pt-2 pb-3">
          {navigation.map((item) => {
            const isProductCategory =
              "isProductCategory" in item && item.isProductCategory;
            return (
              <div
                key={isProductCategory ? item.id : item.name}
                className="w-full"
              >
                {isProductCategory ? (
                  <div className="w-full">
                    <button
                      onClick={() =>
                        setToggledDropdown((prev) =>
                          prev === item.id ? null : item.id
                        )
                      }
                      className="w-full text-left py-2 font-medium text-black flex justify-between items-center"
                    >
                      <span>{item.name}</span>
                      <FaChevronDown
                        className={`ml-2 transition-transform duration-200 ${
                          toggledDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Subcategories dropdown */}
                    {toggledDropdown === item.id && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subCategories.map((sub) => {
                          const hasProducts =
                            item.productsBySub?.[sub.id]?.products.length;
                          const isSubOpen = openDropdown === sub.id;

                          return (
                            <div key={sub.id} className="mb-4">
                              <button
                                onClick={() =>
                                  setOpenDropdown((prev) =>
                                    prev === sub.id ? null : sub.id
                                  )
                                }
                                className="w-full text-left text-sm font-medium text-gray-800 flex justify-between items-center"
                              >
                                <span>{sub.name}</span>
                                <FaChevronDown
                                  className={`ml-2 transition-transform duration-200 ${
                                    isSubOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {isSubOpen && (
                                <div className="ml-4 mt-2 space-y-1">
                                  {hasProducts ? (
                                    item.productsBySub?.[sub.id]?.products.map(
                                      (prod) => (
                                        <Link
                                          key={prod.id}
                                          href={`/${locale}/products/${prod.id}`}
                                          className="flex items-center space-x-2 text-sm text-black hover:underline"
                                        >
                                          {prod.ImageProduct[0]?.image && (
                                            <img
                                              src={prod.ImageProduct[0].image}
                                              alt={prod.name}
                                              className="w-6 h-6 object-cover rounded"
                                            />
                                          )}
                                          <span>
                                            {prod.specName || prod.name}
                                          </span>
                                        </Link>
                                      )
                                    )
                                  ) : (
                                    <span className="text-xs text-gray-500">
                                      No products
                                    </span>
                                  )}
                                  {hasProducts && (
                                    <Link
                                      href={`/${locale}/products?category=${sub.category.name}&&subCategory=${sub.name}`}
                                      className="text-xs text-blue-500 hover:underline mt-2 inline-block"
                                    >
                                      {t("View all products in")} {sub.name}
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    <div className="w-full h-[0.5px] my-4 bg-gray-200"></div>
                  </div>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-black border-b-2 border-red-700"
                          : "text-black hover:text-red-700",
                        "py-2 block font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                    <div className="w-full h-[0.5px] my-4 bg-gray-200"></div>
                  </>
                )}
              </div>
            );
          })}

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
