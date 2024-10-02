import React from "react";
import Image from "next/image";

const Omoss = () => {
  return (
    <section className="pt-40">
      {/* Introduction Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-6">Framgångssaga</h1>
        <p className="text-lg text-gray-700 mx-auto w-8/12 md:w-9/12">
          Som fristående och engagerad extern entreprenör fick JCon allt fler
          uppdrag inom olika projekt åt stora internationella systembyggare och
          integrationsspecialister med hög kompetens. Tack vare sitt rykte för
          kostnadseffektiva jobb av hög kvalitet, utförda av kompetenta
          yrkesmän, med leveranssäkerhet i högsätet, kunde JCon ta hem allt
          större uppdrag och började också öka sina åtaganden utanför Sverige.
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
                Utvecklingen gjorde att Christopher Jarl inledde en omorganisation för att skapa en ny struktur som var bättre anpassad för framtida krav på en dynamisk marknad. Detta ledde till bildandet av JGruppen. Sedan dess har företaget fortsatt att växa och bredda sitt utbud av produkter och tjänster. Närvaron har förstärkts på nya och befintliga exportmarknader.
                </p>
                <h2 className="text-3xl font-bold text-[#4a536e] mb-4">
                Stolthet
                </h2>
                <p className="text-md w-full md:w-11/12 text-gray-700 mb-4">
                JGruppen har sitt huvudkontor i Motala och antalet anställda är drygt 70 personer. En filial har öppnats i Oslo, Norge, och även om positionen på den svenska hemmamarknaden är fortsatt stark så baseras idag drygt 70% av omsättningen på uppdrag inom exportmarknaderna, i Finland, Danmark, Norge, Storbritannien, Spanien och Tyskland. Företaget är särskilt stolt över det faktum att alla medarbetare har den utbildning och behörighet som krävs för att uppfylla kundernas höga krav. </p>
                
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
