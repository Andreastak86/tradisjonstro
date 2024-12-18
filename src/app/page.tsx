"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000 * 60 * 60); // Oppdater hver time

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className='absolute bottom-0 w-full py-4 text-center text-gray-300 text-sm z-10'>
            <p>&copy; {year} tradisjonstro.no. Alle rettigheter forbeholdt.</p>
        </footer>
    );
}

export default function Home() {
    return (
        <main className='min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden'>
            {/* Bakgrunnsbilde med overlay */}
            <div className='absolute inset-0 z-0'>
                <Image
                    src='/bg.jpg'
                    alt='Kirke under stjernehimmel'
                    fill
                    className='object-cover'
                    priority
                />
                <div className='absolute inset-0 bg-black/50' />{" "}
                {/* Mørk overlay for bedre lesbarhet */}
            </div>

            {/* Innhold */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='relative z-10 max-w-2xl mx-auto text-center space-y-6'
            >
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                    Velkommen til tradisjonstro.no
                </h1>
                <p className='text-xl md:text-2xl text-gray-200 mb-8'>
                    Vi jobber med å skape en spennende nettside om norske
                    tradisjoner.
                </p>
                <div className='bg-black/30 backdrop-blur-sm rounded-lg p-6'>
                    <p className='text-lg text-gray-200'>
                        Snart kommer det interessant innhold om norske
                        tradisjoner, kulturarv og trosforestillinger.
                    </p>
                </div>
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                    className='mt-8 text-gray-300'
                >
                    <p>✨ Kommer snart til en pc eller mobil nær deg! ✨</p>
                </motion.div>
            </motion.div>
            <Footer />
        </main>
    );
}
