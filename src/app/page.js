"use client";
import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import React from "react"; // Optional but useful for older Next.js versions
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Slideshow from "./components/slidershow";
export default function Home() {
  return (
    <>
      <Head>
        <title>JGruppen AB | Industriell Installation</title>
        <meta
          name="description"
          content="Värdehöjande tjänster för optimerad drift"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Slideshow />

        <>
          <div className="w-full">
            <div className="flex lg:flex-row flex-col">
              {/* Left Side - Navigation */}
              <div className="lg:w-[40%] w-full text-white py-6">
                <div className="mb-1">
                  <Link href="/installationer">
                    <div className="flex gap-6 bg-[#4a536e] py-4 pl-9 items-center justify-around w-full cursor-pointer">
                      <div className="flex items-center w-[40%]">
                        <Image
                          src="/img/mechanics.png"
                          width={50}
                          height={50}
                          alt="Service och underhåll"
                        />
                        <p className="text-md font-extrabold ml-8">
                          Mekanisk <br /> installation
                        </p>
                      </div>
                      <FaArrowRightLong />
                    </div>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href="/installationer">
                    <div className="flex gap-6 bg-[#4a536e] py-4 pl-9 items-center justify-around w-full cursor-pointer">
                      <div className="flex items-center w-[40%]">
                        <Image
                          src="/img/planing.png"
                          width={50}
                          height={50}
                          alt="Service och underhåll"
                        />
                        <p className="text-md font-extrabold ml-8">
                          Elektrisk <br /> installation
                        </p>
                      </div>
                      <FaArrowRightLong />
                    </div>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href="/underhall">
                    <div className="flex gap-6 bg-[#4a536e] py-4 pl-9 items-center justify-around w-full cursor-pointer">
                      <div className="flex items-center w-[40%]">
                        <Image
                          src="/img/car.png"
                          width={50}
                          height={50}
                          alt="Service och underhåll"
                        />
                        <p className="text-md font-extrabold ml-8">
                          Service och
                          <br /> underhåll
                        </p>
                      </div>
                      <FaArrowRightLong />
                    </div>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href="/produkter">
                    <div className="flex bg-[#4a536e] py-4 pl-9 items-center justify-around w-full cursor-pointer">
                      <div className="flex items-center w-[40%]">
                        <Image
                          src="/img/mechanical-engineering.png"
                          width={50}
                          height={50}
                          alt="Service och underhåll"
                        />
                        <p className="text-md font-extrabold ml-8">
                          Tillverkning <br />
                          och försäljning
                        </p>
                      </div>
                      <FaArrowRightLong />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Side - Company Info */}
              <div className="lg:w-[60%] w-full md:ml-16 ml-8 space-y-24">
                <div className="relative">
                  <div className="absolute md:h-[16rem] -top-5 md:-left-10 -left-[1rem] h-[13rem] md:w-[28rem] w-[15rem] border-[6px] mb-11 border-[#4a536e] z-10"></div>

                  <div className="relative bg-white w-full mt-12 z-20">
                    <div className="md:max-w-2xl w-11/12 flex flex-col p-8">
                      <h2 className="text-3xl font-bold text-[#4a536e]">
                        JGruppen – en framgångssaga
                      </h2>
                      <p className="mt-4 text-sm text-gray-600 font-semibold">
                        JGruppens historia börjar 2003, när VD Christopher Jarl
                        bildade bolaget JCon i Motala, vid Vätterns östra
                        strand. Detta bolag var från början inriktat på att
                        utföra elektriska och mekaniska installations- och
                        underhållsarbeten.
                      </p>
                      <p className="mt-4 text-sm text-gray-600">
                        Som fristående och engagerad extern entreprenör fick
                        JCon allt fler uppdrag inom olika projekt åt stora
                        internationella systembyggare och
                        integrationsspecialister med hög kompetens. Tack vare
                        sitt rykte för kostnadseffektiva jobb av hög kvalitet,
                        utförda av kompetenta yrkesmän, med leveranssäkerhet i
                        högsätet, kunde JCon ta hem allt större uppdrag och
                        började också öka sina åtaganden utanför Sverige.
                      </p>
                    </div>
                    <button className="mt-6 px-[5rem] ml-[3.3rem] py-2 border border-gray-600 text-gray-600 font-semibold object-center hover:bg-gray-100 transition duration-300">
                      Läs mer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* Image Grid Section */}
        <>
          <div className="grid grid-col md:grid-cols-2 mb-14 gap-16  mx-10 xl:grid-cols-4 mt-8">
            <div className="bg-white text-center shadow">
              <Image
                src="/img/category1.jpg"
                width={500}
                height={300}
                alt="Mekanisk installation"
              />

              <div className="bg-[#f0f1f5]">
                <div>
                  <div className="bg-[#4a536e] py-2 text-white ">
                    <h3 className="font-bold">Mekanisk installation</h3>
                  </div>
                  <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-gray-600">
                    Företaget har sin grund inom installation av
                    materialhanteringssystem. Vi har sedan dess fortsatt fylla
                    behovet hos våra kunder och det är det som har gjort att vi
                    är dom vi är idag.
                  </p>
                </div>
                <button className="border-none bg-white text-center w-full flex items-center gap-4 justify justify-center flex-row mt-8  p-4 ">
                  Mekanisk installation
                  <FaArrowRightLong />
                  <Link href="/Mekaniskinstallation"></Link>
                </button>
              </div>
            </div>

            <div className="bg-white text-center shadow">
              <Image
                src="/img/category2.jpg"
                width={500}
                height={300}
                alt="Mekanisk installation"
              />

              <div className="bg-[#f0f1f5]">
                <div>
                  <div className="bg-[#4a536e] py-2 text-white ">
                    <h3 className="font-bold">Elektrisk installation</h3>
                  </div>
                  <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-gray-600">
                    JGruppen har en avdelning med elektriker som är certifierade
                    för maskininstallationer. Vi erbjuder allt från
                    installationer till felsökningar och reparationer på er
                    anläggning.
                  </p>
                </div>
                <button className="border-none bg-white text-center w-full flex items-center gap-4 justify justify-center flex-row mt-8  p-4 ">
                  Elektrisk installation
                  <FaArrowRightLong />
                  <Link href="/Serviceochunderhåll"></Link>
                </button>
              </div>
            </div>

            <div className="bg-white text-center shadow">
              <Image
                src="/img/category3.jpg"
                width={500}
                height={300}
                alt="Service och underhåll"
              />
              <div className="bg-[#f0f1f5]">
                <div className="bg-[#4a536e]">
                  <h3 className="bg-[#4a536e] py-2 text-white">
                    Service och underhåll
                  </h3>
                </div>
                <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-gray-600">
                  Allmänt erkänt som ett av landets ledande företag inom sin
                  bransch, har JGruppen vuxit fram och blivit regionens första
                  val för industriell installation, service, underhåll och
                  reparation.
                </p>
                <button className="border-none text-center bg-white w-full flex items-center gap-4 justify justify-center flex-row mt-8  p-4 ">
                  Service och underhåll
                  <FaArrowRightLong />
                  <Link href="/Serviceochunderhåll"></Link>
                </button>
              </div>
            </div>

            <div className="bg-white text-center shadow">
              <Image
                src="/img/category4.jpg"
                width={500}
                height={300}
                alt="Tillverkning och försäljning"
              />
              <div className=" bg-[#f0f1f5]">
                <div className="bg-[#4a536e]">
                  <h3 className="bg-[#4a536e] py-2 text-white">
                    Tillverkning och försäljning
                  </h3>
                </div>
                <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-gray-600">
                  Flexibla och reaktionssnabba partnerskap med noggrant utvalda
                  underleverantörer som JGruppens dotterbolag samarbetat med
                  under lång tid garanterar att JGruppens kunder får sina behov
                  tillgodosedda med olika typer av komponenter och material.
                </p>

                <button className="border-none text-center w-full bg-white flex items-center gap-4 justify justify-center flex-row mt-8  p-4 ">
                  Tillverkning och försäljning
                  <FaArrowRightLong />
                  <Link href="/Tillverkningochförsäljning"></Link>
                </button>
              </div>
            </div>
          </div>
        </>
        {/* Categories Section */}

        {/* <section className="flex  md:flex-row flex-col-1  gap-8 w-full ">
          <div className="bg-[url('/img/3.png')] py-16 flex justify-center bg-cover bg-center w-full">
            <div className="flex flex-col md:flex-row justify-end items-center max-w-[55rem]">

              <div className="flex flex-col md:flex-row text-sm md:text-base bg-[#4a5166] text-white p-6">
                <p className="w-full md:w-1/2 flex flex-col text-3xl items-center justify-center md:justify-start">
                  JGruppen - en framgångssaga
                </p>

                <div className="border-t-white border-t-4 my-4 w-full"></div>
              </div>

           
              <div className="w-full md:w-1/2 text-left pl-10 text-white">
                <p className="w-full">
                  JGruppen har sitt huvudkontor i Motala och antalet anställda
                  är drygt 70 personer. En filial har öppnats i Oslo, Norge, och
                  även om positionen på den svenska hemmamarknaden är fortsatt
                  stark så baseras idag drygt 70% av omsättningen på uppdrag
                  inom exportmarknaderna, i Finland, Danmark, Norge,
                  Storbritannien, Spanien och Tyskland. Företaget är särskilt
                  stolt över det faktum att alla medarbetare har den utbildning
                  och behörighet som krävs för att uppfylla kundernas höga krav.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="gap-8 w-full">
          <div className="bg-[url('/img/3.png')] py-16 flex justify-end bg-cover bg-center w-full">
            <div className="flex flex-col md:flex-row md:justify-end justify-center w-[50rem] items-center sm:space-y-0  space-y-8  md:max-w-[66rem] text-white py-6">
              {/* Left Column - Heading */}
              <div className="flex flex-col text-3xl items-center bg-[#4a5166] p-[4rem] justify-center md:justify-start w-full md:w-1/3">
                <p>JGruppen - en framgångssaga</p>
                <div className="border-t border-t-white my-4 w-full"></div>
              </div>

              {/* Right Column - Paragraph */}
              <div className="w-full md:w-1/2 text-left pl-10">
                <p>
                  JGruppen har sitt huvudkontor i Motala och antalet anställda
                  är drygt 70 personer. En filial har öppnats i Oslo, Norge, och
                  även om positionen på den svenska hemmamarknaden är fortsatt
                  stark så baseras idag drygt 70% av omsättningen på uppdrag
                  inom exportmarknaderna, i Finland, Danmark, Norge,
                  Storbritannien, Spanien och Tyskland. Företaget är särskilt
                  stolt över det faktum att alla medarbetare har den utbildning
                  och behörighet som krävs för att uppfylla kundernas höga krav.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
