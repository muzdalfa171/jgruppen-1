import React from "react";
import Image from "next/image";
import Head from "next/head";

const Omoss = () => {
  return (
    <div className="pt-40 container w-full mx-auto">
      <Head>
        <title>Om oss - JGruppen</title>
        <link
          rel="canonical"
          href="https://jgruppen.se/om-oss"
          key="canonical"
        />
        <meta
          name="description"
          content="Learn more about JGruppen, our mission, and our team. We specialize in material handling and installation services across Europe."
        />
        <meta
          name="keywords"
          content="JGruppen, about us, material handling, installation, team"
        />
      </Head>

      {/* First Section */}
      <section className="flex md:flex-row flex-col px-4 sm:p-8 md:p-12">
        <div className="bg-white dark:bg-gray-900 md:w-6/12 w-full py-[2rem] sm:py-[3rem] relative">
          <div className="absolute md:h-[16rem] -top-3 xs:-left-8 -left-4 h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] dark:border-[#2a334e] z-10"></div>

          <div className="relative bg-white dark:bg-gray-900 z-20 pl-3 md:px-5">
            <div className="flex flex-col">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#4a536e] dark:text-[#8a93ae]">En framgångssaga</h2>
              <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                JGruppens historia börjar 2003, när VD Christopher Jarl
                bildade bolaget JCon i Motala, vid Vätterns östra
                strand. Detta bolag var från början inriktat på att
                utföra elektriska och mekaniska installations- och
                underhållsarbeten.
              </p>
              <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Tack vare sitt rykte att kunna utföra kostnadseffektiva jobb, präglade av hög kvalitet, kompetenta yrkesmän och med leveranssäkerhet i högsätet, kunde JCon ta hem allt större uppdrag och började också öka sina åtaganden utanför Sverige.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 py-[2rem] sm:py-[3rem] md:w-6/12 w-full">
          <div className="flex flex-col px-4 md:px-8">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#4a536e] dark:text-[#8a93ae]">Utveckling</h3>
            <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
              För att bemöta aktuella krav från våra kunder, inledde Christopher Jarl en omorganisation för att skapa en ny struktur som var bättre anpassad för framtida krav på en dynamisk marknad. Detta ledde till bildandet av JGruppen AB. Sedan dess har företaget fortsatt att växa och bredda sitt utbud av produkter och tjänster. Närvaron har förstärkts på nya och befintliga exportmarknader världen över.
            </p>

            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#4a536e] dark:text-[#8a93ae] mt-4 sm:mt-6">Stolthet</h3>
            <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
              JGruppen har sitt huvudkontor i Motala, Östergötalnd. Antalet anställda är drygt 70 personer världen över. På senare tid har vi även filialer i Oslo, Norge och i GCC länderna. Även om positionen på den svenska hemmamarknaden är fortsatt stark så baseras idag drygt 70% av vår omsättning på uppdrag inom exportmarknaderna, EU, GCC, Norge, Schweiz och USA. Företaget är särskilt stolt över det faktum att alla medarbetare har den utbildning och behörighet som krävs för att uppfylla kundernas höga krav.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="flex justify-center">
          <Image
            src="/img/pexels-startup-stock-photos-7096-scaled.jpg"
            alt="Installation of material handling system"
            width={1000}
            height={1000}
            className="object-cover shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Omoss;
