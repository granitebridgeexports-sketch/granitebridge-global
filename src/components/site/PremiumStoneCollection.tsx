import { useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";

const PREMIUM_PRODUCTS = [
  {
    name: "Luxury Marble Bathtub",
    description:
      "Freestanding Calacatta marble bathtub with sculptural curves and dramatic grey veining — the centrepiece of any luxury spa bathroom.",
    image: "/premium-collection/marble-bathtub.png",
    category: "Bath & Spa",
  },
  {
    name: "Stone Wash Basin",
    description:
      "Hand-carved natural stone vessel sink with organic textures, perfect for boutique hotels and premium residential bathrooms.",
    image: "/premium-collection/stone-wash-basin.png",
    category: "Bath & Spa",
  },
  {
    name: "Granite Kitchen Sink",
    description:
      "Black Galaxy granite farmhouse sink with a mirror-polished finish revealing golden mineral flecks — built for premium kitchens.",
    image: "/premium-collection/granite-kitchen-sink.png",
    category: "Kitchen",
  },
  {
    name: "Marble Dining Table",
    description:
      "Statuario marble dining table with bold veining and clean geometric lines — a statement piece for formal dining rooms.",
    image: "/premium-collection/marble-dining-table.png",
    category: "Furniture",
  },
  {
    name: "Granite Coffee Table",
    description:
      "Steel Grey granite coffee table with a polished surface and contemporary metal base — understated luxury for living spaces.",
    image: "/premium-collection/granite-coffee-table.png",
    category: "Furniture",
  },
  {
    name: "Stone Console Table",
    description:
      "Elegant marble console table with dramatic veining and gold-finished legs — designed for grand hotel foyers and villa entrances.",
    image: "/premium-collection/stone-console-table.png",
    category: "Furniture",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PREMIUM_PRODUCTS.map((p) => p.category)))];

export function PremiumStoneCollection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? PREMIUM_PRODUCTS
      : PREMIUM_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="premium-stone-collection"
      className="py-28 lg:py-40 bg-[#080808] text-bone relative overflow-hidden"
    >
      {/* Ambient decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(201,166,107,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(201,166,107,0.03) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Exclusive Range</span>
              <span className="hairline" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.05] text-bone">
              Premium Stone Collection
            </h2>
            <p className="mt-6 text-lg md:text-xl text-bone/60 leading-relaxed max-w-3xl mx-auto">
              Luxury stone products that blend beauty, craftsmanship, and timeless elegance for
              homes, villas, hotels, resorts, and commercial spaces.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Pills */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.22em] px-5 py-2.5 rounded-full border transition-all duration-400 font-medium ${
                  activeCategory === cat
                    ? "bg-gold border-gold text-onyx shadow-[0_4px_20px_-4px_rgba(201,166,107,0.4)]"
                    : "border-white/10 hover:border-gold/50 text-bone/60 hover:text-bone"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid — 4 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.04}>
              <motion.div
                className="group relative flex flex-col bg-[#111111] border border-white/5 rounded-2xl overflow-hidden h-full transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(201,166,107,0.35)",
                  boxShadow: "0 25px 60px -15px rgba(201,166,107,0.15), 0 10px 30px -10px rgba(0,0,0,0.6)",
                }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                  {/* Gold shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 30%, rgba(201,166,107,0.08) 50%, transparent 70%)",
                    }}
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-gold font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 pt-4">
                  <h3 className="font-display text-lg lg:text-xl text-bone group-hover:text-gold transition-colors duration-400 leading-tight">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[13px] text-bone/45 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Request Quote Button */}
                  <a
                    href={`https://wa.me/919392753192?text=Hello%20GraniteBridge%20Exports%2C%20I%20am%20interested%20in%20requesting%20a%20quote%20for%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[10px] font-semibold uppercase tracking-[0.2em] border transition-all duration-500 bg-transparent border-gold/20 text-gold hover:bg-gold hover:text-onyx hover:border-gold hover:shadow-[0_8px_24px_-6px_rgba(201,166,107,0.35)] active:scale-[0.98]"
                  >
                    <svg
                      className="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                      />
                    </svg>
                    Request Quote
                  </a>
                </div>

                {/* Bottom gold accent line */}
                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-700 ease-out" />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.15}>
          <div className="text-center mt-20">
            <p className="text-bone/40 text-sm mb-6 tracking-wide">
              Looking for a custom stone product? We craft bespoke solutions for architects and
              developers worldwide.
            </p>
            <a
              href="https://wa.me/919392753192?text=Hello%20GraniteBridge%20Exports%2C%20I%20would%20like%20to%20discuss%20a%20custom%20stone%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-full"
            >
              Discuss Custom Requirements
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
