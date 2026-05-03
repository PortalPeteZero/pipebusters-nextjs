import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Casos de Éxito en Detección de Fugas Lanzarote | Pipebusters",
  description:
    "Ejemplos reales de detección de fugas y fontanería en Lanzarote. Pipebusters localiza fugas ocultas, repara piscinas y resuelve urgencias.",
  path: "/es/casos-de-exito",
  locale: "es",
  alternate: { en: "/case-studies", es: "/es/casos-de-exito" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Casos de Éxito", url: `${SITE.baseUrl}/es/casos-de-exito` },
]);

const caseStudies = [
  {
    title: "Fuga Oculta en Losa,Villa en Playa Blanca",
    location: "Playa Blanca",
    service: "Detección de Fugas",
    problem:
      "Una villa de cuatro dormitorios había visto duplicarse su factura del agua en tres meses. Aparecieron manchas de humedad visibles en el suelo del salón, pero no se encontraron tuberías accesibles.",
    solution:
      "El escáner de imagen térmica identificó una anomalía de temperatura bajo la losa de hormigón. Los sensores acústicos localizaron el punto exacto del fallo con una precisión de 30 cm. La excavación se limitó a un único acceso de 40 cm × 40 cm.",
    outcome: "Tubería reparada, losa reinstalada y factura del agua normalizada en el siguiente ciclo de facturación.",
    outcomes: ["Fuga localizada en 2 horas", "Un único punto de acceso", "Reparación completada el mismo día", "Garantía de 2 años emitida"],
  },
  {
    title: "Piscina con Pérdida de 15 cm al Día,Puerto del Carmen",
    location: "Puerto del Carmen",
    service: "Detección de Fugas en Piscinas",
    problem:
      "La piscina de 12 metros de una villa de alquiler vacacional perdía aproximadamente 15 cm de agua al día. El propietario ya había sustituido la bomba y el filtro, pero la pérdida continuaba.",
    solution:
      "Las pruebas de presión aislaron el ramal de retorno como fuente de la pérdida. Las pruebas de tinte confirmaron una fractura en el racor de la pared. Una cámara submarina localizó la grieta exacta sin necesidad de vaciar la piscina.",
    outcome: "Fractura reparada, piscina rellenada al nivel normal y pérdida de agua completamente eliminada.",
    outcomes: ["Piscina operativa durante todo el proceso", "Reparación sin vaciado total", "Ramal de retorno sellado", "Cero pérdida de agua tras la reparación"],
  },
  {
    title: "Tubería Rota de Urgencia,Bloque de Apartamentos, Costa Teguise",
    location: "Costa Teguise",
    service: "Fontanería de Emergencia",
    problem:
      "Una tubería de suministro que abastecía seis apartamentos reventó a las 11 de la noche de un sábado. El agua discurría por los falsos techos y amenazaba las instalaciones eléctricas.",
    solution:
      "La llamada de emergencia llegó a obra en 55 minutos. La llave de corte estaba bloqueada y requirió corte antes de poder detener el flujo. La reparación provisional restableció el suministro a cinco de los seis apartamentos durante la noche.",
    outcome: "Reparación permanente completada a la mañana siguiente. Tiempo de interrupción total para los residentes: 9 horas.",
    outcomes: ["En obra en 55 minutos", "Flujo detenido en 2 horas", "Residentes con suministro esa misma noche", "Reparación definitiva a la mañana siguiente"],
  },
  {
    title: "Fuga Oculta en Terraza,Local Comercial, Arrecife",
    location: "Arrecife",
    service: "Detección de Fugas",
    problem:
      "Un restaurante sufría humedades recurrentes en el techo de la planta baja a pesar de varios intentos de reparación por otros contratistas. El origen había sido atribuido erróneamente a la impermeabilización de la cubierta.",
    solution:
      "Se introdujo gas trazador en el circuito de agua fría. Los equipos de detección de gas siguieron el trayecto a través de la estructura, revelando una fuga puntual en un tramo horizontal enterrado en la losa de hormigón sobre el comedor.",
    outcome: "Fuga reparada en el lugar correcto por primera vez. Sin recidivas tras 12 meses de seguimiento.",
    outcomes: ["Origen correctamente identificado (primera vez)", "Gas trazador,sin investigación destructiva", "Reparación en un tramo de 20 cm", "Seguimiento a 12 meses: cero recidivas"],
  },
];

export default function CasosDeExitoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumb) }}
      />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Trabajo Real, Resultados Reales
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Casos de Éxito en{" "}
            <span className="text-action-red">Detección de Fugas Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Una selección de trabajos completados en toda Lanzarote. Cada caso muestra el problema,
            la tecnología utilizada y el resultado conseguido.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto space-y-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-charcoal-light border border-border/30 rounded-xl p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-electric-blue bg-electric-blue/10 px-2 py-1 rounded">
                  {cs.service}
                </span>
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {cs.location}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-6">{cs.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-electric-blue text-xs font-semibold uppercase tracking-wider mb-2">Problema</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-electric-blue text-xs font-semibold uppercase tracking-wider mb-2">Solución</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <p className="text-electric-blue text-xs font-semibold uppercase tracking-wider mb-2">Resultados</p>
                  <ul className="space-y-1.5">
                    {cs.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-action-red shrink-0 mt-0.5" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes un Problema Similar?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Ya lo hemos visto antes. Contáctanos para una evaluación gratuita,sin compromiso y
            sin cargo por desplazamiento si no encontramos ninguna fuga.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Obtener una Evaluación Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
