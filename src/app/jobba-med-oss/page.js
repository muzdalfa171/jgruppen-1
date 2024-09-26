import Link from "next/link";

const JobCard = ({ job }) => {
  return (
    <div className="w-[18rem] rounded shadow-lg bg-white m-4">
      {/* Company Logo */}
      <div className="flex justify-center p-4">
        <img className="w-24 h-24" src={job.logo} alt={`${job.title} logo`} />
      </div>
      <div className="px-6 py-4">
        {/* Job Title */}
        <div className="font-bold text-2xl mb-2 text-[#636466]">
          {job.title}
        </div>
        {/* Designation */}
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Designation: </span>
          {job.designation}
        </p>
        {/* Location */}   
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Location: </span>
          {job.location}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <Link href={`/jobba-med-oss/jobcarddetails`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
            More Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

const JobList = () => {
  // Example job data
  const jobs = [
    {
      id: 1,
      logo: "/img/JGruppen-logo.png", // Replace with actual logo path
      title: "CNC Operator",
      designation: "Operator",
      location: "Motala, Sweden",
    },
    {
      id: 2,
      logo: "/img/JGruppen-logo.png",
      title: "Software Engineer",
      designation: "Developer",
      location: "Stockholm, Sweden",
    }
    // Add more jobs as needed
  ];

  return (
    <div className="min-h-screen py-40 bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg p-8 shadow-lg w-[95%] ">
        <h1 className="text-4xl font-bold text-center mb-8">Job Openings</h1>
        {/* Job Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
