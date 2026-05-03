import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Thermometer, Mic2, FlaskConical, ShieldCheck, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Leak Detection Lanzarote: Thermal Imaging & Acoustic Sensors | Pipebusters",
  description:
    "Professional hidden leak detection in Lanzarote using thermal cameras, acoustic sensors, and tracer gas. No Find, No Fee guarantee. Same-day service available.",
  path: "/services/leak-detection",
  locale: "en",
  alternate: { en: "/services/leak-detection", es: "/es/servicios/deteccion-fugas" },
});

const schema = serviceSchema({
  name: "Leak Detection Lanzarote",
  description: "Professional hidden leak detection using thermal imaging, acoustic sensors, and tracer gas technology.",
  url: `${SITE.baseUrl}/services/leak-detection`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Services", url: `${SITE.baseUrl}/services` },
  { name: "Leak Detection", url: `${SITE.baseUrl}/services/leak-detection` },
]);

const methods = [
  {
    icon: Thermometer,
    title: "Thermal Imaging",
    desc: "Infrared cameras detect temperature differences caused by water movement behind walls, under floors, and in ceilings: no drilling required.",
  },
  {
    icon: Mic2,
    title: "Acoustic Detection",
    desc: "Sensitive microphones listen for the distinctive sound signature of water escaping under pressure through pipe joints and failures.",
  },
  {
    icon: FlaskConical,
    title: "Tracer Gas Testing",
    desc: "A harmless hydrogen/nitrogen mix is introduced to the pipe. Gas detectors pinpoint the escape point to within centimetres: works through concrete and screed.",
  },
  {
    icon: Droplets,
    title: "Moisture Mapping",
    desc: "Digital moisture meters build a detailed picture of damp spread, helping distinguish active leaks from residual historic moisture.",
  },
];

export default function LeakDetectionPage() {
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
                Find It Before It Gets Worse
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Leak Detection{" "}
                <span className="text-action-red">Lanzarote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                We locate hidden water leaks in residential and commercial properties across Lanzarote
                using advanced thermal imaging, acoustic sensors, and tracer gas technology: with no
                unnecessary excavation or damage.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-action-red/10 border border-action-red/30 text-action-red text-sm font-semibold px-3 py-1.5 rounded">
                  No Find, No Fee
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Same-Day Service Available
                </span>
                <span className="bg-charcoal-light border border-border/30 text-foreground text-sm px-3 py-1.5 rounded">
                  Island-Wide Coverage
                </span>
              </div>
            </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
        <Image
          src="/images/thermal-imaging.png"
          alt="Thermal imaging leak detection Lanzarote"
          fill
          className="object-cover"
          priority
        />
      </div>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-3">How We Find Your Leak</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            We combine multiple non-invasive technologies to triangulate the leak source before any
            work begins. In most cases, we locate the leak without touching a single tile or wall.
          </p>
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

      {/* What to Expect */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10">What Happens on the Day</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Initial Survey", desc: "We assess the property, review meter readings, and identify likely leak zones." },
              { step: "02", title: "Technology Scan", desc: "Thermal imaging and acoustic sensors are used across the suspect area." },
              { step: "03", title: "Pinpoint Location", desc: "We mark the exact leak point, usually to within 30cm, on your floor plan." },
              { step: "04", title: "Written Report", desc: "You receive a full written report with photos, leak location, and repair recommendations." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <p className="text-action-red font-bold text-3xl mb-3">{step}</p>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="bg-charcoal-light border border-action-red/30 rounded-xl p-8 max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-action-red mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">No Find, No Fee Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed">
              If we cannot locate a leak in your property, you pay nothing. No call-out charge, no
              survey fee: zero cost to you. We back our technology and our engineers completely.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-electric-blue" />
                24/7 Emergency Response
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-electric-blue" />
                20+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Suspect a Hidden Leak?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Don&apos;t wait for the damage to get worse. Contact us for a free initial assessment:
            we&apos;ll tell you honestly whether we think there&apos;s a leak worth investigating.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Book a Leak Survey
          </Link>
        </div>
      </section>
    </>
  );
}
