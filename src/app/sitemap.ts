import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * App Router sitemap.xml generator covering all 28 Pipebusters pages
 * (14 EN + 14 ES) with hreflang alternates on every bilingual pair.
 *
 * When adding new pages:
 * 1. Add the EN path → ES path pair to `bilingualPairs`.
 * 2. Create the corresponding page files under (en)/ and (es)/es/.
 */

const bilingualPairs: Record<string, string> = {
  "/": "/es",
  "/about": "/es/nosotros",
  "/blog": "/es/blog",
  "/case-studies": "/es/casos-de-exito",
  "/contact": "/es/contacto",
  "/services": "/es/servicios",
  "/services/boiler-services": "/es/servicios/calderas",
  "/services/leak-detection": "/es/servicios/deteccion-fugas",
  "/services/leak-repair": "/es/servicios/reparacion-fugas",
  "/services/maintenance": "/es/servicios/mantenimiento",
  "/services/pipe-bursting": "/es/servicios/rotura-tuberias",
  "/services/plumbing": "/es/servicios/fontaneria",
  "/services/pool-leak-detection": "/es/servicios/deteccion-fugas-piscina",
  "/services/pool-plumbing": "/es/servicios/fontaneria-piscina",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const [enPath, esPath] of Object.entries(bilingualPairs)) {
    const enUrl = `${SITE.baseUrl}${enPath === "/" ? "" : enPath}`;
    const esUrl = `${SITE.baseUrl}${esPath}`;
    const priority = enPath === "/" ? 1.0 : enPath.startsWith("/services/") ? 0.8 : 0.7;

    const alternates = {
      languages: {
        en: enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    };

    entries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority,
      alternates,
    });

    entries.push({
      url: esUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority,
      alternates,
    });
  }

  return entries;
}
