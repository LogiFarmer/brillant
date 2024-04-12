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
      {
        protocol: 'https',
        hostname: 'product-images.metro.ca',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'i5.walmartimages.ca',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.shop.loblaws.ca',
        port: '',
        pathname: '/products/**',
      },
    ]
  }
};

module.exports = nextConfig;
