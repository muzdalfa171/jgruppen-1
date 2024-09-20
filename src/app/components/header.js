"use client"; // Add this directive for client-side rendering

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // `usePathname` to detect the current route

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Handle scroll behavior only on the homepage
  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup scroll event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true); // On other pages, always show the white background
    }
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        pathname === "/" && !isScrolled ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <img
            src="/img/jgruppen-logo-skugga.png"
            alt="JGruppen Logo"
            className="h-14 w-auto"
          />
        </div>

        {/* Desktop Navbar */}
        <nav
          className={`hidden md:flex space-x-6 text-xl font-bold ${
            pathname === "/" && !isScrolled ? "text-white" : "text-[#4A536E]"
          }`}
        >
          <Link href="/" className="hover:overline  decoration-4">
            Hem
          </Link>
          <Link href="#" className="hover:overline  decoration-4">
            Tjänster
          </Link>
          <Link href="/installationer" className="hover:overline  decoration-4">
            Installationer
          </Link>
          <Link href="/underhall" className="hover:overline  decoration-4">
            Underhåll
          </Link>
          <Link href="/produkter" className="hover:overline  decoration-4">
            Produkter
          </Link>
          <Link href="/om-oss" className="hover:overline  decoration-4">
            Om oss
          </Link>
          <Link href="/kontakt" className="hover:overline  decoration-4">
            Kontakt
          </Link>
          <Link href="/jobba-med-oss" className="hover:overline  decoration-4">
            Jobba med oss
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className={`w-6 h-6 ${
              pathname === "/" && !isScrolled ? "text-white" : "text-[#4A536E]"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navbar */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-black  bg-opacity-70 text-white space-y-4 py-6 px-4 absolute w-full left-0 top-16">
          <Link href="/" className="hover:overline  decoration-4">
            Hem
          </Link>
          <Link href="/#" className="hover:overline  decoration-4">
            Tjänster
          </Link>
          <Link href="/installationer" className="hover:overline  decoration-4">
            Installationer
          </Link>
          <Link href="/underhall" className="hover:overline  decoration-4">
            Underhåll
          </Link>
          <Link href="/produkter" className="hover:overline  decoration-4">
            Produkter
          </Link>
          <Link href="/om-oss" className="hover:overline  decoration-4">
            Om oss
          </Link>
          <Link href="/kontakt" className="hover:overline  decoration-4">
            Kontakt
          </Link>
          <Link href="/jobba-med-oss" className="hover:overline  decoration-4">
            Jobba med oss
          </Link>
        </nav>
      )}
    </header>
  );
}
