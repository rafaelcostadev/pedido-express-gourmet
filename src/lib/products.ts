const coxinha = { url: "/assets/coxinha.avif" };
const bolinho = { url: "/assets/bolinho-queijo.avif" };
const travesseiro = { url: "/assets/travesseiro-presunto-queijo.avif" };
const enroladinho = { url: "/assets/enroladinho-salsicha.avif" };
const churros = { url: "/assets/churros.avif" };

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  unit: string;
  category: "salgado" | "churros";
};

export const products: Product[] = [
  {
    id: "coxinha-frango",
    name: "Coxinha de Frango",
    description: "Massa leve e sequinha com recheio cremoso de frango desfiado.",
    price: 55,
    image: coxinha.url,
    unit: "Pacote 1kg • 25 unidades",
    category: "salgado",
  },
  {
    id: "bolinho-queijo",
    name: "Bolinho de Queijo",
    description: "Recheio cremoso e muito queijo derretido em cada mordida.",
    price: 58,
    image: bolinho.url,
    unit: "Pacote 1kg • 25 unidades",
    category: "salgado",
  },
  {
    id: "travesseiro-presunto-queijo",
    name: "Travesseiro Presunto e Queijo",
    description: "Massa crocante recheada com presunto e queijo cremoso.",
    price: 60,
    image: travesseiro.url,
    unit: "Pacote 1kg • 25 unidades",
    category: "salgado",
  },
  {
    id: "enroladinho-salsicha",
    name: "Enroladinho de Salsicha",
    description: "Clássico da festa: massa sequinha envolvendo salsicha suculenta.",
    price: 55,
    image: enroladinho.url,
    unit: "Pacote 1kg • 25 unidades",
    category: "salgado",
  },
  {
    id: "churros-doce-de-leite",
    name: "Churros com Doce de Leite",
    description: "Churros artesanal crocante por fora, recheio generoso de doce de leite cremoso e polvilhado com canela e açúcar.",
    price: 20.5,
    image: churros.url,
    unit: "Pacote • 25 unidades",
    category: "churros",
  },
];

export const salgados = products.filter((p) => p.category === "salgado");
export const churrosProduct = products.find((p) => p.category === "churros")!;

export const COMPANY = {
  name: "Salgados & Churros Fast",
  whatsappRaw: "5511961392248",
  whatsappDisplay: "+55 11 96139-2248",
  instagramUrl: "https://www.instagram.com/salgadosechurrosfast",
  instagramHandle: "@salgadosechurrosfast",
  address: "Rua Gabiroba, 83 – Jardim Record, Taboão da Serra – SP",
  addressShort: "Rua Gabiroba, 83 – Jardim Record",
  mapsQuery: "Rua Gabiroba, 83, Jardim Record, Taboão da Serra",
  hours: "Todos os dias • 09h às 20h",
};

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
