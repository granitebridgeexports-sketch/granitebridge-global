import { createFileRoute, Link } from "@tanstack/react-router";
import shippingImg from "@/assets/shipping.jpg";
import { Reveal } from "@/components/site/Reveal";

const MARKETS = [
  {
    c: "Germany",
    slug: "germany",
    port: "Hamburg · Bremerhaven",
    note: "Strongest European market. Large kitchen, façade, and monument volumes.",
  },
  {
    c: "Spain",
    slug: "spain",
    port: "Valencia · Barcelona",
    note: "Hospitality and residential developer projects across the Mediterranean coast.",
  },
  {
    c: "Italy",
    slug: "italy",
    port: "Genoa · Livorno",
    note: "High-end interiors, hotels, and luxury villa cladding.",
  },
  {
    c: "France",
    slug: "france",
    port: "Le Havre · Marseille",
    note: "Public infrastructure, hospitality, and residential exports.",
  },
  {
    c: "Netherlands",
    slug: "netherlands",
    port: "Rotterdam",
    note: "Distribution hub serving Benelux stone wholesalers.",
  },
  {
    c: "Belgium",
    slug: "belgium",
    port: "Antwerp",
    note: "Memorial and monument trade plus residential projects.",
  },
  {
    c: "Cyprus",
    slug: "cyprus",
    port: "Limassol",
    note: "Hospitality, resort, and villa construction.",
  },
  {
    c: "United Kingdom",
    slug: "united-kingdom",
    port: "Felixstowe · Southampton",
    note: "Premium kitchens, restoration, and commercial cladding.",
  },
  {
    c: "Greece",
    slug: "greece",
    port: "Piraeus",
    note: "Resort, marina, and residential projects across the Aegean.",
  },
  {
    c: "Poland",
    slug: "poland",
    port: "Gdańsk",
    note: "Growing residential and infrastructure demand.",
  },
  {
    c: "UAE",
    slug: "uae",
    port: "Jebel Ali (Dubai) · Khalifa Port",
    note: "Middle East hub for commercial skyscrapers, hospitality construction, and luxury villa builds.",
  },
];

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "Global Markets — Granite Export to Europe & Middle East | GraniteBridge" },
      {
        name: "description",
        content:
          "GraniteBridge exports premium Indian granite to Germany, Spain, Italy, France, Netherlands, Belgium, Cyprus, UK, Greece, Poland, and the Middle East.",
      },
      { property: "og:title", content: "Markets We Serve | GraniteBridge" },
      {
        property: "og:description",
        content: "Leading international markets across Europe and the Middle East.",
      },
      { property: "og:url", content: "/markets" },
    ],
    links: [{ rel: "canonical", href: "/markets" }],
  }),
  component: MarketsPage,
});

function MarketsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-onyx text-bone overflow-hidden">
        <img
          src={shippingImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/80 to-onyx" />
        <div className="container-wide relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Markets We Serve</span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl max-w-4xl leading-[1]">
            Containers shipped to{" "}
            <span className="italic text-gold font-light">leading international markets.</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-bone">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {MARKETS.map((m, i) => (
            <Reveal key={m.c} delay={i * 0.03}>
              <Link
                to="/exporter/$country"
                params={{ country: m.slug }}
                className="group block bg-white border border-[#E5E2DD] p-10 hover:border-gold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 h-full"
              >
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-3xl text-onyx group-hover:text-gold transition-colors duration-300">
                    {m.c}
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-gold group-hover:translate-x-1 transition-all duration-300">
                    View →
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-onyx/40 mt-3">
                  Port of Entry
                </div>
                <div className="text-sm text-onyx/70 mt-1">{m.port}</div>
                <p className="mt-5 text-onyx/60 text-sm leading-relaxed">{m.note}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
