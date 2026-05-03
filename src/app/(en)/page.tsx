import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { localBusinessSchema, webSiteSchema, serializeSchema } from "@/lib/seo/schema";
import { getDict } from "@/lib/i18n/getDict";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Leak Detection & Plumbing Lanzarote | Pipebusters",
  description:
    "Professional leak detection and plumbing services across Lanzarote. Advanced thermal imaging, acoustic sensors, pool leak detection. No Find, No Fee guarantee.",
  path: "/",
  locale: "en",
  alternate: { en: "/", es: "/es" },
});

const services = [
  { image: "/images/thermal-imaging.png", title: "Leak Detection", desc: "Advanced thermal imaging and acoustic technology to locate hidden leaks without damage.", href: "/services/leak-detection", tag: "No Find, No Fee" },
  { image: "/images/emergency-plumbing.png", title: "Leak Repair", desc: "Fix the root cause, not just the symptom. 2-year written warranty on every repair.", href: "/services/leak-repair" },
  { image: "/images/shower-installation.png", title: "Plumbing", desc: "Full-scope plumbing works for homes, villas, and commercial properties across Lanzarote.", href: "/services/plumbing" },
  { image: "/images/shower-installation.png", title: "Boiler Services", desc: "Supply, installation, and annual servicing of gas and electric boilers. Gas Safety Certificates for landlords.", href: "/services/boiler-services" },
  { image: "/images/pool-plumbing-1.jpeg", title: "Pool Leak Detection", desc: "Pressure testing, dye testing, and underwater camera inspection. No Find, No Fee on pools too.", href: "/services/pool-leak-detection", tag: "No Find, No Fee" },
  { image: "/images/pool-plumbing-2.jpeg", title: "Pool Plumbing", desc: "Pump and filter installation, circulation pipework, heating systems and automation.", href: "/services/pool-plumbing" },
  { image: "/images/pipe-repair.png", title: "Pipe Bursting", desc: "Replace old underground pipes without extensive excavation. Single-day completion.", href: "/services/pipe-bursting" },
];

const testimonials = [
  { name: "Maria G.", location: "Playa Blanca", text: "Pipebusters found our hidden leak in less than an hour using their thermal cameras. The repair was done the same day with minimal disruption. Absolutely professional service!", service: "Leak Detection" },
  { name: "James T.", location: "Puerto del Carmen", text: "Our pool was losing water for months. They located the pipe fracture under the deck without any digging. Saved us thousands in potential damage. Highly recommend!", service: "Pool Leak Detection" },
  { name: "Carmen R.", location: "Costa Teguise", text: "Emergency call on a Sunday and they were here within the hour. Fixed our burst pipe and even helped clean up. The 2-year warranty gives real peace of mind.", service: "Plumbing Emergency" },
];

export default function HomePage() {
  const d = getDict("en");
  const schemas = [localBusinessSchema("en"), webSiteSchema("en")];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(schemas) }}
      />

      {/* Hero */}
      <section className="relative py-8 lg:py-10 flex items-center justify-center hero-gradient overflow-hidden min-h-[85vh]">
        {/* Water-splash background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/water-splash.png"
            alt=""
            fill
            className="object-cover opacity-30 brightness-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Glow elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Mascot logo */}
            <div className="mb-4 animate-fade-in">
              <Image
                src="/images/logo-transparent.png"
                alt="Pipebusters Lanzarote: Leak Detection and Plumbing Experts"
                width={384}
                height={384}
                className="w-64 md:w-80 lg:w-96 mx-auto logo-glow"
                priority
              />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 animate-fade-in">
              {d["hero.tagline"]}{" "}
              <span className="text-action-red">{d["hero.taglineHighlight"]}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in">
              {d["hero.description"]}
            </p>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in">
              {d["hero.phonePrompt"]}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fade-in">
              <Link
                href="/contact"
                className="bg-action-red hover:bg-action-red-hover text-white text-lg px-8 py-4 font-bold rounded glow-red transition-colors flex items-center gap-2"
              >
                {d["hero.getQuote"]}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border border-electric-blue text-electric-blue hover:bg-electric-blue/10 text-lg px-8 py-4 font-semibold rounded transition-colors"
              >
                {d["hero.ourServices"]}
              </Link>
            </div>

            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
              {d["hero.peaceOfMind"]}
            </p>

            {/* 20+ Years badge */}
            <div className="flex justify-center animate-fade-in">
              <div className="flex items-center gap-3 px-5 py-4 bg-card/60 rounded-xl backdrop-blur border border-white/10">
                <Clock className="h-7 w-7 text-yellow-400" />
                <div className="text-left">
                  <div className="font-bold text-foreground">{d["hero.experience"]}</div>
                  <div className="text-sm text-white/70">{d["hero.combinedExperience"]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services */}
      <section className="py-12 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-action-red font-medium uppercase tracking-widest text-sm mb-4 block">
              {d["services.pretitle"]}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {d["services.title"]}{" "}
              <span className="text-action-red">{d["services.titleHighlight"]}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {d["services.description"]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ image, title, desc, href, tag }) => (
              <Link
                key={href}
                href={href}
                className="bg-card border border-border/30 rounded-xl overflow-hidden card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  {tag && (
                    <span className="absolute top-3 right-3 bg-action-red text-white text-xs font-bold px-2 py-1 rounded">
                      {tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-action-red transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="text-electric-blue text-sm font-semibold flex items-center gap-1">
                    {d["services.learnMore"]} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border border-action-red text-action-red px-8 py-3 rounded font-semibold hover:bg-action-red hover:text-white transition-colors"
            >
              {d["services.viewAll"]}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-14 bg-charcoal-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: d["hero.noFindNoFee"], label: d["hero.riskFree"] },
              { value: d["hero.warranty"], label: d["hero.onAllRepairs"] },
              { value: d["hero.experience"], label: d["hero.combinedExperience"] },
              { value: "24/7", label: "Emergency cover" },
            ].map(({ value, label }) => (
              <div key={value} className="flex flex-col items-center">
                <ShieldCheck className="w-8 h-8 text-action-red mb-3" />
                <p className="text-action-red font-extrabold text-2xl">{value}</p>
                <p className="text-muted-foreground text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            {d["testimonials.pretitle"]}
          </p>
          <h2 className="text-3xl font-bold text-center mb-3">{d["testimonials.title"]}</h2>
          <p className="text-muted-foreground text-center mb-12">{d["testimonials.description"]}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border/30 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-action-red fill-action-red" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location} · {t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-action-red">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">
            {d["cta.pretitle"]}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {d["cta.title"]}{" "}
            <span className="underline decoration-white/40">{d["cta.titleHighlight"]}</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{d["cta.description"]}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold text-base hover:bg-white/90 transition-colors"
          >
            {d["cta.button"]}
          </Link>
          <p className="text-white/70 text-sm mt-4">
            {d["cta.emailUs"]}{" "}
            <a href={`mailto:${SITE.email}`} className="text-white underline">
              {SITE.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
