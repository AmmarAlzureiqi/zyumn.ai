import path from 'path';

// Use import.meta.url to get the current directory path
const __dirname = new URL('.', import.meta.url).pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname); // Adjust to project root
    return config;
  },
};

export default nextConfig;
