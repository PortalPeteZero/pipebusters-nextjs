import type { Metadata } from "next";
import Link from "next/link";
import { Thermometer, CheckCircle, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Instalación y Mantenimiento de Calderas Lanzarote | Pipebusters",
  description:
    "Instalación y mantenimiento de calderas en Lanzarote. Técnicos cualificados. Modelos eficientes suministrados e instalados. Presupuesto gratuito.",
  path: "/es/servicios/calderas",
  locale: "es",
  alternate: { en: "/services/boiler-services", es: "/es/servicios/calderas" },
});

const schema = serviceSchema({
  name: "Calderas Lanzarote",
  description: "Sustitución, instalación y mantenimiento anual de calderas por técnicos cualificados en Lanzarote.",
  url: `${SITE.baseUrl}/es/servicios/calderas`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Calderas", url: `${SITE.baseUrl}/es/servicios/calderas` },
]);

const serviceItems = [
  {
    title: "Sustitución de Caldera",
    desc: "Suministro e instalación completa de nuevas calderas de condensación. Retiramos la unidad antigua, instalamos el equipo nuevo y lo ponemos en marcha antes de marcharnos.",
  },
  {
    title: "Nueva Instalación",
    desc: "Instalaciones en obra nueva y conversiones. Red de gas, salida de humos y mandos diseñados e instalados según la normativa vigente.",
  },
  {
    title: "Revisión Anual",
    desc: "Revisión anual completa con análisis de combustión, inspección del intercambiador de calor, prueba de integridad del conducto de humos y verificación de seguridad.",
  },
  {
    title: "Reparación de Urgencia",
    desc: "Reparación rápida en caso de avería. Llevamos piezas de repuesto para las marcas más instaladas en la isla.",
  },
  {
    title: "Inspección de Gas",
    desc: "Certificado de Seguridad del Gas para propietarios y administradores de fincas. Obligatorio anualmente para propiedades en alquiler.",
  },
  {
    title: "Controles y Termostatos",
    desc: "Sustitución de programadores, instalación de termostatos inteligentes, sustitución de válvulas de zona y actualización de controles del sistema.",
  },
];

export default function CalderasPage() {
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
                Técnicos Cualificados en Gas
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Calderas{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Sustitución, instalación y mantenimiento anual de calderas en toda Lanzarote.
                Suministramos e instalamos calderas de condensación de alta eficiencia y realizamos
                inspecciones de seguridad del gas para propietarios y administradores de fincas.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  Técnicos Cualificados
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Todas las Marcas Principales
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Certificados para Propietarios
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/emergency-plumbing.png"
          alt="Calderas Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Nuestros Servicios de Calderas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map(({ title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <Thermometer className="w-6 h-6 text-action-red mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lanzarote-Specific */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Calderas en Lanzarote: Lo Que Debes Saber</h2>
            <div className="space-y-5">
              {[
                { point: "Daños por cal y agua dura", detail: "El agua desalinizada de Lanzarote tiene un alto contenido mineral que acelera la acumulación de cal en los intercambiadores de calor. El mantenimiento anual es especialmente importante aquí para evitar averías prematuras." },
                { point: "Obligación legal del propietario", detail: "Todas las propiedades en alquiler con aparatos de gas requieren un certificado anual de seguridad del gas. Lo emitimos nosotros y conservamos los registros para tu expediente de cumplimiento." },
                { point: "Ahorro en eficiencia energética", detail: "Sustituir una caldera de más de 10 años por un modelo de condensación moderno de clase A puede reducir significativamente el consumo de gas: especialmente relevante en una isla donde el gas es costoso." },
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

      {/* Warranty */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/30 rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 max-w-3xl">
            <ShieldCheck className="w-14 h-14 text-electric-blue shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2">Garantía de Instalación</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Todas las instalaciones nuevas de calderas incluyen la garantía del fabricante
                más nuestra garantía de mano de obra de 2 años que cubre la instalación y la red
                de tuberías asociada. También registramos tu caldera con el fabricante en tu nombre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas Cambiar o Revisar tu Caldera?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contáctanos para una visita de evaluación gratuita y presupuesto. Te recomendaremos
            la caldera más adecuada para tu propiedad y tus necesidades.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Solicitar Presupuesto de Caldera
          </Link>
        </div>
      </section>
    </>
  );
}
