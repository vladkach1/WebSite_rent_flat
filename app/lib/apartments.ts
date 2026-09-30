export type Apartment = {
  id: number;
  slug: string;
  name: string;
  address: string;
  guests: number;
  beds: string;
  priceFrom: number;
  image: string;
  description: string;
};

const image = (file: string) =>
  `https://raw.githubusercontent.com/vladkach1/WebSite_rent_flat/main/${file}`;

export const apartments: Apartment[] = [
  {
    id: 1,
    slug: "romantic",
    name: "Романтик",
    address: "Ростов-на-Дону, бульвар Комарова 1Е стр. 5",
    guests: 2,
    beds: "1 кровать",
    priceFrom: 4000,
    image: image("kv1_main.jpeg"),
    description: "Уютные апартаменты для комфортного проживания вдвоём."
  },
  {
    id: 2,
    slug: "venice",
    name: "Венеция",
    address: "Ростов-на-Дону, бульвар Комарова 1Е стр. 3",
    guests: 7,
    beds: "1 кровать, 1 диван, круглая кровать 2.6 м",
    priceFrom: 4000,
    image: image("kv2_main.jpeg"),
    description: "Просторные апартаменты для большой компании."
  },
  {
    id: 3,
    slug: "paris",
    name: "Париж",
    address: "Ростов-на-Дону, бульвар Комарова 1Е стр. 2",
    guests: 4,
    beds: "2 кровати, 1 диван",
    priceFrom: 3000,
    image: image("kv3_main.jpeg"),
    description: "Комфортный вариант для семьи или небольшой компании."
  },
  {
    id: 4,
    slug: "molodezhnaya",
    name: "Молодёжная",
    address: "Ростов-на-Дону, бульвар Комарова 1Е стр. 2",
    guests: 4,
    beds: "3 кровати",
    priceFrom: 3000,
    image: image("kv4_main.jpeg"),
    description: "Практичные апартаменты с несколькими спальными местами."
  },
  {
    id: 5,
    slug: "venera",
    name: "Венера",
    address: "Ростов-на-Дону, ул. Венеры 23",
    guests: 5,
    beds: "1 кровать, круглая кровать 2.6 м",
    priceFrom: 3500,
    image: image("kv5_main.jpeg"),
    description: "Просторные апартаменты для проживания до пяти гостей."
  }
];
