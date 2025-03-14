'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition duration-300"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
                className="md:hidden focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                    <FiX className="text-2xl" />
                ) : (
                    <FiMenu className="text-2xl" />
                )}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4 px-6">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}