
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";


const JobCard = ({ job }) => {
  return (
    <div className="w-[20rem] rounded shadow-lg py-4 bg-white ">
      {/* Company Logo */}
      <div className="flex justify-center p-8">
        <img
          className="w-24 h-24"
          src={"/img/JGruppen-logo.png"}  // Using default logo if logo field is missing
          alt={`logo`}
        />
      </div>
      <div className="px-6 py-4">
        {/* Job Title */}
        <div className="font-bold text-2xl mb-2 text-[#636466]">
          {job.job_title}
        </div>
        {/* Designation (job_category in Firestore) */}
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Designation: </span>
          {job.designation}
        </p>
        {/* Location (job_location.name in Firestore) */}
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Location: </span>
          {job.location}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <Link href={`/jobba-med-oss/${job.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
            More Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const jobsCollection = collection(db, "jobs");
        const jobsSnapshot = await getDocs(jobsCollection);
        const jobsList = jobsSnapshot.docs.map((doc) => {
          const jobData = doc.data();
          return {
            id: doc.id,
            // Set logo to a default value if missing
            logo: jobData.logo || "https://via.placeholder.com/150",  // Default logo
            title: jobData.title,
            designation: jobData.job_category,  // Map Firestore job_category to designation
            location: jobData.job_location?.name || "Unknown",  // Extract job_location.name, default to "Unknown" if missing
          };
        });
        setJobs(jobsList);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading jobs...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-40 bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg p-8 shadow-lg w-[95%] ">
        <h1 className="text-4xl font-bold text-center mb-8">Job Openings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            
            <p className="text-center col-span-full">No jobs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
