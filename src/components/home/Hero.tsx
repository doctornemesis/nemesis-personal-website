'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Frontend Developer';
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 pb-20">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
                <motion.div
                    className="md:w-1/2 text-center md:text-left md:pr-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Amar Akash</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
                        {typedText}
                        <span className="animate-pulse">|</span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        I build scalable web applications with Angular and modern web technologies.
                        Focused on creating intuitive, high-performance user experiences with a passion
                        for clean code and innovative solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                        <a
                            href="#projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center md:justify-start space-x-5">
                        <a
                            href="https://linkedin.com/in/amar-akash-88b052179/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FiGithub size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <FiTwitter size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative w-64 h-64 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-xl">
                            <Image
                                src="/images/profile.jpg"
                                alt="Amar Akash"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}