'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Apply dark mode class to html element
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white shadow-md dark:bg-gray-900'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    AA
                </a>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <FiSun className="text-yellow-300" /> : <FiMoon />}
                    </button>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
