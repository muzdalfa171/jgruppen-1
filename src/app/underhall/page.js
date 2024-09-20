import React from "react";
import Image from "next/image"; // Imported correctly

const Underhall = () => {
  return (
    <>
    <section className="container mx-auto px-4 md:px-20 py-20">
      {/* Grid Layout for Two Columns */}
      <div className="grid grid-cols-1 p-6 md:p-12 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="border-8 absolute top-[4rem] mt-24 overflow-hidden left-[1.5rem] md:left-[3.5rem] border-[#4a536e] w-[20rem] h-60 md:w-[25rem] pl-4"></div>
        <div className="relative px-6 top-8 z-40 bg-white space-y-6">
          <h2 className="text-3xl font-bold text-[#4a536e] mb-6">
            <span className="text-5xl">Service och underhåll</span>
          </h2>

          <p className="text-md font-bold mb-6 text-gray-700">
            Allmänt erkänt som ett av landets ledande företag inom sin bransch, har JGruppen vuxit fram och blivit regionens första val för industriell installation, service, underhåll och reparation. En flexibel organisation med väl strukturerade processer och tydliga rutiner som möjliggör oss för att ta fullt ansvar av kortsiktiga service uppdrag såväl som långsiktiga underhållsprojekt.
          </p>

          <p className="text-md text-gray-700">
            Vi har en väl utbyggd serviceverksamhet där vi under årens lopp byggt upp stor kunskap kring pallkranar och miniloadkranar, conveyorsystem, robotar och produktionsautomation.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <p className="text-md pt-12 text-gray-700">
            Vi är en flexibel organisation med välstrukturerade processer som tillåter oss att ta fullt ansvar vid både enstaka servicekontrakt likväl som vid långa underhållsprojekt. Vi utför alla jobb från planering och projektering till mekanisk montering och elektrisk installation.
          </p>

          <h3 className="text-xl font-bold text-[#4a536e]">Vi erbjuder er helt enkelt en helhetslösning.</h3>
        </div>

      </div>
    </section>
      <div>
      <Image
                src="/img/category3.jpg"
                width={1000}
                height={1000}
                alt="Tillverkning och försäljning"
                className="h-[30rem] w-full"
              />
        </div>
        </>
  );
};

export default Underhall;
