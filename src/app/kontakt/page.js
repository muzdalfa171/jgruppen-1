"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";  // Firestore function for adding documents
import { db } from "../lib/firebase";  // Ensure correct Firebase import path
import { v4 as uuidv4 } from "uuid";  // Import UUID generator

const ContactPage = () => {
  const [formData, setFormData] = useState({
    business_type: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: ""
  });

  // Handle input changes in the form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = uuidv4();  // Generate a unique ID for the user

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
        created_at: new Date(),  // Optional: Store the timestamp
      });

      alert(`Your message has been submitted successfully! Your User ID: ${userId}`);

      // Reset form data after submission
      setFormData({
        business_type: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting message: ", error.message);
      alert(`There was an error submitting your message: ${error.message}.`);
    }
  };

  return (
    <div className="md:px-52 py-20 p-8 container w-full mx-auto">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="bg-[#81828531] px-4 md:px-32 w-full pt-6 pb-8 mb-4"
        >
          <p className="text-center text-[#636466] text-2xl font-bold py-3 lg:p-8 ">
            KONTAKT
          </p>
          <div className="mb-4">
            <select
              className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="business_type"
              value={formData.business_type}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Välj företagstyp
              </option>
              <option value="smallBusiness">Litet företag</option>
              <option value="mediumBusiness">Medelstort företag</option>
              <option value="enterprise">Stort företag</option>
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
            <textarea
              className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Meddelande*"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            ></textarea>
          </div>
          <div className="flex py-8 items-center justify-between">
            <button
              className="bg-[#4a536e] hover:bg-[#636466] text-white font-bold py-3 mx-auto w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
