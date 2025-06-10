/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: false,
     output: "standalone",
      optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
    
    };

export default nextConfig;




