export type ProductTag =
  | "Verified Supplier"
  | "Sample Available"
  | "Custom Packaging"
  | "Low MOQ"
  | "Export Experience";

export interface Product {
  slug: string;
  name: string;
  description: string;
  location: string;
  moq?: string;
  leadTime?: string;
  tags: ProductTag[];
  image?: string;
  gradient: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "fitfaith-oximeters",
    name: "Fitfaith Oximeters",
    description: "Stable and reliable, CE/FDA certified.",
    location: "Guangdong",
    moq: "No MOQ",
    leadTime: "7 days",
    tags: ["Sample Available", "Custom Packaging", "Low MOQ", "Export Experience"],
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    slug: "dida-musical-instruments",
    name: "DIDA Musical Instruments",
    description: "Quality musical instruments with factory-direct pricing.",
    location: "Guangdong",
    moq: "No MOQ",
    leadTime: "7 days",
    tags: ["Sample Available", "Custom Packaging", "Low MOQ", "Export Experience"],
    gradient: "from-rose-400 via-fuchsia-500 to-purple-600",
  },
  {
    slug: "aidpek-power-stations",
    name: "AIDPEK Outdoor Power Stations",
    description: "Sine wave AC output, stable and without damage.",
    location: "Guangdong",
    moq: "No MOQ",
    leadTime: "14 days",
    tags: ["Custom Packaging", "Low MOQ", "Export Experience"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    slug: "electronic-components",
    name: "Electronic Components",
    description: "High quality and stable supply.",
    location: "Guangdong",
    moq: "No MOQ",
    leadTime: "14 days",
    tags: ["Custom Packaging", "Low MOQ", "Export Experience"],
    gradient: "from-slate-500 via-slate-700 to-slate-900",
  },
  {
    slug: "flashlights",
    name: "Flashlights",
    description: "High lumen and long lasting, customization supported.",
    location: "Guangdong",
    moq: "No MOQ",
    leadTime: "14 days",
    tags: ["Sample Available", "Custom Packaging", "Low MOQ", "Export Experience"],
    gradient: "from-amber-400 via-orange-500 to-red-600",
  },
  {
    slug: "home-care-series",
    name: "Home Care Series",
    description: "Factory direct supply with high cost performance.",
    location: "Guangdong / Hubei / Shanghai",
    moq: "No MOQ",
    leadTime: "7 days",
    tags: ["Sample Available", "Custom Packaging", "Low MOQ", "Export Experience"],
    gradient: "from-lime-400 via-green-500 to-emerald-600",
  },
];
