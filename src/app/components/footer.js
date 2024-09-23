// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 px-5 py-8">
//       <div className="mx-auto flex flex-col md:flex-row gap-8 justify-evenly px-4 md:px-8">
//         {/* Logo Section */}
//         <div className="w-full md:w-4/12 flex justify-center md:justify-start p-8">
//           <img
//             src="/img/jgruppen-logo-skugga.png"
//             alt="JGruppen"
//             className="h-10 md:h-12"
//           />
//         </div>

//         {/* Company Details */}
//         <div className="w-full md:w-4/12 p-8 text-left md:text-left md:flex md:justify-start">
//           <div>
//             <h3 className="font-bold text-lg">JGruppen AB</h3>
//             <p className="mt-4">
//               Besöksadress: Smedsby Industriområde, 591 96 Motala <br />
//               Postadress: Smedsby Industriområde, 591 96 Motala
//             </p>
//             <p className="mt-4">Telefon: 0141-21 50 44</p>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="w-full md:w-4/12 p-8 text-left md:flex md:justify-start">
//           <div>
//             <h3 className="font-bold text-lg">Snabba länkar</h3>
//             <ul className="flex flex-col space-y-2 mt-4">
//               <li>
//                 <Link href="/hem">Hem</Link>
//               </li>
//               <li>
//                 <Link href="/tjanster">Tjänster</Link>
//               </li>
//               <li>
//                 <Link href="/installationer">Installationer</Link>
//               </li>
//               <li>
//                 <Link href="/underhall">Underhåll</Link>
//               </li>
//               <li>
//                 <Link href="/produkter">Produkter</Link>
//               </li>
//               <li>
//                 <Link href="/om-oss">Om oss</Link>
//               </li>
//               <li>
//                 <Link href="/kontakt">Kontakt</Link>
//               </li>
//               <li>
//                 <Link href="/jobba-med-oss">Jobba med oss</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-5 py-8">
      <div className="mx-auto flex flex-col md:flex-row gap-8 justify-evenly px-4 md:px-8">
        {/* Logo Section */}
        <div className="w-full md:w-4/12 flex md:justify-center justify-start p-8">
          <img
            src="/img/jgruppen-logo-skugga.png"
            alt="JGruppen"
            className="h-10 md:h-12"
          />
        </div>

        {/* Company Details */}
        <div className="w-full md:w-4/12 p-8 text-left md:text-center md:flex md:justify-start">
          <div>
            <h3 className="font-bold text-lg">JGruppen AB</h3>
            <p className="mt-4">
              Besöksadress: Smedsby Industriområde, 591 96 Motala <br />
              Postadress: Smedsby Industriområde, 591 96 Motala
            </p>
            <p className="mt-4">Telefon: 0141-21 50 44</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-4/12 p-8 text-left md:flex md:justify-start">
          <div>
            <h3 className="font-bold text-lg">Snabba länkar</h3>
            <ul className="flex flex-col space-y-2 mt-4">
              {[
                { href: "/hem", label: "Hem" },
                { href: "/tjanster", label: "Tjänster" },
                { href: "/installationer", label: "Installationer" },
                { href: "/underhall", label: "Underhåll" },
                { href: "/produkter", label: "Produkter" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/jobba-med-oss", label: "Jobba med oss" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
