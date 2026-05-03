import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Rotura de Tuberías y Renovación Sin Zanjas Lanzarote | Pipebusters",
  description:
    "Renovación de tuberías sin zanjas en Lanzarote — sustituye tuberías antiguas o dañadas sin excavaciones extensas. Completado en un día en la mayoría de los casos. Evaluación gratuita.",
  path: "/es/servicios/rotura-tuberias",
  locale: "es",
  alternate: { en: "/services/pipe-bursting", es: "/es/servicios/rotura-tuberias" },
});

const schema = serviceSchema({
  name: "Rotura de Tuberías Lanzarote",
  description: "Renovación de tuberías sin zanjas — sustituye tuberías envejecidas sin excavaciones extensas.",
  url: `${SITE.baseUrl}/es/servicios/rotura-tuberias`,
  locale: "es",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Servicios", url: `${SITE.baseUrl}/es/servicios` },
  { name: "Rotura de Tuberías", url: `${SITE.baseUrl}/es/servicios/rotura-tuberias` },
]);

const benefits = [
  { title: "Excavación mínima", desc: "Solo se excavan pozos de acceso en cada extremo del tramo de tubería. Sin zanjas largas, sin daños en el jardín, pavimento ni estructuras." },
  { title: "Completado en un día", desc: "La mayoría de los trabajos domésticos de rotura de tuberías se completan en una sola jornada. Tienes agua antes de que nos vayamos." },
  { title: "Mayor diámetro de tubería", desc: "La tubería nueva es ligeramente mayor que la antigua, lo que mejora el caudal si la original estaba infradimensionada o incrustada." },
  { title: "Material duradero", desc: "La nueva tubería de HDPE o PE100 es muy resistente a la corrosión y las incrustaciones — vida útil superior a 50 años en las condiciones de Lanzarote." },
  { title: "Rentable", desc: "Significativamente más económico que la excavación abierta completa cuando se tienen en cuenta la restitución de azulejos, jardinería y hormigón." },
  { title: "Con garantía", desc: "Todos los trabajos sin zanjas incluyen nuestra garantía estándar de mano de obra de 2 años más la garantía de producto del fabricante de la tubería." },
];

export default function RoturaTuberiasPage() {
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
            Renovación de Tuberías Sin Zanjas
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Rotura de Tuberías{" "}
            <span className="text-action-red">Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            La rotura de tuberías es un método sin zanjas que sustituye tuberías enterradas
            antiguas, agrietadas o corroídas tirando de una tubería nueva a través de la existente
            — fracturando la antigua hacia afuera a su paso. Resultado: tubería nueva instalada
            con una fracción de la excavación.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
              Tecnología Sin Zanjas
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Completado en el Mismo Día
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Garantía 2 Años
            </span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Cómo Funciona la Rotura de Tuberías</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            {[
              { step: "01", title: "Puntos de Acceso", desc: "Se excavan pequeños pozos en cada extremo del tramo de tubería — normalmente de 60 cm × 60 cm. Esa es toda la excavación necesaria." },
              { step: "02", title: "Nueva Tubería Introducida", desc: "Un cabezal de rotura se fija a la nueva tubería de PE y se introduce a través de la antigua, fracturándola hacia el terreno circundante." },
              { step: "03", title: "Conexiones Realizadas", desc: "La nueva tubería se conecta en ambos extremos, se somete a prueba de presión y se restituyen los pozos de acceso. Trabajo completado." },
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

      {/* Benefits */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Ventajas Frente a la Excavación Abierta</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ title, desc }) => (
              <div key={title} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">{title}</p>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When It&apos;s Right */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/20 rounded-xl p-6 max-w-3xl">
            <AlertTriangle className="w-8 h-8 text-electric-blue mb-4" />
            <h3 className="font-bold mb-3">¿Cuándo es la Opción Adecuada?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La rotura de tuberías es ideal cuando la tubería existente ha fallado estructuralmente
              (agrietada, hundida o corroída en toda su longitud) y el tramo es razonablemente
              recto. Para tuberías con curvas cerradas o a muy poca profundidad, podemos
              recomendar en su lugar excavación abierta o una solución de revestimiento de
              tubería. Evaluaremos tu situación concreta y te recomendaremos el enfoque más
              rentable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Una Tubería Vieja Te Da Problemas?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contáctanos para una evaluación gratuita. Valoraremos si la rotura de tuberías es
            la solución adecuada y te daremos un presupuesto honesto.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Solicitar Evaluación Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
