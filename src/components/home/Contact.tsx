'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiSend } from 'react-icons/fi';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
    });

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        },
        hidden: {
            opacity: 0
        }
    };

    const itemVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        },
        hidden: {
            opacity: 0,
            y: 30
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFormStatus({
            isSubmitting: true,
            isSubmitted: false,
            error: null
        });

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                error: null
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus((prev) => ({
                    ...prev,
                    isSubmitted: false
                }));
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Touch</span>
                </h2>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row gap-8"
                >
                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="md:w-1/2"
                    >
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-4 mb-10">
                            <div className="flex items-start">
                                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-3 rounded-full mr-4">
                                    <FiMail />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:amarakash1.aa@gmail.com"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        amarakash1.aa@protonmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-3 rounded-full mr-4">
                                    <FiPhone />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <p>+91 72******73</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-3 rounded-full mr-4">
                                    <FiMapPin />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p>Gurugram, Haryana, India</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/amar-akash-88b052179/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-400 p-3 rounded-full transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin />
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-3 rounded-full transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800/50 text-blue-500 dark:text-blue-400 p-3 rounded-full transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <FiTwitter />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        className="md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

                        {formStatus.isSubmitted ? (
                            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Thank you! Your message has been sent successfully.</span>
                            </div>
                        ) : formStatus.error ? (
                            <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6">
                                {formStatus.error}
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus.isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                            >
                                {formStatus.isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <FiSend className="ml-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}