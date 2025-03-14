/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable ESLint during production builds
    output: 'export',
    eslint: {
        // Warning: this will skip checking ESLint errors during the build
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;