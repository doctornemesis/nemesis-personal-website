export default function Timeline({ experiences }) {
    return (
        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 h-full w-1 bg-blue-200 dark:bg-blue-900 transform md:translate-x-px"></div>

            {experiences.map((experience, index) => (
                <div
                    key={experience.id}
                    className={`relative flex flex-col md:flex-row items-start mb-16 ${
                        index === experiences.length - 1 ? 'mb-0' : 'mb-16'
                    }`}
                >
                    {/* Content - alternating sides */}
                    <div className={`flex-1 ${
                        index % 2 === 0
                            ? 'md:text-right md:pr-8 order-2 md:order-1'
                            : 'md:pl-8 order-2 md:order-3'
                    }`}>
                        {index % 2 === 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">{experience.company}</p>
                                <p className="text-gray-500 dark:text-gray-500 mb-4">{experience.period}</p>
                                <ul className={`text-gray-600 dark:text-gray-400 space-y-2 ${
                                    index % 2 === 0 ? 'md:text-right' : ''
                                }`}>
                                    {experience.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Circle marker */}
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>

                    {/* Content - alternating sides */}
                    <div className={`flex-1 ${
                        index % 2 === 0
                            ? 'md:pl-8 order-3'
                            : 'md:text-right md:pr-8 order-2 md:order-1'
                    }`}>
                        {index % 2 !== 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">{experience.company}</p>
                                <p className="text-gray-500 dark:text-gray-500 mb-4">{experience.period}</p>
                                <ul className={`text-gray-600 dark:text-gray-400 space-y-2 ${
                                    index % 2 !== 0 ? 'md:text-right' : ''
                                }`}>
                                    {experience.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}