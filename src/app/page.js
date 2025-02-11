"use client";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Slideshow from "./components/slidershow";

export default function Home() {
  return (
    <div className="container w-full mx-auto">
      <Head>
        <title>JGruppen AB | Industriell Installation</title>
        <meta
          name="description"
          content="Värdehöjande tjänster för optimerad drift"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Slideshow />
        <>
          <div className="w-full">
            <div className="flex lg:flex-row flex-col">
              {/* Left Side - Navigation */}
              <div className="lg:w-[40%] w-full text-white py-8 md:py-12 px-4 md:px-8">
                <div className="space-y-4">
                  <Link href="/installationer" className="group block">
                    <div className="flex justify-between items-center bg-[#4a536e] hover:bg-[#3a435e] dark:bg-[#2a334e] dark:hover:bg-[#1a233e] transition-colors duration-300 p-4 md:p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-center flex-1 min-w-0">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 mb-2 sm:mb-0">
                          <Image
                            src="/img/mechanics.png"
                            layout="responsive"
                            width={50}
                            height={50}
                            alt="Installation"
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold sm:ml-4 md:ml-6 lg:ml-8 truncate text-center sm:text-left">
                          Installation
                        </p>
                      </div>
                      <FaArrowRightLong className="text-lg sm:text-xl md:text-2xl shrink-0 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link href="/underhall" className="group block">
                    <div className="flex justify-between items-center bg-[#4a536e] hover:bg-[#3a435e] dark:bg-[#2a334e] dark:hover:bg-[#1a233e] transition-colors duration-300 p-4 md:p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-center flex-1 min-w-0">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 mb-2 sm:mb-0">
                          <Image
                            src="/img/car.png"
                            layout="responsive"
                            width={50}
                            height={50}
                            alt="Service och underhåll"
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold sm:ml-4 md:ml-6 lg:ml-8 truncate text-center sm:text-left">
                          Service och underhåll
                        </p>
                      </div>
                      <FaArrowRightLong className="text-lg sm:text-xl md:text-2xl shrink-0 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link href="/produkter" className="group block">
                    <div className="flex justify-between items-center bg-[#4a536e] hover:bg-[#3a435e] dark:bg-[#2a334e] dark:hover:bg-[#1a233e] transition-colors duration-300 p-4 md:p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-center flex-1 min-w-0">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 mb-2 sm:mb-0">
                          <Image
                            src="/img/mechanical-engineering.png"
                            layout="responsive"
                            width={50}
                            height={50}
                            alt="Tillverkning och försäljning"
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold sm:ml-4 md:ml-6 lg:ml-8 truncate text-center sm:text-left">
                          Tillverkning och försäljning
                        </p>
                      </div>
                      <FaArrowRightLong className="text-lg sm:text-xl md:text-2xl shrink-0 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* Right Side - Company Info */}
              <div className="lg:w-[60%] w-full md:ml-16 ml-8 space-y-24">
                <div className="relative">
                  <div className="absolute md:h-[16rem] -top-5 md:-left-10 -left-[1rem] h-[13rem] md:w-[28rem] w-[15rem] border-[6px] mb-11 border-[#4a536e] dark:border-[#2a334e] z-10"></div>
                  <div className="relative bg-white dark:bg-gray-900 w-full mt-12 z-20">
                    <div className="md:max-w-2xl w-11/12 flex flex-col p-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#4a536e] dark:text-[#8a93ae]">
                        JGruppen – en framgångssaga
                      </h2>
                      <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-semibold">
                        JGruppens historia börjar 2003, när VD Christopher Jarl
                        bildade bolaget JCon i Motala, vid Vätterns östra
                        strand. Detta bolag var från början inriktat på att
                        utföra elektriska och mekaniska installations- och
                        underhållsarbeten.
                      </p>
                      <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      Som en engagerad fristående extern entreprenör fick JCon allt fler uppdrag inom olika projekt åt stora internationella systembyggare och integrationsspecialister med hög kompetens.
Tack vare sitt rykte att kunna utföra kostnadseffektiva jobb, präglade av hög kvalitet, kompetenta yrkesmän och med leveranssäkerhet i högsätet, kunde JCon ta hem allt större uppdrag och började också öka sina åtaganden utanför Sverige.

                      </p>
                    </div>
                    <Link href="/om-oss">
                      <button className="px-[5rem] ml-[3.3rem] py-2 border border-gray-600 dark:border-gray-400 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-semibold object-center hover:bg-[#4a536e] dark:hover:bg-[#2a334e] hover:text-white transition duration-300">
                        Läs mer
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* Image Grid Section */}
        <>
          <div className="grid grid-col md:grid-cols-2 mb-14 gap-16 mx-10 xl:grid-cols-4 mt-8">
            <div className="bg-white dark:bg-gray-900 text-center shadow">
              <Image
                src="/img/category1.jpg"
                width={500}
                height={300}
                alt="Mekanisk installation"
              />
              <div className="bg-[#f0f1f5] dark:bg-gray-800">
                <div>
                  <div className="bg-[#4a536e] dark:bg-[#2a334e] py-2 text-white">
                    <h3 className="text-sm sm:text-base font-bold">Mekanisk installation</h3>
                  </div>
                  <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Företaget har sin grund inom installation av
                    materialhanteringssystem. Vi har sedan dess fortsatt fylla
                    behovet hos våra kunder och det är det som har gjort att vi
                    är dom vi är idag.
                  </p>
                </div>
                <Link href="/installationer">
                  <button className="border-none bg-white dark:bg-gray-900 text-center w-full flex items-center gap-4 justify justify-center flex-row mt-8 p-4 text-sm sm:text-base dark:text-gray-300">
                    Mekanisk installation
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 text-center shadow">
              <Image
                src="/img/category2.jpg"
                width={500}
                height={300}
                alt="Mekanisk installation"
              />
              <div className="bg-[#f0f1f5] dark:bg-gray-800">
                <div>
                  <div className="bg-[#4a536e] dark:bg-[#2a334e] py-2 text-white">
                    <h3 className="text-sm sm:text-base font-bold">Elektrisk installation</h3>
                  </div>
                  <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    JGruppen har en avdelning med elektriker som är certifierade
                    för maskininstallationer. Vi erbjuder allt från
                    installationer till felsökningar och reparationer på er
                    anläggning.
                  </p>
                </div>
                <Link href="/installationer">
                  <button className="border-none bg-white dark:bg-gray-900 text-center w-full flex items-center gap-4 justify justify-center flex-row mt-8 p-4 text-sm sm:text-base dark:text-gray-300">
                    Elektrisk installation
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 text-center shadow">
              <Image
                src="/img/category3.jpg"
                width={500}
                height={300}
                alt="Service och underhåll"
              />
              <div className="bg-[#f0f1f5] dark:bg-gray-800">
                <div className="bg-[#4a536e] dark:bg-[#2a334e]">
                  <h3 className="bg-[#4a536e] dark:bg-[#2a334e] py-2 text-white text-sm sm:text-base">
                    Service och underhåll
                  </h3>
                </div>
                <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Allmänt erkänt som ett av landets ledande företag inom sin
                  bransch, har JGruppen vuxit fram och blivit regionens första
                  val för industriell installation, service, underhåll och
                  reparation.
                </p>
                <Link href="/underhall">
                  <button className="border-none text-center bg-white dark:bg-gray-900 w-full flex items-center gap-4 justify justify-center flex-row mt-8 p-4 text-sm sm:text-base dark:text-gray-300">
                    Service och underhåll
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 text-center shadow">
              <Image
                src="/img/category4.jpg"
                width={500}
                height={300}
                alt="Tillverkning och försäljning"
              />
              <div className="bg-[#f0f1f5] dark:bg-gray-800">
                <div className="bg-[#4a536e] dark:bg-[#2a334e]">
                  <h3 className="bg-[#4a536e] dark:bg-[#2a334e] py-2 text-white text-sm sm:text-base">
                    Tillverkning och försäljning
                  </h3>
                </div>
                <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Flexibla och reaktionssnabba partnerskap med noggrant utvalda
                  underleverantörer som JGruppens dotterbolag samarbetat med
                  under lång tid garanterar att JGruppens kunder får sina behov
                  tillgodosedda med olika typer av komponenter och material.
                </p>
                <Link href="/produkter">
                  <button className="border-none text-center w-full bg-white dark:bg-gray-900 flex items-center gap-4 justify justify-center flex-row mt-8 p-4 text-sm sm:text-base dark:text-gray-300">
                    Tillverkning och försäljning
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
        {/* Categories Section */}
       
        <section className="gap-8 w-full">
          <div className="bg-[url('/img/3.png')] py-16 flex justify-end bg-cover bg-center w-full">
            <div className="flex flex-col md:flex-row md:justify-end justify-center w-full items-center sm:space-y-0 space-y-8 md:max-w-[66rem] text-white py-6">
              {/* Left Column - Heading */}
              <div className="flex flex-col text-xl sm:text-2xl items-center text-center bg-[#4a5166] dark:bg-[#2a3146] p-[2rem] justify-center md:justify-start w-full md:w-1/3">
                <p>JGruppen - en framgångssaga</p>
                <div className="border-t-4 border-t-white my-4 w-full"></div>
              </div>
              {/* Right Column - Paragraph */}
              <div className="w-full md:w-1/2 text-center px-8">
                <p className="text-xs sm:text-sm md:text-base">
                JGruppen har sitt huvudkontor i Motala, Östergötalnd. Antalet anställda är drygt 70 personer världen över. På senare tid har vi även filialer i Oslo, Norge och i GCC länderna. Även om positionen på den svenska hemmamarknaden är fortsatt stark så baseras idag drygt 70% av vår omsättning på uppdrag inom exportmarknaderna, EU, GCC, Norge, Schweiz och USA. Företaget är särskilt stolt över det faktum att alla medarbetare har den utbildning och behörighet som krävs för att uppfylla kundernas höga krav.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}