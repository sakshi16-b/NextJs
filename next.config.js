/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        // port: "",//not required now
        // pathname: "/my-bucket/**",
      },
    ],
  },
};

export default nextConfig;
