/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: false,
     output: "standalone",
     
    optimization: { splitChunks: { maxSize: 250000 } }, // ❌ REMOVE THIS
  webpack(config) {
    config.optimization.splitChunks.maxSize = 250000; // ✅ KEEP THIS
    return config;
  }
  
    
    };

export default nextConfig;




