export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  order: number;
  enabled: boolean;
}
export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  available?: boolean;
  featured?: boolean;
  imageIsIllustrative?: boolean;
}
export const menuCategories: MenuCategory[] = [
  {
    id: "restaurante",
    name: "Restaurante",
    description: "Uma pausa para sentar à mesa.",
    order: 1,
    enabled: true,
  },
  {
    id: "lanchonete",
    name: "Lanchonete",
    description: "Para acompanhar os bons momentos.",
    order: 2,
    enabled: true,
  },
  {
    id: "bar",
    name: "Bar",
    description: "Um convite para prolongar a conversa.",
    order: 3,
    enabled: true,
  },
  {
    id: "sorvetes",
    name: "Sorvetes",
    description: "O lado doce do passeio.",
    order: 4,
    enabled: true,
  },
];
export const menuItems: MenuItem[] = [
  {
    id: "batata-file-tilapia",
    categoryId: "restaurante",
    name: "Porção de batata com filé de tilápia",
    description: "Batata frita crocante acompanhada de filés de tilápia empanados.",
    image: "/media/cardapio/batata-file-tilapia.jpg",
    available: true,
    featured: true,
    imageIsIllustrative: true,
  },
  {
    id: "sashimi-tilapia",
    categoryId: "restaurante",
    name: "Sashimi de tilápia",
    description: "Fatias frescas de tilápia servidas em uma porção leve e saborosa.",
    image: "/media/cardapio/sashimi-tilapia.jpg",
    available: true,
    imageIsIllustrative: true,
  },
  {
    id: "salada",
    categoryId: "restaurante",
    name: "Salada",
    description: "Salada fresca preparada com ingredientes selecionados.",
    image: "/media/cardapio/salada.jpg",
    available: true,
    imageIsIllustrative: true,
  },
  {
    id: "arroz-feijao",
    categoryId: "restaurante",
    name: "Arroz e feijão",
    description: "Acompanhamento caseiro com arroz branco e feijão.",
    image: "/media/cardapio/arroz-feijao.jpg",
    available: true,
    imageIsIllustrative: true,
  },
];
// Adicione itens reais. price em reais (número); campos opcionais ausentes ficam ocultos.
