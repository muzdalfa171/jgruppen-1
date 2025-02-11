"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";

const ContactPage = () => {
  const [errors, setErrors] = useState({});
  const [remainingChars, setRemainingChars] = useState(500);
  const [formData, setFormData] = useState({
    business_type: "", name: "", email: "", phone: "", address: "", subject: "", message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "message") setRemainingChars(500 - value.length);
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateName = (name) => /^[A-Za-z\s]{1,25}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Var god fyll i det här fältet!";
    else if (!validateName(formData.name)) tempErrors.name = "Namnet får max innehålla 25 bokstäver och endast alfabetiska tecken.";
    
    if (!formData.email.trim()) tempErrors.email = "Var god fyll i det här fältet!";
    else if (!validateEmail(formData.email)) tempErrors.email = "Ogiltig e-postadress.";

    if (!formData.message.trim()) tempErrors.message = "Var god fyll i det här fältet!";
    else if (remainingChars < 0) tempErrors.message = "Meddelandet får inte överstiga 500 tecken.";

    if (!formData.business_type) tempErrors.business_type = "Var god välj ett alternativ!";

    if (Object.keys(tempErrors).length === 0) {
      try {
        await addDoc(collection(db, "contactus"), {
          user_id: uuidv4(), ...formData, created_at: new Date(),
        });
        toast.success("Ditt meddelande har skickats");
        setFormData({ business_type: "", name: "", email: "", phone: "", address: "", subject: "", message: "" });
        setRemainingChars(500);
      } catch (error) {
        toast.error(`Ett fel uppstod: ${error.message}`);
      }
    }
    setErrors(tempErrors);
  };

  return (
    <div className="pt-24 container w-full mx-auto bg-white dark:bg-gray-900 min-h-[calc(100vh-6rem)]">
      <Head>
        <title>Kontakt - JGruppen</title>
        <link rel="canonical" href="https://jgruppen.se/kontakt" key="canonical" />
        <meta name="description" content="Kontakta JGruppen för alla dina materialhantering- och installationsfrågor." />
        <meta name="keywords" content="kontakt, kontakta oss, JGruppen, installation" />
      </Head>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-xl font-bold text-[#4a536e] dark:text-[#8a93ae] text-center mb-4">
              Kontakta oss
            </h2>

            <div className="space-y-3">
              <div>
                <label htmlFor="business_type" className="block text-sm font-medium text-[#4a536e] dark:text-[#8a93ae] mb-1">
                  Företagstyp<span className="text-red-500">*</span>
                </label>
                <select
                  id="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 rounded border border-[#4a536e] dark:border-[#2a334e] bg-white dark:bg-gray-800 text-sm"
                  onInvalid={(e) => e.target.setCustomValidity("Var god välj ett alternativ!")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                >
                  <option value="" disabled>Välj företagstyp</option>
                  <option value="smallBusiness">Litet företag</option>
                  <option value="mediumBusiness">Medelstort företag</option>
                  <option value="enterprise">Stort företag</option>
                </select>
              </div>

              {["name", "email", "phone", "address", "subject"].map((field) => (
                <div key={field} className="space-y-1">
                  <label htmlFor={field} className="block text-sm font-medium text-[#4a536e] dark:text-[#8a93ae]">
                    {field === "name" ? "Namn" :
                     field === "email" ? "E-post" :
                     field === "phone" ? "Telefon" :
                     field === "address" ? "Adress" : "Ämne"}
                    {(field === "name" || field === "email") && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    className="w-full px-3 py-2 rounded border border-[#4a536e] dark:border-[#2a334e] bg-white dark:bg-gray-800 text-sm"
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={
                      field === "name" ? "Ditt namn" :
                      field === "email" ? "Din e-post" :
                      field === "phone" ? "Ditt telefonnummer" :
                      field === "address" ? "Din adress" : "Ämne"
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    required={field === "name" || field === "email"}
                  />
                  {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
                </div>
              ))}

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-[#4a536e] dark:text-[#8a93ae]">
                  Meddelande <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  maxLength={500}
                  className="w-full px-3 py-2 rounded border border-[#4a536e] dark:border-[#2a334e] bg-white dark:bg-gray-800 text-sm resize-none"
                  onInvalid={(e) => e.target.setCustomValidity("Var god fyll i det här fältet!")}
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>

              <button
                className="w-full py-2 px-4 rounded bg-[#4a536e] hover:bg-[#2a334e] dark:bg-[#2a334e] dark:hover:bg-[#4a536e] text-white font-medium text-sm transition-colors"
                type="submit"
              >
                Skicka meddelande
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </div>
  );
};

export default ContactPage;
