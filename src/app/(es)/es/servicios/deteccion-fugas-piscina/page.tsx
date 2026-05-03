import type { Metadata } from "next";
import Link from "next/link";
import { Waves, FlaskConical, Search, Gauge, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Detección de Fugas en Piscinas Lanzarote: Sin Vaciar, Sin Pagar | Pipebusters",
  description:
    "Detección de fugas en piscinas en Lanzarote. Pruebas de presión, inyección de tinte, sensores acústicos. Sin vaciar la piscina. Sin Encontrar, Sin Pagar.",
  path: "/es/servicios/deteccion-fugas-piscina",
  locale: "es",
  alternate: { en: "/services/pool-leak-detection", es: "/es/servicios/deteccion-fugas-piscina" },
});

const schema = serviceSchema({
  name: "Detección de Fugas en Piscinas Lanzarote",
  description: "Detección especializada de fugas en piscinas y spas mediante tecnología no invasiva.",
  url: `${SITE.baseUrl}/es/servicios/deteccion-fugas-piscina`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Detección de Fugas en Piscinas", url: `${SITE.baseUrl}/es/servicios/deteccion-fugas-piscina` },
]);

const methods = [
  {
    icon: Gauge,
    title: "Pruebas de Presión",
    desc: "Cada circuito de tubería se aísla y se somete a prueba de presión para identificar qué línea pierde agua. Reduce la búsqueda al circuito específico antes de cualquier excavación.",
  },
  {
    icon: FlaskConical,
    title: "Pruebas de Tinte",
    desc: "Se introduce tinte fluorescente cerca de grietas, racores y boquillas de retorno sospechosos. Cualquier fuga activa absorbe el tinte: visible en tiempo real.",
  },
  {
    icon: Search,
    title: "Cámara Submarina",
    desc: "Cámaras submarinas especializadas inspeccionan el vaso, racores, focos y entradas de retorno sin necesidad de vaciar la piscina.",
  },
  {
    icon: Waves,
    title: "Detección Acústica",
    desc: "Para fugas en tuberías enterradas, los sensores acústicos detectan la firma sonora de la pérdida de presión a través del terreno y la estructura circundantes.",
  },
];

export default function DeteccionFugasPiscinaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema([schema, breadcrumb]) }}
      />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3">
                Especialistas en Fugas de Piscinas y Spas
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Detección de Fugas en Piscinas{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                ¿Tu piscina pierde más agua de lo que puede explicar la evaporación? Localizamos
                fugas en piscinas y spas en toda Lanzarote mediante tecnología no invasiva: sin
                vaciar la piscina en la mayoría de los casos.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  Sin Encontrar, Sin Pagar
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Sin Vaciado Total
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Todo Tipo de Piscinas
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/pool-plumbing-2.jpeg"
          alt="Detección fugas piscina Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Bucket Test */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/20 rounded-xl p-6 max-w-3xl">
            <h2 className="text-lg font-bold mb-3">Cómo Distinguir una Fuga de la Evaporación</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Llena un cubo al nivel del agua de la piscina, colócalo en un escalón y marca ambos
              niveles. Después de 24 horas, si la piscina ha bajado más que el cubo, tienes una
              fuga: no solo evaporación. Las piscinas en Lanzarote suelen perder entre 3 y 5 mm
              al día por evaporación. Cualquier pérdida mayor merece ser investigada.
            </p>
            <p className="text-electric-blue text-sm font-semibold">
              ¿Pierdes más de 5 mm al día de forma constante? Llámanos.
            </p>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Cómo Localizamos las Fugas en Piscinas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {methods.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6 flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-action-red/10 border border-action-red/30 rounded flex items-center justify-center">
                    <Icon className="w-5 h-5 text-action-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Sources */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Focos Comunes de Fugas en Piscinas en Lanzarote</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Racores de boquillas de retorno",
              "Alojamientos de focos subacuáticos",
              "Racores del sumidero principal",
              "Caras de skimmer",
              "Juntas de gresite bajo el agua",
              "Grietas en el vaso (estructurales o superficiales)",
              "Tuberías en el cuarto de bombas",
              "Líneas de retorno enterradas",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-charcoal-light border border-border/30 rounded-lg p-3">
                <div className="w-1.5 h-1.5 bg-action-red rounded-full shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <ShieldCheck className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Sin Encontrar, Sin Pagar: También en Piscinas</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Nuestra garantía se aplica también a las investigaciones de fugas en piscinas.
            Si no encontramos ninguna fuga, no pagas nada.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Solicitar Inspección de Piscina
          </Link>
        </div>
      </section>
    </>
  );
}
