import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const JobCard = ({ job }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div 
            className="col-span-full flex flex-col items-center justify-center py-6 md:py-10 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl max-w-4xl w-full text-center backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-5 pointer-events-none" />
                
                <motion.div className="mb-6 md:mb-8 flex justify-center" variants={itemVariants}>
                    <div className="relative group w-full max-w-[180px] md:max-w-[240px]">
                        <Image 
                            src="/img/slide3.jpg"
                            alt="No current jobs illustration"
                            width={320}
                            height={240}
                            className="h-auto w-full rounded-xl md:rounded-2xl transform transition-all duration-500 group-hover:scale-105"
                            quality={100}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl" />
                    </div>
                </motion.div>

                <motion.h2 
                    className="text-xl sm:text-sm md:text-xl lg:text-xl font-bold bg-gradient-to-r from-[#4a536e] to-[#3a435e] dark:from-[#8a93ae] dark:to-[#6a738e] bg-clip-text text-transparent mb-4 md:mb-6 lg:mb-8"
                    variants={itemVariants}
                >
                    Inga lediga tjänster just nu
                </motion.h2>

                <motion.div className="space-y-4 md:space-y-6 mb-6 md:mb-8 lg:mb-10" variants={itemVariants}>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4a536e] dark:text-gray-300 leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                        Vårt team växer kontinuerligt och vi uppdaterar våra lediga positioner regelbundet. 
                        Registrera ditt intresse nedan eller följ vår utveckling på sociala medier.
                    </p>
                </motion.div>

                <motion.div className="mt-6 md:mt-8 lg:mt-10" variants={itemVariants}>
                    <Link 
                        href="/"
                        className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-sm md:text-base lg:text-lg bg-[#4a536e] hover:bg-[#3a435e] text-white rounded-lg md:rounded-xl transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg md:hover:shadow-xl group"
                    >
                        <span className="mr-2">Tillbaka till startsidan</span>
                        <FiArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default JobCard;
