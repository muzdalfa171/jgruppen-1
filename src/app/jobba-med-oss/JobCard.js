import Link from 'next/link';
import React from 'react';

const JobCard = ({ job }) => {


    return (
        <div className="col-span-full text-center py-10"> {/* Center the message and add padding */}
              <p className="text-2xl font-semibold text-gray-600">Inga lediga jobb för tillfället!</p>
              <p className="mt-4 text-gray-500">Håll utkik!</p> {/* Added a "check back later" message */}
              {/* Optional: Add a link to your contact page or careers page */}
              <Link href="/">
                <p className="mt-4 text-blue-500 hover:underline">Hem</p>
              </Link>
            </div>
    );
};

export default JobCard;
