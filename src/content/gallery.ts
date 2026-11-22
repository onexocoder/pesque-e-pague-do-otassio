export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  group: string;
  order: number;
  isDemo: boolean;
}
export const gallery: GalleryImage[] = [
  {
    id: "lago",
    src: "/media/lake-demo.jpg",
    alt: "Referência visual de um lago com montanhas, não fotografado no pesqueiro.",
    caption: "A pausa que vem da água",
    group: "natureza",
    order: 1,
    isDemo: true,
  },
  {
    id: "verde",
    src: "/media/trees-demo.jpg",
    alt: "Referência visual de luz do sol entre árvores de uma floresta.",
    caption: "Tempo para respirar",
    group: "natureza",
    order: 2,
    isDemo: true,
  },
  {
    id: "paisagem",
    src: "/media/forest-demo.jpg",
    alt: "Referência visual de animais em uma paisagem de floresta; não retrata o local.",
    caption: "Um outro ritmo",
    group: "natureza",
    order: 3,
    isDemo: true,
  },
];
