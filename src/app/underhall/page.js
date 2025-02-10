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
      <section className="flex md:flex-row flex-col p-12">
        <div className=" bg-white md:w-6/12 w-full py-[3rem] relative ">
          <div
            className="absolute md:h-[16rem] -top-3 -left-8
              h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] z-10"
          ></div>

          <div className="relative bg-white z-20 md:px-5">
            <div className=" flex flex-col ">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a536e]">
                Service och underhåll
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 font-semibold">
                JGruppen är allmänt erkänd som ett av landets ledande företag inom sin bransch och har vuxit till att bli regionens förstahandsval för industriell installation, service, underhåll och reparation.
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                Vi är en flexibel organisation med välstrukturerade processer och tydliga rutiner, vilket gör det möjligt för oss att ta fullt ansvar för både kortsiktiga serviceuppdrag och långsiktiga underhållsprojekt.
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white py-[3rem] md:w-6/12 w-full">
          <div className=" flex flex-col md:px-8">
            <p className="text-sm sm:text-base text-gray-600">
              Vår serviceverksamhet är välutbyggd och har under årens lopp samlat omfattande kunskap om pallkranar, miniloadkranar, conveyorsystem, robotar och produktionsautomation.
              Vi tar ansvar för hela processen – från planering och projektering till mekanisk montering och elektrisk installation. Med vår expertis och erfarenhet erbjuder vi en helhetslösning anpassad efter era behov.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-[#4a536e]">
              Vi erbjuder er helt enkelt en helhetslösning.
            </h3>
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
