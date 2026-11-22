import { business } from "./business";

export interface FAQ {
  question: string;
  answer: string;
  published: boolean;
}
export const faq: FAQ[] = [
  {
    question: "Em qual cidade fica o pesqueiro?",
    answer: `O Pesque e Pague do Otássio fica em ${business.city} – ${business.state}, no endereço ${business.address}.`,
    published: true,
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "O pesqueiro funciona todos os dias, das 10h às 22h, inclusive aos sábados e domingos.",
    published: true,
  },
  {
    question: "Tem opções de comida e bebida no local?",
    answer:
      "Sim. O espaço reúne restaurante, lanchonete, bar e sorvetes. As opções estão organizadas na página Cardápio.",
    published: true,
  },
  {
    question: "O que há além da pesca?",
    answer:
      "Restaurante, lanchonete, bar, sorvetes, sinuca, espaço para churrasco com churrasqueira e estacionamento.",
    published: true,
  },
  {
    question: "Como posso falar com o pesqueiro antes da visita?",
    answer: `Você pode chamar pelo WhatsApp ou ligar para ${business.phone}. O botão verde do WhatsApp fica disponível em todas as páginas do site.`,
    published: true,
  },
];
