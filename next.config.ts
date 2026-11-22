import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  poweredByHeader: false,
  devIndicators: false,
  images: { qualities: [75, 80], unoptimized: true },
};
export default config;
