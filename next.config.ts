import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    domains: [
      "wip.tezcommerce.com",
      "www.sinclairmckinsley.co.uk",
      "ik.imagekit.io",   // ✅ add this
    ],
  },
};

export default nextConfig;
