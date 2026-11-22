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
    id: "represa",
    src: "/media/represa.jpg",
    alt: "Vista das duas represas de pesca cercadas por árvores e gramado.",
    caption: "As represas",
    group: "natureza",
    order: 1,
    isDemo: false,
  },
  {
    id: "restaurante",
    src: "/media/espaco-restaurante.jpg",
    alt: "Área aberta com mesas do restaurante do pesqueiro.",
    caption: "Espaço do restaurante",
    group: "estrutura",
    order: 2,
    isDemo: false,
  },
  {
    id: "churrasco",
    src: "/media/espaco-churrasco.jpg",
    alt: "Espaço coberto com churrasqueira, pia e mesas.",
    caption: "Espaço para churrasco",
    group: "estrutura",
    order: 3,
    isDemo: false,
  },
  {
    id: "sinuca",
    src: "/media/mesa-sinuca.jpg",
    alt: "Mesa de sinuca na área coberta do pesqueiro.",
    caption: "Mesa de sinuca",
    group: "lazer",
    order: 4,
    isDemo: false,
  },
  {
    id: "bar",
    src: "/media/bar.jpg",
    alt: "Balcão do bar com bebidas e opções de conveniência.",
    caption: "Bar e conveniência",
    group: "estrutura",
    order: 5,
    isDemo: false,
  },
  {
    id: "sorveteria",
    src: "/media/sorveteria.jpg",
    alt: "Área da sorveteria com freezers para armazenamento dos sorvetes.",
    caption: "Sorveteria",
    group: "estrutura",
    order: 6,
    isDemo: false,
  },
  {
    id: "estacionamento",
    src: "/media/estacionamento.jpg",
    alt: "Entrada e área de estacionamento do pesqueiro.",
    caption: "Entrada e estacionamento",
    group: "estrutura",
    order: 7,
    isDemo: false,
  },
];
