import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/i18n/types";

const organizationId = `${SITE.baseUrl}/#organization`;
const websiteId = `${SITE.baseUrl}/#website`;

/**
 * Main LocalBusiness / Plumber / ProfessionalService schema.
 * Used on the home page and optionally referenced from sub-pages.
 */
export function localBusinessSchema(locale: Locale): object {
  const description =
    locale === "es"
      ? SITE.tagline.es
      : SITE.tagline.en;

  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness", "ProfessionalService"],
    "@id": organizationId,
    name: SITE.name,
    legalName: SITE.legalName,
    description,
    url: SITE.baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.baseUrl}${SITE.ogImage}`,
    },
    image: `${SITE.baseUrl}${SITE.ogImage}`,
    email: SITE.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: locale === "es" ? SITE.address.regionEs : SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Arrecife" },
      { "@type": "City", name: "Playa Blanca" },
      { "@type": "City", name: "Puerto del Carmen" },
      { "@type": "City", name: "Costa Teguise" },
      { "@type": "City", name: "Puerto Calero" },
      { "@type": "City", name: "Yaiza" },
      { "@type": "City", name: "Tías" },
      { "@type": "City", name: "Haría" },
      { "@type": "City", name: "San Bartolomé" },
      { "@type": "City", name: "Teguise" },
      { "@type": "City", name: "Tinajo" },
    ],
    openingHoursSpecification: SITE.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

/**
 * WebSite schema. Include once on the home page alongside LocalBusiness.
 */
export function webSiteSchema(locale: Locale): object {
  const description =
    locale === "es" ? SITE.tagline.es : SITE.tagline.en;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE.baseUrl,
    name: SITE.name,
    description,
    publisher: { "@id": organizationId },
    inLanguage: locale === "es" ? "es-ES" : "en-GB",
  };
}

/**
 * Service schema. Used on /services and service sub-pages.
 */
export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}

export function serviceSchema(input: ServiceSchemaInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { "@id": organizationId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Lanzarote",
    },
    inLanguage: input.locale === "es" ? "es-ES" : "en-GB",
  };
}

/**
 * BlogPosting schema. Used on individual blog post pages.
 */
export interface BlogPostSchemaInput {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  locale: Locale;
}

export function blogPostSchema(input: BlogPostSchemaInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    image: input.image ?? `${SITE.baseUrl}${SITE.ogImage}`,
    author: {
      "@type": "Organization",
      name: SITE.name,
      "@id": organizationId,
    },
    publisher: { "@id": organizationId },
    inLanguage: input.locale === "es" ? "es-ES" : "en-GB",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}

/**
 * BreadcrumbList schema. Used on sub-pages for Rich Results breadcrumbs.
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbListSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Serialise one or more schema objects to a JSON string for
 * <script type="application/ld+json"> dangerouslySetInnerHTML.
 */
export function serializeSchema(schemas: object | object[]): string {
  return JSON.stringify(Array.isArray(schemas) ? schemas : [schemas]);
}
