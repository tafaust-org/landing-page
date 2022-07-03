/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        images: {
            unoptimized: true
        }
    },
    images: {
        domains: [
            'buildinx.io',
            'buildinx.de'
        ]
    }
}

module.exports = nextConfig
