// "use client"; // Add this directive for client-side rendering

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // `usePathname` to detect the current route

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname(); // Get the current path

//   // Handle scroll behavior only on the homepage
//   useEffect(() => {
//     if (pathname === "/") {
//       const handleScroll = () => {
//         if (window.scrollY > 50) {
//           setIsScrolled(true);
//         } else {
//           setIsScrolled(false);
//         }
//       };

//       window.addEventListener("scroll", handleScroll);

//       // Cleanup scroll event listener on component unmount
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     } else {
//       setIsScrolled(true); // On other pages, always show the white background
//     }
//   }, [pathname]);

//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMobileMenu = () => {
//     setMenuOpen(false);
//   };

//   const links = [
//     { href: "/", label: "Hem" },
//     { href: "#", label: "Tjänster" },
//     { href: "/installationer", label: "Installationer" },
//     { href: "/underhall", label: "Underhåll" },
//     { href: "/produkter", label: "Produkter" },
//     { href: "/om-oss", label: "Om oss" },
//     { href: "/kontakt", label: "Kontakt" },
//     { href: "/jobba-med-oss", label: "Jobba med oss" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         pathname === "/" && !isScrolled ? "bg-transparent" : "bg-white shadow-md"
//       }`}
//     >
//       <div className="container lg:px-12  py-6 flex justify-evenly items-center">
//         {/* Logo */}
//         <div className="flex">
//           <img
//             src="/img/jgruppen-logo-skugga.png"
//             alt="JGruppen Logo"
//             className="lg:h-14 w-auto h-10"
//           />
//         </div>

//         {/* Desktop Navbar */}
//         <nav
//           className={`hidden lg:flex space-x-6 text-xl font-bold ${
//             pathname === "/" && !isScrolled ? "text-white" : "text-[#4A536E]"
//           }`}
//         >
//           {links.map((link) => (
//             <Link key={link.href} href={link.href}>
//               <span
//                 className={`hover:overline decoration-4 cursor-pointer ${
//                   pathname === link.href ? "underline decoration-4" : ""
//                 }`}
//               >
//                 {link.label}
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Toggle Button */}
//         <button className="block lg:hidden" onClick={handleMenuClick}>
//           <svg
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             className={`w-6 h-6 ${
//               pathname === "/" && !isScrolled ? "text-white" : "text-[#4A536E]"
//             }`}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navbar */}
//       {menuOpen && (
//         <nav className="lg:hidden flex flex-col bg-[#818285] text-white space-y-4 py-6 px-4 absolute w-full left-0 top-22">
//           {links.map((link) => (
//             <Link key={link.href} href={link.href}>
//               <span
//                 className="hover:overline decoration-4 cursor-pointer "
//                 onClick={closeMobileMenu}
//               >
//                 {link.label}
//               </span>
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }
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
    const handleScroll = () => {
      if (pathname === "/" && window.scrollY > 50) {
        setIsScrolled(true);
      } else if (pathname === "/" && window.scrollY <= 50) {
        setIsScrolled(false);
      }
    };

    // Listen to scroll events only on the homepage
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup scroll event listener on component unmount or when pathname changes
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const links = [
    { href: "/", label: "Hem" },
    { href: "#", label: "Tjänster" },
    { href: "/installationer", label: "Installationer" },
    { href: "/underhall", label: "Underhåll" },
    { href: "/produkter", label: "Produkter" },
    { href: "/om-oss", label: "Om oss" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/jobba-med-oss", label: "Jobba med oss" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        pathname === "/" && !isScrolled ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="lg:px-12 px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <img
            src="/img/jgruppen-logo-skugga.png"
            alt="JGruppen Logo"
            className="lg:h-10 w-auto h-8"
          />
        </div>

        {/* Desktop Navbar */}
        <nav
          className={`hidden lg:flex gap-4 lg:text-[0.75rem]  font-bold ${
            pathname === "/" && !isScrolled ? "text-white" : "text-[#4A536E]"
          }`}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`hover:overline decoration-4 cursor-pointer ${
                  pathname === link.href ? "underline decoration-4" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className="block lg:hidden" onClick={handleMenuClick}>
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
        <nav className="lg:hidden flex flex-col bg-[#818285] text-white space-y-4 py-6 px-6 absolute w-full left-0 top-19">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="hover:overline decoration-4 cursor-pointer"
                onClick={closeMobileMenu}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
