import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SITE } from "@/lib/site";
import { breadcrumbListSchema, serializeSchema } from "@/lib/seo/schema";

export interface PageBreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: PageBreadcrumbItem[];
  /** Path of the current page (used as the fallback URL for items without href) */
  currentPath: string;
  /** Home link href. Defaults to "/" for English; pass "/es" for Spanish. */
  homeHref?: string;
  /** Accessible label for the home icon. Defaults to "Home". */
  homeLabel?: string;
}

/**
 * Server-rendered breadcrumb with inline BreadcrumbList JSON-LD.
 * Items form the trail after Home. The last item is usually the current
 * page and has no href (rendered as text).
 */
export function PageBreadcrumb({
  items,
  currentPath,
  homeHref = "/",
  homeLabel = "Home",
}: PageBreadcrumbProps) {
  const schema = breadcrumbListSchema([
    { name: homeLabel, url: `${SITE.baseUrl}${homeHref}` },
    ...items.map((item) => ({
      name: item.label,
      url: item.href
        ? `${SITE.baseUrl}${item.href}`
        : `${SITE.baseUrl}${currentPath}`,
    })),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="bg-card/30 border-b border-border/20"
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 py-3 text-sm">
            <li>
              <Link
                href={homeHref}
                className="text-muted-foreground hover:text-vintage-gold transition-colors flex items-center gap-1"
                aria-label={homeLabel}
              >
                <Home className="w-4 h-4" />
                <span className="sr-only">{homeLabel}</span>
              </Link>
            </li>

            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-vintage-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground/80">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
