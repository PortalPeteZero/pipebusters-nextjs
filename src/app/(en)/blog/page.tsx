import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Leak Detection & Plumbing Blog Lanzarote | Pipebusters",
  description:
    "Expert advice on leak detection, plumbing maintenance, and water management for Lanzarote properties. Tips from 20+ years of experience.",
  path: "/blog",
  locale: "en",
  alternate: { en: "/blog", es: "/es/blog" },
});

const breadcrumb = breadcrumbListSchema([
  { name: "Home", url: SITE.baseUrl },
  { name: "Blog", url: `${SITE.baseUrl}/blog` },
]);

const posts = [
  {
    slug: "signs-you-have-a-hidden-water-leak",
    title: "5 Signs You Have a Hidden Water Leak in Your Lanzarote Property",
    excerpt:
      "High water bills, damp patches, and the sound of running water when taps are off — learn the warning signs that point to a hidden leak before it causes serious damage.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Leak Detection",
  },
  {
    slug: "thermal-imaging-leak-detection-explained",
    title: "How Thermal Imaging Finds Leaks Without Breaking Your Walls",
    excerpt:
      "Thermal cameras detect temperature differences caused by water movement. We explain how the technology works and why it saves time and money compared to traditional methods.",
    date: "2024-02-28",
    readTime: "6 min read",
    category: "Technology",
  },
  {
    slug: "pool-losing-water-evaporation-vs-leak",
    title: "Is Your Pool Losing Water to Evaporation or a Leak?",
    excerpt:
      "Lanzarote's heat means pools evaporate faster than anywhere in mainland Europe. Here's how to do the bucket test and when to call a specialist.",
    date: "2024-01-20",
    readTime: "4 min read",
    category: "Pool Leaks",
  },
  {
    slug: "lanzarote-water-pressure-problems",
    title: "Low Water Pressure in Lanzarote: Causes and Solutions",
    excerpt:
      "Limestone scale, corroded pipes, and pressure regulator failure are the three most common causes of low pressure in Lanzarote homes. Here's how each is diagnosed and fixed.",
    date: "2023-12-10",
    readTime: "5 min read",
    category: "Plumbing",
  },
  {
    slug: "boiler-maintenance-lanzarote-guide",
    title: "Boiler Maintenance in Lanzarote: What You Need to Know",
    excerpt:
      "Hard water and high mineral content affect boilers differently here than on the mainland. Annual servicing advice specific to Lanzarote conditions.",
    date: "2023-11-05",
    readTime: "7 min read",
    category: "Boilers",
  },
  {
    slug: "no-find-no-fee-what-it-means",
    title: "What Does 'No Find, No Fee' Actually Mean for You?",
    excerpt:
      "Our guarantee explained in plain language — what it covers, what happens when we do find the leak, and how it protects you from wasted callout charges.",
    date: "2023-10-18",
    readTime: "3 min read",
    category: "About Us",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumb) }}
      />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal-dark">
        <div className="container mx-auto">
          <p className="text-electric-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Expert Advice
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            The Pipebusters{" "}
            <span className="text-action-red">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Practical guides on leak detection, plumbing, and water management for property owners
            in Lanzarote — written by engineers with 20+ years on the island.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-14 bg-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-charcoal-light border border-border/30 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-electric-blue bg-electric-blue/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-lg mb-3 leading-snug">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/20">
                    <time className="text-muted-foreground text-xs">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-electric-blue text-sm font-semibold flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-action-red">
        <div className="container mx-auto text-center">
          <BookOpen className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Have a Specific Problem?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Can&apos;t find the answer in our blog? Contact us directly — we&apos;re happy to give
            free advice before you book.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-action-red px-10 py-4 rounded font-bold hover:bg-white/90 transition-colors"
          >
            Ask an Expert
          </Link>
        </div>
      </section>
    </>
  );
}
