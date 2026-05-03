import type { Metadata } from "next";
import Link from "next/link";
import { Waves, FlaskConical, Search, Gauge, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Pool Leak Detection Lanzarote: No Find, No Fee | Pipebusters",
  description:
    "Specialist swimming pool leak detection in Lanzarote. Pressure testing, dye injection, acoustic sensors. Find pool leaks without draining. No Find, No Fee.",
  path: "/services/pool-leak-detection",
  locale: "en",
  alternate: { en: "/services/pool-leak-detection", es: "/es/servicios/deteccion-fugas-piscina" },
});

const schema = serviceSchema({
  name: "Pool Leak Detection Lanzarote",
  description: "Specialist swimming pool and spa leak detection using non-invasive technology.",
  url: `${SITE.baseUrl}/services/pool-leak-detection`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Pool Leak Detection", url: `${SITE.baseUrl}/services/pool-leak-detection` },
]);

const methods = [
  {
    icon: Gauge,
    title: "Pressure Testing",
    desc: "Each pipe circuit is isolated and pressure-tested to identify which line is losing water. Narrows the search to the specific circuit before any digging.",
  },
  {
    icon: FlaskConical,
    title: "Dye Testing",
    desc: "Fluorescent dye is introduced near suspected cracks, fittings, and return jets. Any active leak draws the dye in: visible in real time.",
  },
  {
    icon: Search,
    title: "Underwater Camera",
    desc: "Specialist underwater cameras inspect the shell, fittings, lights, and return inlets without draining the pool.",
  },
  {
    icon: Waves,
    title: "Acoustic Detection",
    desc: "For leaks in buried pipe runs, acoustic sensors detect the pressure-loss sound signature through the surrounding soil and structure.",
  },
];

export default function PoolLeakDetectionPage() {
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
                Specialist Pool &amp; Spa Leak Detection
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Pool Leak Detection{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Is your pool losing more water than evaporation can explain? We locate swimming pool
                and spa leaks across Lanzarote using non-invasive technology: without draining your
                pool in most cases.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  No Find, No Fee
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  No Full Drainage Required
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  All Pool Types
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/pool-plumbing-2.jpeg"
          alt="Pool leak detection Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Bucket Test Explainer */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/20 rounded-xl p-6 max-w-3xl">
            <h2 className="text-lg font-bold mb-3">How to Tell if It&apos;s a Leak or Evaporation</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Fill a bucket to pool water level, place it on a pool step, and mark both levels.
              After 24 hours, if the pool has dropped more than the bucket, you have a leak,
              not just evaporation. Lanzarote pools typically lose 3–5mm per day to evaporation.
              Anything more warrants investigation.
            </p>
            <p className="text-electric-blue text-sm font-semibold">
              Consistently losing more than 5mm/day? Call us.
            </p>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">How We Find Pool Leaks</h2>
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

      {/* Common Sources */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Common Pool Leak Sources in Lanzarote</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Return jet fittings",
              "Pool light housings",
              "Main drain fittings",
              "Skimmer faceplates",
              "Underwater grout lines",
              "Shell cracks (structural or cosmetic)",
              "Pump room pipework",
              "Underground return lines",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-charcoal-light border border-border/30 rounded-lg p-3">
                <div className="w-1.5 h-1.5 bg-action-red rounded-full shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <ShieldCheck className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">No Find, No Fee: On Pool Leaks Too</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Our guarantee applies to pool leak investigations as well as domestic leaks. If we
            can&apos;t find a leak, you pay nothing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Book a Pool Survey
          </Link>
        </div>
      </section>
    </>
  );
}
