import type { Metadata } from "next";
import Link from "next/link";
import { Thermometer, CheckCircle, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Boiler Installation & Servicing Lanzarote | Pipebusters",
  description:
    "Boiler replacement, installation, and annual maintenance in Lanzarote. Gas Safe registered engineers, energy-efficient models supplied and fitted. Free quote.",
  path: "/services/boiler-services",
  locale: "en",
  alternate: { en: "/services/boiler-services", es: "/es/servicios/calderas" },
});

const schema = serviceSchema({
  name: "Boiler Services Lanzarote",
  description: "Boiler replacement, installation, and annual servicing by qualified engineers in Lanzarote.",
  url: `${SITE.baseUrl}/services/boiler-services`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Boiler Services", url: `${SITE.baseUrl}/services/boiler-services` },
]);

const serviceItems = [
  {
    title: "Boiler Replacement",
    desc: "Full supply-and-fit of new condensing boilers. We remove the old unit, install the replacement, and commission it fully before leaving.",
  },
  {
    title: "New Boiler Installation",
    desc: "New-build and conversion installations. Gas pipework, fluing, and controls designed and fitted to current standards.",
  },
  {
    title: "Annual Service",
    desc: "Comprehensive annual service including combustion analysis, heat exchanger inspection, flue integrity test, and safety check.",
  },
  {
    title: "Emergency Boiler Repair",
    desc: "Rapid-response repair for breakdowns. We carry common parts for the most widely installed brands on the island.",
  },
  {
    title: "Gas Safety Inspection",
    desc: "Gas Safety Certificate for landlords and property managers. Legally required annually for rental properties.",
  },
  {
    title: "Controls & Thermostats",
    desc: "Programmer replacement, smart thermostat installation, zone valve replacement, and system controls upgrades.",
  },
];

export default function BoilerServicesPage() {
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
            Gas Safe Registered Engineers
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Boiler Services{" "}
            <span className="text-action-red">Lanzarote</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Boiler replacement, installation, and annual maintenance across Lanzarote. We supply
            and fit energy-efficient condensing boilers and carry out Gas Safety inspections for
            landlords and property managers.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
              Gas Safe Registered
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              All Major Brands
            </span>
            <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
              Landlord Certificates
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">Our Boiler Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map(({ title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <Thermometer className="w-6 h-6 text-action-red mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lanzarote-Specific */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Boilers in Lanzarote — What You Should Know</h2>
            <div className="space-y-5">
              {[
                { point: "Scale and hard water damage", detail: "Desalinated water in Lanzarote has a high mineral content that accelerates scale build-up in heat exchangers. Annual servicing is particularly important here to prevent premature failure." },
                { point: "Landlord legal requirement", detail: "All rental properties with gas appliances require an annual Gas Safety Certificate. We issue the certificate and maintain records for your compliance file." },
                { point: "Energy efficiency savings", detail: "Replacing a boiler over 10 years old with a modern A-rated condensing model can reduce gas consumption significantly — relevant on an island where gas is expensive." },
              ].map(({ point, detail }) => (
                <div key={point} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">{point}</p>
                    <p className="text-muted-foreground text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-electric-blue/30 rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 max-w-3xl">
            <ShieldCheck className="w-14 h-14 text-electric-blue shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2">Installation Warranty</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All new boiler installations carry a manufacturer&apos;s warranty plus our own 2-year
                workmanship guarantee covering the installation labour and associated pipework.
                We also register your boiler with the manufacturer on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Boiler Replaced or Serviced?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contact us for a free survey and quote. We&apos;ll recommend the right boiler for your
            property and usage requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Get a Boiler Quote
          </Link>
        </div>
      </section>
    </>
  );
}
