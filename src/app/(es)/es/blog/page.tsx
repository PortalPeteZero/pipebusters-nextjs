import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog de Fontanería y Detección de Fugas Lanzarote",
  description:
    "Consejos de expertos sobre detección de fugas, mantenimiento de fontanería y gestión del agua para propiedades en Lanzarote. Más de 20 años de experiencia.",
  path: "/es/blog",
  locale: "es",
  alternate: { en: "/blog", es: "/es/blog" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Blog", url: `${SITE.baseUrl}/es/blog` },
]);

const posts = [
  {
    slug: "signs-you-have-a-hidden-water-leak",
    title: "5 Señales de Que Tienes una Fuga de Agua Oculta en Tu Propiedad en Lanzarote",
    excerpt:
      "Facturas de agua elevadas, manchas de humedad y el sonido de agua corriendo cuando los grifos están cerrados: aprende las señales de alarma que indican una fuga oculta.",
    date: "2024-03-15",
    readTime: "5 min",
    category: "Detección de Fugas",
  },
  {
    slug: "thermal-imaging-leak-detection-explained",
    title: "Cómo la Imagen Térmica Localiza Fugas Sin Romper Tus Paredes",
    excerpt:
      "Las cámaras térmicas detectan diferencias de temperatura causadas por el movimiento del agua. Explicamos cómo funciona la tecnología y por qué ahorra tiempo y dinero.",
    date: "2024-02-28",
    readTime: "6 min",
    category: "Tecnología",
  },
  {
    slug: "pool-losing-water-evaporation-vs-leak",
    title: "¿Tu Piscina Pierde Agua por Evaporación o por una Fuga?",
    excerpt:
      "El calor de Lanzarote hace que las piscinas se evaporen más rápido que en cualquier otro lugar de Europa. Aquí te explicamos cómo hacer la prueba del cubo y cuándo llamar a un especialista.",
    date: "2024-01-20",
    readTime: "4 min",
    category: "Fugas en Piscinas",
  },
  {
    slug: "lanzarote-water-pressure-problems",
    title: "Baja Presión de Agua en Lanzarote: Causas y Soluciones",
    excerpt:
      "La cal, las tuberías corroídas y el fallo del regulador de presión son las tres causas más comunes de baja presión en viviendas de Lanzarote. Así se diagnostica y soluciona cada una.",
    date: "2023-12-10",
    readTime: "5 min",
    category: "Fontanería",
  },
  {
    slug: "boiler-maintenance-lanzarote-guide",
    title: "Mantenimiento de Calderas en Lanzarote: Lo Que Necesitas Saber",
    excerpt:
      "El agua dura y el alto contenido mineral afectan a las calderas de forma diferente aquí que en la península. Consejos de mantenimiento anual específicos para Lanzarote.",
    date: "2023-11-05",
    readTime: "7 min",
    category: "Calderas",
  },
  {
    slug: "no-find-no-fee-what-it-means",
    title: "¿Qué Significa Exactamente 'Sin Encontrar, Sin Pagar'?",
    excerpt:
      "Nuestra garantía explicada en términos sencillos: qué cubre, qué ocurre cuando sí encontramos la fuga, y cómo te protege de gastos innecesarios.",
    date: "2023-10-18",
    readTime: "3 min",
    category: "Sobre Nosotros",
  },
];

export default function BlogEsPage() {
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
            Consejos de Expertos
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Blog de Detección de Fugas{" "}
            <span className="text-action-red">Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Guías prácticas sobre detección de fugas, fontanería y gestión del agua para propietarios
            en Lanzarote: escritas por ingenieros con más de 20 años en la isla.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-charcoal-light border border-border/30 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-electric-blue bg-electric-blue/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-lg mb-3 leading-snug">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/20">
                    <time className="text-muted-foreground text-xs">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-electric-blue text-sm font-semibold flex items-center gap-1">
                      Leer <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <BookOpen className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes un Problema Específico?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            ¿No encuentras la respuesta en nuestro blog? Contáctanos directamente: con gusto
            ofrecemos asesoramiento gratuito antes de que hagas la reserva.
          </p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Consultar a un Experto
          </Link>
        </div>
      </section>
    </>
  );
}
