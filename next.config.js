/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i.scdn.co'
            },
        ]
    },
}

module.exports = nextConfig
