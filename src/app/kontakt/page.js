"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const ContactPage = () => {
  const [errors, setErrors] = useState({});
  const [remainingChars, setRemainingChars] = useState(500);
  const [formData, setFormData] = useState({
    business_type: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "message") {
      setRemainingChars(500 - value.length);
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateName = (name) => /^[A-Za-z\s]{1,25}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      tempErrors.name = "Var god fyll i det här fältet!";
    } else if (!validateName(formData.name)) {
      tempErrors.name = "Namnet får max innehålla 25 bokstäver.";
    }

    // Validate email
    if (!formData.email.trim()) {
      tempErrors.email = "Var god fyll i det här fältet!";
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Ogiltig e-postadress.";
    }

    // Validate message
    if (!formData.message.trim()) {
      tempErrors.message = "Var god fyll i det här fältet!";
    } else if (remainingChars < 0) {
      tempErrors.message = "Meddelandet får inte överstiga 500 tecken.";
    }

    // Validate business type
    if (!formData.business_type) {
      tempErrors.business_type = "Var god välj ett alternativ!";
    }

    if (Object.keys(tempErrors).length === 0) {
      try {
        const response = await fetch('/api/SendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("Ditt meddelande har skickats!");
          setFormData({
            business_type: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            subject: "",
            message: "",
          });
          setRemainingChars(500);
        } else {
          toast.error("Det gick inte att skicka meddelandet. Försök igen senare.");
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error("Ett fel uppstod. Försök igen senare.");
      }
    }
    setErrors(tempErrors);
  };

  return (
    <div className="pt-24 min-h-[calc(100vh-6rem)] bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>Kontakt - JGruppen</title>
        <link rel="canonical" href="https://jgruppen.se/kontakt" key="canonical" crossOrigin="anonymous" />
        <meta
          name="description"
          content="Kontakta JGruppen för alla dina materialhantering- och installationsfrågor."
        />
        <meta name="keywords" content="kontakt, kontakta oss, JGruppen, installation" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            Kontakta JGruppen
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
            Vårt team av experter står redo att hjälpa dig med alla frågor kring
            materialhantering och professionella installationer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-6 xl:gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 order-last md:order-first">
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-6">
              {/* Företagstyp */}
              <div>
                <label
                  htmlFor="business_type"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Företagstyp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="business_type"
                    value={formData.business_type}
                    onChange={handleChange}
                    className="w-full pl-4 pr-10 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Välj företagstyp
                    </option>
                    <option value="smallBusiness">Litet företag</option>
                    <option value="mediumBusiness">Medelstort företag</option>
                    <option value="enterprise">Stort företag</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-500">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.business_type && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 7a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    {errors.business_type}
                  </p>
                )}
              </div>

              {/* Name, Email, Phone, Address, Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {["name", "email", "phone", "address", "subject"].map((field) => (
                  <div
                    key={field}
                    className={field === "subject" ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {field === "name"
                        ? "Namn"
                        : field === "email"
                        ? "E-post"
                        : field === "phone"
                        ? "Telefon"
                        : field === "address"
                        ? "Adress"
                        : "Ämne"}
                      {(field === "name" || field === "email") && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <input
                      className={`w-full px-4 py-2 sm:py-3 rounded-lg border ${
                        errors[field]
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                      id={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={
                        field === "name"
                          ? "Ditt fullständiga namn"
                          : field === "email"
                          ? "exempel@foretag.se"
                          : field === "phone"
                          ? "+46 70 123 45 67"
                          : field === "address"
                          ? "Gatunamn 1, 123 45 Stad"
                          : "Specifikt ämne"
                      }
                      value={formData[field]}
                      onChange={handleChange}
                      required={field === "name" || field === "email"}
                    />
                    {errors[field] && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 7a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Meddelande <span className="text-red-500">*</span>
                  </label>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {remainingChars} tecken kvar
                  </span>
                </div>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  maxLength={500}
                  className={`w-full px-4 py-2 sm:py-3 rounded-lg border ${
                    errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                  placeholder="Beskriv ditt ärende i detalj..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 7a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                className="w-full py-2 sm:py-3 px-6 bg-gray-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-medium sm:font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                type="submit"
              >
                Skicka meddelande
              </button>
            </form>
          </div>

          {/* Info & Map Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-sm sm:text-base font-medium text-gray-700 dark:text-white mb-4 sm:mb-6">
                Kontaktinformation
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-900 dark:text-gray-100">
                <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="p-1 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                      Besöksadress
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Smedsby Industriområde,
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      591 96 Motala
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="p-1 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                      Telefon
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      0141-21 50 44
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="p-1 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                      E-post
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      info@jgruppen.se
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updated Map Iframe with a Single Red Marker */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-[280px] sm:h-[360px]">
              <iframe
                src="https://maps.google.com/maps?q=58.5518997,15.0158478&z=15&output=embed&markers=color:red%7C58.5518997,15.0158478"
                width="100%"
                height="100%"
                loading="lazy"
                className="dark:grayscale dark:opacity-90"
                style={{ border: 0 }}
                allowFullScreen
                aria-label="JGruppens kontor på karta"
              />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        theme="colored"
        toastClassName="!bg-blue-700 !text-white"
        progressClassName="!bg-blue-500"
      />
    </div>
  );
};

export default ContactPage;
