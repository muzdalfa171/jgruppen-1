import React from "react";
import Image from "next/image";
import Head from "next/head";

const Underhall = () => {
  return (
    <div className="pt-40 container w-full mx-auto">
      <Head>
        <title>Underhåll - JGruppen</title>
        <link
          rel="canonical"
          href="https://jgruppen.se/underhall"
          key="canonical"
        />
        <meta
          name="description"
          content="JGruppen offers expert maintenance and support services for material handling systems to ensure smooth operation and efficiency."
        />
        <meta
          name="keywords"
          content="underhåll, maintenance, JGruppen, material handling, support services"
        />
      </Head>

      {/* First Section - Installationer */}
      <section className="flex md:flex-row flex-col p-6 sm:p-12 w-full">
        <div className="bg-white dark:bg-gray-900 md:w-full w-full py-[3rem] relative">
          <div
            className="absolute md:h-[16rem] -top-6 -left-6 
              h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] dark:border-[#2a334e] z-10"
          ></div>
          <div className="relative bg-white dark:bg-gray-900 z-20 p-2 sm:px-5 w-full">
            <div className="flex flex-col w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a536e] dark:text-[#8a93ae]">
                Service och underhåll
              </h2>

              <h4 className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-semibold">
                JGruppen är allmänt erkänd som ett av landets ledande företag
                inom sin bransch och har vuxit till att bli regionens
                förstahandsval för industriell installation
              </h4>
              <h4 className=" text-sm sm:text-base text-gray-600 dark:text-gray-300 font-semibold">
              service, underhåll
              och reparation.
              </h4>

              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Vi är en flexibel organisation med välstrukturerade processer
                och tydliga rutiner, vilket gör det möjligt för oss att ta fullt
                ansvar för både kortsiktiga serviceuppdrag och långsiktiga
                underhållsprojekt.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Vår serviceverksamhet är välutbyggd och har under årens lopp
                samlat omfattande kunskap om pallkranar, miniloadkranar,
                conveyorsystem, robotar och produktionsautomation. Vi tar ansvar
                för hela processen – från planering och projektering till
                mekanisk montering och elektrisk installation. Med vår expertis
                och erfarenhet erbjuder vi en helhetslösning anpassad efter era
                behov.
              </p>
<br></br>
              <h2 className="sm:text-xl font-bold text-[#4a536e] dark:text-[#8a93ae]">
                Vi erbjuder er helt enkelt en helhetslösning.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full mx-auto">
        <Image
          src="/img/category3.jpg"
          width={5000}
          height={5000}
          alt="Tillverkning och försäljning"
          className="w-full lg:h-[35rem] object-cover"
        />
      </div>
    </div>
  );
};

export default Underhall;
