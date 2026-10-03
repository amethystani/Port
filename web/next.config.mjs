/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // All images are plain <img> tags pointing at /public, so the optimizer is not needed.
  images: { unoptimized: true },
};

export default nextConfig;
