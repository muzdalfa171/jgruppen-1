"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore"; // Firestore function for adding documents
import { db } from "../lib/firebase"; // Ensure correct Firebase import path
import { v4 as uuidv4 } from "uuid"; // Import UUID generator
import Head from "next/head";
const ContactPage = () => {
  <Head>
    <title>Kontakt - JGruppen</title>
    <link rel="canonical" href="https://jgruppen.se/kontakt" key="canonical" />
    <meta
      name="description"
      content="Get in touch with JGruppen for all your material handling and installation inquiries."
    />
    <meta name="keywords" content="kontakt, contact, JGruppen, installation" />
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
  // Handle field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    // Handle character count for the message field
    if (id === "message") {
      setRemainingChars(500 - value.length);
    }
    setFormData({ ...formData, [id]: value });
  };
  // Validate name field for alphabets and length
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]{1,25}$/; // Only allows alphabets and max 25 chars
    return nameRegex.test(name);
  };
  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // Validate the form on submit and add to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = {};
    // Validation for name field
    if (!validateName(formData.name)) {
      tempErrors.name =
        "Name should be max 25 letters and contain only alphabets.";
    }
    // Validation for email field
    if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    // Validation for message length
    if (remainingChars < 0) {
      tempErrors.message = "Message cannot exceed 500 characters.";
    }
    // If no validation errors, proceed to submit form data to Firestore
    if (Object.keys(tempErrors).length === 0) {
      const userId = uuidv4(); // Generate a unique user ID
      try {
        // Add form data to the Firestore 'contactus' collection
        await addDoc(collection(db, "contactus"), {
          user_id: userId,
          business_type: formData.business_type,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date(), // Optional: Store the timestamp
        });
        // Show success toast notification
        toast.success(`Your message has been submitted successfully!`, {
        });
        // Reset form data after successful submission
        setFormData({
          business_type: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          subject: "",
          message: "",
        });
        setRemainingChars(500); // Reset character counter
      } catch (error) {
        // Show error toast notification
        toast.error(
          `There was an error submitting your message: ${error.message}`,
        );
      }
    } else {
      // Set validation errors
      setErrors(tempErrors);
      setTimeout(() => {
        setErrors({});
      }, 20000);
    }
  };
  return (
    <>
      <div className="w-full ">
    
        <div className="lg:px-52 py-20 lg:mt-7 p-8 container w-full mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[#81828531] px-4 lg:px-32 w-full pt-6 pb-8 mb-4"
          >
            <p className="text-center text-[#636466] text-2xl font-bold py-3 lg:p-8">
              KONTAKT
            </p>
            <div className="mb-4 relative">
              <select
                className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="business_type"
                value={formData.business_type}
                onChange={handleChange}
                required
              >
                <option className="text-sm " value="" disabled>
                  Välj företagstyp
                </option>
                <option className="text-sm" value="smallBusiness">
                  Litet företag
                </option>
                <option className="text-sm" value="mediumBusiness">
                  Medelstort företag
                </option>
                <option className="text-sm" value="enterprise">
                  Stort företag
                </option>
              </select>
            </div>
            <div className="mb-4">
              <input
                className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Namn*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic mt-2">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic mt-2">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Telefonnummer"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Adress"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Ämne"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <div className="relative">
                <textarea
                  className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  id="message"
                  placeholder="Meddelande*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  maxLength={500} // Limit to 500 characters
                ></textarea>
                {/* Character counter */}
                <span className="absolute bottom-2 right-4 text-sm text-gray-500">
                  {remainingChars} / 500
                </span>
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs italic mt-2">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="flex py-8 items-center justify-between">
              <button
                className="bg-[#4a536e] hover:bg-[#636466] text-white font-bold py-3 mx-auto w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Skicka
              </button>
            </div>
         
            <ToastContainer 
               position="top-center"
               autoClose={5000}  // Adjust the timing if needed
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
