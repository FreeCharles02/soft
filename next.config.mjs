/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgur.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
