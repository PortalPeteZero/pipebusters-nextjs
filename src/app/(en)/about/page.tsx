import type { Metadata } from "next";
import Link from "next/link";
import { Users, Cpu, MapPin, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { getDict } from "@/lib/i18n/getDict";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Leak Detection & Plumbing Lanzarote | Pipebusters",
  description:
    "Learn about Pipebusters Lanzarote: professional leak detection and plumbing specialists with 20+ years combined experience. No Find, No Fee guarantee.",
  path: "/about",
  locale: "en",
  alternate: { en: "/about", es: "/es/nosotros" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "About", url: `${SITE.baseUrl}/about` },
]);

export default function AboutPage() {
  const d = getDict("en");

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
            {d["about.pretitle"]}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {d["about.title"]}{" "}
            <span className="text-action-red">{d["about.titleHighlight"]}</span>{" "}
            {d["about.titleEnd"]}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">{d["about.description"]}</p>
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

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{d["cta.title"]}</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{d["cta.description"]}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            {d["common.contactUs"]}
          </Link>
        </div>
      </section>
    </>
  );
}
