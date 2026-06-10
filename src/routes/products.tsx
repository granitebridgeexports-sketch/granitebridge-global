import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  meta: () => [
    { title: "Granite Catalogue — Black, White, Grey, Brown, Red & Monument | GraniteBridge" },
    { name: "description", content: "Browse our premium Indian granite catalogue — Absolute Black, Kashmir White, Steel Grey, Tan Brown, Imperial Red, and Monument series. Slabs, tiles, cut-to-size." },
    { property: "og:title", content: "Granite Catalogue | GraniteBridge Exports" },
    { property: "og:description", content: "Premium Indian granite — slabs, tiles, monuments — ready for international export." },
    { property: "og:url", content: "/products" },
  ],
  links: () => [{ rel: "canonical", href: "/products" }],
  component: ProductsPage,
} as any);

function ProductsPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-bone border-b border-onyx/5">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">Catalogue</span></div>
          <h1 className="font-display text-5xl lg:text-7xl max-w-4xl text-onyx leading-[1]">
            Premium Indian granite, <span className="italic text-gold">curated for export.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-onyx/65 text-lg leading-relaxed">
            Six core families. Fifty plus varieties. Available as slabs, tiles, cut-to-size, and finished monuments — packed in ISPM-15 crates and ready for container shipment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bone">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link to="/products/$slug" params={{ slug: p.slug }} className="group block bg-white border border-[#E5E2DD] p-6 hover:border-gold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-onyx/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="pt-6 flex items-start justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-2">{p.family} Granite</div>
                    <h2 className="font-display text-2xl text-onyx group-hover:text-gold transition-colors duration-300">{p.name}</h2>
                    <p className="text-sm text-onyx/55 mt-2 max-w-xs leading-relaxed">{p.tagline}</p>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-full border border-onyx/15 text-onyx/40 group-hover:border-gold group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 mt-1">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
