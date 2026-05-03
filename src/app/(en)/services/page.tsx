import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Wrench, Waves, Thermometer, ShieldCheck, AlertTriangle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Plumbing & Leak Detection Services Lanzarote | Pipebusters",
  description:
    "Full range of leak detection and plumbing services across Lanzarote. Thermal imaging, acoustic sensors, pool leaks, boilers, pipe bursting and more. No Find, No Fee.",
  path: "/services",
  locale: "en",
  alternate: { en: "/services", es: "/es/servicios" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
]);

const services = [
  {
    icon: Droplets,
    title: "Leak Detection",
    desc: "Advanced thermal imaging, acoustic sensors, and tracer gas technology to locate hidden leaks without unnecessary excavation.",
    href: "/services/leak-detection",
    tag: "No Find, No Fee",
  },
  {
    icon: Wrench,
    title: "Leak Repair",
    desc: "Expert repairs with minimal disruption to your property. We fix the root cause, not just the symptoms, and back every repair with a 2-year warranty.",
    href: "/services/leak-repair",
    tag: "2-Year Warranty",
  },
  {
    icon: Waves,
    title: "Pool Leak Detection",
    desc: "Specialist non-invasive detection for swimming pools and spa systems using pressure testing, dye injection, and acoustic equipment.",
    href: "/services/pool-leak-detection",
    tag: "Non-Invasive",
  },
  {
    icon: Waves,
    title: "Pool Plumbing",
    desc: "Complete pool plumbing services including pump and filter installation, circulation system repair, and pipework replacement.",
    href: "/services/pool-plumbing",
    tag: "Full Service",
  },
  {
    icon: Thermometer,
    title: "Boiler Services",
    desc: "Boiler replacement, installation, and annual maintenance by Gas Safe registered engineers. Energy-efficient models supplied and fitted.",
    href: "/services/boiler-services",
    tag: "Gas Safe Registered",
  },
  {
    icon: Wrench,
    title: "Plumbing",
    desc: "Complete plumbing services for homes, villas, and commercial properties. Taps, toilets, showers, blocked drains, and full pipework.",
    href: "/services/plumbing",
    tag: "All Properties",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    desc: "Annual inspection plans to catch problems before they become expensive emergencies. Pressure testing, leak scans, and boiler checks included.",
    href: "/services/maintenance",
    tag: "Annual Plans",
  },
  {
    icon: AlertTriangle,
    title: "Pipe Bursting",
    desc: "Trenchless pipe renewal: replace aging or damaged pipework without extensive excavation. Single-day completion in most cases.",
    href: "/services/pipe-bursting",
    tag: "No-Dig Technology",
  },
];

export default function ServicesPage() {
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
                What We Do
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Professional{" "}
                <span className="text-action-red">Leak Detection</span>{" "}
                &amp; Plumbing Services in Lanzarote
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                From hidden leak tracing to full plumbing installations, Pipebusters covers every aspect of
                water management for homes, villas, and commercial properties across Lanzarote.
              </p>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/services-graphic.webp"
          alt="Leak detection and plumbing services Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, href, tag }) => (
              <Link
                key={href}
                href={href}
                className="bg-charcoal-light border border-border/30 rounded-xl p-6 hover:border-electric-blue/50 transition-colors group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-8 h-8 text-action-red group-hover:text-electric-blue transition-colors" />
                  <span className="text-xs font-semibold text-electric-blue bg-electric-blue/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                </div>
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{desc}</p>
                <span className="inline-block mt-4 text-electric-blue text-sm font-semibold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pipebusters */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Why Choose <span className="text-action-red">Pipebusters</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "No Find, No Fee", sub: "Zero risk to you" },
              { label: "2-Year Warranty", sub: "On all repairs" },
              { label: "20+ Years", sub: "Combined experience" },
              { label: "24/7", sub: "Emergency response" },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-charcoal-light border border-border/30 rounded-xl p-5 text-center">
                <p className="text-action-red font-bold text-xl mb-1">{label}</p>
                <p className="text-muted-foreground text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Fix Your Problem?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contact us today for a free quote. Island-wide service across Lanzarote with same-day
            response available.
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
