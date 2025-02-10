"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import Head from "next/head";
import JobCard from "./JobCard";

// ... (JobCard component remains the same)

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobsCollection = collection(db, "jobs");
        const jobsSnapshot = await getDocs(jobsCollection);
        const jobsList = jobsSnapshot.docs.map((doc) => {
          const jobData = doc.data();
          return {
            id: doc.id,
            logo: jobData.logo || "/img/JGruppen-logo.png", // Use your actual default logo path
            title: jobData.title,
            designation: jobData.job_category,
            location: jobData.job_location?.name || "Unknown",
          };
        });
        setJobs(jobsList);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
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
      <div className="flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="my-10 md:py-20 py-10 bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg px-8 shadow-lg w-[95%] ">
        <h1 className="text-4xl font-bold text-center mt-8">Job Openings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="col-span-full text-center py-10"> {/* Center the message and add padding */}
              <p className="text-2xl font-semibold text-gray-600">No jobs available at the moment.</p>
              <p className="mt-4 text-gray-500">Please check back later.</p> {/* Added a "check back later" message */}
              {/* Optional: Add a link to your contact page or careers page */}
              <Link href="/contact">
                <p className="mt-4 text-blue-500 hover:underline">Contact Us</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
