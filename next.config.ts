import { fetchRedirects } from "@/sanity/lib/fetchRedirects";
import type { NextConfig } from "next";
import { REDIRECTS_QUERYResult } from "./src/sanity/types";

const nextConfig: NextConfig = {
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
    return redirects
      .filter((r): r is REDIRECTS_QUERYResult[number] => {
        return Boolean(
          r.source && r.destination && typeof r.permanent === "boolean"
        );
      })
      .map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: r.permanent === true,
      }));
  },
};

export default nextConfig;
