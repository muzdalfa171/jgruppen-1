import Link from 'next/link';
import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="col-span-full text-center py-10">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#4a536e]">Inga lediga jobb för tillfället!</h2>
            <p className="mt-4 text-xs xs:text-sm sm:text-base text-gray-600">Håll utkik!</p>
            <Link href="/">
                <p className="mt-4 text-xs xs:text-sm sm:text-base text-gray-600 hover:underline">Hem</p>
            </Link>
        </div>
    );
};

export default JobCard;
