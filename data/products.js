const products = [
  {
    id: 1,
    name: "MSI WS75",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/laptopMSI75.png?alt=media&token=f3f18644-b26a-45e7-a0a0-f47ffb2fb8ca",
    price: 6000,
    categories: ["PC portable", "Gaming"],
    description:
      "Gagnez en confort de travail et en productivité avec la station de travail mobile MSI WS75 10TL ! Conçue pour les professionnels à la recherche d'une solution mobile performante, elle offre de hautes performances et un affichage de grande qualité grâce à son écran IPS Full HD."
  },
  {
    id: 2,
    name: "MSI WS66",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/laptopMSI66.png?alt=media&token=c4cca10c-c286-4666-8664-83043013b7b9",
    price: 5499,
    categories: ["PC portable", "Gaming"],
    description:
      "La station de travail MSI WS66 10TK-232FR s'adresse aux professionnels de la création graphique et du design assisté par ordinateur, à la recherche de mobilité. En effet, avec cette puissante Workstation, vous menez vos projets professionnels à bien d'où que vous soyez. Réactivité SSD, puissance graphique Nvidia Quadro RTX 3000 6 Go, processeur performant avec le Intel Core i7-10750H (Comet Lake) et écran borderless Full HD...le WS66 fait le plein de composants performants pour mener à bien tous vos projets !"
  },
  {
    id: 3,
    name: "MacBook Pro 16",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/MacBookPro16.png?alt=media&token=5c633d7d-dee4-4ca3-926b-132b16b0de78",
    price: 8100,
    categories: ["PC portable"],
    description:
      "Conçu pour les pros qui repoussent les limites du possible, avec un écran Retina de 16 pouces immersif, des processeurs ultra‑rapides, des cartes graphiques de nouvelle génération, la plus grande capacité de batterie jamais vue sur un MacBook Pro, un nouveau Magic Keyboard et une capacité de stockage considérable, c’est le portable pro par excellence. Prêt pour les projets les plus ambitieux."
  },
  {
    id: 4,
    name: "Mac Pro",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/MacBook.png?alt=media&token=076dc89a-495c-4bd9-9390-3417c21e425e",
    price: 61000,
    categories: ["PC fixe"],
    description:
      "Une grande puissance est née. Le Mac Pro est un Mac extrême à tout point de vue. Doté de performances et de capacités d’extension et de configuration inédites, son système a été conçu pour que même les pros les plus intraitables puissent repousser leurs limites. Et les limites du possible."
  },
  {
    id: 5,
    name: "MSI MEG Aegis",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/MSIMEGAegis.png?alt=media&token=cfa73d5c-a022-4fef-beed-ecdf6501e3f5",
    price: 4499,
    categories: ["PC fixe", "Gaming"],
    description:
      "Le PC Gamer MSI MEG Aegis Ti5 est novateur sur bien des aspects. En plus d'un design audacieux, il bénéficie d'une molette Gaming innovante en façade, d'une technologie audio basée sur l'IA, d'un système de refroidissement performant."
  },
  {
    id: 6,
    name: "LCD-4",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/LCD4.png?alt=media&token=e271a7e5-eba3-410e-b400-6dc08a5bd8ee",
    price: 4000,
    categories: ["Accessoire"],
    description:
      "Le casque Audeze LCD-4 marque une nouvelle étape dans le développement de la technologie Planar Magnetic et repousse les limites de la haute fidélité au-delà de ce que proposait déjà le casque Audeze LCD-3 du fabricant américain. Ce nouveau venu occupe désormais le sommet de la gamme de casque Audeze."
  },
  {
    id: 7,
    name: "Focal Utopia",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/FocalUtopia.png?alt=media&token=6ffdf902-e780-4944-8e38-191ee832aa34",
    price: 4000,
    categories: ["Accessoire"],
    description:
      "Le casque hi-fi Focal Utopia est un modèle circum-aural ouvert, équipé de transducteurs Focal à dôme M en Béryllium pur. Il s'agit du vaisseau amiral de la gamme du fabricant français."
  },
  {
    id: 8,
    name: "iMac 27",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/iMac27.png?alt=media&token=80b04d59-693c-439f-a884-105e9205a104",
    price: 10500,
    categories: ["PC fixe"],
    description:
      "Avec sa multitude d’apps et d’outils puissants, l’iMac 27 pouces donne une nouvelle dimension à chacune de vos idées. Ses processeurs et cartes graphiques ultra-rapides, sa mémoire colossale et son stockage 100 % flash lui permettent de s’acquitter sans difficulté de n’importe quelle charge de travail."
  },
  {
    id: 9,
    name: "Aorus Model S",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/AorusModelS.png?alt=media&token=a146412f-95b2-476b-a2e9-d27d975ce278",
    price: 4100,
    categories: ["PC fixe", "Gaming"],
    description:
      "Profitez d'excellentes performances de jeu avec le surprenant PC Gamer AORUS Model S. Malgré son format compact, cet ordinateur AORUS bénéficie de composants performants montés dans une architecture optimisée pour offrir une dissipation de la chaleur efficace et silencieuse."
  },
  {
    id: 10,
    name: "MSI GE76 Raider",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/MSIGE76Raider.png?alt=media&token=91f5ee9d-5f77-4600-bc04-56654e106811",
    price: 5300,
    categories: ["PC portable", "Gaming"],
    description:
      "Profitez de hautes performances de jeu grâce au PC portable MSI GE76 Raider 10UG ! Conçu pour les gamers, cet ordinateur portable MSI bénéficie d'un châssis compact grâce à son écran de 17 pouces aux bords ultra-minces."
  },
  {
    id: 11,
    name: "Apple 32 LED",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/Apple32LED.png?alt=media&token=399c9017-d5a4-4dd7-99be-e53f52a79c71",
    price: 6500,
    categories: ["Accessoire"],
    description:
      "Le moniteur Apple Pro Display XDR offre une haute qualité d'image grâce à son grand écran de 32 pouces avec écran Retina 6K et sa gamme dynamique extrême. Le Pro Display XDR est un parfait écran professionnel qui se destine aux professionnels exigeants."
  },
  {
    id: 12,
    name: "Asus 32 Mini LED",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/projet-e-commerce-57835.appspot.com/o/Asus32MiniLED.png?alt=media&token=170e9145-a145-42f2-ac2e-ee7f4515c639",
    price: 5600,
    categories: ["Accessoire"],
    description:
      "Des performances visuelles exceptionnelles vous attendent avec le moniteur ASUS ProArt PA32UCG-K ! Ce modèle IPS à dalle 4K HDR1400 de 32 pouces se pare d'un rétro-éclairage Mini LED, de la technologie Quantum Dot et d'un rafraîchissement de 120 Hz avec AMD FreeSync Premium Pro et port HDMI 2.1."
  }
];

export default products;
