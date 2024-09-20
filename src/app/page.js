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
          <div className="w-full ">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Navigation */}
              <div className="md:w-[33%] w-full  flex flex-col space-y-1  text-white py-6 px-4 md:pr-8">
              <Link href="/installationer"> <button href className="flex gap-6 bg-[#4a536e] py-3 pl-9 items-center justify-between">
                  <Image
                    src="/img/mechanics.png"
                    width={50}
                    height={50}
                    alt="Service och underhåll"
                  />
                 Mekanisk installation
                  
                  <FaArrowRightLong />
                  
                </button>
                </Link>
                <button className="flex gap-6 bg-[#4a536e] py-3 pl-9 items-center justify-between">
                  <Image
                    src="/img/planing.png"
                    width={50}
                    height={50}
                    alt="Service och underhåll"
                  />
                  Elektrisk installation
                  <FaArrowRightLong />
                  <Link href="/installationer"></Link>
                </button>

                <button className="flex gap-6 bg-[#4a536e] py-3 pl-9 items-center justify-between">
                  <Image
                    src="/img/car.png"
                    width={50}
                    height={50}
                    alt="Service och underhåll"
                  />
                  Service och underhåll
                  <FaArrowRightLong />
                  <Link href="/underhall"></Link>
                </button>

                <button className="flex gap-6 bg-[#4a536e] py-3 pl-9 items-center justify-between">
                  <Image
                    src="/img/mechanical-engineering.png"
                    width={50}
                    height={50}
                    alt="Service och underhåll"
                  />
                  Tillverkning och försäljning
                  <FaArrowRightLong />
                  <Link href="/produkter"></Link>
                </button>
              </div>

              {/* Right Side - Company Info */}
              <div className="md:w-[65%] w-full md:ml-16 ml-8 mr-4">
                <div>
                  <div className="absolute  md:left-[32rem] left-[1rem] top-[58rem] md:top-[36rem]  md:h-[16rem] h-[13rem] md:w-[33rem] w-[13rem] border-[6px] mb-11 border-[#4a536e]"></div>

                  <div className=" bg-white relative  mt-12">
                    <div className="md:max-w-3xl  p-8 mx-4 ">
                     
                        <h2 className="text-3xl font-bold text-[#4a536e]">
                          JGruppen – en framgångssaga
                        </h2>
                        <p className="mt-4 text-sm text-gray-600 font-semibold">
                          JGruppens historia börjar 2003, när VD Christopher
                          Jarl bildade bolaget JCon i Motala, vid Vätterns östra
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
                        <button className="mt-6 px-20 py-2 border border-gray-600 text-gray-600 font-semibold hover:bg-gray-100  transition duration-300">
                          Läs mer
                        </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* Image Grid Section */}
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-14 gap-16 mx-14 lg:grid-cols-4 mt-8">
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
                    behovet hos våra kunder.
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
                    <h3 className="font-bold">Service och underhåll</h3>
                  </div>
                  <p className="mt-2 px-4 pt-3 min-h-[10.3rem] text-gray-600">
                    JGruppen har blivit regionens första val för industriell
                    installation, service, underhåll och reparation.
                  </p>
                </div>
                <button className="border-none bg-white text-center w-full flex items-center gap-4 justify justify-center flex-row mt-8  p-4 ">
                  Service och underhåll
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
                  JGruppen har blivit regionens första val för industriell
                  installation, service, underhåll och reparation.
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
                  Flexibla och reaktionssnabba partnerskap garanterar att
                  JGruppen uppfyller kundernas behov.
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
        
          
          <section className="flex  md:flex-row flex-col-1  gap-8 w-full ">  
            <div className="bg-[url('/img/3.png')] py-16 flex justify-center bg-cover bg-center w-full">
              <div className="flex flex-col md:flex-row justify-center items-center max-w-[55rem]">
                <div className="items-center px-8 md:px-16 opacity-80 text-center bg-slate-600 text-white">
                  <p className="mt-4 text-2xl md:text-3xl font-extrabold">
                    JGruppen - en framgångssaga
                  </p>
                  <div className="border-t-white border-t-4 my-4 w-full"></div>
                </div>
                <div className="text-sm md:text-base text-white p-6 text-center">
                  <p>
                    JGruppen har sitt huvudkontor i Motala och antalet anställda
                    är drygt 70 personer. En filial har öppnats i Oslo, Norge,
                    och även om positionen på den svenska hemmamarknaden är
                    fortsatt stark så baseras idag drygt 70% av omsättningen på
                    uppdrag inom exportmarknaderna, i Finland, Danmark, Norge,
                    Storbritannien, Spanien och Tyskland. Företaget är särskilt
                    stolt över det faktum att alla medarbetare har den
                    utbildning och behörighet som krävs för att uppfylla
                    kundernas höga krav.
                  </p>
                </div>
              </div>
            </div>
          </section>
       
      </main>
     
    </>
  );
}
