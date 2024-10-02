// export default Footer;
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-5 py-8">
      <div className="mx-auto flex flex-col md:flex-row gap-8 justify-evenly px-4 md:px-8">
        {/* Logo Section */}
        <div className="w-full md:w-4/12 sm:border-b-0 border-b-2 flex flex-col md:items-center items-start justify-start p-8">
          <img
            src="/img/jgruppen-logo-skugga.png"
            alt="JGruppen"
            className="h-10 md:h-12"
          />

          {/* Social Media Icons */}
          <div className="flex mt-10 space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-2"
            >
              <SlSocialLinkedin className="text-blue-700 h-6 w-6 hover:text-blue-900" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-2"
            >
              <SlSocialTwitter className="text-blue-500 h-6 w-6 hover:text-blue-700" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-2"
            >
              <SlSocialInstagram className="text-pink-500 h-6 w-6 hover:text-pink-700" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-2"
            >
              <TiSocialFacebook className="text-blue-800 h-6 w-6 hover:text-blue-900" />
            </a>
            <a
              href="https://www.telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-2"
            >
              <TbBrandTelegram className="text-blue-500 h-6 w-6 hover:text-blue-700" />
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black rounded-lg p-2"
            >
              <FaWhatsapp className="text-green-500 h-6 w-6 hover:text-green-700" />
            </a>
          </div>
        </div>

        {/* Company Details */}
        <div className="w-full md:w-4/12 p-8 mx-auto md:border-l border-gray-300 flex flex-col items-center justify-start">
          <div className="md:ps-16 ps-10 w-full text-left">
            <h3 className="font-bold text-lg">JGruppen AB</h3>

            {/* Besöksadress Section with Icon */}
            <div className="mt-4">
              <div className="flex items-center">
                <FaMapLocationDot className="mr-2" />
                <h3>Besöksadress</h3>
              </div>
              <a
                href="https://www.google.com/maps?q=Smedsby+Industriområde,+591+96+Motala"
                target="_blank"
                className="text-black hover:underline"
              >
                Smedsby Industriområde, 591 96 Motala
              </a>
            </div>

            {/* Telefon Section with Icon */}
            <div className="mt-4">
              <div className="flex items-center">
                <MdPhone className="mr-2" />
                <h3>Telefon</h3>
              </div>
              <a href="tel:+46141215044" className="text-black hover:underline">
                0141-21 50 44
              </a>
            </div>

            {/* Email Section with Icon */}
            <div className="mt-4">
              <div className="flex items-center">
                <MdEmail className="mr-2" />
                <h3>e-post</h3>
              </div>
              <a
                href="mailto:support@jgruppen.com"
                className="text-black hover:underline"
              >
                support@jgruppen.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-4/12 p-8 text-left flex flex-col md:items-center items-start  justify-start md:border-l border-gray-300 ">
          <div>
            <h3 className="font-bold text-lg">Snabba länkar</h3>
            <ul className="flex flex-col space-y-2 mt-4">
              {[
                { href: "/", label: "Hem" },
                { href: "/installationer", label: "Installationer" },
                { href: "/underhall", label: "Underhåll" },
                { href: "/produkter", label: "Produkter" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/jobba-med-oss", label: "Jobba med oss" },
              ].map((item) => (
                <li key={item.href} className="flex items-center">
                  <RiArrowDropRightLine />
                  <Link href={item.href} className="ml-2">
                    {item.label}
                  </Link>
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
