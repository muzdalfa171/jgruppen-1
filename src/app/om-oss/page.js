import React from "react";
import Image from "next/image";
import Head from "next/head";
const Omoss = () => {
  return (
    <section className="pt-40">
      <Head>
        <title>Om oss - JGruppen</title>
        <link
          rel="canonical"
          href="https://jgruppen.se/om-oss" // Canonical URL
          key="canonical"
        />
        <meta
          name="description"
          content="Learn more about JGruppen, our mission, and our team. We specialize in material handling and installation services across Europe."
        />
        <meta
          name="keywords"
          content="JGruppen, about us, material handling, installation, team"
        />
      </Head>
      {/* Introduction Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-6">En framgångssaga</h1>
        <p className="text-lg text-gray-700 mx-auto w-8/12 md:w-9/12">
        Som en engagerad fristående extern entreprenör fick JCon allt fler uppdrag inom olika projekt åt stora internationella systembyggare och integrationsspecialister med hög kompetens.
         Tack vare sitt rykte att kunna utföra kostnadseffektiva jobb, präglade av hög kvalitet, kompetenta yrkesmän och med leveranssäkerhet i högsätet, kunde JCon ta hem allt större uppdrag och började också öka sina åtaganden utanför Sverige.
        </p>
        
      </div>
      {/* First Section - Installationer */}
      <div className="w-full bg-[#f0f1f5] px-6 md:px-24 py-12">
        <div className="container mx-auto">
          <div className="grid grid-row xl:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#4a536e] mb-4">
                Utveckling
              </h2>
              <p className="text-md  w-full md:w-11/12 text-gray-700 mb-4">
              För att bemöta aktuella krav från våra kunder, inledde Christopher Jarl en omorganisation för att skapa en ny struktur som var bättre anpassad för framtida krav på en dynamisk marknad.
              <br />
              Detta ledde till bildandet av JGruppen AB. 
Sedan dess har företaget fortsatt att växa och bredda sitt utbud av produkter och tjänster.
<br/>
Närvaron har förstärkts på nya och befintliga exportmarknader världen över.
 </p>
              <h2 className="text-3xl font-bold text-[#4a536e] mb-4">
                Stolthet
              </h2>
              <p className="text-md w-full md:w-11/12 text-gray-700 mb-4">
              JGruppen har sitt huvudkontor i Motala, Östergötalnd. 
Antalet anställda är drygt 70 personer världen över.
<br/>
På senare tid har vi även filialer i Oslo, Norge och i GCC länderna. 
<br/>
Även om positionen på den svenska hemmamarknaden är fortsatt stark så baseras idag drygt 70% av vår  omsättning på uppdrag inom exportmarknaderna, EU, GCC, Norge, Schweiz och USA. 
<br/>
Företaget är särskilt stolt över det faktum att alla medarbetare har den utbildning och behörighet som krävs för att uppfylla kundernas höga krav.
              </p>
            </div>
            {/* Image on the Right */}
            <div className="flex justify-center">
              <Image
                src="/img/pexels-startup-stock-photos-7096-scaled.jpg"
                alt="Installation of material handling system"
                width={700}
                height={300}
                className="object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Omoss;
