import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findProduct, PRODUCTS } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: p ? `${p.name} — Premium ${p.family} Granite | GraniteBridge` : "Granite" },
        { name: "description", content: p?.description ?? "Premium Indian granite for export." },
        { property: "og:title", content: p?.name ?? "Granite" },
        { property: "og:description", content: p?.tagline ?? "" },
        { property: "og:image", content: p?.image ?? "" },
        { property: "og:url", content: `/products/${p?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/products/${p?.slug ?? ""}` }],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-bone">
      <div className="text-center">
        <p className="eyebrow">Not Found</p>
        <h1 className="font-display text-4xl mt-3 text-onyx">This product doesn't exist.</h1>
        <Link to="/products" className="btn-ghost-dark mt-6 inline-flex">View Catalogue</Link>
      </div>
    </div>
  ),
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-20 bg-bone">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-stone">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-8">
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-3">{p.family} Granite · {p.origin}</div>
            <h1 className="font-display text-5xl lg:text-6xl text-onyx leading-[1]">{p.name}</h1>
            <p className="mt-6 text-lg text-onyx/65 italic font-display">{p.tagline}</p>
            <p className="mt-6 text-onyx/70 leading-relaxed">{p.description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Request Quote</Link>
              <Link to="/contact" className="btn-ghost-dark">Request Sample</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-onyx text-bone">
        <div className="container-wide grid gap-12 md:grid-cols-3">
          {([
            { t: "Finishes", v: p.finishes },
            { t: "Thickness", v: p.thickness },
            { t: "Applications", v: p.applications },
          ] as { t: string; v: string[] }[]).map((s) => (
            <div key={s.t}>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-5">{s.t}</div>
              <ul className="space-y-3">
                {s.v.map((item) => (
                  <li key={item} className="text-lg font-display border-b border-white/10 pb-3">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-bone">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-10"><span className="hairline" /><span className="eyebrow">Also from our catalogue</span></div>
          <div className="grid gap-px bg-onyx/10 sm:grid-cols-3 border border-onyx/10">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group bg-bone p-6">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                </div>
                <div className="pt-5">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{r.family}</div>
                  <h3 className="font-display text-xl mt-1 text-onyx">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}