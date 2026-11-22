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
    src: "/media/trees-demo.jpg",
    alt: "Imagem de referência: luz entre árvores, não retrata o pesqueiro.",
    isDemo: true,
  },
  fishing: {
    src: "/media/lake-demo.jpg",
    alt: "Imagem de referência: paisagem de um lago, não retrata o estabelecimento.",
    isDemo: true,
  },
  // food: adicione src, alt e isDemo: false quando houver fotografia real autorizada.
};
