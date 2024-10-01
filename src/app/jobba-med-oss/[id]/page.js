
"use client";
import { useParams } from "next/navigation"; // UseParams for route params
import { useState, useEffect } from "react";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Adjust path to Firebase config
import { storage } from "../../lib/firebase"; // Import Firebase Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase Storage methods
import { IoPersonSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";
import Image from 'next/image'; 

export default function JobDetails() {
  const { id: jobId } = useParams(); // Capture jobId from the URL
  const [job, setJob] = useState(null); // To store fetched job details
  const [loading, setLoading] = useState(false); // Loading state for fetching data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null,
    agree: false,
  }); // State for form data

  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [showError, setShowError] = useState(false); // State to control visibility of error message

  // Fetch job details by jobId from Firestore when the jobId changes
  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!jobId) return; // Wait for jobId to be available

      try {
        setLoading(true);
        const jobRef = doc(db, "jobs", jobId); // Fetch the job document by its ID
        const jobSnap = await getDoc(jobRef);

        if (jobSnap.exists()) {
          setJob(jobSnap.data()); // Store fetched job details
        } else {
          alert("No job found for the provided ID.");
        }
      } catch (err) {
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]); // Trigger fetch when jobId is available

  // Form input handlers
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

  // Function to create a new application
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.coverLetter || !formData.agree) {
      setErrorMessage("Please fill all required fields and agree to the terms.");
      setShowError(true);
      return; // Stop submission
    }

    if (formData.coverLetter.length > 500) {
      setErrorMessage("Cover Letter should not exceed 500 characters.");
      setShowError(true);
      return; // Stop submission
    }

    if (!formData.cv) {
      setErrorMessage("Please upload your CV.");
      setShowError(true);
      return; // Stop submission
    }

    try {
      // Upload CV to Firebase Storage
      const cvRef = ref(storage, `resumes/${formData.cv.name}`);
      await uploadBytes(cvRef, formData.cv);
      const cvUrl = await getDownloadURL(cvRef); // Get the download URL

      // Create a new application document in Firestore
      await addDoc(collection(db, "jobApplicant"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter, // Store with HTML tags if needed
        resume: cvUrl, // Store the link of the CV
        job_applied: jobId, // The job ID the user is applying for
        applied_at: new Date(), // Current timestamp
      });

      alert("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        cv: null,
        agree: false,
      });
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("Failed to submit the application.");
    }
  };

  if (loading) {
    return <p>Loading job details...</p>;
  }

  if (!job) {
    return <p>No job details available. Please provide a valid job ID.</p>;
  }

  return (
    <div className="min-h-screen bg-white flex my-20 flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Section 1: Fetch Job Data */}
      <div className="bg-[#f3f3f3] flex flex-col justify-center rounded-lg p-8 shadow-lg w-4/6 mx-auto mb-8">
        <h1 className="text-4xl font-bold text-[#4a536e] mb-4">Job Details</h1>
        <div className="flex justify-center">
          <Image
            className="my-12"
            src="/img/JGruppen-logo.png"
            alt="JGruppen Logo"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{job.job_title}</h1>
        <p className="mb-4">{job.job_description}</p>
        <p className="mb-2 flex gap-4">
          <IoPersonSharp />
          <strong> Job Category:</strong> {job.job_category}
        </p>
        <p className="mb-2 flex gap-4">
          <FaLocationArrow />
          <strong>Company:</strong> {job.company}
        </p>
        <p className="mb-4 flex gap-4">
          <FaIndustry />
          <strong>Location:</strong> {job.job_location?.name || "Not available"}
        </p>
        <p className="mb-4">
          <strong>About Employment:</strong> {job.about_employment}
        </p>
        <p className="mb-4">
          <strong>Responsibilities:</strong> {job.responsibilities}
        </p>
        <p className="mb-4">
          <strong>Required Skills:</strong> {job.required_skills}
        </p>
        <p className="mb-4">
          <strong>Personal Qualities:</strong> {job.personal_qualities}
        </p>
        {/* Section 2: Create Job Application */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Apply for {job.job_title || "Selected Job"}
        </h2>

        {/* Error Message */}
        {showError && (
          <div className="bg-red-500 text-white p-4 mb-4 rounded animate-fadeIn">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="px-12 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cover Letter <span className="text-red-500">*</span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="coverLetter"
              rows="4"
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>



          <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Upload CV/Resume <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700 cursor-pointer"
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
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={formData.agree}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2 text-gray-700">
            I agree to the terms and conditions.
          </span>
        </label>
      </div>

          <button
            type="submit"
            className="w-full bg-[#4A536E] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#5f6b8c]"
          >
            Submit
          </button>
        </form>
      </div>
      </div>

      
    </div>
  );
}
