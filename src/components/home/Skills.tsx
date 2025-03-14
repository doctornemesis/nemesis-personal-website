'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiTool, FiBriefcase } from 'react-icons/fi';
import { skillCategories } from '../../data/skills';

export default function Skills() {
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

    // Map icon names to components
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'code':
                return <FiCode />;
            case 'tools':
                return <FiTool />;
            case 'brain':
            default:
                return <FiBriefcase />;
        }
    };

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Technologies</span>
                </h2>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-full mr-3">
                  {getIcon(category.icon)}
                </span>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-gray-600 dark:text-gray-400">
                        {skill.level >= 85 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                      </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <motion.div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional skills section */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={controls}
                    className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm"
                >
                    <h3 className="text-xl font-bold mb-6 text-center">Additional Technologies & Tools</h3>

                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Git", "npm", "Yarn", "Webpack", "ESLint",
                            "Figma", "Miro", "Azure DevOps", "AWS",
                            "RESTful APIs", "GraphQL", "SASS", "Tailwind CSS",
                            "NgRx", "RxJS", "Responsive Design", "Blockchain"
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </motion.div>

                {/* Learning & Growth section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-bold mb-4">Currently Learning</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "Three.js", "AI Integration", "Web3 Development", "Go", "System Design"].map((item, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-bold mb-4">Professional Development</h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                <span>Regular contributor to team knowledge sharing sessions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                <span>Participated in Angular community meetups</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                <span>Completed advanced courses in web performance optimization</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                <span>Mentored junior developers on frontend best practices</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}