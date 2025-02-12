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
    <footer className="bg-gray-100 dark:bg-gray-900 lg:py-8">
      <div className="flex md:flex-row flex-col justify-around">
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
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-1 hover:opacity-80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="rounded-full p-1 hover:opacity-80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497"/>
                    <stop offset="5%" stopColor="#fdf497"/>
                    <stop offset="45%" stopColor="#fd5949"/>
                    <stop offset="60%" stopColor="#d6249f"/>
                    <stop offset="90%" stopColor="#285AEB"/>
                  </radialGradient>
                </defs>
                <path fill="url(#instagramGradient)" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-1 hover:opacity-80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#000000" className="dark:fill-white" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Company Details */}
        <div className="w-full p-8 md:border-l border-gray-300 dark:border-gray-700 text-xs sm:text-sm flex items-start lg:justify-center flex-col">
          <h3 className="font-bold text-sm sm:text-base dark:text-white">JGruppen AB</h3>

          {/* Besöksadress Section with Icon */}
          <div className="mt-4">
            <div className="flex items-center">
              <FaMapLocationDot className="mr-2 dark:text-white text-sm" />
              <h4 className="font-bold text-xs sm:text-sm dark:text-white">Besöksadress</h4>
            </div>
            <Link
              href="https://maps.app.goo.gl/ZnU1ntEBGx6oqK6J8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-gray-300 hover:underline text-xs sm:text-sm"
            >
              <p className="text-xs sm:text-sm">Smedsby Industriområde, 591 96 Motala</p>
            </Link>
          </div>

          {/* Telefon Section with Icon */}
          <div className="mt-4">
            <div className="flex items-center">
              <MdPhone className="mr-2 dark:text-white text-sm" />
              <h4 className="font-bold text-xs sm:text-sm dark:text-white">Telefon</h4>
            </div>
            <Link
              href="tel:+46141215044"
              className="text-black dark:text-gray-300 hover:underline text-xs sm:text-sm"
            >
              0141-21 50 44
            </Link>
          </div>

          {/* Email Section with Icon */}
          <div className="mt-4">
            <div className="flex items-center">
              <MdEmail className="mr-2 dark:text-white text-sm" />
              <h4 className="font-bold text-xs sm:text-sm dark:text-white">E-post</h4>
            </div>
            <Link
              href="mailto:info@jgruppen.se"
              className="text-black dark:text-gray-300 hover:underline text-xs sm:text-sm"
            >
              info@jgruppen.se
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full p-8 text-sm text-left md:border-l flex items-start md:justify-center lg:border-gray-300 dark:lg:border-gray-700">
          <div>
            <h3 className="font-bold text-lg dark:text-white">Snabblänkar</h3>
            <ul className="flex flex-col space-y-2 mt-4">
              {[
                { href: "/", label: "Hem" },
                { href: "/installationer", label: "Installation" },
                { href: "/underhall", label: "Service och underhåll" },
                { href: "/produkter", label: "Tillverkning och forsaljning" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/jobba-med-oss", label: "Jobba med oss" },
              ].map((item) => (
                <li key={item.href} className="flex items-center">
                  <RiArrowDropRightLine className="dark:text-white" />
                  <Link href={item.href} className="ml-2 dark:text-gray-300">
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
