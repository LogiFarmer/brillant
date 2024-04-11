/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'f.wishabi.net',
            port: '',
            pathname: '/page_pdf_images/**',
          },
        ]
    }
};

module.exports = nextConfig;
