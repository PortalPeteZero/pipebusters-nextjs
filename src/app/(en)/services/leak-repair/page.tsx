import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Leak Repair Lanzarote: Minimal Disruption, 2-Year Warranty | Pipebusters",
  description:
    "Professional leak repair across Lanzarote. Pipe repair, joint sealing, epoxy lining. Minimal disruption, 2-year warranty on all work. Same-day repairs available",
  path: "/services/leak-repair",
  locale: "en",
  alternate: { en: "/services/leak-repair", es: "/es/servicios/reparacion-fugas" },
});

const schema = serviceSchema({
  name: "Leak Repair Lanzarote",
  description: "Professional leak repair with minimal disruption and 2-year warranty on all work.",
  url: `${SITE.baseUrl}/services/leak-repair`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Leak Repair", url: `${SITE.baseUrl}/services/leak-repair` },
]);

const repairTypes = [
  {
    title: "Pipe Section Replacement",
    desc: "Failed sections of copper, plastic, or steel pipework cut out and replaced with new material. Access limited to the minimum required.",
  },
  {
    title: "Joint Resealing",
    desc: "Compression fittings, push-fit joints, and solder connections that have failed resealed or replaced with higher-specification materials.",
  },
  {
    title: "Epoxy Pipe Lining",
    desc: "For pipes buried in walls or under floors, an epoxy resin lining can seal the pipe internally: zero excavation required in most cases.",
  },
  {
    title: "Patch Repair",
    desc: "Minor pinhole leaks and small crack repairs handled with long-lasting patch compounds. Cost-effective where full replacement is not required.",
  },
  {
    title: "Emergency Isolation",
    desc: "When an active burst needs stopping immediately, we isolate the affected section and restore supply to the rest of the property within hours.",
  },
  {
    title: "Reinstatement",
    desc: "Any floor tiles, screed, or plasterwork opened to access the repair are reinstated as closely as possible to the original finish.",
  },
];

export default function LeakRepairPage() {
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
                Fix It Right, First Time
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Leak Repair{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Once we&apos;ve located your leak, we repair it with the least disruption possible. We
                fix the root cause: not just the visible symptom: and back every repair with a
                2-year warranty.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  2-Year Warranty
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Same-Day Repairs
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Minimal Disruption
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/pipe-repair.png"
          alt="Pipe leak repair Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-3">Repair Methods We Use</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            The right repair method depends on the pipe material, location, and severity. We always
            recommend the least invasive option that provides a permanent fix.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map(({ title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <div className="w-2 h-2 bg-action-red rounded-full mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Image */}
      <section className="py-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="relative rounded-xl overflow-hidden max-w-5xl mx-auto h-64 md:h-96">
            <Image
              src="/images/before-after.png"
              alt="Before and after leak repair: water damage transformed to professional pipe installation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent" />
            <p className="absolute bottom-0 left-0 right-0 p-6 text-lg font-semibold text-foreground">
              From water damage to professional repairs: we fix the source, not just the symptoms
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-10">Why Our Repairs Last</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Root cause diagnosis first", desc: "We don&apos;t patch symptoms. We investigate why the failure happened before deciding how to repair it." },
                  { title: "Correct materials for Lanzarote", desc: "Hard water and mineral content affect pipe and fitting longevity. We specify materials proven to last in Canary Islands conditions." },
                  { title: "Pressure-tested before we leave", desc: "Every repair is pressure-tested to working pressure before the job is signed off. If it doesn&apos;t hold, we don&apos;t leave." },
                  { title: "2-year written warranty", desc: "All leak repairs carry a 2-year warranty against the same failure. If it comes back, we fix it at no charge." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/pipe-repair.png"
                alt="Professional pipe repair work by Pipebusters technician"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Banner */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/30 rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <ShieldCheck className="w-14 h-14 text-electric-blue shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2">2-Year Repair Warranty</h2>
              <p className="text-muted-foreground">
                Every repair we complete is covered for 2 years against the same failure point.
                This is a written guarantee: not a verbal promise. If the repair fails within
                the warranty period, we return and fix it at zero cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Your Leak Fixed?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            We handle detection and repair in a single visit wherever possible. Contact us today
            for a free quote: no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Book a Repair
          </Link>
        </div>
      </section>
    </>
  );
}
