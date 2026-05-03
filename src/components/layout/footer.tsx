import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import type { Dict, Locale } from "@/lib/i18n/types";
import { SITE } from "@/lib/site";

interface FooterProps {
  dict: Dict;
  locale: Locale;
}

const ES_PATH_MAP: Record<string, string> = {
  "/": "/es",
  "/about": "/es/nosotros",
  "/case-studies": "/es/casos-de-exito",
  "/blog": "/es/blog",
  "/contact": "/es/contacto",
  "/services": "/es/servicios",
  "/services/leak-detection": "/es/servicios/deteccion-fugas",
  "/services/leak-repair": "/es/servicios/reparacion-fugas",
  "/services/plumbing": "/es/servicios/fontaneria",
  "/services/boiler-services": "/es/servicios/calderas",
  "/services/pool-leak-detection": "/es/servicios/deteccion-fugas-piscina",
  "/services/pool-plumbing": "/es/servicios/fontaneria-piscina",
  "/services/maintenance": "/es/servicios/mantenimiento",
  "/services/pipe-bursting": "/es/servicios/rotura-tuberias",
};

function localized(locale: Locale, enPath: string): string {
  if (locale === "en") return enPath;
  return ES_PATH_MAP[enPath] ?? enPath;
}

export function Footer({ dict, locale }: FooterProps) {
  const isSpanish = locale === "es";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-border/30 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href={isSpanish ? "/es" : "/"}
              className="inline-block font-bold text-xl tracking-tight mb-3"
            >
              <span className="text-foreground">Pipe</span>
              <span className="text-action-red">busters</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {dict["footer.description"]}
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-muted-foreground">
              <span className="text-electric-blue font-semibold">
                {dict["footer.noFindNoFee"]}
              </span>
              <span>{dict["footer.warranty"]}</span>
              <span>{dict["footer.experience"]}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              {dict["footer.quickLinks"]}
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { en: "/", label: isSpanish ? "Inicio" : "Home" },
                { en: "/about", label: dict["nav.about"] },
                { en: "/case-studies", label: dict["nav.caseStudies"] },
                { en: "/blog", label: dict["nav.blog"] },
                { en: "/contact", label: dict["nav.contact"] },
              ].map(({ en, label }) => (
                <Link
                  key={en}
                  href={localized(locale, en)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              {dict["footer.services"]}
            </p>
            <nav className="flex flex-col gap-2">
              {[
                {
                  en: "/services/leak-detection",
                  label: isSpanish ? "Detección de Fugas" : "Leak Detection",
                },
                {
                  en: "/services/leak-repair",
                  label: isSpanish ? "Reparación de Fugas" : "Leak Repair",
                },
                {
                  en: "/services/plumbing",
                  label: isSpanish ? "Fontanería" : "Plumbing",
                },
                {
                  en: "/services/boiler-services",
                  label: isSpanish ? "Calderas" : "Boiler Services",
                },
                {
                  en: "/services/pool-leak-detection",
                  label: isSpanish ? "Fugas en Piscinas" : "Pool Leak Detection",
                },
                {
                  en: "/services/pool-plumbing",
                  label: isSpanish ? "Fontanería de Piscinas" : "Pool Plumbing",
                },
                {
                  en: "/services/maintenance",
                  label: isSpanish ? "Mantenimiento" : "Maintenance",
                },
                {
                  en: "/services/pipe-bursting",
                  label: isSpanish ? "Rotura de Tuberías" : "Pipe Bursting",
                },
              ].map(({ en, label }) => (
                <Link
                  key={en}
                  href={localized(locale, en)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Service Area */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              {dict["contact.contactInfo"]}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-electric-blue shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-electric-blue mt-0.5 shrink-0" />
                <span>
                  {isSpanish
                    ? "Lanzarote, Islas Canarias"
                    : "Lanzarote, Canary Islands"}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-sm uppercase tracking-wider mb-3 text-foreground">
                {dict["footer.serviceAreas"]}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Arrecife · Playa Blanca · Puerto del Carmen · Costa Teguise ·
                Puerto Calero · Tías · Yaiza
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-sm">
            {dict["footer.copyright"].replace("{year}", String(year))}
          </p>
          <Link
            href={localized(locale, "/contact")}
            className="bg-action-red text-white px-4 py-2 text-sm font-semibold rounded hover:bg-action-red-hover transition-colors"
          >
            {dict["common.getQuote"]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
