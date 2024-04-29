/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
};

export default nextConfig;
