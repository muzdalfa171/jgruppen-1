

// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 px-5 py-8">
//       <div className="flex justify-center">
//         <h4 className="py-4 text-center">
//           casino svenska | bästa casino online | svenska nätcasino
//         </h4>
//       </div>

//       <div className="mx-auto flex flex-col md:flex-row gap-8 justify-evenly px-4 md:px-8">
//         {/* Logo Section */}
//         <div className="w-full md:w-4/12 flex flex-col items-center justify-start p-8">
//           <img
//             src="/img/jgruppen-logo-skugga.png"
//             alt="JGruppen"
//             className="h-10 md:h-12"
//           />
//         </div>

//         {/* Company Details - add border-l to create vertical line */}
//         <div className="w-full md:w-4/12 p-8 text-left md:text-center flex flex-col items-center justify-start border-l border-gray-300">
//           <div>
//             <h3 className="font-bold text-lg">JGruppen AB</h3>
//             <p className="mt-4">
//               Besöksadress: Smedsby Industriområde, 591 96 Motala <br />
//               Postadress: Smedsby Industriområde, 591 96 Motala
//             </p>
//             <p className="mt-4">Telefon: 0141-21 50 44</p>
//           </div>
//         </div>

//         {/* Quick Links - add border-l to create vertical line */}
//         <div className="w-full md:w-4/12 p-8 text-left flex flex-col items-center justify-start border-l border-gray-300">
//           <div>
//             <h3 className="font-bold text-lg">Snabba länkar</h3>
//             <ul className="flex flex-col space-y-2 mt-4">
//               {[
//                 { href: "/", label: "Hem" },
//                 { href: "#", label: "Tjänster" },
//                 { href: "/installationer", label: "Installationer" },
//                 { href: "/underhall", label: "Underhåll" },
//                 { href: "/produkter", label: "Produkter" },
//                 { href: "/om-oss", label: "Om oss" },
//                 { href: "/kontakt", label: "Kontakt" },
//                 { href: "/jobba-med-oss", label: "Jobba med oss" },
//               ].map((item) => (
//                 <li key={item.href}>
//                   <Link href={item.href}>{item.label}</Link>
//                 </li>
//               ))}
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
      <div className="flex justify-center">
        <h4 className="py-4 w-full mx-auto text-center">
          casino svenska | bästa casino online | svenska nätcasino
        </h4>
      </div>

      <div className="mx-auto flex flex-col md:flex-row gap-8 justify-evenly px-4 md:px-8">
        {/* Logo Section */}
        <div className="w-full md:w-4/12  sm:border-b-0 border-b-2 flex flex-col md:items-center items-start justify-start p-8">
          <img
            src="/img/jgruppen-logo-skugga.png"
            alt="JGruppen"
            className="h-10 md:h-12"
          />
        </div>

        {/* Company Details */}
        <div className="w-full md:w-4/12 p-8 text-left  sm:border-b-0 border-b-2 md:text-center flex flex-col md:items-center items-start justify-start md:border-l border-gray-300 ">
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
        <div className="w-full md:w-4/12 p-8 text-left flex flex-col md:items-center items-start  justify-start md:border-l border-gray-300 ">
          <div>
            <h3 className="font-bold text-lg">Snabba länkar</h3>
            <ul className="flex flex-col space-y-2 mt-4">
              {[
                { href: "/", label: "Hem" },
                { href: "#", label: "Tjänster" },
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
