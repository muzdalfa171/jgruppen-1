import Image from "next/legacy/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


const cards = [
  {
    imgSrc: "/img/category1.jpg",
    alt: "Mekanisk installation",
    title: "Mekanisk installation",
    description: "Företaget har sin grund inom installation av materialhanteringssystem. Vi har sedan dess fortsatt fylla behovet hos våra kunder och det är det som har gjort att vi är dom vi är idag.",
    href: "/installationer"
  },
  {
    imgSrc: "/img/category2.jpg",
    alt: "Elektrisk installation",
    title: "Elektrisk installation",
    description: "JGruppen har en avdelning med elektriker som är certifierade för maskininstallationer. Vi erbjuder allt från installationer till felsökningar och reparationer på er anläggning.",
    href: "/installationer"
  },
  {
    imgSrc: "/img/category3.jpg",
    alt: "Service och underhåll",
    title: "Service och underhåll",
    description: "Allmänt erkänt som ett av landets ledande företag inom sin bransch, har JGruppen vuxit fram och blivit regionens första val för industriell installation, service, underhåll och reparation.",
    href: "/underhall"
  },
  {
    imgSrc: "/img/category4.jpg",
    alt: "Tillverkning och försäljning",
    title: "Tillverkning och försäljning",
    description: "Flexibla och reaktionssnabba partnerskap med noggrant utvalda underleverantörer som JGruppens dotterbolag samarbetat med under lång tid garanterar att JGruppens kunder får sina behov tillgodosedda med olika typer av komponenter och material.",
    href: "/produkter"
  }
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto mt-8 mb-14">
      {cards.map((card, index) => (
        <div key={index} className="bg-white dark:bg-gray-900 text-center shadow flex flex-col h-full">
          <div className="h-48 relative">
            <Image
              src={card.imgSrc}
              fill
              alt={card.alt}
              className="object-cover"
            />
          </div>
          <div className="bg-[#f0f1f5] dark:bg-gray-800 flex-1 flex flex-col">
            <div className="bg-[#4a536e] dark:bg-[#2a334e] py-3 px-4">
              <h3 className="text-sm sm:text-base font-bold text-white">{card.title}</h3>
            </div>
            <div className="p-4 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-left">
                {card.description}
              </p>
            </div>
            <Link href={card.href} className="mt-auto">
              <button className="w-full bg-white dark:bg-gray-900 py-3 px-4 text-sm sm:text-base dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                {card.title}
                <FaArrowRightLong className="text-sm" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;