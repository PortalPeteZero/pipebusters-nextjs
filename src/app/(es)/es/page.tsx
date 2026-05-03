import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Star, Wrench, Droplets, Thermometer, Waves } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { localBusinessSchema, webSiteSchema, serializeSchema } from "@/lib/seo/schema";
import { getDict } from "@/lib/i18n/getDict";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Detección de Fugas y Fontanería Lanzarote | Pipebusters",
  description:
    "Servicios profesionales de detección de fugas y fontanería en Lanzarote. Cámara térmica, sensores acústicos, fugas en piscinas. Garantía Sin Encontrar, Sin Pagar.",
  path: "/es",
  locale: "es",
  alternate: { en: "/", es: "/es" },
});

const testimonials = [
  {
    name: "María G.",
    location: "Playa Blanca",
    text: "Pipebusters encontró nuestra fuga oculta en menos de una hora usando sus cámaras térmicas. La reparación se hizo el mismo día con mínima interrupción. ¡Servicio absolutamente profesional!",
    service: "Detección de Fugas",
  },
  {
    name: "James T.",
    location: "Puerto del Carmen",
    text: "Nuestra piscina perdía agua durante meses. Localizaron la fractura en la tubería bajo la terraza sin necesidad de excavar. ¡Nos ahorraron miles en daños potenciales!",
    service: "Detección de Fugas en Piscina",
  },
  {
    name: "Carmen R.",
    location: "Costa Teguise",
    text: "Llamada de emergencia un domingo y llegaron en menos de una hora. Repararon nuestra tubería rota y hasta ayudaron a limpiar. La garantía de 2 años da mucha tranquilidad.",
    service: "Emergencia de Fontanería",
  },
];

const services = [
  { icon: Droplets, href: "/es/servicios/deteccion-fugas", title: "Detección Avanzada de Fugas", desc: "Tecnología avanzada con cámaras térmicas, sensores acústicos y gas trazador." },
  { icon: Wrench, href: "/es/servicios/reparacion-fugas", title: "Reparación Experta de Fugas", desc: "Reparaciones expertas con mínima interrupción. Solucionamos la causa, no solo los síntomas." },
  { icon: Waves, href: "/es/servicios/deteccion-fugas-piscina", title: "Detección de Fugas en Piscinas", desc: "Detección especializada de fugas en piscinas mediante tecnología no invasiva avanzada." },
  { icon: Thermometer, href: "/es/servicios/calderas", title: "Sustitución y Mantenimiento de Calderas", desc: "Sustitución, instalación y mantenimiento profesional de calderas por técnicos cualificados." },
  { icon: Wrench, href: "/es/servicios/fontaneria", title: "Servicios Completos de Fontanería", desc: "Servicios completos de fontanería incluyendo reparación de grifos y desatascos." },
  { icon: ShieldCheck, href: "/es/servicios/mantenimiento", title: "Mantenimiento Preventivo", desc: "Planes de mantenimiento regular para prevenir reparaciones de emergencia costosas." },
];

export default function EsHomePage() {
  const d = getDict("es");
  const schemas = [localBusinessSchema("es"), webSiteSchema("es")];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(schemas) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-charcoal-dark">
        <div className="container mx-auto">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-4">
            {SITE.tagline.es}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            {d["hero.tagline"]}{" "}
            <span className="text-action-red">{d["hero.taglineHighlight"]}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
            {d["hero.description"]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/es/contacto"
              className="bg-action-red text-white px-8 py-3.5 rounded font-bold text-base hover:bg-action-red-hover transition-colors glow-red text-center"
            >
              {d["hero.getQuote"]}
            </Link>
            <Link
              href="/es/servicios"
              className="border border-electric-blue text-electric-blue px-8 py-3.5 rounded font-semibold text-base hover:bg-electric-blue/10 transition-colors text-center"
            >
              {d["hero.ourServices"]}
            </Link>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              { label: d["hero.noFindNoFee"], sub: d["hero.riskFree"] },
              { label: d["hero.warranty"], sub: d["hero.onAllRepairs"] },
              { label: d["hero.experience"], sub: d["hero.combinedExperience"] },
              { label: "24/7", sub: "Urgencias" },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-charcoal-light rounded p-4 border border-border/30">
                <p className="text-action-red font-bold text-lg">{label}</p>
                <p className="text-muted-foreground text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            {d["services.pretitle"]}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {d["services.title"]}{" "}
            <span className="text-action-red">{d["services.titleHighlight"]}</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {d["services.description"]}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-charcoal-light border border-border/30 rounded-lg p-6 hover:border-electric-blue/50 transition-colors group"
              >
                <Icon className="w-8 h-8 text-action-red mb-4 group-hover:text-electric-blue transition-colors" />
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                <span className="inline-block mt-4 text-electric-blue text-sm font-semibold">
                  {d["services.learnMore"]} →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/es/servicios"
              className="border border-action-red text-action-red px-8 py-3 rounded font-semibold hover:bg-action-red hover:text-white transition-colors"
            >
              {d["services.viewAll"]}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-charcoal-dark">
        <div className="container mx-auto">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            {d["testimonials.pretitle"]}
          </p>
          <h2 className="text-3xl font-bold text-center mb-3">{d["testimonials.title"]}</h2>
          <p className="text-muted-foreground text-center mb-12">{d["testimonials.description"]}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-charcoal-light border border-border/30 rounded-lg p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-action-red fill-action-red" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.location} · {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            {d["testimonials.serviceArea"]}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-action-red">
        <div className="container mx-auto text-center">
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">
            {d["cta.pretitle"]}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {d["cta.title"]}{" "}
            <span className="underline decoration-white/40">{d["cta.titleHighlight"]}</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{d["cta.description"]}</p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold text-base hover:bg-white/90 transition-colors"
          >
            {d["cta.button"]}
          </Link>
          <p className="text-white/70 text-sm mt-4">
            {d["cta.emailUs"]}{" "}
            <a href={`mailto:${SITE.email}`} className="text-white underline">
              {SITE.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
