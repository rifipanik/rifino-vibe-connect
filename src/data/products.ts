export interface Product {
  id: string;
  nom: string;
  autonomie: number;
  saveurs: string[];
  nicotine: string;
  origine: string;
  images: string[];
  stock: number;
  badges: string[];
  prix: { CH: number; FR: number; MA: number };
  description: string;
}

export const DEMO_PRODUCTS: Product[] = [
  {
    id: "jnr-9k-mangue",
    nom: "JNR 9k — Mangue",
    autonomie: 9000,
    saveurs: ["mangue"],
    nicotine: "20 mg/ml",
    origine: "UE",
    images: ["{{IMG_JNR_9K_MANGUE_1}}", "{{IMG_JNR_9K_MANGUE_2}}"],
    stock: 22,
    badges: ["Top vente"],
    prix: { CH: 25.0, FR: 24.0, MA: 220.0 },
    description: "Vape jetable JNR 9k — saveur mangue exotique, tirage doux et fruité pour une expérience authentique."
  },
  {
    id: "jnr-15k-fraise",
    nom: "JNR 15k — Fraise",
    autonomie: 15000,
    saveurs: ["fraise"],
    nicotine: "20 mg/ml",
    origine: "UE",
    images: ["{{IMG_JNR_15K_FRAISE_1}}"],
    stock: 18,
    badges: ["Populaire"],
    prix: { CH: 28.0, FR: 26.0, MA: 250.0 },
    description: "Saveur fraise intense et sucrée, format 15k pour une durée prolongée."
  },
  {
    id: "jnr-16k-fraise-pasteque",
    nom: "JNR 16k — Fraise-Pastèque",
    autonomie: 16000,
    saveurs: ["fraise-pastèque"],
    nicotine: "20 mg/ml",
    origine: "UE",
    images: ["{{IMG_JNR_16K_FP_1}}"],
    stock: 5,
    badges: ["Nouveauté"],
    prix: { CH: 30.0, FR: 28.0, MA: 270.0 },
    description: "Mélange parfait entre la douceur de la fraise et la fraîcheur de la pastèque."
  },
  {
    id: "jnr-18k-pina-colada",
    nom: "JNR 18k — Pina Colada",
    autonomie: 18000,
    saveurs: ["pinacolada"],
    nicotine: "20 mg/ml",
    origine: "UE",
    images: ["{{IMG_JNR_18K_PINA_1}}"],
    stock: 12,
    badges: ["Tropical"],
    prix: { CH: 32.0, FR: 30.0, MA: 290.0 },
    description: "Évasion tropicale garantie avec cette saveur pina colada crémeuse et exotique."
  },
  {
    id: "jnr-22k-blueberry",
    nom: "JNR 22k — Blueberry",
    autonomie: 22000,
    saveurs: ["blueberry"],
    nicotine: "20 mg/ml",
    origine: "UE",
    images: ["{{IMG_JNR_22K_BLUE_1}}"],
    stock: 8,
    badges: ["Édition limitée"],
    prix: { CH: 35.0, FR: 33.0, MA: 320.0 },
    description: "Maxi autonomie avec une saveur myrtille authentique et gourmande."
  },
  {
    id: "jnr-22k-mixed-berries",
    nom: "JNR 22k — Mixed Berries",
    autonomie: 22000,
    saveurs: ["mixed-berries"],
    nicotine: "20 mg/ml",
    origine: "UE",
    images: ["{{IMG_JNR_22K_MIXED_1}}"],
    stock: 0,
    badges: ["Rupture"],
    prix: { CH: 35.0, FR: 33.0, MA: 320.0 },
    description: "Cocktail de fruits rouges pour les amateurs de saveurs complexes et gourmandes."
  }
];