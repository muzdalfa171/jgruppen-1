import React from "react";
import Image from "next/image"; // Imported correctly

const Underhall = () => {
  return (
    <>
     <div className="pt-40 container w-full mx-auto">
      {/* First Section - Installationer */}
      <section className="flex md:flex-row flex-col p-6 py-12 px-14">
       
      <div className=" bg-white md:w-6/12 py-[3rem] relative ">

            <div className="absolute md:h-[16rem] -top-3 -left-8
              h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] z-10"></div>

            <div className="relative bg-white z-20 px-5">
              <div className=" flex flex-col">
                <h2 className="text-3xl font-bold text-[#4a536e]">
                Tillverkning och försäljning
                </h2>
                <p className="mt-4 text-md text-gray-700 font-semibold">
                Flexibla och reaktionssnabba partnerskap med noggrant utvalda underleverantörer som JGruppens dotterbolag samarbetat med under lång tid garanterar att JGruppens kunder får sina behov tillgodosedda med olika typer av komponenter och material. Detta gäller även detaljer som är svåra att få tag på, finns i begränsat antal eller har slutat tillverkas. Med andra ord, vi kan tillfredställa våra kunders behov av allt från perifera inventarier till centrala anläggningskomponenter, såväl som unika konstruktioner och specialbyggen.  </p>
                <p className="mt-4 text-md text-gray-700">
                Vi har en väl utbyggd serviceverksamhet där vi under årens lopp byggt upp stor kunskap kring pallkranar och miniloadkranar, conveyorsystem, robotar och produktionsautomation. </p>
              </div>
            </div>
          </div>

          <div className=" bg-white py-[3rem] md:w-6/12">
            <div className=" flex flex-col px-8">
              <p className="text-md text-gray-700">
              Flexibla och reaktionssnabba partnerskap med noggrant utvalda underleverantörer som JGruppens dotterbolag samarbetat med under lång tid garanterar att JGruppens kunder får sina behov tillgodosedda med olika typer av komponenter och material. Detta gäller även detaljer som är svåra att få tag på, finns i begränsat antal eller har slutat tillverkas. Med andra ord, vi kan tillfredställa våra kunders behov av allt från perifera inventarier till centrala anläggningskomponenter, såväl som unika konstruktioner och specialbyggen.</p>
             
            </div>
          </div>
       
      </section>
        
      </div>
      <div className="flex md:flex-row w-full flex-col ">
          <div className="">
            <Image
              src="/img/category4.jpg"
              width={1000}
              height={1000}
              alt="Tillverkning och försäljning"
              className="lg:h-[30rem] "
            />
          </div>
          <div className="">
            <Image
              src="/img/Skarmavbild-2021-05-11-kl.-09.01-1.png"
              width={1000}
              height={1000}
              alt="Tillverkning och försäljning"
              className="lg:h-[30rem] "
            />
          </div>
        </div>
    </>
  );
};

export default Underhall;
