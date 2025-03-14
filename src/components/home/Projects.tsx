'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/projects';

export default function Projects() {
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

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Projects & <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Hackathons</span>
                </h2>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={project.imageUrl || "/images/placeholder.jpg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <span className="bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {project.subtitle}
                  </span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <div className="flex justify-between">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center"
                                    >
                                        View Project <FiExternalLink className="ml-1" />
                                    </a>

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white inline-flex items-center"
                                        >
                                            Code <FiGithub className="ml-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Add a "See more projects" button if needed */}
                <div className="flex justify-center mt-12">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-900 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
                    >
                        See More Projects <FiGithub className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}