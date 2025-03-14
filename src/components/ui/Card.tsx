import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

export default function Card({
                                 title,
                                 subtitle,
                                 description,
                                 imageUrl,
                                 projectUrl,
                                 tags = []
                             }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="relative h-52">
                <Image
                    src={imageUrl || "/images/placeholder.jpg"}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    {subtitle && (
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {subtitle}
            </span>
                    )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                </p>

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                )}

                {projectUrl && (
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center"
                    >
                        View Project <FiExternalLink className="ml-1 text-xs" />
                    </a>
                )}
            </div>
        </div>
    );
}