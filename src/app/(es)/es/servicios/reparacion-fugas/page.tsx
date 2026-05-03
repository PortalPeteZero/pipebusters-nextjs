import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Reparación de Fugas Lanzarote: Mínima Interrupción, Garantía 2 Años | Pipebusters",
  description:
    "Reparación profesional de fugas en Lanzarote. Reparación de tuberías, sellado de uniones, revestimiento epoxi. Mínima interrupción, garantía de 2 años.",
  path: "/es/servicios/reparacion-fugas",
  locale: "es",
  alternate: { en: "/services/leak-repair", es: "/es/servicios/reparacion-fugas" },
});

const schema = serviceSchema({
  name: "Reparación de Fugas Lanzarote",
  description: "Reparación profesional de fugas con mínima interrupción y garantía de 2 años.",
  url: `${SITE.baseUrl}/es/servicios/reparacion-fugas`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Reparación de Fugas", url: `${SITE.baseUrl}/es/servicios/reparacion-fugas` },
]);

const repairTypes = [
  {
    title: "Sustitución de Tramo de Tubería",
    desc: "Los tramos fallidos de tubería de cobre, plástico o acero se cortan y sustituyen con material nuevo. El acceso se limita al mínimo necesario.",
  },
  {
    title: "Sellado de Uniones",
    desc: "Las uniones de compresión, conexiones de empuje y uniones soldadas que han fallado se resellan o sustituyen por materiales de mayor especificación.",
  },
  {
    title: "Revestimiento Interior con Epoxi",
    desc: "Para tuberías enterradas en paredes o bajo suelos, un revestimiento de resina epoxi puede sellar la tubería desde el interior: sin excavación en la mayoría de los casos.",
  },
  {
    title: "Reparación de Parche",
    desc: "Fugas puntuales menores y pequeñas grietas resueltas con compuestos de parche duraderos. Solución económica cuando no se requiere sustitución completa.",
  },
  {
    title: "Aislamiento de Emergencia",
    desc: "Cuando hay que detener una rotura activa de inmediato, aislamos el tramo afectado y restauramos el suministro al resto de la propiedad en pocas horas.",
  },
  {
    title: "Restitución",
    desc: "Los azulejos, el mortero o el enlucido abiertos para acceder a la reparación se restituyen lo más fielmente posible al acabado original.",
  },
];

export default function ReparacionFugasPage() {
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
                Solucionado a la Primera
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Reparación de Fugas{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Una vez localizada tu fuga, la reparamos con la menor interrupción posible. Tratamos
                la causa raíz: no solo el síntoma visible: y respaldamos cada reparación con una
                garantía de 2 años.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  Garantía 2 Años
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Reparaciones el Mismo Día
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Mínima Interrupción
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/pipe-repair.png"
          alt="Reparación de fugas Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-3">Métodos de Reparación</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            El método de reparación adecuado depende del material de la tubería, su ubicación
            y la gravedad del fallo. Siempre recomendamos la opción menos invasiva que
            proporcione una solución permanente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map(({ title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <div className="w-2 h-2 bg-action-red rounded-full mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Image */}
      <section className="py-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="relative rounded-xl overflow-hidden max-w-5xl mx-auto h-64 md:h-96">
            <Image
              src="/images/before-after.png"
              alt="Antes y después de reparación de fugas: daños por agua a instalación profesional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent" />
            <p className="absolute bottom-0 left-0 right-0 p-6 text-lg font-semibold text-foreground">
              De daños por agua a reparaciones profesionales: solucionamos la causa, no solo los síntomas
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-10">Por Qué Nuestras Reparaciones Duran</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Primero, diagnóstico de la causa raíz", desc: "No parcheamos síntomas. Investigamos por qué se produjo el fallo antes de decidir cómo repararlo." },
                  { title: "Materiales adecuados para Lanzarote", desc: "El agua dura y el contenido mineral afectan a la durabilidad de las tuberías. Especificamos materiales probados en las condiciones de las Islas Canarias." },
                  { title: "Prueba de presión antes de marcharnos", desc: "Cada reparación se somete a prueba de presión en condiciones de trabajo antes de cerrar el trabajo. Si no aguanta, no nos vamos." },
                  { title: "Garantía escrita de 2 años", desc: "Todas las reparaciones de fugas incluyen una garantía de 2 años contra el mismo fallo. Si vuelve, lo arreglamos sin coste." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/pipe-repair.png"
                alt="Trabajo profesional de reparación de tuberías por técnico de Pipebusters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Banner */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/30 rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <ShieldCheck className="w-14 h-14 text-electric-blue shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2">Garantía de Reparación de 2 Años</h2>
              <p className="text-muted-foreground">
                Todas las reparaciones que realizamos están cubiertas durante 2 años contra el
                mismo punto de fallo. Esta es una garantía por escrito: no una promesa verbal.
                Si la reparación falla dentro del período de garantía, volvemos y la arreglamos
                sin coste alguno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Reparar Tu Fuga?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Gestionamos la detección y la reparación en una sola visita siempre que es posible.
            Contáctanos hoy para un presupuesto gratuito: sin compromiso.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Solicitar Reparación
          </Link>
        </div>
      </section>
    </>
  );
}
