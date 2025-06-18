
export interface Review {
  id: number;
  name: string;
  stars: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Marieke van Dijk",
    stars: 5,
    text: "We hebben het piratenpakket besteld voor de 7e verjaardag van onze zoon. Alles was perfect voorbereid en de kinderen hebben zich uitstekend vermaakt. Zeker een aanrader!",
    date: "15 maart 2025"
  },
  {
    id: 2,
    name: "Laura Jansen",
    stars: 5,
    text: "Het prinsessenfeest was een groot succes! Mijn dochter en haar vriendinnetjes hebben genoten van alle leuke activiteiten. De inhoud van het pakket was van goede kwaliteit en echt compleet.",
    date: "28 februari 2025"
  },
  {
    id: 3,
    name: "Martijn de Groot",
    stars: 4,
    text: "Het Jungle Avontuur pakket was echt een hit op het feestje van mijn zoon. De speurtocht was uitdagend maar niet te moeilijk. Alleen de dierenmaskers waren wat fragiel, maar verder top!",
    date: "10 februari 2025"
  },
  {
    id: 4,
    name: "Sandra Visser",
    stars: 5,
    text: "Wat een geweldig concept! Het bakfeest was een groot succes en de kinderen vonden het geweldig om met hun eigen gebakken lekkernijen naar huis te gaan. Alles was goed geregeld.",
    date: "25 januari 2025"
  },
  {
    id: 5,
    name: "Jeroen Bakker",
    stars: 5,
    text: "De superhelden missie was perfect voor onze energieke 8-jarige zoon en zijn vriendjes. Ze hebben zich 3 uur lang uitstekend vermaakt en wilden daarna hun capes niet meer uit doen!",
    date: "12 januari 2025"
  },
  {
    id: 6,
    name: "Esther de Wit",
    stars: 4,
    text: "Het ruimteavontuur pakket was een groot succes! Creatief en leerzaam tegelijk. De sterren geven in het donker echt licht, wat de kinderen fantastisch vonden.",
    date: "3 januari 2025"
  }
];
