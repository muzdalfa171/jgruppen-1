"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import Head from "next/head";
import JobCard from "./JobCard";

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
        const jobsList = jobsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          logo: doc.data().logo || "/img/JGruppen-logo.png",
          location: doc.data().job_location?.name || "Ej specificerad"
        }));
        setJobs(jobsList);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Det gick inte att ladda jobben. Försök igen senare.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen pt-40">
      <Head>
        <title>Lediga jobb - JGruppen</title>
        <link rel="canonical" href="https://jgruppen.se/jobba-med-oss" key="canonical" />
        <meta
          name="description" 
          content="Se våra lediga tjänster och bli en del av JGruppen-teamet. Vi söker alltid efter talangfulla och engagerade medarbetare."
        />
        <meta name="keywords" content="lediga jobb, karriär, JGruppen, anställning" />
      </Head>

      <div className="container mx-auto px-4">
        <h1 className="text-xl sm:text-2xl font-bold text-[#4a536e] dark:text-[#8a93ae] text-center mb-12">
          Lediga tjänster
        </h1>
       

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4a536e]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100/80 backdrop-blur-sm dark:bg-red-900/80 p-6 rounded-xl text-center">
            <p className="text-xs md:text-sm text-red-600 dark:text-red-300">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 text-xs md:text-sm"
            >
              Försök igen
            </button>
          </div>
        ) : (
          <div className="bg-[#f0f1f5] dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {jobs.length > 0 ? (
                jobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 px-6">
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center backdrop-blur-sm">
                    <h2 className="text-lg md:text-xl font-bold text-[#4a536e] dark:text-[#8a93ae] mb-6">
                      Inga lediga tjänster just nu
                    </h2>
                    <p className="text-xs md:text-sm text-[#4a536e] dark:text-gray-300 mb-10 leading-relaxed">
                      Vi är alltid på jakt efter nya talanger som vill vara med på vår resa. Skicka en spontanansökan och låt oss veta vad du kan bidra med!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link 
                        href="/kontakt"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-[#4a536e] hover:bg-[#3a435e] text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-xs md:text-sm"
                      >
                        <span>Skicka spontanansökan</span>
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <Link 
                        href="/om-oss"
                        className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#4a536e] text-[#4a536e] dark:text-[#8a93ae] rounded-xl hover:bg-[#4a536e] hover:text-white dark:hover:bg-[#2a334e] transition-all duration-300 transform hover:-translate-y-1 text-xs md:text-sm"
                      >
                        <span>Läs mer om oss</span>
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
