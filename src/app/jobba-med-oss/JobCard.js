import Link from 'next/link';
import React from 'react';

const JobCard = ({ job }) => {


    return (
        <div className="col-span-full text-center py-10"> {/* Center the message and add padding */}
            <p className="text-2xl font-semibold text-gray-600">No jobs available at the moment.</p>
            <p className="mt-4 text-gray-500">Please check back later.</p> {/* Added a "check back later" message */}
            <Link href="/">
                <p className="mt-4 text-blue-500 hover:underline">Back to Home</p>
            </Link>
        </div>
    );
};

export default JobCard;
