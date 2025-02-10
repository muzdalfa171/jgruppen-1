import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-100  lg:py-8">
      <div className="flex md:flex-row flex-col justify-around ">
        {/* Logo Section */}
        <div className="w-full flex flex-col md:items-center items-start p-8">
          <Image
            src="/img/jgruppen-logo-skugga.png"
            alt="JGruppen"
            width={192}  // 12rem * 16px/rem = 192px
            height={80}  // Maintain aspect ratio based on original image dimensions
            className="xl:h-10 h-12 w-[12rem]"
            quality={100}
            priority={true}
            style={{ 
              objectFit: 'contain',
              maxWidth: '100%',
              height: 'auto'
            }}
          />

          {/* Social Media Icons */}
          <div className="flex mt-10 space-x-4">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-1"
            >
              <SlSocialLinkedin className="text-blue-700 h-4 w-4 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-3 lg:w-3 hover:text-blue-900" />
            </Link>

            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-1"
            >
              <SlSocialTwitter className="text-blue-500 h-4 w-4 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-3 lg:w-3 hover:text-blue-700" />
            </Link>

            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#636466] rounded-lg p-1"
            >
              <TiSocialFacebook className="text-blue-800 h-4 w-4 sm:h-4 sm:w-4 md:h-3 md:w-3 lg:h-3 lg:w-3 hover:text-blue-900" />
            </Link>


          </div>
        </div>





        {/* Company Details */}
        <div className="w-full p-8 md:border-l  border-gray-300 md:text-md text-sm flex items-start lg:justify-center lg:text-center flex-col lg:ps-28">
          <h3 className="font-bold text-lg">JGruppen AB</h3>

          {/* Besöksadress Section with Icon */}
          <div className="mt-4">
            <div className="flex items-center ">
              <FaMapLocationDot className="mr-2" />
              <h3>Besöksadress</h3>
            </div>
            <Link
              href="https://maps.app.goo.gl/ZnU1ntEBGx6oqK6J8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              <p className="text-left">Smedsby Industriområde, 591 96 Motala</p>
            </Link>
          </div>

          {/* Telefon Section with Icon */}
          <div className="mt-4">
            <div className="flex items-center ">
              <MdPhone className="mr-2" />
              <h3>Telefon</h3>
            </div>
            <Link
              href="tel:+46141215044"
              className="text-black hover:underline"
            >
              0141-21 50 44
            </Link>
          </div>

          {/* Email Section with Icon */}
          <div className="mt-4">
            <div className="flex items-center ">
              <MdEmail className="mr-2" />
              <h3>E-post</h3>
            </div>
            <Link
              href="mailto:support@jgruppen.com"
              className="text-black hover:underline"
            >
              support@jgruppen.com
            </Link>
          </div>
        </div>






        {/* Quick Links */}
        <div className="w-full p-8 text-sm text-left md:border-l   flex items-start md:justify-center lg:border-gray-300">
          <div>
            <h3 className="font-bold text-lg">Snabbalänkar</h3>
            <ul className="flex flex-col space-y-2 mt-4">
              {[
                { href: "/", label: "Hem" },
                { href: "/installationer", label: "Installationer" },
                { href: "/underhall", label: "Underhåll" },
                { href: "/produkter", label: "Tillverkning och forsaljning" },
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






