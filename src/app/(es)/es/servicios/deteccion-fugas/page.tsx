import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Thermometer, Mic2, FlaskConical, ShieldCheck, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Detección de Fugas Lanzarote: Cámara Térmica y Acústica",
  description:
    "Detección de fugas ocultas en Lanzarote con cámaras térmicas, sensores acústicos y gas trazador. Sin Encontrar, Sin Pagar. Servicio el mismo día.",
  path: "/es/servicios/deteccion-fugas",
  locale: "es",
  alternate: { en: "/services/leak-detection", es: "/es/servicios/deteccion-fugas" },
});

const schema = serviceSchema({
  name: "Detección de Fugas Lanzarote",
  description: "Detección profesional de fugas ocultas con imagen térmica, sensores acústicos y gas trazador.",
  url: `${SITE.baseUrl}/es/servicios/deteccion-fugas`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Detección de Fugas", url: `${SITE.baseUrl}/es/servicios/deteccion-fugas` },
]);

const methods = [
  {
    icon: Thermometer,
    title: "Imagen Térmica",
    desc: "Las cámaras infrarrojas detectan diferencias de temperatura causadas por el movimiento del agua detrás de paredes, bajo suelos y en techos: sin necesidad de perforar.",
  },
  {
    icon: Mic2,
    title: "Detección Acústica",
    desc: "Micrófonos sensibles captan la firma de sonido característica del agua que escapa bajo presión a través de uniones y fallos en las tuberías.",
  },
  {
    icon: FlaskConical,
    title: "Gas Trazador",
    desc: "Se introduce una mezcla inofensiva de hidrógeno y nitrógeno en la tubería. Los detectores de gas localizan el punto de escape con precisión de centímetros: funciona a través del hormigón.",
  },
  {
    icon: Droplets,
    title: "Mapeo de Humedad",
    desc: "Los higrómetros digitales crean un mapa detallado de la distribución de la humedad, distinguiendo entre fugas activas y humedad histórica residual.",
  },
];

export default function DeteccionFugasPage() {
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
                Encuéntrala Antes de Que Empeore
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Detección de Fugas{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Localizamos fugas de agua ocultas en propiedades residenciales y comerciales en toda
                Lanzarote usando tecnología avanzada de imagen térmica, sensores acústicos y gas trazador
               : sin excavaciones ni daños innecesarios.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  Sin Encontrar, Sin Pagar
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Servicio el Mismo Día
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Toda la Isla
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/thermal-imaging.png"
          alt="Detección de fugas Lanzarote cámara térmica"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-3">Cómo Localizamos Tu Fuga</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Combinamos múltiples tecnologías no invasivas para triangular la fuente de la fuga
            antes de comenzar cualquier trabajo. En la mayoría de los casos, localizamos la fuga
            sin tocar ni un solo azulejo ni pared.
          </p>
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

      {/* Process */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Qué Ocurre el Día de la Visita</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Inspección Inicial", desc: "Evaluamos la propiedad, revisamos los contadores y determinamos las zonas con mayor probabilidad de fuga." },
              { step: "02", title: "Escáner Tecnológico", desc: "Se aplican imagen térmica y sensores acústicos en toda la zona sospechosa." },
              { step: "03", title: "Localización Exacta", desc: "Marcamos el punto exacto de la fuga, normalmente con una precisión de 30 cm, en el plano de tu propiedad." },
              { step: "04", title: "Informe Escrito", desc: "Recibirás un informe completo con fotos, localización de la fuga y recomendaciones de reparación." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <p className="text-action-red font-bold text-3xl mb-3">{step}</p>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-action-red/30 rounded-xl p-8 max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-action-red mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Garantía Sin Encontrar, Sin Pagar</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si no podemos localizar ninguna fuga en tu propiedad, no pagas nada. Sin cargo por
              desplazamiento, sin tarifa de inspección: coste cero para ti. Confiamos plenamente
              en nuestra tecnología y en nuestros ingenieros.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-electric-blue" />
                Urgencias 24/7
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-electric-blue" />
                Más de 20 Años de Experiencia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Sospechas de una Fuga Oculta?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            No esperes a que los daños aumenten. Contáctanos para una evaluación inicial gratuita
           : te diremos honestamente si creemos que merece la pena investigar.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Solicitar Inspección de Fugas
          </Link>
        </div>
      </section>
    </>
  );
}
