import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getDict } from "@/lib/i18n/getDict";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "Leak Detection & Plumbing Lanzarote | Pipebusters",
    template: "%s | Pipebusters Lanzarote",
  },
  description:
    "Professional leak detection and plumbing services in Lanzarote. Thermal imaging, acoustic sensors, pool leak detection. No Find, No Fee guarantee. Call today.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = getDict("en");
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-action-red focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wider"
        >
          Skip to main content
        </a>
        <Header dict={dict} locale="en" />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer dict={dict} locale="en" />
      </body>
    </html>
  );
}
