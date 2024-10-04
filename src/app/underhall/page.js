import React from "react";
import Image from "next/image"; // Imported correctly
import Head from "next/head";
const Underhall = () => {
  return (
    <div className="pt-40 container w-full mx-auto">
      <Head>
        <title>Underhåll - JGruppen</title>
        <link
          rel="canonical"
          href="https://jgruppen.se/underhall" // Canonical URL for the page
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
      <section className="flex md:flex-row flex-col p-6 py-12 px-14">
        <div className=" bg-white w-full md:w-6/12 py-[3rem] relative ">
          <div
            className="absolute md:h-[16rem] -top-3 -left-8
              h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] z-10"
          ></div>

          <div className="relative bg-white z-20 px-2">
            <div className=" flex flex-col">
              <h2 className="text-3xl font-bold text-[#4a536e]">
                Service och underhåll
              </h2>
              <p className="mt-4 text-md text-gray-700 font-semibold">
                Allmänt erkänt som ett av landets ledande företag inom sin
                bransch, har JGruppen vuxit fram och blivit regionens första val
                för industriell installation, service, underhåll och reparation.
                En flexibel organisation med väl strukturerade processer och
                tydliga rutiner som möjliggör oss för att ta fullt ansvar av
                kortsiktiga service uppdrag såväl som långsiktiga
                underhållsprojekt.
              </p>
              <p className="mt-4 text-md text-gray-700">
                Vi har en väl utbyggd serviceverksamhet där vi under årens lopp
                byggt upp stor kunskap kring pallkranar och miniloadkranar,
                conveyorsystem, robotar och produktionsautomation.
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white py-[3rem] w-full md:w-6/12">
          <div className=" flex flex-col md:px-8">
            <p className="text-md text-gray-700">
              Vi är en flexibel organisation med välstrukturerade processer som
              tillåter oss att ta fullt ansvar vid både enstaka servicekontrakt
              likväl som vid långa underhållsprojekt. Vi utför alla jobb från
              planering och projektering till mekanisk montering och elektrisk
              installation.
            </p>

            <h3 className="md:text-xl text-md py-4 font-bold text-[#4a536e]">
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
