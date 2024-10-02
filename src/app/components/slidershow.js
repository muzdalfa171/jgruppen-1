
import { useState } from "react";
import Link from "next/link";

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/img/AdobeStock_379435239-2048x1365.jpeg",
    "/img/slide2.jpg",
    "/img/slide3.jpg",
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
    <section
      className="relative w-full h-[35rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${slides[currentSlide]})` }}
    >
      {/* Slideshow Content */}
      <div className="absolute inset-0 flex gap-4 flex-col justify-center items-center text-white bg-black bg-opacity-60 p-4 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 text-[#ffffff] font-bold text-center">
          JGruppen
        </h1>
        {/* text-[#4a536e] */}
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center">
          Värdehöjande tjänster för optimerad drift
        </p>
        <p className="mt-4 text-center text-sm sm:text-base md:text-lg">
          Intresserad?
         
        </p>
        <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 border border-white text-white font-semibold hover:bg-[#4a536e] hover:text-white transition duration-300">
         
          <Link href="/kontakt">  Kontakta oss</Link>
        </button>
      </div>

      {/* Slideshow Controls */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
        onClick={prevImage}
      >
        <svg width="15" height="28" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 2 L2 14 L10 26"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        onClick={nextImage}
      >
        <svg width="15" height="28" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 2 L13 14 L5 26"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}

