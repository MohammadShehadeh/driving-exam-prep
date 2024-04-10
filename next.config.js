/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
	reactStrictMode: true,
	trailingSlash: false,
  poweredByHeader: false,
};

module.exports = nextConfig;
