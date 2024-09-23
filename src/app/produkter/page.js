import React from "react";
import Image from "next/image"; // Imported correctly

const Underhall = () => {
  return (
    <>
      <section className="pt-40">
        {/* First Section - Installationer */}
        <section className="xl:px-96  px-6 md:px-24 py-12">
          {/* Gr id Layout for Two Columns */}
          <div className="grid grid-cols-1  md:p-12 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="border-8 absolute top-[12rem] overflow-hidden left-[1.5rem] md:left-[3.5rem] xl:left-[22rem] border-[#4a536e] w-[20rem] h-60 md:w-[25rem] pl-4"></div>
            <div className="relative px-6 top-8 z-40 bg-white space-y-6">
              <h2 className="text-3xl font-bold text-[#4a536e] mb-6">
                <span className="text-5xl">Tillverkning och försäljning</span>
              </h2>

              <p className="text-md font-bold mb-6 text-gray-700">
                Flexibla och reaktionssnabba partnerskap med noggrant utvalda
                underleverantörer som JGruppens dotterbolag samarbetat med under
                lång tid garanterar att JGruppens kunder får sina behov
                tillgodosedda med olika typer av komponenter och material. Detta
                gäller även detaljer som är svåra att få tag på, finns i
                begränsat antal eller har slutat tillverkas. Med andra ord, vi
                kan tillfredställa våra kunders behov av allt från perifera
                inventarier till centrala anläggningskomponenter, såväl som
                unika konstruktioner och specialbyggen.
              </p>

              <p className="text-md text-gray-700">
                Vi har en väl utbyggd serviceverksamhet där vi under årens lopp
                byggt upp stor kunskap kring pallkranar och miniloadkranar,
                conveyorsystem, robotar och produktionsautomation.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <p className="text-md pt-12 text-gray-700">
                Flexibla och reaktionssnabba partnerskap med noggrant utvalda
                underleverantörer som JGruppens dotterbolag samarbetat med under
                lång tid garanterar att JGruppens kunder får sina behov
                tillgodosedda med olika typer av komponenter och material. Detta
                gäller även detaljer som är svåra att få tag på, finns i
                begränsat antal eller har slutat tillverkas. Med andra ord, vi
                kan tillfredställa våra kunders behov av allt från perifera
                inventarier till centrala anläggningskomponenter, såväl som
                unika konstruktioner och specialbyggen.
              </p>
            </div>
          </div>
        </section>
        <div className="flex md:flex-col-2 flex-col gap-5 py-8">
          <div className="md:ml-16">
            <Image
              src="/img/category4.jpg"
              width={1000}
              height={1000}
              alt="Tillverkning och försäljning"
              className="h-[30rem] w-full"
            />
          </div>
          <div className="md:mr-16">
            <Image
              src="/img/Skarmavbild-2021-05-11-kl.-09.01-1.png"
              width={1000}
              height={1000}
              alt="Tillverkning och försäljning"
              className="h-[30rem] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Underhall;
