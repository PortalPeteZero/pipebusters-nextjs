import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Calendar, CheckCircle, Wrench } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Planes de Mantenimiento de Fontanería Lanzarote | Pipebusters",
  description:
    "Mantenimiento preventivo anual en Lanzarote. Escáner de fugas, prueba de presión, revisión de caldera e inspección completa. Evita emergencias costosas.",
  path: "/es/servicios/mantenimiento",
  locale: "es",
  alternate: { en: "/services/maintenance", es: "/es/servicios/mantenimiento" },
});

const schema = serviceSchema({
  name: "Mantenimiento de Fontanería Lanzarote",
  description: "Planes de mantenimiento preventivo anual con detección de fugas, pruebas de presión y revisión de caldera.",
  url: `${SITE.baseUrl}/es/servicios/mantenimiento`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Mantenimiento", url: `${SITE.baseUrl}/es/servicios/mantenimiento` },
]);

const included = [
  "Escáner completo de fugas mediante imagen térmica",
  "Prueba de presión de agua fría y caliente",
  "Análisis de combustión de la caldera y verificación de seguridad",
  "Inspección de grifos y válvulas: detecta lavadoras y cartuchos defectuosos antes de que fallen",
  "Revisión de inodoros y cisternas: identifica cisternas que corren y desperdician agua",
  "Inspección de la red de tuberías visible para detectar corrosión y deterioro de juntas",
  "Informe escrito de estado con fotografías",
  "Reserva prioritaria para cualquier reparación de seguimiento",
];

export default function MantenimientoPage() {
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
                Prevén los Problemas Antes de que Lleguen
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Mantenimiento Preventivo{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Una inspección anual detecta pequeños problemas antes de que se conviertan en
                emergencias costosas. Nuestros planes de mantenimiento están diseñados específicamente
                para las condiciones que afrontan las propiedades en Lanzarote: agua dura, alto nivel
                de UV y ocupación estacional.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Planes Anuales Disponibles
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Ideal para Alquileres Vacacionales
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Informe Escrito Incluido
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/villa-service.png"
          alt="Mantenimiento fontanería Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Qué Incluye la Inspección Anual</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Preventive */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Por Qué el Mantenimiento Preventivo Tiene Sentido en Lanzarote</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {[
              {
                icon: Wrench,
                title: "Agua Dura",
                desc: "La acumulación de cal en tuberías y electrodomésticos se produce más rápido en Lanzarote que en casi cualquier lugar de Europa. Una inspección anual la detecta a tiempo.",
              },
              {
                icon: Calendar,
                title: "Períodos de Vacío",
                desc: "Las propiedades que permanecen desocupadas durante meses tienen más probabilidad de desarrollar problemas que pasan desapercibidos. Una inspección antes y después del verano reduce el riesgo.",
              },
              {
                icon: ShieldCheck,
                title: "Requisitos del Seguro",
                desc: "Muchas aseguradoras exigen evidencia de inspecciones de mantenimiento anuales para propiedades en el extranjero. Nuestros informes escritos satisfacen este requisito.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <Icon className="w-7 h-7 text-action-red mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Establece Tu Plan de Mantenimiento Anual</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contáctanos para hablar de un plan de mantenimiento adaptado a tu propiedad. Te
            avisaremos cuando llegue el momento de la inspección anual.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Solicitar Presupuesto de Mantenimiento
          </Link>
        </div>
      </section>
    </>
  );
}
