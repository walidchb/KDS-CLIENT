"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DocumentationComponent = ({}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  //   useEffect(() => {
  //     if (scrollTo) {
  //       const el = document.getElementById(scrollTo);
  //       if (el) el.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [scrollTo]);

  return (
    <div>
      <NavBar
        currentScreen={3}
        // categories={dataCategoriesNavBar || []}
        // products={Dataproducts?.data || []}
        // subCategories={dataSubcategoriesNavBar || []}
      />
      <div className="flex flex-col md:flex-row min-h-screen bg-[url('/BG.jpeg')]">
        {/* Sidebar */}
        <div className="  w-full sm:w-full h-auto  md:w-[450px]  p-6 bg-gray-100">
          <div className="text-[#314155] bg-white p-6 flex flex-col justify-center items-start border-[0.5px] border-red-700 rounded-md  h-full text-[18px]">
            <div className="h-full bg-white text-gray-800 sticky top-0 z-50 p-4">
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                <span>Sommaire</span>
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
                  📌 À propos de KDS
                </a>
                <a
                  href="#vision"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🌟 Notre Vision
                </a>
                <a
                  href="#domaines"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🧪 Domaines d’intervention
                </a>
                <a
                  href="#accompagnement"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🤝 Accompagnement
                </a>
                <a
                  href="#bdcom"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🏢 BDCOM
                </a>
                <a
                  href="#avenir"
                  className="block px-4 py-2 hover:text-white hover:bg-red-700 rounded"
                >
                  🚀 Vers l’avenir
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 p-6 bg-white text-gray-800 ">
          <section id="apropos" className="mb-12">
            <h1 className="text-4xl font-bold mb-4">À propos de KDS</h1>
            <p className="leading-relaxed text-justify">
              KDS est une entreprise algérienne spécialisée dans l’importation
              et la distribution de matériel médico-chirurgical, dispositifs
              médicaux, matériel de laboratoire et consommables scientifiques.
              Elle s’adresse aux professionnels de santé, laboratoires, centres
              de recherche et établissements hospitaliers.
              <br />
              <br />
              Filiale de BDCOM, fondée en 1998, KDS propose des solutions
              techniques de haute qualité, conformes aux normes internationales.
            </p>
          </section>

          <section id="vision" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
            <ul className="list-disc ml-6 leading-relaxed">
              <li>Fiabilité des équipements</li>
              <li>Accessibilité des technologies de pointe</li>
              <li>Soutien technique et humain</li>
            </ul>
            <p className="mt-4 text-justify">
              Nous plaçons l’écoute, le conseil, la formation et le suivi au
              cœur de notre démarche, pour devenir le partenaire de référence
              des professionnels exigeants.
            </p>
          </section>

          <section id="domaines" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nos domaines d’intervention
            </h2>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">🔬 Biopsie</h3>
              <p className="text-justify">
                Dispositifs précis pour prélèvements tissulaires, compatibles
                avec imagerie médicale. Aiguilles, trocarts, pistolets
                automatiques, kits stériles, etc.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">🧬 Caryotypage</h3>
              <p className="text-justify">
                Équipements pour l’analyse chromosomique (mitotique & prénatal),
                Synchroset, microscopes, réactifs spécialisés.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                ⚗️ PCR en temps réel (qPCR)
              </h3>
              <p className="text-justify">
                Solutions pour la génétique, hématopathologie, microbiologie.
                Thermocycleurs, kits qPCR, sondes et support technique.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">🧫 Cytogénétique</h3>
              <p className="text-justify">
                Milieux spécialisés, sondes FISH, microscopes fluorescence,
                chambre d’hybridation, etc. Pour hématologie, pathologies
                complexes, microdélétions.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                🧪 Matériel de laboratoire
              </h3>
              <p className="text-justify">
                Centrifugeuses, hottes, incubateurs, lecteurs de plaques,
                autoclaves, équipements ISO/CE avec SAV local.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">🧴 Consommables</h3>
              <p className="text-justify">
                Tubes PCR, pointes, lames, gants, sacs biohazard, protections
                stériles... Compatibles, fiables, conformes aux normes.
              </p>
            </div>
          </section>

          <section id="accompagnement" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Un accompagnement complet
            </h2>
            <ul className="list-disc ml-6 leading-relaxed">
              <li>Analyse des besoins</li>
              <li>Proposition de solutions techniques personnalisées</li>
              <li>Installation, formation, support technique</li>
              <li>Disponibilité continue des consommables & pièces</li>
            </ul>
            <p className="mt-4 text-justify">
              Nous plaçons la relation humaine au cœur de notre métier : chaque
              client est un partenaire.
            </p>
          </section>

          <section id="bdcom" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Une base solide : BDCOM</h2>
            <p className="text-justify">
              BDCOM, fondée en 1998, est la maison mère de KDS. Forte d’un
              réseau international solide et d’une expérience dans le matériel
              médical, elle a permis la création de KDS pour répondre aux
              nouveaux besoins technologiques du secteur.
            </p>
          </section>

          <section id="avenir" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Ensemble vers l’avenir</h2>
            <p className="text-justify">
              KDS aspire à rester à la pointe de l’innovation médicale en
              Algérie, avec une équipe compétente, un catalogue évolutif et un
              service client de proximité.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentationComponent;
