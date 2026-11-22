export interface Business {
  name: string;
  nameConfirmed: boolean;
  tagline: string;
  city: string;
  state: string;
  address?: string;
  mapUrl?: string;
  coordinates?: { latitude: number; longitude: number };
  whatsapp?: string;
  phone?: string;
  instagram?: string;
  hours?: { day: string; time: string }[];
  logo?: string;
  heroVideo?: { mp4?: string; webm?: string };
  heroPoster?: string;
  heroAlt: string;
  heroIsDemo: boolean;
  ogImage?: string;
  familyStory?: string;
  familyPhoto?: string;
}
export const business: Business = {
  name: "Pesque e Pague do Otássio",
  nameConfirmed: true,
  tagline: "Um dia inteiro de bons momentos, em um só lugar.",
  city: "Nova Fátima",
  state: "PR",
  address: "Rua Pioneiro João Quani, 660 — Bairro São Luís",
  phone: "+55 (43) 99901-1564",
  whatsapp: "5543999011564",
  hours: [{ day: "Todos os dias", time: "10:00 – 22:00" }],
  heroPoster: "/media/lake-demo.jpg",
  heroAlt:
    "Paisagem de referência: lago cercado por montanhas e vegetação. Não retrata o estabelecimento.",
  heroIsDemo: true,
  // Preencha apenas dados confirmados. Telefones no formato 5543999999999.
};
