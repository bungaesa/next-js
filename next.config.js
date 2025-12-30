/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.nike.com',
                port: "",
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig
