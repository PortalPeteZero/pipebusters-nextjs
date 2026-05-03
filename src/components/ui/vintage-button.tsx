import Link from "next/link";
import { ReactNode } from "react";

interface VintageButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 font-display text-sm tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 touch-manipulation active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 min-h-[48px] min-w-[120px]";

const VARIANTS = {
  primary:
    "bg-foreground text-background hover:bg-vintage-gold hover:text-background border-2 border-foreground hover:border-vintage-gold",
  outline:
    "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  );
}

export function VintageButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: VintageButtonProps) {
  const combined = `${BASE_STYLES} ${VARIANTS[variant]} ${className}`;

  if (href) {
    if (isExternalHref(href)) {
      const isHttp = href.startsWith("http://") || href.startsWith("https://");
      return (
        <a
          href={href}
          className={combined}
          {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined} disabled={disabled}>
      {children}
    </button>
  );
}
