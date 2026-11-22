export interface Fishing {
  introduction: string;
  modalities: { name: string; description: string }[];
  rules: string[];
  prices: { label: string; price: number }[];
  species: string[];
  equipment?: string;
  beforeYouCome: string[];
}
export const fishing: Fishing = {
  introduction:
    "O prazer de estar perto da água. Um espaço para viver a pesca e aproveitar a companhia de quem faz o dia valer a pena.",
  modalities: [],
  rules: [],
  prices: [],
  species: [],
  beforeYouCome: [],
};
