import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Amar Akash</h2>
                        <p className="text-gray-400">Frontend Developer</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
                        <a href="#experience" className="hover:text-blue-400 transition duration-300">Experience</a>
                        <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
                        <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
                        <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
                    </div>

                    <div className="mt-6 md:mt-0 flex space-x-4">
                        <a
                            href="https://linkedin.com/in/amar-akash-88b052179/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={20} />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300"
                            aria-label="GitHub"
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300"
                            aria-label="Twitter"
                        >
                            <FiTwitter size={20} />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500 text-sm">
                    &copy; {currentYear} Amar Akash. All rights reserved.
                </div>
            </div>
        </footer>
    );
}