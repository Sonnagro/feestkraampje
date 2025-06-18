
export interface Product {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  price?: string;
  color: string;
  includes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Piratenspeurtocht",
    description: "Een spannende speurtocht voor kleine piraten",
    longDescription: "Een complete speurtocht in piratenstijl met verschillende uitdagingen, raadsels en opdrachten. Geschikt voor kinderen van 5-8 jaar. De speurtocht duurt ongeveer 1,5 uur en kan zowel binnen als buiten gedaan worden.",
    imageUrl: "https://picsum.photos/400/200",
    color: "blue",
    includes: [
      "Piratenschatkaart",
      "Opdrachtenkaarten",
      "Piratenschatkist",
      "Goudmunten",
      "Ooglapjes",
      "Piratenmedailles"
    ]
  },
  {
    id: 2,
    title: "Princessenfeest",
    description: "Een koninklijk feest voor elke kleine princes",
    longDescription: "Een magisch feestpakket voor een echt prinsessenfeest! Met verschillende spelletjes, activiteiten en versieringen voor een onvergetelijk feest. Geschikt voor kinderen van 4-7 jaar. Het pakket bevat voldoende voor 8 kinderen.",
    imageUrl: "https://picsum.photos/400/200",
    color: "pink",
    includes: [
      "Tiara's",
      "Toverstafjes",
      "Princessenspel",
      "Glitter make-up",
      "Uitdeelzakjes",
      "Princessendiploma's"
    ]
  },
  {
    id: 3,
    title: "Jungle Avontuur",
    description: "Een wilde expeditie in de jungle",
    longDescription: "Een avontuurlijk pakket met spellen en activiteiten in junglethema. Kinderen gaan op ontdekkingsreis met spannende opdrachten en spelletjes. Geschikt voor kinderen van 6-10 jaar. Het pakket bevat materialen voor 8-10 kinderen.",
    imageUrl: "https://picsum.photos/400/200",
    color: "green",
    includes: [
      "Junglekaart",
      "Dierenpaspoort",
      "Safari-spelletjes",
      "Jungle-verkleedset",
      "Dieren maskers",
      "Uitdeelzakjes met jungle-verrassingen"
    ]
  },
  {
    id: 4,
    title: "Superhelden Missie",
    description: "Red de wereld met je superheldenkrachten",
    longDescription: "Een actief feestpakket voor superhelden in spé! Met verschillende uitdagingen en opdrachten om superkrachten te testen. Inclusief spelletjes en vermommingen. Geschikt voor kinderen van 6-10 jaar.",
    imageUrl: "https://picsum.photos/400/200",
    color: "purple",
    includes: [
      "Superheldenmaskers",
      "Capes",
      "Krachtentraining spel",
      "Superhelden certificaten",
      "Missie kaarten",
      "Uitdeelzakjes"
    ]
  },
  {
    id: 5,
    title: "Bakfeest",
    description: "Een smakelijk feest voor kleine bakkers",
    longDescription: "Een volledig verzorgd bakfeest waar kinderen aan de slag gaan met verschillende bakactiviteiten. We zorgen voor alle ingrediënten en benodigdheden. Geschikt voor kinderen van 6-12 jaar. Het pakket bevat materialen voor 8 kinderen.",
    imageUrl: "https://picsum.photos/400/200",
    color: "yellow",
    includes: [
      "Koksmutsen",
      "Schortjes",
      "Bakvormpjes",
      "Versieringen",
      "Receptenboekjes",
      "Uitdeeldoosjes voor baksels"
    ]
  },
  {
    id: 6,
    title: "Ruimteavontuur",
    description: "Een buitenaards feestje in de ruimte",
    longDescription: "Een kosmisch feest waar kinderen astronaut worden en op missie gaan door het heelal. Met spelletjes en opdrachten over planeten, sterren en aliens. Geschikt voor kinderen van 7-10 jaar.",
    imageUrl: "https://picsum.photos/400/200",
    color: "blue",
    includes: [
      "Astronautenhelmen",
      "Planetenspel",
      "Ruimtemissiekaarten",
      "Glow-in-the-dark sterren",
      "Kosmische medailles",
      "Uitdeelzakjes met ruimtesnacks"
    ]
  }
];
