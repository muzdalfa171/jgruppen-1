import Link from 'next/link';
import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="col-span-full text-center py-10">
            <p className="text-lg xs:text-xl sm:text-lg font-semibold text-[#4a536e]">Inga lediga jobb för tillfället!</p>
            <p className="mt-4 text-xs xs:text-sm sm:text-base text-gray-600">Håll utkik!</p>
            <Link href="/">
                <p className="mt-4 text-xs xs:text-sm sm:text-base text-gray-600 hover:underline">Hem</p>
            </Link>
        </div>
    );
};

export default JobCard;
