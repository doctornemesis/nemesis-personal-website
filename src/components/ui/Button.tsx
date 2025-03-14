import Link from 'next/link';

export default function Button({
                                   children,
                                   href,
                                   variant = 'primary',
                                   className = '',
                                   onClick,
                                   ...props
                               }) {
    const baseStyles = "font-medium py-3 px-6 rounded-lg transition-all duration-300";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900",
        ghost: "text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900"
    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link
                href={href}
                className={buttonClasses}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
