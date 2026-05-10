/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "***" }],
    qualities: [75, 90],
  },
};

export default nextConfig;
