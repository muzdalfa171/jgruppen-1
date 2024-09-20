"use client"
import React, { useState } from "react";

const JobApplicationForm = () => {
  // State to handle file uploads and form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API request to upload CV and send form data)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">CNC Operator - JGruppen</h1>
        <h2 className="text-2xl font-semibold mb-4">Om jobbet</h2>
        <p className="mb-4">
          Du är flexibel och stresstålig. Du har arbetat som operatör i minst 5 år och har god vana av programmering och egna ställ/riggningar.
          <br />
          Önskvärt är att du har genomförd utbildning i travers och säkra lyft och ej har några problem med ritningsläsning och tillhörande mätning. Vi söker en duktig och självgående Laseroperatör till vår verksamhet i Motala.
          <br />
          Arbetet består av att plocka fram befintliga skärprogram, samt även kunna justera och kompensera densamma. Hämtning och uppläggning av nya plåtar, samt mätning och märkning utav skuret material.
          <br />
          Du som söker har god vana vid arbete i CNC-styrda skärmaskiner och har minst 2 år inom yrket. Kunskaper i Fanuk, Bybase Cad/Cam är mycket meriterande.
        </p>

        <h3 className="text-xl font-semibold mb-4">Arbetsuppgifter:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Produktionsupplägg i egen maskin</li>
          <li>Programmering</li>
          <li>Bearbetning</li>
          <li>Inställning av verktyg</li>
          <li>Visst underhåll av maskin</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Job Details:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Location: Motala, Sweden</li>
          <li>Employment Type: Full-Time, Day Shift</li>
          <li>Start Date: Immediate</li>
        </ul>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Cover Letter */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
              Cover Letter *
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="coverLetter"
              name="coverLetter"
              rows="4"
              placeholder="Your cover letter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* CV/Resume Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
              Upload CV/Resume *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cv"
              name="cv"
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Apply for this position
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

