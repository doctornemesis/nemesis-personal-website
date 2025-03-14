'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import { certifications } from '../../data/skills';

export default function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 }
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">
                        About <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Me</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-full mr-3">
                  <FiBookOpen />
                </span>
                                My Story
                            </h3>

                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    I'm a passionate Frontend Developer with expertise in Angular and modern web application development.
                                    With a background in Electronics and Communication Engineering from Manipal Institute of Technology,
                                    I bring a unique perspective to solving complex technical challenges.
                                </p>

                                <p>
                                    Currently working at BlackRock Services India, I'm dedicated to creating scalable applications
                                    with a focus on usability and performance. My experience includes optimizing Angular applications,
                                    implementing state management solutions, and collaborating with UX/UI designers to create
                                    intuitive user experiences.
                                </p>

                                <p>
                                    I've been recognized for innovative solutions in digital identity and blockchain at ETHIndia
                                    hackathons, winning both the Polygon and Starlight categories. These experiences have expanded
                                    my technical horizons beyond traditional frontend development into blockchain technologies
                                    and decentralized applications.
                                </p>

                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, participating in hackathons,
                                    or contributing to open-source projects. I'm constantly learning and challenging myself to
                                    stay at the forefront of web development trends.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-full mr-3">
                    <FiAward />
                  </span>
                                    Education
                                </h3>

                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                                    <h4 className="text-lg font-medium">Bachelor of Technology</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Manipal Institute of Technology</p>
                                    <p className="text-gray-600 dark:text-gray-400">Electronics and Communication Engineering</p>
                                    <p className="text-gray-600 dark:text-gray-400">Minor in Fundamentals of Computing</p>
                                    <p className="text-gray-600 dark:text-gray-400">Graduated: July 2023</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-full mr-3">
                    <FiBookOpen />
                  </span>
                                    Certifications
                                </h3>

                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                                    <ul className="space-y-4">
                                        {certifications.map((cert) => (
                                            <li key={cert.id} className="flex items-start">
                                                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-1 rounded-full mt-1 mr-3">
                                                    <FiAward size={14} />
                                                </div>
                                                <div>
                                                    <p className="font-medium">{cert.name}</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {cert.issuer} | {cert.date}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                                        Credential ID: {cert.credentialId}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}