import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, CheckCircle, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Fontanero Lanzarote: Grifos, Inodoros, Duchas, Desatascos | Pipebusters",
  description:
    "Fontanero cualificado en Lanzarote para viviendas, villas y locales comerciales. Grifos, inodoros, duchas, desatascos, toda la red de tuberías. Urgencias 24/7.",
  path: "/es/servicios/fontaneria",
  locale: "es",
  alternate: { en: "/services/plumbing", es: "/es/servicios/fontaneria" },
});

const schema = serviceSchema({
  name: "Fontanería Lanzarote",
  description: "Servicios completos de fontanería para propiedades residenciales y comerciales en toda Lanzarote.",
  url: `${SITE.baseUrl}/es/servicios/fontaneria`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Fontanería", url: `${SITE.baseUrl}/es/servicios/fontaneria` },
]);

const services = [
  { title: "Reparación de Grifos y Mezcladores", desc: "Grifos que gotean, cartuchos de cerámica agarrotados, sustitución de griferías, instalación de barras termoestáticas." },
  { title: "Inodoros y Cisternas", desc: "Cisternas que no dejan de correr, válvulas de llenado defectuosas, sustitución del inodoro, reparación de cisternas empotradas." },
  { title: "Instalación de Duchas", desc: "Duchas eléctricas, duchas de potencia, llaves termoestáticas, instalación de mamparas y sellado." },
  { title: "Desatascos", desc: "Desatasco con agua a presión, varillas de fontanero e inspección con cámara para obstrucciones persistentes e intrusión de raíces." },
  { title: "Red de Tuberías", desc: "Nuevas instalaciones, rerouting de tuberías, lagging y aislamiento, instalación de llaves de corte." },
  { title: "Sistemas de Agua Caliente", desc: "Termos eléctricos, acumuladores, servicio de calentadores a presión, sustitución de vaso de expansión." },
  { title: "Reformas de Baño", desc: "Vaciado completo y reforma de baño incluyendo alicatado, sanitarios y conexiones de fontanería." },
  { title: "Fontanería Comercial", desc: "Locales comerciales y alquileres vacacionales, sistemas de agua comunitaria y contratos de mantenimiento programado." },
];

export default function FontaneriaPage() {
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
            Toda la Fontanería, Todos los Inmuebles
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Servicios de Fontanería{" "}
            <span className="text-action-red">Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Fontaneros cualificados que cubren todos los trabajos de fontanería residencial y
            comercial en toda la isla. Desde un grifo que gotea hasta una reforma completa de
            baño: lo hacemos todo de forma limpia y eficiente.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
              Urgencias 24/7
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Todos los Tipos de Inmueble
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Presupuesto Gratuito
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-3">Qué Reparamos e Instalamos</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Cubrimos toda la gama de trabajos de fontanería: instalaciones planificadas,
            reparaciones rutinarias y urgencias.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-5">
                <Wrench className="w-5 h-5 text-action-red mb-3" />
                <h3 className="font-bold mb-1.5">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lanzarote Note */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Fontanería en Lanzarote: Qué es Diferente</h2>
            <div className="space-y-4">
              {[
                { point: "Agua dura e incrustaciones", detail: "El agua desalinizada de Lanzarote tiene un alto contenido mineral que acelera las incrustaciones en grifos, alcachofas de ducha y electrodomésticos. Especificamos e instalamos griferías diseñadas para estas condiciones." },
                { point: "Exigencias del alquiler vacacional", detail: "Las propiedades de alquiler soportan un uso más intensivo que las viviendas habituales. Mantenemos stock de recambios comunes y normalmente completamos las reparaciones en el día." },
                { point: "Cadena de suministro local", detail: "Mantenemos relaciones con proveedores locales en toda la isla, lo que nos permite plazos de entrega de piezas más rápidos que los contratistas que piden desde la península." },
              ].map(({ point, detail }) => (
                <div key={point} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">{point}</p>
                    <p className="text-muted-foreground text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-10 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-action-red/30 rounded-xl p-6 flex items-center gap-6">
            <Clock className="w-10 h-10 text-action-red shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Fontanería de Urgencia 24/7</h3>
              <p className="text-muted-foreground text-sm">
                Las roturas de tuberías, las entradas de agua y los atascos graves no pueden
                esperar. Atendemos urgencias reales de fontanería las 24 horas del día en toda la isla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas un Fontanero en Lanzarote?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contáctanos para un presupuesto gratuito. Cubrimos toda la isla con disponibilidad
            en el mismo día para la mayoría de los trabajos.
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
