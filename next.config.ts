import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Skip image optimisation in dev so swapping files takes effect immediately
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
