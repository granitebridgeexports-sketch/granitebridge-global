import textureBlack from "@/assets/texture-black.jpg";
import textureWhite from "@/assets/texture-white.jpg";
import textureGrey from "@/assets/texture-grey.jpg";
import textureBrown from "@/assets/texture-brown.jpg";
import textureRed from "@/assets/texture-red.jpg";
import monument from "@/assets/project-monument.jpg";

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
    slug: "black-granite",
    name: "Absolute Black",
    family: "Black",
    origin: "Karnataka, India",
    image: textureBlack,
    tagline: "The benchmark of premium dark granite.",
    description:
      "A deep, uniform jet-black granite prized for its consistency, density, and ability to take a mirror polish. The premium choice for monuments, kitchen surfaces, and architectural cladding worldwide.",
    finishes: ["Polished", "Honed", "Leathered", "Flamed", "Brushed"],
    thickness: ["18mm", "20mm", "30mm", "Custom"],
    applications: ["Monuments", "Kitchen tops", "Flooring", "Cladding", "Memorials"],
  },
  {
    slug: "white-granite",
    name: "Kashmir White",
    family: "White",
    origin: "Tamil Nadu, India",
    image: textureWhite,
    tagline: "Delicate elegance with garnet character.",
    description:
      "A bright, creamy-white granite with distinctive burgundy garnet flecks. A long-standing favourite for residential interiors, hospitality, and luxury villa projects across Europe.",
    finishes: ["Polished", "Honed", "Brushed"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Kitchen tops", "Vanity", "Wall cladding", "Flooring"],
  },
  {
    slug: "grey-granite",
    name: "Steel Grey",
    family: "Grey",
    origin: "Andhra Pradesh, India",
    image: textureGrey,
    tagline: "Refined, architectural, endlessly versatile.",
    description:
      "A consistent medium grey with a fine, even grain. Steel Grey is the workhorse of commercial architecture — predictable, durable, and exceptional value at scale.",
    finishes: ["Polished", "Honed", "Flamed", "Bush-hammered"],
    thickness: ["18mm", "20mm", "30mm", "Custom"],
    applications: ["Façades", "Public spaces", "Flooring", "Landscaping"],
  },
  {
    slug: "brown-granite",
    name: "Tan Brown",
    family: "Brown",
    origin: "Andhra Pradesh, India",
    image: textureBrown,
    tagline: "Warm tones for grounded, premium interiors.",
    description:
      "Tan Brown delivers warm caramel and chocolate tones in a dense, durable stone. Globally exported for memorials and commercial flooring projects.",
    finishes: ["Polished", "Honed", "Leathered"],
    thickness: ["18mm", "20mm", "30mm"],
    applications: ["Monuments", "Flooring", "Counter tops", "Stairs"],
  },
  {
    slug: "red-granite",
    name: "Imperial Red",
    family: "Red",
    origin: "Rajasthan, India",
    image: textureRed,
    tagline: "Bold crimson character with structural depth.",
    description:
      "A striking deep red granite with black flecks. Highly sought after for monument work and dramatic architectural feature walls.",
    finishes: ["Polished", "Honed", "Flamed"],
    thickness: ["20mm", "30mm", "Custom"],
    applications: ["Monuments", "Feature walls", "Landscaping"],
  },
  {
    slug: "monument-granite",
    name: "Monument Series",
    family: "Monument",
    origin: "Multiple quarries",
    image: monument,
    tagline: "Finished memorial stone, container-ready.",
    description:
      "Cut-to-size memorials, headstones, and monument bases in Absolute Black, Bahama Blue, Paradiso, and other premium varieties — finished, polished, and packed to European cemetery standards.",
    finishes: ["Polished", "Frosted", "Bevelled", "Custom carving"],
    thickness: ["50mm", "60mm", "80mm", "100mm"],
    applications: ["Headstones", "Memorial benches", "Vases", "Plaques"],
  },
];

export const findProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);