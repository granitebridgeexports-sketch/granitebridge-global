import absoluteBlack from "@/assets/absolute_black_slab.png";
import blackGalaxy from "@/assets/black_galaxy_slab.png";
import steelGrey from "@/assets/steel_grey_slab.png";
import tanBrown from "@/assets/tan_brown_slab.png";
import viscountWhite from "@/assets/viscount_white_slab.png";
import kashmirWhite from "@/assets/kashmir_white_slab.png";
import redMulticolor from "@/assets/red_multicolor_slab.png";
import colonialWhite from "@/assets/colonial_white_slab.png";

export type Product = {
  slug: string;
  name: string;
  family: string;
  origin: string;
  image: string;
  tagline: string;
  bestFor: string[];
  description: string;
  finishes: string[];
  thickness: string[];
  applications: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "absolute-black",
    name: "Absolute Black",
    family: "Black",
    origin: "Chamarajanagar, Karnataka",
    image: absoluteBlack,
    tagline: "The gold standard of uniform, dense jet-black granite.",
    bestFor: ["Luxury Villas", "Premium Countertops", "Commercial Projects"],
    description:
      "Preferred by luxury villa owners and premium commercial developments for elegant jet-black countertops, flooring, and statement interiors.",
    finishes: ["Polished", "Honed", "Leathered", "Lapatro"],
    thickness: ["18mm", "20mm", "30mm", "Custom Blocks"],
    applications: ["Countertops", "Wall Cladding", "Monuments", "Luxury Flooring"],
  },
  {
    slug: "black-galaxy",
    name: "Black Galaxy",
    family: "Black",
    origin: "Chimakurthy, Andhra Pradesh",
    image: blackGalaxy,
    tagline: "Stunning dark stone glittering with golden broncite sparkles.",
    bestFor: ["Luxury Kitchens", "Hotels", "Premium Residences"],
    description:
      "A favorite among homeowners, architects, and hotel developers for its sparkling golden appearance and premium kitchen applications.",
    finishes: ["Polished", "Honed", "Leathered"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Kitchen Slabs", "Vanity Tops", "Feature Walls", "Premium Tiling"],
  },
  {
    slug: "steel-grey",
    name: "Steel Grey",
    family: "Grey",
    origin: "Ongole, Andhra Pradesh",
    image: steelGrey,
    tagline: "Consistent, durable, and highly versatile architectural stone.",
    bestFor: ["Modern Homes", "Kitchen Countertops", "Commercial Interiors"],
    description:
      "Popular for contemporary spaces due to its durability, low maintenance, and clean modern aesthetic.",
    finishes: ["Polished", "Honed", "Flamed", "Bush-Hammered"],
    thickness: ["18mm", "20mm", "30mm", "Custom Slabs"],
    applications: ["Commercial Flooring", "Exterior Façades", "Steps & Risers", "Paving"],
  },
  {
    slug: "tan-brown",
    name: "Tan Brown",
    family: "Brown",
    origin: "Karimnagar, Telangana",
    image: tanBrown,
    tagline: "Deep brown and black base with rich chocolate quartz crystals.",
    bestFor: ["Family Homes", "Flooring", "Kitchen Countertops"],
    description:
      "Widely selected for residential projects thanks to its warm earthy tones, durability, and timeless appeal.",
    finishes: ["Polished", "Honed", "Leathered", "Flamed"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Exterior Cladding", "Kitchen Countertops", "Public Flooring", "Staircases"],
  },
  {
    slug: "viscount-white",
    name: "Viscount White",
    family: "White",
    origin: "Madanapalle, Andhra Pradesh",
    image: viscountWhite,
    tagline: "Dynamic, flowing waves of light and dark grey veins.",
    bestFor: ["Designer Kitchens", "Luxury Interiors", "Feature Surfaces"],
    description:
      "Chosen by architects and interior designers for its flowing patterns and sophisticated visual impact.",
    finishes: ["Polished", "Honed", "Leathered"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Bathroom Vanities", "Kitchen Islands", "Feature Walls", "Bookmatched Panels"],
  },
  {
    slug: "kashmir-white",
    name: "Kashmir White",
    family: "White",
    origin: "Melur, Tamil Nadu",
    image: kashmirWhite,
    tagline: "Elegant creamy-white base with delicate burgundy garnets.",
    bestFor: ["Bright Interiors", "Premium Homes", "Modern Kitchens"],
    description:
      "Loved by homeowners seeking a clean, spacious, and elegant appearance that complements any design style.",
    finishes: ["Polished", "Honed", "Brushed"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Interior Wall Cladding", "Kitchen Tops", "Flooring", "Vanity Slabs"],
  },
  {
    slug: "red-multicolor",
    name: "Red Multicolor",
    family: "Red",
    origin: "Kanakapura, Karnataka",
    image: redMulticolor,
    tagline: "Bold crimson waves swirling with black and orange bands.",
    bestFor: ["Feature Walls", "Reception Areas", "Luxury Commercial Spaces"],
    description:
      "Ideal for projects that require bold visual impact and a distinctive premium look.",
    finishes: ["Polished", "Honed", "Flamed"],
    thickness: ["20mm", "30mm", "50mm", "Custom Blocks"],
    applications: [
      "Monuments",
      "Architectural Highlights",
      "Public Landscaping",
      "Exterior Paving",
    ],
  },
  {
    slug: "colonial-white",
    name: "Colonial White",
    family: "White",
    origin: "Jalore, Rajasthan",
    image: colonialWhite,
    tagline: "Creamy cotton-white base with soft grey and brown specks.",
    bestFor: ["Kitchen Islands", "Contemporary Homes", "Residential Projects"],
    description:
      "A versatile granite favored for its soft premium appearance and ability to blend with modern interiors.",
    finishes: ["Polished", "Honed", "Leathered"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Kitchen Countertops", "Wall Panel Cladding", "Flooring", "Bath Decks"],
  },
];

export const findProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
