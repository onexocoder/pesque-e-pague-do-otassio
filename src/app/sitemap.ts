import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? ["", "/pesca", "/cardapio", "/estrutura", "/visite"].map((path) => ({
        url: `${siteUrl}${path}`,
        changeFrequency: "monthly",
        priority: path ? 0.7 : 1,
      }))
    : [];
}
