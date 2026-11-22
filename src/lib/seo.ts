import type { Metadata } from "next";
import { business } from "@/content/business";
import { safeExternal } from "./links";
export const siteUrl = safeExternal(process.env.NEXT_PUBLIC_SITE_URL)?.replace(
  /\/$/,
  "",
);
export function pageMetadata(
  title: string,
  description: string,
  path = "",
): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: {
      title,
      description,
      locale: "pt_BR",
      type: "website",
      url: siteUrl ? `${siteUrl}${path}` : undefined,
      images: business.ogImage ? [business.ogImage] : undefined,
    },
  };
}
