interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase text-vintage-gold text-shadow-vintage">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 w-24 h-0.5 bg-vintage-gold ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
