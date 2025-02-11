"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Hem" },
  { href: "/installationer", label: "Installation" },
  { href: "/underhall", label: "Service och underhåll" },
  { href: "/produkter", label: "Tillverkning och försäljning" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/jobba-med-oss", label: "Jobba med oss" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const scrollTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        cancelAnimationFrame(scrollTimeout.current);
        scrollTimeout.current = requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          setIsScrolled(prev => scrolled !== prev ? scrolled : prev);
        });
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      cancelAnimationFrame(scrollTimeout.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const menuButtonColor = useMemo(() => 
    pathname === "/" && !isScrolled ? "text-white" : "text-[#4A536E]",
    [pathname, isScrolled]
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        pathname === "/" && !isScrolled ? "bg-transparent" : "bg-[#f0f1f5] shadow-md"
      }`}
    >
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/" prefetch={false}>
            <Image
              src="/img/jgruppen-logo-skugga.png"
              alt="JGruppen Company Logo"
              width={192}
              height={80}
              className="h-4 xs:h-5 sm:h-6 md:h-8 lg:h-12 w-auto"
              quality={85}
              priority
            />
          </Link>
        </div>

        <nav className={`hidden lg:flex gap-6 xl:gap-8 text-[0.85rem] xl:text-[0.95rem] font-bold ${
          pathname === "/" && !isScrolled ? "text-white" : "text-[#4A536E]"
        }`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} prefetch={false}>
              <span className={`hover:overline decoration-4 cursor-pointer whitespace-nowrap ${
                pathname === link.href ? "overline decoration-4" : ""
              }`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <button 
          className="block lg:hidden p-2" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className={`w-5 sm:w-6 h-5 sm:h-6 ${menuButtonColor}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden flex flex-col bg-[#818285] text-white py-4 sm:py-6 px-4 sm:px-6 absolute w-full left-0 top-[48px] sm:top-[60px]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} prefetch={false} className="py-3 sm:py-4 border-b border-gray-600 last:border-b-0">
              <span className="hover:overline decoration-4 cursor-pointer text-sm sm:text-base" onClick={() => setMenuOpen(false)}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
