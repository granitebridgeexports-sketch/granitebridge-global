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
    description:
      "A deep, uniform jet-black granite prized for its high density and exceptional ability to take a mirror polish. Universally specified for premium monuments, kitchen countertops, and luxury interior floor surfaces.",
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
    description:
      "A world-famous granite featuring a pitch-black background embedded with shimmering golden and copper metallic flecks (broncite crystals). Its starry-night appearance is highly prized for luxury kitchens, hotels, and feature walls.",
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
    description:
      "A highly durable granite with a uniform, fine-grained texture showing light-grey and silver flecks on a dark-grey background. Extremely popular for high-traffic commercial flooring, façades, and modern architectural projects.",
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
    description:
      "A rich, robust brown granite featuring large, dense crystals in shades of chocolate, caramel, and reddish-tan against a dark background. Globally recognized for its structural strength and classic, elegant appearance in commercial cladding.",
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
    description:
      "An outstanding light-coloured granite displaying expressive waves of white, light grey, and dramatic charcoal-black veins. Known for its marble-like luxury appearance combined with the durability of premium granite.",
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
    description:
      "A highly sought-after soft white and grey granite accented with small, distinctive burgundy garnet crystals. Its clean, bright aesthetic makes it a popular specification for modern residential interiors and luxury hotels across Europe.",
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
    description:
      "A striking, highly durable granite with a dramatic crimson red base swept with bold, flowing bands of black, orange, and dark grey. Widely exported to European and Asian markets for monuments and feature architectural installations.",
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
    description:
      "An elegant cotton-white and creamy granite with light-grey patches and dark brown-black mineral flecks scattered evenly. Perfect for brightening up interior spaces and kitchen designs, providing a premium clean look.",
    finishes: ["Polished", "Honed", "Leathered"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Kitchen Countertops", "Wall Panel Cladding", "Flooring", "Bath Decks"],
  },
];

export const findProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
