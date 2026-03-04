"use client"; // Animation-er jonno client component dorkar
import Link from 'next/link';
import React from 'react';
import { BiSolidErrorAlt } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion"; // Import motion

const Error404 = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            
            {/* 1. Icon Animation: Floating effect */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <BiSolidErrorAlt size={100} className='text-primary' />
            </motion.div>

            {/* 2. Text Animation: Slide up and Fade in */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-center"
            >
                <h1 className='text-5xl font-medium'>Oops!</h1>
                <p className='text-3xl py-6'>Content Not Found</p>
            </motion.div>

            {/* 3. Button Animation: Hover effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Link href={"/"} className='btn flex items-center gap-2'>
                    <motion.span
                        whileHover={{ x: -5 }} // Hover korle arrow-ta ektu bame sorbe
                    >
                        <IoIosArrowRoundBack size={30} />
                    </motion.span>
                    Back to home
                </Link>
            </motion.div>
        </div>
    );
};

export default Error404;