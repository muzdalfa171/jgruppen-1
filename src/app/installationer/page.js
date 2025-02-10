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
        <div className=" bg-white md:w-6/12 w-full py-[3rem] relative ">
          <div
            className="absolute md:h-[16rem] -top-3 -left-8
              h-[13rem] md:w-[17rem] w-[15rem] border-[6px] border-[#4a536e] z-10"
          ></div>

          <div className="relative bg-white z-20 md:px-5">
            <div className=" flex flex-col ">
              <h2 className="text-3xl font-bold text-[#4a536e]">
                Installationer
              </h2>
              <p className="mt-4 text-md text-gray-700 font-semibold">
                JGruppen driver och genomför ett växande antal referensprojekt, både i Norden och övriga Europa, för stora och internationellt välkända kunder. Detta är ett tydligt bevis på JGruppens status som en världsledande leverantör av produkter, tjänster och lösningar inom projekt som omfattar installation och integration av materialhanteringssystem.
              </p>
              <p className="mt-4 text-md text-gray-700">
                Företagets grundare och VD, Christopher Jarl, lyfter fram flera faktorer bakom företagets framgång som en uppskattad och central partner för så många kunder. 'Det är inte bara jag som känner ett starkt engagemang för varje uppdrag vi får – det gäller alla våra medarbetare,' säger han. 'Vår personal är utan tvekan en ovärderlig tillgång. De besitter hög kompetens och strävar alltid efter att leverera bästa möjliga service, oavsett tid och plats.
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white py-[3rem] md:w-6/12 w-full">
          <div className=" flex flex-col md:px-8">
            <p className="text-md text-gray-700">
              De följer alltid god industrised och tillämpar de rutiner och
              procedurer som har lagts fast i olika kvalitetsdokument. Detta
              avspeglas i noggrant dokumentationsarbete som pågår under hela
              projekttiden."
            </p>

            <h3 className="text-xl font-bold text-[#4a536e]">
              Vi är stolta och tar ansvar
            </h3>

            <p className="text-md text-gray-700">
              Oavsett om det gäller att ta en obemannad kran i drift, att
              installera en transportör och ett pakethanteringssystem, eller att
              integrera en fullständig automatisk bearbetningslinje, så har
              JGruppens medarbetare det elektriska, mekaniska och svetstekniska
              kunnande som krävs för att jobbet ska bli gjort. "Vi är stolta
              över vårt rykte om att stå för vårt ord och genomföra våra uppdrag
              i tid, oavsett hur många mantimmar vi måste lägga in."
              Industriella kunder som vet att tid är pengar och kräver minimala
              driftsavbrott uppskattar vårt arbetssätt. Det väcker intresse hos
              allt fler potentiella nya kunder", tillägger Christopher Jarl.
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
              <h2 className="text-3xl font-bold text-[#4a536e] mb-4">
                Expertis inom installation av materialhanteringssystem
              </h2>
              <p className="text-lg font-bold w-full md:w-3/4 text-gray-700 mb-4">
                Sedan starten har vi fortsatt att möta våra kunders behov, och det är just detta som har tagit oss dit vi är idag. Vi har lång erfarenhet av installationer inom bland annat:
              </p>
              <ul className="text-md text-gray-700 list-none space-y-2">
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
            <p className="text-md w-full text-gray-700 mb-4">
              <b>JGruppen</b> har en avdelning med elektriker som är
              certifierade för maskininstallationer. Vi har lång erfarenhet av
              industrielektronik, automationselektronik och maskinelektronik. Vi
              erbjuder allt från installationer till felsökningar och
              reparationer på er anläggning. Vi kan hjälpa er med antingen
              enstaka insatser gällande både förebyggande och avhjälpande
              service likväl som att vi kan ta det fulla ansvaret för
              underhållet på er arbetsplats.
            </p>
            <p className="text-md font-bold w-full text-gray-700 mb-4">
              Vi har en stor bredd av personal som är utbildade och erfarna för
              att möta behoven från våra kunder.
            </p>
            <ul className="text-md list-none text-gray-700 space-y-2">
              <li>– Automation</li>
              <li>– El-installation</li>
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
