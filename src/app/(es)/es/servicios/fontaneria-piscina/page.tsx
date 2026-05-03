import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Wrench, Settings } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Fontanería de Piscinas Lanzarote — Bombas, Filtros y Tuberías | Pipebusters",
  description:
    "Servicios completos de fontanería para piscinas en Lanzarote. Instalación de bombas y filtros, reparación del sistema de circulación, sustitución de tuberías. Todos los tipos de piscina.",
  path: "/es/servicios/fontaneria-piscina",
  locale: "es",
  alternate: { en: "/services/pool-plumbing", es: "/es/servicios/fontaneria-piscina" },
});

const schema = serviceSchema({
  name: "Fontanería de Piscinas Lanzarote",
  description: "Servicios completos de fontanería para piscinas incluyendo instalación de bombas y filtros, tuberías y reparación del sistema de circulación.",
  url: `${SITE.baseUrl}/es/servicios/fontaneria-piscina`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Fontanería de Piscinas", url: `${SITE.baseUrl}/es/servicios/fontaneria-piscina` },
]);

const serviceItems = [
  { icon: Settings, title: "Instalación y Sustitución de Bombas", desc: "Suministro e instalación de bombas de velocidad variable y monofásicas. Modelos de alta eficiencia con menor coste de funcionamiento." },
  { icon: Settings, title: "Sistema de Filtración", desc: "Instalación de filtros de arena, mejora a vidrio, instalación de filtros de cartucho. Contralavado anual y sustitución de material filtrante." },
  { icon: Wrench, title: "Red de Circulación", desc: "Nuevas líneas de aspiración y retorno, instalación de colectores, reparación de tuberías, instalación de válvulas de corte." },
  { icon: Wrench, title: "Skimmers y Boquillas de Retorno", desc: "Sustitución de skimmers, mejora de boquillas, ajuste e instalación de chorros." },
  { icon: Waves, title: "Sistemas de Calefacción", desc: "Instalación y puesta en marcha de bombas de calor. Instalación de captadores de calefacción solar y red de tuberías." },
  { icon: Settings, title: "Automatización y Controles", desc: "Instalación de temporizadores, cableado de cuadros de automatización, configuración del controlador de bomba de velocidad variable." },
];

export default function FontaneriaPiscinaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema([schema, breadcrumb]) }}
      />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Bombas, Filtros y Tuberías
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Fontanería de Piscinas{" "}
            <span className="text-action-red">Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Desde la sustitución de bombas y filtros hasta renovaciones completas del sistema
            de circulación, nos encargamos de todos los trabajos de fontanería para piscinas
            privadas y comerciales en toda la isla.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Todo Tipo de Piscinas
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Equipos de Alta Eficiencia
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Presupuesto Gratuito
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Servicios de Fontanería para Piscinas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <Icon className="w-6 h-6 text-action-red mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Link */}
      <section className="py-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/20 rounded-xl p-6 max-w-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Waves className="w-10 h-10 text-electric-blue shrink-0" />
            <div>
              <h3 className="font-bold mb-1">¿Sospechas de una Fuga en tu Piscina?</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Si crees que tu piscina tiene una fuga en lugar de necesitar solo una reparación
                de fontanería, nuestro servicio especializado de detección de fugas puede
                localizar el origen primero.
              </p>
              <Link href="/es/servicios/deteccion-fugas-piscina" className="text-electric-blue text-sm font-semibold hover:underline">
                Más información sobre detección de fugas en piscinas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas Fontanería para tu Piscina?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contáctanos para una valoración in situ gratuita y presupuesto. Cubrimos toda Lanzarote.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Solicitar Presupuesto Gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
