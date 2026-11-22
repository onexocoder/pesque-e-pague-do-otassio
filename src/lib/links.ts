import { business, type Business } from "@/content/business";
export function whatsappUrl(value = business.whatsapp) {
  const n = value?.replace(/\D/g, "");
  return n && /^\d{10,15}$/.test(n)
    ? `https://wa.me/${n}?text=${encodeURIComponent("Olá! Gostaria de informações sobre o pesqueiro.")}`
    : undefined;
}
export function phoneUrl(value = business.phone) {
  const n = value?.replace(/\D/g, "");
  return n && /^\d{10,15}$/.test(n) ? `tel:+${n}` : undefined;
}
export function safeExternal(value?: string) {
  if (!value) return undefined;
  try {
    const u = new URL(value);
    return u.protocol === "https:" ? u.href : undefined;
  } catch {
    return undefined;
  }
}
export function mapsUrl(data: Business = business) {
  const explicit = safeExternal(data.mapUrl);
  if (explicit) return explicit;
  const c = data.coordinates;
  const valid =
    c &&
    Number.isFinite(c.latitude) &&
    Number.isFinite(c.longitude) &&
    Math.abs(c.latitude) <= 90 &&
    Math.abs(c.longitude) <= 180;
  const destination = valid
    ? `${c.latitude},${c.longitude}`
    : data.address
      ? `${data.address}, ${data.city}, ${data.state}, Brasil`
      : undefined;
  return destination
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
    : undefined;
}
export const currency = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    price,
  );
