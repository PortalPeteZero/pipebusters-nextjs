"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Dict, Locale } from "@/lib/i18n/types";

interface HeaderProps {
  dict: Dict;
  locale: Locale;
  enHref?: string;
  esHref?: string;
}

type ServiceLink = { label: string; path: string };

const enServiceLinks: ServiceLink[] = [
  { label: "Advanced Leak Detection", path: "/services/leak-detection" },
  { label: "Expert Leak Repairs", path: "/services/leak-repair" },
  { label: "Complete Plumbing", path: "/services/plumbing" },
  { label: "Boiler Replacement & Servicing", path: "/services/boiler-services" },
  { label: "Pool Leak Detection", path: "/services/pool-leak-detection" },
  { label: "Pool Plumbing & Repairs", path: "/services/pool-plumbing" },
  { label: "Preventative Maintenance", path: "/services/maintenance" },
  { label: "Pipe Bursting", path: "/services/pipe-bursting" },
];

const esServiceLinks: ServiceLink[] = [
  { label: "Detección Avanzada de Fugas", path: "/es/servicios/deteccion-fugas" },
  { label: "Reparación de Fugas", path: "/es/servicios/reparacion-fugas" },
  { label: "Fontanería Completa", path: "/es/servicios/fontaneria" },
  { label: "Calderas", path: "/es/servicios/calderas" },
  { label: "Fugas en Piscinas", path: "/es/servicios/deteccion-fugas-piscina" },
  { label: "Fontanería de Piscinas", path: "/es/servicios/fontaneria-piscina" },
  { label: "Mantenimiento", path: "/es/servicios/mantenimiento" },
  { label: "Rotura de Tuberías", path: "/es/servicios/rotura-tuberias" },
];

function buildNav(dict: Dict, locale: Locale) {
  const isSpanish = locale === "es";
  if (isSpanish) {
    return [
      { label: dict["nav.home"], path: "/es" },
      {
        label: dict["nav.services"],
        path: "/es/servicios",
        dropdownItems: esServiceLinks,
      },
      { label: dict["nav.about"], path: "/es/nosotros" },
      { label: dict["nav.caseStudies"], path: "/es/casos-de-exito" },
      { label: dict["nav.blog"], path: "/es/blog" },
      { label: dict["nav.contact"], path: "/es/contacto" },
    ];
  }
  return [
    { label: dict["nav.home"], path: "/" },
    {
      label: dict["nav.services"],
      path: "/services",
      dropdownItems: enServiceLinks,
    },
    { label: dict["nav.about"], path: "/about" },
    { label: dict["nav.caseStudies"], path: "/case-studies" },
    { label: dict["nav.blog"], path: "/blog" },
    { label: dict["nav.contact"], path: "/contact" },
  ];
}

export function Header({ dict, locale, enHref, esHref }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname() ?? "/";
  const isSpanish = locale === "es";
  const navItems = buildNav(dict, locale);
  const contactPath = isSpanish ? "/es/contacto" : "/contact";

  const closeMobile = () => {
    setIsOpen(false);
    setShowServices(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-dark/90 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16">
          {/* Brand name */}
          <Link
            href={isSpanish ? "/es" : "/"}
            className="flex-shrink-0 font-bold text-xl tracking-tight"
          >
            <span className="text-foreground">Pipe</span>
            <span className="text-action-red">busters</span>
            <span className="text-muted-foreground text-sm font-normal ml-1 hidden sm:inline">
              Lanzarote
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive =
                pathname === item.path ||
                ("dropdownItems" in item &&
                  item.dropdownItems &&
                  pathname.startsWith(item.path));
              return (
                <div key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive
                        ? "text-action-red"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {"dropdownItems" in item && item.dropdownItems && (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </Link>

                  {/* Services dropdown */}
                  {"dropdownItems" in item && item.dropdownItems && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-charcoal-dark border border-border/40 min-w-[240px] py-1 rounded shadow-lg">
                        {item.dropdownItems.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className={`block px-4 py-2.5 text-sm transition-colors border-b border-border/20 last:border-0 ${
                              pathname === service.path
                                ? "text-action-red bg-action-red/10"
                                : "text-foreground/70 hover:text-foreground hover:bg-charcoal-light"
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <LanguageSwitcher locale={locale} enHref={enHref} esHref={esHref} />

            <Link
              href={contactPath}
              className="bg-action-red text-white px-4 py-2 text-sm font-semibold rounded hover:bg-action-red-hover transition-colors min-h-[36px] flex items-center glow-red"
            >
              {dict["nav.getQuote"]}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-charcoal-dark/95 backdrop-blur-md border-b border-border/30 animate-fade-in">
            <div className="container mx-auto py-6 flex flex-col gap-1">
              {navItems.map((item) =>
                "dropdownItems" in item && item.dropdownItems ? (
                  <div key={item.path}>
                    <button
                      type="button"
                      onClick={() => setShowServices(!showServices)}
                      className="flex items-center justify-between w-full text-base font-medium py-3 px-1 text-foreground/80 hover:text-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          showServices ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {showServices && (
                      <div className="pl-4 flex flex-col gap-1 mb-2">
                        <Link
                          href={item.path}
                          onClick={closeMobile}
                          className="text-foreground/60 hover:text-foreground py-2 text-sm"
                        >
                          {isSpanish ? "Todos los servicios" : "All Services"}
                        </Link>
                        {item.dropdownItems.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={closeMobile}
                            className="text-foreground/60 hover:text-foreground py-2 text-sm"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMobile}
                    className={`text-base font-medium py-3 px-1 transition-colors ${
                      pathname === item.path
                        ? "text-action-red"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/30">
                <LanguageSwitcher locale={locale} enHref={enHref} esHref={esHref} />
                <Link
                  href={contactPath}
                  onClick={closeMobile}
                  className="bg-action-red text-white px-5 py-2.5 text-sm font-semibold rounded hover:bg-action-red-hover transition-colors"
                >
                  {dict["nav.getQuote"]}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
