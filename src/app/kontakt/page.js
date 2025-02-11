"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";

const ContactPage = () => {
  <Head>
    <title>Kontakt - JGruppen</title>
    <link rel="canonical" href="https://jgruppen.se/kontakt" key="canonical" />
    <meta
      name="description"
      content="Kontakta JGruppen för alla dina materialhantering- och installationsfrågor."
    />
    <meta name="keywords" content="kontakt, kontakta oss, JGruppen, installation" />
  </Head>;

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

    // Validering
    if (!validateName(formData.name)) {
      tempErrors.name = "Namnet får max innehålla 25 bokstäver och endast alfabetiska tecken.";
    }
    if (!validateEmail(formData.email)) {
      tempErrors.email = "Ogiltig e-postadress.";
    }
    if (remainingChars < 0) {
      tempErrors.message = "Meddelandet får inte överstiga 500 tecken.";
    }
    if (!formData.message) {
      tempErrors.message = "Var god fyll i det här fältet!";
    }

    if (Object.keys(tempErrors).length === 0) {
      try {
        await addDoc(collection(db, "contactus"), {
          user_id: uuidv4(),
          ...formData,
          created_at: new Date(),
        });

        toast.success("Ditt meddelande har skickats");

        // Återställ formulär
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
      } catch (error) {
        toast.error(`Ett fel uppstod: ${error.message}`);
      }
    }
    setErrors(tempErrors);
  };

  return (
    <div className="pt-10 md:pt-40 container w-full mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="p-8">
            <h2 className="text-3xl font-bold text-[#4a536e] dark:text-[#8a93ae] text-center mb-8">
              Kontakta oss
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="business_type" className="block text-sm font-medium text-[#4a536e] dark:text-[#8a93ae] mb-1">
                  Företagstyp<span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full h-[3.4rem] px-4 py-3 rounded-lg border border-[#4a536e] dark:border-[#2a334e] bg-white dark:bg-gray-900 text-[#4a536e] dark:text-[#8a93ae] focus:ring-2 focus:ring-[#4a536e] dark:focus:ring-[#8a93ae] transition duration-200"
                  id="business_type" 
                  value={formData.business_type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Välj företagstyp</option>
                  <option value="smallBusiness">Litet företag</option>
                  <option value="mediumBusiness">Medelstort företag</option>
                  <option value="enterprise">Stort företag</option>
                </select>
              </div>

              {["name", "email", "phone", "address", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-[#4a536e] dark:text-[#8a93ae] mb-1">
                    {field === "name" ? "Namn" :
                     field === "email" ? "E-post" :
                     field === "phone" ? "Telefon" :
                     field === "address" ? "Adress" :
                     field === "subject" ? "Ämne" : field}
                    {(field === "name" || field === "email") && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-[#4a536e] dark:border-[#2a334e] bg-white dark:bg-gray-900 text-[#4a536e] dark:text-[#8a93ae] focus:ring-2 focus:ring-[#4a536e] dark:focus:ring-[#8a93ae] transition duration-200"
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Ditt namn" :
                               field === "email" ? "Din e-post" :
                               field === "phone" ? "Ditt telefonnummer" :
                               field === "address" ? "Din adress" :
                               field === "subject" ? "Ämne" : ""}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field === "name" || field === "email"}
                  />
                  {errors[field] && (
                    <p className="mt-1 text-sm text-red-500">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-[#4a536e] dark:text-[#8a93ae] mb-1">
                    Meddelande<span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-[#4a536e] dark:border-[#2a334e] bg-white dark:bg-gray-900 text-[#4a536e] dark:text-[#8a93ae] focus:ring-2 focus:ring-[#4a536e] dark:focus:ring-[#8a93ae] transition duration-200 resize-none"
                    id="message"
                    placeholder="Skriv ditt meddelande här"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    maxLength={500}
                  />
                  <span className="absolute bottom-2 right-2 text-sm text-[#4a536e] dark:text-[#8a93ae]">
                    {remainingChars} / 500
                  </span>
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                className="w-full py-3 px-6 rounded-lg bg-[#4a536e] hover:bg-[#3a435e] dark:bg-[#2a334e] dark:hover:bg-[#1a233e] text-white font-semibold transition duration-200 transform hover:scale-[1.02]"
                type="submit"
              >
                Skicka meddelande
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactPage;
