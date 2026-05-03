import Link from "next/link";
import type { Locale } from "@/lib/i18n/types";

interface LanguageSwitcherProps {
  locale: Locale;
  enHref?: string;
  esHref?: string;
}

export function LanguageSwitcher({
  locale,
  enHref = "/",
  esHref = "/es",
}: LanguageSwitcherProps) {
  const base = "px-2 py-1 text-xs font-semibold tracking-wider transition-colors";
  const active = "bg-action-red text-white";
  const inactive = "text-foreground/70 hover:text-action-red";

  return (
    <div className="flex items-center gap-1 border border-foreground/30 rounded overflow-hidden">
      <Link
        href={enHref}
        className={`${base} ${locale === "en" ? active : inactive}`}
        aria-label="Switch to English"
        hrefLang="en"
      >
        EN
      </Link>
      <Link
        href={esHref}
        className={`${base} ${locale === "es" ? active : inactive}`}
        aria-label="Cambiar a Español"
        hrefLang="es"
      >
        ES
      </Link>
    </div>
  );
}
