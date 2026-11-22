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
export const menuItems: MenuItem[] = [];
// Adicione itens reais. price em reais (número); campos opcionais ausentes ficam ocultos.
