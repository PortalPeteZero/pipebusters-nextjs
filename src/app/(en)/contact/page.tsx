import type { Metadata } from "next";
import { Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { getDict } from "@/lib/i18n/getDict";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Pipebusters Lanzarote",
  description:
    "Contact Pipebusters Lanzarote for professional leak detection and plumbing services. Email us for a free quote. Island-wide service.",
  path: "/contact",
  locale: "en",
  alternate: { en: "/contact", es: "/es/contacto" },
});

const schema = serviceSchema({
  name: "Contact Pipebusters Lanzarote",
  description:
    "Contact page for Pipebusters Lanzarote — professional leak detection and plumbing services.",
  url: `${SITE.baseUrl}/contact`,
  locale: "en",
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Contact", url: `${SITE.baseUrl}/contact` },
]);

export default function ContactPage() {
  const d = getDict("en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema([schema, breadcrumb]) }}
      />

      {/* Header */}
      <section className="pt-24 pb-10 bg-charcoal-dark">
        <div className="container mx-auto">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3">
            {d["contact.pretitle"]}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {d["contact.title"]}{" "}
            <span className="text-action-red">{d["contact.titleHighlight"]}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            {d["contact.description"]}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-charcoal-light rounded-xl border border-border/30 p-8">
              <h2 className="text-xl font-bold mb-6">{d["contact.sendMessage"]}</h2>
              <ContactForm locale="en" />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-6">{d["contact.contactInfo"]}</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-charcoal-light border border-electric-blue/30 rounded flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">
                        {d["contact.emailLabel"]}
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-electric-blue hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-charcoal-light border border-electric-blue/30 rounded flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">
                        Operating Hours
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Monday &ndash; Friday: 8:00 &ndash; 18:00
                        <br />
                        Saturday: 9:00 &ndash; 14:00
                        <br />
                        Emergency calls: 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-charcoal-light border border-electric-blue/30 rounded flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">
                        {d["contact.serviceAreaLabel"]}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {d["contact.serviceAreaDesc"]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-charcoal-light border border-border/30 rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-action-red" />
                  {d["contact.guarantees"]}
                </h3>
                <ul className="space-y-2">
                  {[
                    d["contact.noFindNoFeeDesc"],
                    d["contact.warrantyDesc"],
                    d["contact.experienceDesc"],
                    d["contact.fastResponse"],
                  ].map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-action-red mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
