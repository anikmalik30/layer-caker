import { fetchRedirects } from "@/sanity/lib/fetchRedirects";
import type { NextConfig } from "next";

const  nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    const redirects = await fetchRedirects();
    // Map and filter to ensure correct types
    return redirects
      .filter(
        (r: any) =>
          r.source && r.destination && typeof r.permanent === "boolean"
      )
      .map((r: any) => ({
        source: r.source as string,
        destination: r.destination as string,
        permanent: r.permanent as boolean,
      }));
  },
};

export default nextConfig;