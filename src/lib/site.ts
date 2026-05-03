/**
 * Site-wide constants. Business info, URLs, contact details.
 * One place to change for brand updates.
 */
export const SITE = {
  name: "Pipebusters Lanzarote",
  legalName: "Pipebusters Lanzarote",
  domain: "pipebusterslanzarote.com",
  baseUrl: "https://pipebusterslanzarote.com",
  tagline: {
    en: "Professional Leak Detection & Plumbing in Lanzarote",
    es: "Detección de Fugas y Fontanería Profesional en Lanzarote",
  },
  email: "info@pipebusterslanzarote.com",
  emailFrom: "Pipebusters Lanzarote <noreply@canary-detect.com>",
  emailTo: "info@pipebusterslanzarote.com",
  address: {
    locality: "Lanzarote",
    region: "Canary Islands",
    regionEs: "Islas Canarias",
    postalCode: "35500",
    country: "ES",
  },
  geo: {
    latitude: 28.9637,
    longitude: -13.6068,
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      days: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  ogImage: "/og-image.png",
} as const;

export type Site = typeof SITE;
