"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";

const Produkter = () => {
  return (
    <div className="pt-40 container w-full mx-auto bg-white dark:bg-gray-900">
      <Head>
        <title>Produkter - JGruppen</title>
        <link
          rel="canonical"
          href="https://jgruppen.se/produkter"
          key="canonical"
        />
        <meta
          name="description"
          content="Explore a range of products offered by JGruppen for industrial material handling systems."
        />
        <meta
          name="keywords"
          content="products, material handling, JGruppen, installation"
        />
      </Head>

      {/* First Section - Installationer */}
      <section className="flex md:flex-row flex-col p-6 sm:p-12">
        <div className="bg-white dark:bg-gray-900 w-full py-[3rem] relative">
          <div
            className="absolute md:h-[16rem] -top-6 -left-6 
              h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] dark:border-[#2a334e] z-10"
          ></div>

          <div className="relative bg-white dark:bg-gray-900 z-20 pl-3 md:px-5">
            <div className="flex flex-col">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#4a536e] dark:text-[#8a93ae]">
                Tillverkning och försäljning
              </h2>
              <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 font-semibold">
                Flexibla och reaktionssnabba partnerskap med noggrant utvalda
                underleverantörer som JGruppens dotterbolag samarbetat med
                under lång tid garanterar att JGruppens kunder får sina behov
                tillgodosedda med olika typer av komponenter och material.
              </p>
              <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Detta gäller även detaljer som är svåra att få tag på, finns i
                begränsat antal eller har slutat tillverkas.
              </p>
              <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Med andra ord, vi kan tillfredställa våra kunders behov av allt från perifera
                inventarier till centrala anläggningskomponenter, såväl som
                unika konstruktioner och specialbyggen.
              </p>
              <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Vi har en väl utbyggd serviceverksamhet där vi under årens
                lopp byggt upp stor kunskap kring pallkranar och
                miniloadkranar, conveyorsystem, robotar och
                produktionsautomation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex md:flex-row w-full flex-col">
        <div className="lg:w-6/12 w-full">
          <Image
            src="/img/category4.jpg"
            width={5000}
            height={5000}
            alt="Tillverkning och försäljning"
            className="h-48 xs:h-60 sm:h-80 lg:h-[30rem] w-full object-cover"
          />
        </div>
        <div className="lg:w-6/12 w-full">
          <Image
            src="/img/Skarmavbild-2021-05-11-kl.-09.01-1.png"
            width={5000}
            height={5000}
            alt="Tillverkning och försäljning"
            className="h-48 xs:h-60 sm:h-80 lg:h-[30rem] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Produkter;
