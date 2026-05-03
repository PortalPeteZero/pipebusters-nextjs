import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Wrench, Settings } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pool Plumbing Lanzarote — Pumps, Filters & Pipework | Pipebusters",
  description:
    "Complete pool plumbing services in Lanzarote. Pump and filter installation, circulation system repair, pipework replacement. All pool types covered.",
  path: "/services/pool-plumbing",
  locale: "en",
  alternate: { en: "/services/pool-plumbing", es: "/es/servicios/fontaneria-piscina" },
});

const schema = serviceSchema({
  name: "Pool Plumbing Lanzarote",
  description: "Full pool plumbing services including pump and filter installation, pipework, and circulation system repair.",
  url: `${SITE.baseUrl}/services/pool-plumbing`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Pool Plumbing", url: `${SITE.baseUrl}/services/pool-plumbing` },
]);

const serviceItems = [
  { icon: Settings, title: "Pump Installation & Replacement", desc: "Supply and fit of variable-speed and single-speed pumps. Energy-efficient models with lower running costs." },
  { icon: Settings, title: "Filter System", desc: "Sand filter installation, glass media upgrade, cartridge filter fitting. Annual backwash and media replacement." },
  { icon: Wrench, title: "Circulation Pipework", desc: "New suction and return runs, manifold installation, pipe repair, isolation valve fitting." },
  { icon: Wrench, title: "Skimmer & Return Fittings", desc: "Skimmer replacement, eyeball fitting upgrade, jet adjustment and installation." },
  { icon: Waves, title: "Heating Systems", desc: "Heat pump installation and commissioning. Solar heating collector installation and pipe runs." },
  { icon: Settings, title: "Automation & Controls", desc: "Timer installation, automation panel wiring, variable-speed pump controller setup." },
];

export default function PoolPlumbingPage() {
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
            Pumps, Filters &amp; Pipework
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Pool Plumbing{" "}
            <span className="text-action-red">Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From pump and filter replacement to complete circulation system overhauls, we handle all
            pool plumbing works for private and commercial pools across the island.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              All Pool Types
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Energy-Efficient Equipment
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Free Quote
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Pool Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <Icon className="w-6 h-6 text-action-red mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Link */}
      <section className="py-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/20 rounded-xl p-6 max-w-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Waves className="w-10 h-10 text-electric-blue shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Suspect a Pool Leak?</h3>
              <p className="text-muted-foreground text-sm mb-3">
                If you think your pool is leaking rather than just needing a plumbing repair,
                our specialist pool leak detection service can locate the source first.
              </p>
              <Link href="/services/pool-leak-detection" className="text-electric-blue text-sm font-semibold hover:underline">
                Learn about pool leak detection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Pool Plumbing Work?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contact us for a free site assessment and quote. We cover all of Lanzarote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
