import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Granite Catalogue — Black, White, Grey, Brown, Red & Monument | GraniteBridge" },
      {
        name: "description",
        content:
          "Browse our premium Indian granite catalogue — Absolute Black, Kashmir White, Steel Grey, Tan Brown, Imperial Red, and Monument series. Slabs, tiles, cut-to-size.",
      },
      { property: "og:title", content: "Granite Catalogue | GraniteBridge Exports" },
      {
        property: "og:description",
        content:
          "Premium Indian granite — slabs, tiles, monuments — ready for international export.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-bone border-b border-onyx/5">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Catalogue</span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl max-w-4xl text-onyx leading-[1]">
            Premium Indian granite, <span className="italic text-gold">curated for export.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-onyx/65 text-lg leading-relaxed">
            Six core families. Fifty plus varieties. Available as slabs, tiles, cut-to-size, and
            finished monuments — packed in ISPM-15 crates and ready for container shipment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bone">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col justify-between bg-white border border-[#E5E2DD] p-6 hover:border-gold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 h-full"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden relative mb-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-onyx/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                        {p.family} Granite
                      </span>
                      <span className="text-[10px] text-onyx/50">
                        {p.origin.split(",")[1] || p.origin}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl text-onyx group-hover:text-gold transition-colors duration-300">
                      {p.name}
                    </h2>
                    <p className="text-sm text-onyx/55 mt-2 leading-relaxed">{p.tagline}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E2DD] flex flex-col gap-2">
                  <div className="flex justify-between text-[11px] text-onyx/50">
                    <span>Thickness: {p.thickness.slice(0, 2).join(" / ")}</span>
                    <span>Finishes: {p.finishes.slice(0, 2).join(", ")}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-gold mt-1">
                    <span>View Specifications</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                      Inquire Now <ArrowRight className="size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
