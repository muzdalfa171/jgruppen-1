"use client";
import Head from "next/head";
import React from "react";
import Image from "next/image";

const Installationer = () => {
  return (
    <div className="pt-40 container w-full mx-auto">
      
         {/* Add canonical tag and page title */}
         <Head>
        <title>Installationer - JGruppen</title>
        <link
          rel="canonical"
          href="https://jgruppen.se/installationer"
          key="canonical"
        />
          <meta
          name="description"
          content="JGruppen specializes in installation and integration of material handling systems for industrial clients across Europe."
        />
        <meta name="keywords" content="installation, material handling, integration, JGruppen" />
    
      </Head>
      {/* First Section - Installationer */}
      <section className="flex md:flex-row flex-col p-12">
        <div className=" bg-white md:w-6/12 w-full py-[1rem] relative ">
          <div
            className="absolute md:h-[16rem] -top-3 -left-8
              h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] z-10"
          ></div>

          <div className="relative bg-white z-20 md:px-5">
            <div className=" flex flex-col ">
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a536e]">
                Installation
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 font-semibold">
                JGruppen driver och genomför ett växande antal referensprojekt, både i Norden och övriga Europa, för stora och internationellt välkända kunder. Detta är ett tydligt bevis på JGruppens status som en världsledande leverantör av produkter, tjänster och lösningar inom projekt som omfattar installation och integration av materialhanteringssystem.
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                Företagets grundare och VD, Christopher Jarl, lyfter fram flera faktorer bakom företagets framgång som en uppskattad och central partner för så många kunder. 'Det är inte bara jag som känner ett starkt engagemang för varje uppdrag vi får – det gäller alla våra medarbetare,' säger han. 'Vår personal är utan tvekan en ovärderlig tillgång. De besitter hög kompetens och strävar alltid efter att leverera bästa möjliga service, oavsett tid och plats.
              </p>
              <br />
              <p className="text-sm sm:text-base text-gray-600">
              De följer alltid god industrised och arbetar enligt de rutiner och procedurer som fastställts i olika kvalitetsdokument. Detta återspeglas i ett noggrant dokumentationsarbete som pågår under hela projekttiden."
            </p>
            </div>
          </div>
        </div>

        <div className=" bg-white  md:w-6/12 w-full">
          <div className=" flex flex-col md:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#4a536e]">
              Vi är stolta och tar ansvar
            </h3>

            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Oavsett om det handlar om att driftsätta en obemannad kran, installera en transportör och ett pakethanteringssystem eller integrera en helt automatiserad bearbetningslinje, besitter JGruppens medarbetare den elektriska, mekaniska och svetstekniska expertis som krävs för att få jobbet gjort.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-600">
              "Vi är stolta över vårt rykte om att hålla vad vi lovar och leverera i tid – oavsett hur många mantimmar vi måste lägga in," säger Christopher Jarl. Industriella kunder, som förstår att tid är pengar och kräver minimala driftsavbrott, uppskattar vårt arbetssätt. "Det är också något som väcker intresse hos allt fler potentiella kunder," tillägger han.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section - Grund inom installation */}
      <section className="w-full bg-[#f0f1f5] py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#4a536e] mb-4">
                Expertis inom installation av materialhanteringssystem
              </h2>
              <p className="text-sm sm:text-base font-semibold w-full md:w-3/4 text-gray-600 mb-4">
                Sedan starten har vi fortsatt att möta våra kunders behov, och det är just detta som har tagit oss dit vi är idag. Vi har lång erfarenhet av installationer inom bland annat:
              </p>
              <ul className="text-sm sm:text-base text-gray-600 list-none space-y-2">
                <li>– Automationskranar</li>
                <li>– Maskinrälsar</li>
                <li>– Conveyorsystem</li>
                <li>– Bagagehanteringssystem</li>
                <li>– Maskiner</li>
                <li>– Fasta och mobila pallställ</li>
              </ul>
            </div>

            {/* Image on the Right */}
            <div className="flex justify-center">
              <Image
                src="/img/category1.jpg"
                alt="Installation of material handling system"
                width={1000}
                height={1000}
                className="object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="md:px-12 px-6 w-full">
        <div className="grid grid-cols-1 w-full my-12 lg:grid-cols-2 gap-8 py-12">
          {/* Image on the Left */}
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/img/category2.jpg"
              alt="Installation of material handling system"
              width={1000}
              height={1000}
              className="object-cover shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#4a536e] mb-4">
              Expertis inom industriell elinstallation och automation
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              JGruppen har en dedikerad avdelning med certifierade elektriker specialiserade på maskininstallationer. Med lång erfarenhet inom industrielektronik, automation och maskinelektronik erbjuder vi allt från installationer till felsökning och reparationer på er anläggning.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Vi kan bistå med både enstaka insatser, såsom förebyggande och avhjälpande service, eller ta fullt ansvar för underhållet på er arbetsplats.
            </p>
            <p className="text-sm sm:text-base font-semibold text-gray-600 mb-4">
              Vår personal har bred kompetens och gedigen erfarenhet för att möta våra kunders behov inom:
            </p>
            <ul className="text-sm sm:text-base text-gray-600 list-none space-y-2">
              <li>– Automation</li>
              <li>– Elinstallation</li>
              <li>– PLC-styrning</li>
              <li>– Mekanisering</li>
              <li>– Service och reparation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Installationer;
