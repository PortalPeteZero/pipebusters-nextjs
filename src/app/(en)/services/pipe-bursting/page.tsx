import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Pipe Bursting & Trenchless Pipe Replacement Lanzarote | Pipebusters",
  description:
    "Trenchless pipe renewal in Lanzarote: replace old or damaged pipework without extensive excavation. Single-day completion in most cases. Free survey.",
  path: "/services/pipe-bursting",
  locale: "en",
  alternate: { en: "/services/pipe-bursting", es: "/es/servicios/rotura-tuberias" },
});

const schema = serviceSchema({
  name: "Pipe Bursting Lanzarote",
  description: "Trenchless pipe renewal: replace aging pipework without extensive excavation.",
  url: `${SITE.baseUrl}/services/pipe-bursting`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Pipe Bursting", url: `${SITE.baseUrl}/services/pipe-bursting` },
]);

const benefits = [
  { title: "Minimal excavation", desc: "Access pits at each end of the pipe run only. No long trenches, no disruption to landscaping, tiling, or structures." },
  { title: "Single-day completion", desc: "Most domestic pipe bursting jobs are completed in a single working day. You have water back before we leave." },
  { title: "Larger pipe diameter", desc: "The new pipe is slightly larger than the old one, improving flow rates if the original was undersized or scaled." },
  { title: "Durable material", desc: "New HDPE or PE100 pipe is highly resistant to corrosion and scale, with a lifespan of 50+ years in Lanzarote conditions." },
  { title: "Cost-effective", desc: "Significantly cheaper than full open-cut excavation when you factor in reinstatement of tiles, planting, and concrete." },
  { title: "Guaranteed", desc: "All trenchless work carries our standard 2-year workmanship warranty plus the manufacturer&apos;s pipe product warranty." },
];

export default function PipeBurstingPage() {
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
                No-Dig Pipe Renewal
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Pipe Bursting{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Pipe bursting is a trenchless method that replaces old, cracked, or corroded underground
                pipework by pulling new pipe through the existing one, fracturing the old pipe outward
                as it goes. Result: new pipe in place with a fraction of the excavation.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  No-Dig Technology
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Same-Day Completion
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  2-Year Warranty
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/apartment-work.png"
          alt="Pipe bursting trenchless Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">How Pipe Bursting Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            {[
              { step: "01", title: "Access Points", desc: "Small pits are dug at each end of the pipe run, typically 60cm x 60cm. That&apos;s all the excavation needed." },
              { step: "02", title: "New Pipe Pulled Through", desc: "A bursting head is attached to the new PE pipe and pulled through the old pipe, fracturing it outward into the surrounding soil." },
              { step: "03", title: "Connections Made", desc: "The new pipe is connected at both ends, pressure-tested, and the access pits reinstated. Job complete." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <p className="text-action-red font-bold text-3xl mb-3">{step}</p>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-10">Benefits Over Open-Cut Excavation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{title}</p>
                      <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/pipe-repair.png"
                alt="Trenchless pipe bursting work by Pipebusters technician"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When It&apos;s Right */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/20 rounded-xl p-6 max-w-3xl">
            <AlertTriangle className="w-8 h-8 text-electric-blue mb-4" />
            <h3 className="font-bold mb-3">When Is Pipe Bursting the Right Choice?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pipe bursting is ideal when the existing pipe is structurally failed (cracked, collapsed,
              or corroded throughout its length) and the pipe run is reasonably straight. For pipes
              with tight bends or very shallow burial depth, we may recommend open-cut or a pipe
              lining solution instead. We&apos;ll assess your specific situation and recommend the
              most cost-effective approach.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Old Pipe Giving You Problems?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contact us for a free survey. We&apos;ll assess whether pipe bursting is the right
            solution and give you an honest quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Get a Free Survey
          </Link>
        </div>
      </section>
    </>
  );
}
