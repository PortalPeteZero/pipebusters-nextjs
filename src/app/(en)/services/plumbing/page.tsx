import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, CheckCircle, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Plumber Lanzarote: Taps, Toilets, Showers, Drains | Pipebusters",
  description:
    "Qualified plumber in Lanzarote for homes, villas, and commercial properties. Taps, toilets, showers, blocked drains, full pipework. Same-day emergency response.",
  path: "/services/plumbing",
  locale: "en",
  alternate: { en: "/services/plumbing", es: "/es/servicios/fontaneria" },
});

const schema = serviceSchema({
  name: "Plumbing Lanzarote",
  description: "Full plumbing services for residential and commercial properties across Lanzarote.",
  url: `${SITE.baseUrl}/services/plumbing`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Plumbing", url: `${SITE.baseUrl}/services/plumbing` },
]);

const services = [
  { title: "Tap & Mixer Repair", desc: "Dripping taps, seized ceramic disc cartridges, mixer replacement, thermostatic bar installations." },
  { title: "Toilet & Cistern", desc: "Constantly running cisterns, failed fill valves, pan replacement, concealed cistern repair." },
  { title: "Shower Installation", desc: "Electric showers, power showers, thermostatic bar valves, enclosure fitting and sealing." },
  { title: "Blocked Drains", desc: "High-pressure jetting, drain rodding, and CCTV inspection for stubborn blockages and root intrusion." },
  { title: "Pipework", desc: "New pipework runs, rerouting, pipe lagging and insulation, isolation valve installation." },
  { title: "Hot Water Systems", desc: "Immersion heaters, hot water cylinders, unvented cylinder servicing, expansion vessel replacement." },
  { title: "Bathroom Refits", desc: "Full bathroom strip-out and refit including tiling, sanitary ware, and plumbing connections." },
  { title: "Commercial Plumbing", desc: "Commercial and holiday rental properties, communal water systems, and planned maintenance contracts." },
];

export default function PlumbingPage() {
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
            All Plumbing, All Properties
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Plumbing Services{" "}
            <span className="text-action-red">Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Qualified plumbers covering all residential and commercial plumbing work across the
            island. From a dripping tap to a full bathroom refit: we handle everything cleanly
            and efficiently.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
              24/7 Emergency
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              All Property Types
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Free Quote
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-3">What We Fix &amp; Install</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            We cover the full range of plumbing works: planned installations, routine repairs,
            and emergency callouts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-5">
                <Wrench className="w-5 h-5 text-action-red mb-3" />
                <h3 className="font-bold mb-1.5">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lanzarote Note */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Plumbing in Lanzarote: What&apos;s Different</h2>
            <div className="space-y-4">
              {[
                { point: "Hard water &amp; scale", detail: "Lanzarote&apos;s desalinated water is high in mineral content. This accelerates scale build-up in taps, showerheads, and appliances. We specify and install fittings designed for these conditions." },
                { point: "Holiday rental demands", detail: "Rental properties experience higher usage intensity than primary residences. We carry stock of common parts and can usually complete repairs on the day." },
                { point: "Local supply chain", detail: "We maintain local supplier relationships across the island, meaning faster turnaround on parts than contractors who need to order from the mainland." },
              ].map(({ point, detail }) => (
                <div key={point} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1" dangerouslySetInnerHTML={{ __html: point }} />
                    <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: detail }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-10 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-action-red/30 rounded-xl p-6 flex items-center gap-6">
            <Clock className="w-10 h-10 text-action-red shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">24/7 Emergency Plumbing</h3>
              <p className="text-muted-foreground text-sm">
                Burst pipes, water ingress, and severe blockages can&apos;t wait. We respond to genuine
                plumbing emergencies around the clock across the island.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Plumber in Lanzarote?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contact us for a free quote. We cover the whole island with same-day availability
            for most jobs.
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
