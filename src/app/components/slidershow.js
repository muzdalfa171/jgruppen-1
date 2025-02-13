import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/img/AdobeStock_379435239-2048x1365.jpeg",
      title: "JGruppen",
      subtitle: " Mångfacetterad verksamhet med värdehöjande tjänster",
      buttonText: "Kontakta oss",
      link: "/kontakt"
    },
    {
      image: "/img/slide2.jpg", 
      title: "Underhållstjänster",
      subtitle: "Kontinuerlig driftoptimering, optimerade flöden och effektivare verksamhet",
      buttonText: "Läs mer",
      link: "/underhall"
    },
    {
      image: "/img/slide3.jpg",
      title: "Specialiserade Utbildningar", 
      subtitle: "Kompetensutveckling inom flera arbetsomräden",
      buttonText: "Läs mer",
      link: "/om-oss"
    }
  ];

  const nextImage = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full h-[18rem] xs:h-[20rem] sm:h-[25rem] md:h-[35rem] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          priority
          quality={100}
          sizes="(max-width: 320px) 280px, (max-width: 640px) 600px, 1000px"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Slideshow Content */}
      <div className="absolute inset-0 flex gap-2 sm:gap-4 flex-col justify-center items-center text-white bg-black bg-opacity-60 p-4 md:p-8">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4 text-[#FFFFFF] font-bold text-center">
          {slides[currentSlide].title}
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center">
          {slides[currentSlide].subtitle}
        </p>
        <Link href={slides[currentSlide].link}>
          <button className="mt-3 sm:mt-6 px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 border border-white text-white font-semibold hover:bg-[#4A536E] hover:text-white transition duration-300 text-xs xs:text-sm sm:text-base">
            {slides[currentSlide].buttonText}
          </button>
        </Link>
      </div>

      {/* Slideshow Controls - Arrows for larger screens */}
      <div className="hidden sm:block">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
          onClick={prevImage}
          aria-label="Previous slide"
        >
          <svg width="15" height="28" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2 L2 14 L10 26"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={nextImage}
          aria-label="Next slide"
        >
          <svg width="15" height="28" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 2 L13 14 L5 26"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* Slideshow Controls - Dots for mobile */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}