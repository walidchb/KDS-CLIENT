"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const DocumentationComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const t = useTranslations("about_kds");

  return (
    <div>
      <NavBar currentScreen={3} />
      <div className="flex flex-col md:flex-row min-h-screen bg-[url('/BG.jpeg')]">
        {/* Sidebar */}
        <div className="w-full sm:w-full h-auto md:w-[450px] p-6 bg-gray-100">
          <div className="text-[#314155] bg-white p-6 flex flex-col justify-center items-start border-[0.5px] border-red-700 rounded-md h-full text-[18px]">
            <div className="h-full bg-white text-gray-800 sticky top-0 z-50 p-4">
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                <span>{t("summary")}</span>
                <button
                  className="md:hidden"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  {showSidebar ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </h2>
              <nav
                className={`space-y-2 ${
                  showSidebar ? "block" : "hidden md:block"
                }`}
              >
                <a
                  href="#apropos"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  📌 {t("about_kds")}
                </a>
                <a
                  href="#vision"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🌟 {t("our_vision")}
                </a>
                <a
                  href="#domaines"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🧪 {t("intervention_domains")}
                </a>
                <a
                  href="#accompagnement"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🤝 {t("supportsummary")}
                </a>
                <a
                  href="#bdcom"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🏢 {t("bdcomsummary")}
                </a>
                <a
                  href="#avenir"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🚀 {t("futuresummary")}
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 p-6 bg-white text-gray-800 ">
          {/* About */}
          <section id="apropos" className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
            <p className="leading-relaxed text-justify">
              {t("about.paragraph1")}
              <br />
              <br />
              {t("about.paragraph2")}
            </p>
          </section>

          {/* Vision */}
          <section id="vision" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("vision.title")}</h2>
            <ul className="list-disc ml-6 leading-relaxed">
              {t.raw("vision.list").map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-justify">{t("vision.paragraph")}</p>
          </section>

          {/* Domains */}
          <section id="domaines" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("domains.title")}</h2>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                {t("domains.biopsy.title")}
              </h3>
              <p className="text-justify">{t("domains.biopsy.text")}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                {t("domains.karyotyping.title")}
              </h3>
              <p className="text-justify">{t("domains.karyotyping.text")}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                {t("domains.qpcr.title")}
              </h3>
              <p className="text-justify">{t("domains.qpcr.text")}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                {t("domains.cytogenetics.title")}
              </h3>
              <p className="text-justify">{t("domains.cytogenetics.text")}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                {t("domains.lab_equipment.title")}
              </h3>
              <p className="text-justify">{t("domains.lab_equipment.text")}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                {t("domains.consumables.title")}
              </h3>
              <p className="text-justify">{t("domains.consumables.text")}</p>
            </div>
          </section>

          {/* Support */}
          <section id="accompagnement" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("support.title")}</h2>
            <ul className="list-disc ml-6 leading-relaxed">
              {t.raw("support.list").map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-justify">{t("support.paragraph")}</p>
          </section>

          {/* BDCOM */}
          <section id="bdcom" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("bdcom.title")}</h2>
            <p className="text-justify">{t("bdcom.text")}</p>
          </section>

          {/* Future */}
          <section id="avenir" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("future.title")}</h2>
            <p className="text-justify">{t("future.text")}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentationComponent;
