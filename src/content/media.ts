export interface EditorialMedia {
  src: string;
  alt: string;
  isDemo: boolean;
}
export const editorialMedia: {
  manifesto: EditorialMedia;
  fishing: EditorialMedia;
  food?: EditorialMedia;
} = {
  manifesto: {
    src: "/media/estacionamento.jpg",
    alt: "Área de entrada e estacionamento do Pesque e Pague do Otássio.",
    isDemo: false,
  },
  fishing: {
    src: "/media/represa.jpg",
    alt: "Represas preparadas para pesca no Pesque e Pague do Otássio.",
    isDemo: false,
  },
  food: {
    src: "/media/espaco-restaurante.jpg",
    alt: "Espaço aberto do restaurante do Pesque e Pague do Otássio.",
    isDemo: false,
  },
};
