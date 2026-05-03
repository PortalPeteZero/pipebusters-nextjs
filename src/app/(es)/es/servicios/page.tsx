import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Wrench, Waves, Thermometer, ShieldCheck, AlertTriangle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de Fontanería y Detección de Fugas Lanzarote | Pipebusters",
  description:
    "Detección de fugas y fontanería en Lanzarote. Cámaras térmicas, sensores acústicos, fugas en piscinas, calderas. Sin Encontrar, Sin Pagar.",
  path: "/es/servicios",
  locale: "es",
  alternate: { en: "/services", es: "/es/servicios" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
]);

const services = [
  {
    icon: Droplets,
    title: "Detección de Fugas",
    desc: "Tecnología avanzada de imagen térmica, sensores acústicos y gas trazador para localizar fugas ocultas sin excavaciones innecesarias.",
    href: "/es/servicios/deteccion-fugas",
    tag: "Sin Encontrar, Sin Pagar",
  },
  {
    icon: Wrench,
    title: "Reparación de Fugas",
    desc: "Reparaciones expertas con mínima interrupción. Solucionamos la causa raíz, no solo los síntomas, con garantía de 2 años en todas las reparaciones.",
    href: "/es/servicios/reparacion-fugas",
    tag: "Garantía 2 Años",
  },
  {
    icon: Waves,
    title: "Detección de Fugas en Piscinas",
    desc: "Detección especializada no invasiva para piscinas y spas mediante pruebas de presión, inyección de tinte y equipos acústicos.",
    href: "/es/servicios/deteccion-fugas-piscina",
    tag: "No Invasivo",
  },
  {
    icon: Waves,
    title: "Fontanería de Piscinas",
    desc: "Servicios completos de fontanería para piscinas incluyendo instalación de bombas y filtros, reparación del sistema de circulación y sustitución de tuberías.",
    href: "/es/servicios/fontaneria-piscina",
    tag: "Servicio Completo",
  },
  {
    icon: Thermometer,
    title: "Calderas",
    desc: "Sustitución, instalación y mantenimiento anual de calderas por técnicos cualificados. Modelos de alta eficiencia energética suministrados e instalados.",
    href: "/es/servicios/calderas",
    tag: "Técnicos Cualificados",
  },
  {
    icon: Wrench,
    title: "Fontanería",
    desc: "Servicios completos de fontanería para viviendas, villas y locales comerciales. Grifos, inodoros, duchas, desatascos y toda la red de tuberías.",
    href: "/es/servicios/fontaneria",
    tag: "Todo Tipo de Inmuebles",
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento Preventivo",
    desc: "Planes de inspección anuales para detectar problemas antes de que se conviertan en emergencias costosas. Pruebas de presión, escáneres de fugas y revisión de caldera incluidos.",
    href: "/es/servicios/mantenimiento",
    tag: "Planes Anuales",
  },
  {
    icon: AlertTriangle,
    title: "Rotura de Tuberías",
    desc: "Renovación de tuberías sin zanjas: sustituye tuberías antiguas o dañadas sin excavaciones extensas. En la mayoría de los casos, completado en un día.",
    href: "/es/servicios/rotura-tuberias",
    tag: "Tecnología Sin Zanjas",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumb) }}
      />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3">
                Lo Que Hacemos
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Servicios Profesionales de{" "}
                <span className="text-action-red">Detección de Fugas</span>{" "}
                y Fontanería en Lanzarote
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Desde la localización de fugas ocultas hasta instalaciones completas de fontanería,
                Pipebusters cubre todos los aspectos de la gestión del agua en viviendas, villas y
                locales comerciales en toda Lanzarote.
              </p>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/services-graphic.webp"
          alt="Servicios detección fugas Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, href, tag }) => (
              <Link
                key={href}
                href={href}
                className="bg-charcoal-light border border-border/30 rounded-xl p-6 hover:border-electric-blue/50 transition-colors group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-8 h-8 text-action-red group-hover:text-electric-blue transition-colors" />
                  <span className="text-xs font-semibold text-electric-blue bg-electric-blue/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                </div>
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{desc}</p>
                <span className="inline-block mt-4 text-electric-blue text-sm font-semibold">
                  Saber más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pipebusters */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Por Qué Elegir <span className="text-action-red">Pipebusters</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Sin Encontrar, Sin Pagar", sub: "Riesgo cero para ti" },
              { label: "Garantía 2 Años", sub: "En todas las reparaciones" },
              { label: "20+ Años", sub: "Experiencia combinada" },
              { label: "24/7", sub: "Respuesta de emergencia" },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-charcoal-light border border-border/30 rounded-xl p-5 text-center">
                <p className="text-action-red font-bold text-xl mb-1">{label}</p>
                <p className="text-muted-foreground text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo Para Solucionar Tu Problema?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contáctanos hoy para un presupuesto gratuito. Servicio en toda la isla de Lanzarote con
            respuesta el mismo día disponible.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Obtener Presupuesto Gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
