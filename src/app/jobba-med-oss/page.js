"use client";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import JobCard from "./JobCard";

const JobList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
          Lediga Tjänster
        </h1>

        {loading ? (
          <p className="text-center">Laddar jobb...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            <JobCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
