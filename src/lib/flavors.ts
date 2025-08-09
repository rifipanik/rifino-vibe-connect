export type FlavorKey =
  | "mangue"
  | "fraise"
  | "fraise-pasteque"
  | "pinacolada"
  | "blueberry"
  | "mixed-berries";

export type CountryKey = "CH" | "FR" | "MA";

export function flavorToVariant(flavorRaw: string): string {
  const k = flavorRaw.trim().toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/é/g, "e")
    .replace(/è/g, "e");
    
  const map: Record<string, string> = {
    "mangue": "variant--mangue",
    "fraise": "variant--fraise",
    "fraise-pasteque": "variant--fraisepasteque",
    "fraise-pastèque": "variant--fraisepasteque",
    "pina": "variant--pinacolada",
    "pina-colada": "variant--pinacolada",
    "pinacolada": "variant--pinacolada",
    "blueberry": "variant--blueberry",
    "mixed-berries": "variant--mixedberries",
    "mixed": "variant--mixedberries",
    "berries": "variant--mixedberries",
  };
  
  return map[k] ?? "";
}

export const COUNTRY_INFO = {
  CH: {
    name: "Suisse",
    flag: "🇨🇭",
    currency: "CHF",
    deliveryTime: "24-48h",
    deliveryFee: "{{FRAIS_CH}}"
  },
  FR: {
    name: "France (74)",
    flag: "🇫🇷",
    currency: "EUR",
    deliveryTime: "24-72h",
    deliveryFee: "{{FRAIS_FR}}"
  },
  MA: {
    name: "Maroc",
    flag: "🇲🇦",
    currency: "MAD",
    deliveryTime: "Point de contact",
    deliveryFee: "{{FRAIS_MA}}"
  }
};

export const SOCIAL_LINKS = {
  telegram: "{{TELEGRAM_LINK}}",
  discord: "{{DISCORD_INVITE}}",
  whatsapp: "{{WHATSAPP_LINK}}",
  snapchat: "{{SNAP_LINK}}"
};

export const FLAVORS = [
  "mangue",
  "fraise", 
  "fraise-pasteque",
  "pinacolada",
  "blueberry",
  "mixed-berries"
];

export const AUTONOMIES = [9000, 15000, 16000, 18000, 22000];