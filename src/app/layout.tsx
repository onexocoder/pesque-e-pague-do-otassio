import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/shared";
import { Motion } from "@/components/motion";
import { business } from "@/content/business";
import { siteUrl } from "@/lib/seo";
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: `${business.name} | Pesque e pague em Nova Fátima – PR`,
    template: `%s | ${business.name}`,
  },
  description: business.tagline,
  robots: siteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structured = business.nameConfirmed
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: business.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: business.city,
          addressRegion: business.state,
          addressCountry: "BR",
          ...(business.address ? { streetAddress: business.address } : {}),
        },
        ...(siteUrl ? { url: siteUrl } : {}),
        ...(business.phone ? { telephone: business.phone } : {}),
      }
    : null;
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <Navigation />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Motion />
        {structured && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structured).replace(/</g, "\\u003c"),
            }}
          />
        )}
      </body>
    </html>
  );
}
