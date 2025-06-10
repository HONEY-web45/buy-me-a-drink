/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: false,
     output: "standalone",
      optimization: {
    splitChunks: {
      chunks: "all",
    },
     webpack(config) {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 25000000, // Limit chunks to 25MB
    };
    return config;
  }
  },
    
    };

export default nextConfig;




