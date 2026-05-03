import type { Metadata } from "next";
import Link from "next/link";
import { Users, Cpu, MapPin, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { getDict } from "@/lib/i18n/getDict";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros | Detección de Fugas y Fontanería Lanzarote",
  description:
    "Conoce a Pipebusters Lanzarote: especialistas en detección de fugas y fontanería con más de 20 años de experiencia. Garantía Sin Encontrar, Sin Pagar.",
  path: "/es/nosotros",
  locale: "es",
  alternate: { en: "/about", es: "/es/nosotros" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Inicio", url: `${SITE.baseUrl}/es` },
  { name: "Nosotros", url: `${SITE.baseUrl}/es/nosotros` },
]);

export default function NosotrosPage() {
  const d = getDict("es");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumb) }}
      />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3">
                {d["about.pretitle"]}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {d["about.title"]}{" "}
                <span className="text-action-red">{d["about.titleHighlight"]}</span>{" "}
                {d["about.titleEnd"]}
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">{d["about.description"]}</p>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/about-banner.webp"
          alt="Equipo Pipebusters Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="relative rounded-xl overflow-hidden max-w-5xl mx-auto h-64 md:h-96">
            <Image
              src="/images/villa-service.png"
              alt="Servicio de Pipebusters en una villa de Lanzarote"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent" />
            <p className="absolute bottom-0 left-0 right-0 p-6 text-lg font-semibold text-foreground">
              Dando servicio a propiedades residenciales y comerciales en toda Lanzarote
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">{d["about.storyTitle"]}</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">{d["about.storyText1"]}</p>
            <p className="text-muted-foreground leading-relaxed">{d["about.storyText2"]}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">{d["about.whyChooseUs"]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: d["about.qualifiedTeam"], desc: d["about.qualifiedTeamDesc"] },
              { icon: Cpu, title: d["about.advancedTech"], desc: d["about.advancedTechDesc"] },
              { icon: MapPin, title: d["about.localExperts"], desc: d["about.localExpertsDesc"] },
              { icon: ShieldCheck, title: d["about.guaranteed"], desc: d["about.guaranteedDesc"] },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <Icon className="w-8 h-8 text-action-red mb-4" />
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Servicio en Toda Lanzarote</h2>
              <p className="text-muted-foreground mb-6">
                Prestamos servicios en toda la isla, desde Arrecife hasta Playa Blanca.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Arrecife", "Playa Blanca", "Puerto del Carmen", "Costa Teguise", "Tías", "Yaiza", "Teguise", "San Bartolomé", "Haría", "Tinajo"].map((area) => (
                  <span key={area} className="px-4 py-2 bg-charcoal-light border border-border/30 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/apartment-work.png"
                alt="Equipo de Pipebusters trabajando en complejo de apartamentos en Lanzarote"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{d["cta.title"]}</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{d["cta.description"]}</p>
          <Link
            href="/es/contacto"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            {d["common.contactUs"]}
          </Link>
        </div>
      </section>
    </>
  );
}
