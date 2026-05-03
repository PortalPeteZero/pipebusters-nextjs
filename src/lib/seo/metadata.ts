import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/i18n/types";

/**
 * Build a Next.js Metadata object for a single page. Server-rendered,
 * which means the output HTML contains correct meta tags on first paint
 * (crawlers never see a JS-hydrated fallback).
 *
 * Handles canonical, openGraph, twitter, and alternates.languages for
 * hreflang. Passing `alternate` (a path on the opposite locale) emits
 * both the current and alternate as hreflang pairs plus x-default.
 *
 * For pages with no locale counterpart (English-only blog posts, location
 * pages without Spanish translations), omit `alternate` and the function
 * emits only a self-referential canonical plus the current locale tag.
 */
export interface BuildMetadataInput {
  /** Page title shown in <title> and og:title. Keep 30-60 chars. */
  title: string;
  /** Meta description. Keep 120-160 chars. */
  description: string;
  /** Absolute path on this site, e.g. "/contact" or "/es/contacto". Must start with "/". */
  path: string;
  /** Locale of the current page. */
  locale: Locale;
  /**
   * Path of the counterpart page in the OTHER locale. Omit for
   * English-only or Spanish-only pages.
   */
  alternate?: {
    en?: string;
    es?: string;
  };
  /** Override the default OG image. Absolute or relative URL. */
  ogImage?: string;
  /** Set `true` to emit noindex,nofollow. */
  noIndex?: boolean;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const { title, description, path, locale, alternate, ogImage, noIndex } = input;
  const canonical = `${SITE.baseUrl}${path}`;
  const ogImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${SITE.baseUrl}${ogImage}`
    : `${SITE.baseUrl}${SITE.ogImage}`;

  // Build alternates.languages: always include current locale. Include the
  // opposite locale if alternate[oppositeLocale] is provided. x-default points
  // to the English version if one exists, otherwise the current page.
  const languages: Record<string, string> = {};
  if (alternate?.en) {
    languages["en"] = `${SITE.baseUrl}${alternate.en}`;
  }
  if (alternate?.es) {
    languages["es"] = `${SITE.baseUrl}${alternate.es}`;
  }
  // The current page's own locale always maps to itself
  languages[locale] = canonical;
  // x-default: prefer the English version, fall back to current page
  languages["x-default"] = alternate?.en
    ? `${SITE.baseUrl}${alternate.en}`
    : locale === "en"
      ? canonical
      : alternate?.en
        ? `${SITE.baseUrl}${alternate.en}`
        : canonical;

  const ogLocale = locale === "es" ? "es_ES" : "en_GB";

  return {
    // Use absolute so the layout's title template doesn't double-suffix.
    // Pages pass the full title they want rendered in <title>.
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: SITE.name,
      locale: ogLocale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
