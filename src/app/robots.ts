import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * App Router robots.txt generator. Disallow /_next/ for AhrefsBot and
 * AhrefsSiteAudit to eliminate deploy-induced chunk 404 noise from
 * audits (Sygma learning -- those 404s flooded the post-cutover Ahrefs
 * report).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "AhrefsBot", disallow: "/_next/" },
      { userAgent: "AhrefsSiteAudit", disallow: "/_next/" },
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    host: SITE.baseUrl,
  };
}
