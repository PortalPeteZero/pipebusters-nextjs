import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Calendar, CheckCircle, Wrench } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Plumbing Maintenance Plans Lanzarote | Pipebusters",
  description:
    "Annual preventive maintenance for Lanzarote properties. Leak scan, pressure test, boiler check, full inspection. Avoid expensive emergency repairs.",
  path: "/services/maintenance",
  locale: "en",
  alternate: { en: "/services/maintenance", es: "/es/servicios/mantenimiento" },
});

const schema = serviceSchema({
  name: "Plumbing Maintenance Lanzarote",
  description: "Annual preventive maintenance plans covering leak detection, pressure testing, and boiler servicing.",
  url: `${SITE.baseUrl}/services/maintenance`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Maintenance", url: `${SITE.baseUrl}/services/maintenance` },
]);

const included = [
  "Full property leak scan using thermal imaging",
  "Cold and hot water pressure test",
  "Boiler combustion analysis and safety check",
  "Tap and valve inspection: identify failing washers and cartridges before they fail",
  "WC and cistern check: identify running cisterns wasting water",
  "Visible pipework inspection for corrosion and joint deterioration",
  "Written condition report with photos",
  "Priority booking for any follow-up repairs",
];

export default function MaintenancePage() {
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
                Prevent Problems Before They Start
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Preventive Maintenance{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                An annual inspection catches small issues before they become expensive emergencies. Our
                maintenance plans are designed specifically for the conditions Lanzarote properties face:
                hard water, high UV, and seasonal occupancy patterns.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Annual Plans Available
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Ideal for Holiday Rentals
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Written Report Included
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/villa-service.png"
          alt="Plumbing maintenance Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">What the Annual Inspection Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-action-red shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Preventive */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why Preventive Maintenance Makes Sense in Lanzarote</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {[
              {
                icon: Wrench,
                title: "Hard Water",
                desc: "Scale build-up in pipes and appliances happens faster in Lanzarote than almost anywhere in Europe. Annual inspection catches it early.",
              },
              {
                icon: Calendar,
                title: "Vacant Periods",
                desc: "Properties left unoccupied for months are more likely to develop problems that go undetected. An inspection before and after summer reduces risk.",
              },
              {
                icon: ShieldCheck,
                title: "Insurance Requirements",
                desc: "Many insurers require evidence of annual maintenance inspections for overseas-owned properties. Our written reports satisfy this requirement.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <Icon className="w-7 h-7 text-action-red mb-4" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Set Up Your Annual Maintenance Plan</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contact us to discuss a maintenance plan tailored to your property. We&apos;ll send a
            reminder when your annual inspection is due.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Get a Maintenance Quote
          </Link>
        </div>
      </section>
    </>
  );
}
