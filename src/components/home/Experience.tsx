'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import {experiences} from "../../data/experience";

export default function Experience() {
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
                staggerChildren: 0.3
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

    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Experience</span>
                </h2>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="relative"
                >
                    {/* Timeline vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900/50 transform md:-translate-x-1/2"></div>

                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            variants={itemVariants}
                            className={`relative flex flex-col md:flex-row items-start mb-16 ${
                                index === experiences.length - 1 ? 'mb-0' : ''
                            }`}
                        >
                            {/* Content - alternating sides for desktop */}
                            <div
                                className={`flex-1 md:pr-12 ${
                                    index % 2 === 0
                                        ? 'md:text-right order-2 md:order-1'
                                        : 'hidden md:block'
                                }`}
                            >
                                {index % 2 === 0 && (
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.title}</h3>
                                        <div className="flex items-center justify-end mt-2 mb-4">
                      <span className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
                        <FiBriefcase className="ml-2" size={14} />
                        <span className="ml-1">{experience.company}</span>
                      </span>
                                            <span className="flex items-center text-gray-500 dark:text-gray-500">
                        <FiCalendar className="ml-2" size={14} />
                        <span className="ml-1">{experience.period}</span>
                      </span>
                                        </div>
                                        <div className="flex items-center justify-end mb-4 text-gray-500 dark:text-gray-500">
                                            <FiMapPin size={14} />
                                            <span className="ml-1">{experience.location}</span>
                                        </div>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                            {experience.achievements.map((achievement, i) => (
                                                <li key={i} className="flex justify-end">
                                                    <span className="text-right">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Circle marker */}
                            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 mt-6 ml-4 md:ml-0 md:mt-6">
                                <FiBriefcase className="text-white" />
                            </div>

                            {/* Content - right side for desktop, all for mobile */}
                            <div
                                className={`flex-1 pl-16 md:pl-12 ${
                                    index % 2 !== 0
                                        ? 'md:text-left order-2'
                                        : 'md:hidden'
                                }`}
                            >
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.title}</h3>
                                    <div className="flex flex-wrap items-center mt-2 mb-4">
                    <span className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
                      <FiBriefcase size={14} />
                      <span className="ml-1">{experience.company}</span>
                    </span>
                                        <span className="flex items-center text-gray-500 dark:text-gray-500">
                      <FiCalendar size={14} />
                      <span className="ml-1">{experience.period}</span>
                    </span>
                                    </div>
                                    <div className="flex items-center mb-4 text-gray-500 dark:text-gray-500">
                                        <FiMapPin size={14} />
                                        <span className="ml-1">{experience.location}</span>
                                    </div>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        {experience.achievements.map((achievement, i) => (
                                            <li key={i} className="flex">
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}