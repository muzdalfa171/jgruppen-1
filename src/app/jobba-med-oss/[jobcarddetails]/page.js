
"use client";
import { useState } from "react";
import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";

export default function JobDetails() {
  const job = {
    title: "Laser operatör",
    company: "JGruppen AB",
    location: "Motala, Sweden",
    description: `Du är flexibel och stresstålig.

    Du har arbetat som operatör i minst 5 år och har god vana av programmering och egna ställ/riggningar.

    Önskvärt är att du har genomförd utbildning i travers och säkra lyft och ej har några problem med ritningsläsning och tillhörande mätning. Vi söker en duktig och självgående Laseroperatör till vår verksamhet i Motala.

    Arbetet består av att plocka fram befintliga skärprogram, samt även kunna justera och kompensera densamma. Hämtning och uppläggning av nya plåtar, samt mätning och märkning utav skuret material.

    Du som söker har god vana vid arbete i CNC-styrda skärmaskiner och har minst 2 år inom yrket. Kunskaper i Fanuk, Bybase Cad/Cam är mycket meriterande.

    Arbetsplatsen har en god arbetsmiljö med ljusa rymliga lokaler och en nära kommunikation med konstruktörer och ledning.

    Du som operatör jobbar mycket självständigt varför det ställer stora krav på genomförda utbildningar inom travers och lyftteknik.
    `,
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null,
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, agree: !formData.agree });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cv || !formData.agree) {
      alert("Please upload a file and agree to the terms.");
      return;
    }
    console.log(formData); // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white flex my-20 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f3f3f3] rounded-lg p-8 shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-[#4a536e] mb-4 ">{job.title}</h1>
        <div className="flex justify-center items-center my-6">
          <Image
            src="/img/JGruppen-logo.png" // Path to the image in the public folder
            alt="JGruppen Logo"
            width={200} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className="my-12"
          />
        </div>
        <h2 className="text-4xl mb-4">Om jobbet</h2>

        <p className="mb-4">{job.description}</p>
        <div className="mx-8">
          <section className="mb-6">
            <h3 className="text-md font-bold mb-4">Arbetsuppgifter:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Produktionsupplägg i egen maskin</li>
              <li>Programmering</li>
              <li>Bearbetning</li>
              <li>Inställning av verktyg</li>
              <li>Visst underhåll av maskin</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-md font-bold mb-4">Vi söker dig som har:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Har gymnasial utbildning inom industrin samt några års
                erfarenhet inom området
              </li>
              <li>
                Har erfarenhet av nc-beredning / programmering av styrda
                maskiner
              </li>
              <li>Talar och skriver flytande svenska</li>
              <li>Har erfarenhet av Fanuk, Bybase Cad/Cam</li>
              <li>Har B-körkort</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-md font-bold mb-4">
              Som person ser vi att du har följande personliga egenskaper:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Självgående</li>
              <li>Strukturerad och ordningsam</li>
              <li>Har god samarbetsförmåga</li>
              <li>Tar kvalitetsansvar för utfört arbete</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-md font-bold mb-4">Om Anställningen:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Placeringsort: Motala</li>
              <li>Tjänstgöringsgrad: Heltid, dagskift</li>
              <li>Tillträde: Omgående</li>
              <li>Anställningsform: Heltid</li>
            </ul>
          </section>
        </div>
        <div className="my-12">
          <p className="mb-2 flex gap-4">
            <IoPersonSharp />
            <strong> Job Category:</strong> {job.title}
          </p>
          <p className="mb-2 flex gap-4">
            <FaLocationArrow />
            <strong>Company:</strong> {job.company}
          </p>
          <p className="mb-4 flex gap-4">
            <FaIndustry />
            <strong>Location:</strong> {job.location}
          </p>
        </div>
        {/* Job Application Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Apply for {job.title}
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="coverLetter"
            >
              Cover Letter <span className="text-red-500">*</span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="coverLetter"
              name="coverLetter"
              rows="4"
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="mb-4 space-y-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cv">
              Upload CV/Resume <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700  cursor-pointer  focus:outline-none"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              Allowed Type(s): .pdf, .doc, .docx
            </p>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4  text-blue-600"
                checked={formData.agree}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 my-6 text-gray-700">
                By using this form you agree with the storage and handling of
                your data by JGruppen. <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4A536E] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#5f6b8c]"
            disabled={!formData.cv || !formData.agree}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
