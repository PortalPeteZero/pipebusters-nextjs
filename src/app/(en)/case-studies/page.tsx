import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Leak Detection Case Studies Lanzarote | Pipebusters",
  description:
    "Real examples of leak detection and plumbing work in Lanzarote. Hidden leaks found, pools repaired, plumbing emergencies solved. No Find, No Fee.",
  path: "/case-studies",
  locale: "en",
  alternate: { en: "/case-studies", es: "/es/casos-de-exito" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Case Studies", url: `${SITE.baseUrl}/case-studies` },
]);

const caseStudies = [
  {
    title: "Hidden Slab Leak,Villa in Playa Blanca",
    location: "Playa Blanca",
    service: "Leak Detection",
    image: "/images/before-after.png",
    imageAlt: "Before and after leak repair in a Lanzarote villa",
    problem:
      "A four-bedroom villa had seen its water bill double over three months. Visible damp patches appeared on the living room floor, but no obvious pipe runs were accessible.",
    solution:
      "Thermal imaging scan identified a temperature anomaly under the concrete slab. Acoustic sensors pinpointed the exact failure point to within 30cm. Excavation was limited to one 40cm × 40cm access hole.",
    outcome: "Pipe repaired, slab reinstated, and the water bill returned to normal within one billing cycle.",
    outcomes: ["Leak located in 2 hours", "Single access hole only", "Same-day repair completed", "2-year warranty issued"],
  },
  {
    title: "Swimming Pool Losing 15cm Per Day,Puerto del Carmen",
    location: "Puerto del Carmen",
    service: "Pool Leak Detection",
    image: "/images/pool-plumbing-2.jpeg",
    imageAlt: "Pool plumbing repair in Puerto del Carmen, Lanzarote",
    problem:
      "A holiday rental villa's 12-metre pool was losing approximately 15cm of water per day. The owner had already replaced the pump and filter, but the loss continued.",
    solution:
      "Pressure testing isolated the return line as the source of loss. Dye testing confirmed a fracture at the wall fitting. An underwater camera located the precise crack without draining the pool.",
    outcome: "Fracture repaired, pool refilled to normal level, and loss stopped completely.",
    outcomes: ["Pool stayed filled throughout", "Repair without full drainage", "Return line resealed", "Zero water loss after repair"],
  },
  {
    title: "Emergency Burst Pipe,Apartment Block, Costa Teguise",
    location: "Costa Teguise",
    service: "Emergency Plumbing",
    image: "/images/apartment-work.png",
    imageAlt: "Emergency plumbing work at apartment complex in Costa Teguise",
    problem:
      "A supply pipe serving six apartments burst at 11pm on a Saturday. Water was flowing through ceiling voids and threatening electrical fittings.",
    solution:
      "Emergency callout reached site within 55 minutes. The isolation valve was frozen and required cutting before the flow could be stopped. Temporary repair completed to restore supply to five of six apartments overnight.",
    outcome: "Permanent repair completed the following morning. Total downtime for residents: 9 hours.",
    outcomes: ["On-site within 55 minutes", "Flow stopped within 2 hours", "Residents back online same night", "Permanent fix next morning"],
  },
  {
    title: "Concealed Roof Terrace Leak,Commercial Property, Arrecife",
    location: "Arrecife",
    service: "Leak Detection",
    image: "/images/restaurant-plumbing.png",
    imageAlt: "Commercial plumbing leak detection in Arrecife, Lanzarote",
    problem:
      "A restaurant was experiencing recurring damp on a ground-floor ceiling despite multiple previous repair attempts by other contractors. The source had been incorrectly attributed to roof waterproofing.",
    solution:
      "Tracer gas was introduced to the cold-water circuit. Gas detection equipment tracked the path through the structure, revealing a pinhole leak in a horizontal run buried in the concrete deck above the dining room.",
    outcome: "Leak repaired in the correct location for the first time. No recurrence after 12 months.",
    outcomes: ["Source correctly identified (first time)", "Tracer gas,no destructive investigation", "Repair targeted to 20cm section", "12-month follow-up: zero recurrence"],
  },
];

export default function CaseStudiesPage() {
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
                Real Work, Real Results
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Case Studies Lanzarote:{" "}
                <span className="text-action-red">Leaks Found &amp; Fixed</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                A selection of completed jobs across Lanzarote. Each case shows the problem, the
                technology used, and the outcome achieved.
              </p>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/before-after.png"
          alt="Leak detection case studies Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto space-y-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-charcoal-light border border-border/30 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative h-48 lg:h-full min-h-[180px]">
                  <Image
                    src={cs.image}
                    alt={cs.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal-light/80 via-charcoal-light/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 lg:inset-0 p-4 flex flex-col justify-end lg:justify-end">
                    <span className="inline-block text-xs font-semibold text-electric-blue bg-electric-blue/10 px-2 py-1 rounded w-fit mb-2">
                      {cs.service}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {cs.location}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-xl font-bold mb-6">{cs.title}</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <p className="text-electric-blue text-xs font-semibold uppercase tracking-wider mb-2">Problem</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-electric-blue text-xs font-semibold uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="text-electric-blue text-xs font-semibold uppercase tracking-wider mb-2">Outcomes</p>
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Similar Problem?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            We&apos;ve seen it before. Contact us for a free assessment,no obligation, no call-out
            charge if we don&apos;t find a leak.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Get a Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
