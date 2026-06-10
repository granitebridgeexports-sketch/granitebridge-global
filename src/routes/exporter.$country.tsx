import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import shippingImg from "@/assets/shipping.jpg";

const COUNTRIES: Record<string, { name: string; port: string; intro: string; ports: string }> = {
  germany: {
    name: "Germany",
    port: "Hamburg",
    intro:
      "Germany is the most demanding granite market in Europe — precise tolerances, full documentation, ISPM-15 packaging, and exacting finish standards. We've been shipping container loads to German importers, kitchen fabricators, and monument manufacturers for years.",
    ports: "Hamburg, Bremerhaven, Wilhelmshaven",
  },
  spain: {
    name: "Spain",
    port: "Valencia",
    intro:
      "Spain combines hospitality, residential developer demand, and a strong wholesale distribution network. We supply slabs, tiles, and cut-to-size to importers from Valencia to Bilbao.",
    ports: "Valencia, Barcelona, Algeciras, Bilbao",
  },
  italy: {
    name: "Italy",
    port: "Genoa",
    intro:
      "Italy is the global benchmark for stone — and that's exactly why precision-cut, premium-finished Indian granite from GraniteBridge competes here on quality, not just price.",
    ports: "Genoa, Livorno, La Spezia, Naples",
  },
  france: {
    name: "France",
    port: "Le Havre",
    intro:
      "We supply French importers and contractors across the Atlantic and Mediterranean coasts, with documentation prepared for French customs and TVA reporting.",
    ports: "Le Havre, Marseille, Fos-sur-Mer",
  },
  netherlands: {
    name: "Netherlands",
    port: "Rotterdam",
    intro:
      "Rotterdam is Europe's largest port and our key Benelux distribution gateway. Containers cleared and onward-shipped across northern Europe within days.",
    ports: "Rotterdam, Amsterdam",
  },
  belgium: {
    name: "Belgium",
    port: "Antwerp",
    intro:
      "Belgium remains one of Europe's strongest monument and memorial markets. We supply finished monument stone, headstones, and bases to Belgian importers and stonemasons.",
    ports: "Antwerp, Zeebrugge",
  },
  cyprus: {
    name: "Cyprus",
    port: "Limassol",
    intro:
      "Cyprus's resort, marina, and luxury villa construction relies on premium imported stone — we ship direct from Indian ports with minimal transit.",
    ports: "Limassol, Larnaca",
  },
  "united-kingdom": {
    name: "United Kingdom",
    port: "Felixstowe",
    intro:
      "Post-Brexit customs paperwork done right, end to end. We export premium kitchen slabs, monument stone, and architectural cladding to UK importers and fabricators.",
    ports: "Felixstowe, Southampton, London Gateway",
  },
  greece: {
    name: "Greece",
    port: "Piraeus",
    intro:
      "Hospitality, marinas, and high-end residential demand across the Aegean. Direct shipping from Indian ports to Piraeus in 18–22 days.",
    ports: "Piraeus, Thessaloniki",
  },
  poland: {
    name: "Poland",
    port: "Gdańsk",
    intro:
      "Rapidly growing residential and infrastructure demand. We supply Polish importers and contractors with consistent, well-documented container loads.",
    ports: "Gdańsk, Gdynia",
  },
  uae: {
    name: "UAE",
    port: "Jebel Ali (Dubai)",
    intro:
      "The United Arab Emirates is a premier hub for luxury construction and mega-projects. We ship high-grade Indian granite directly to Jebel Ali port, supporting commercial fabricators and developers across Dubai, Sharjah, and Abu Dhabi.",
    ports: "Jebel Ali (Dubai), Port Khalid (Sharjah), Khalifa Port (Abu Dhabi)",
  },
};

interface CountryData {
  name: string;
  port: string;
  intro: string;
  ports: string;
}

export const Route = createFileRoute("/exporter/$country")({
  loader: ({ params }: { params: { country: string } }) => {
    const data = COUNTRIES[params.country];
    if (!data) throw notFound();
    return { country: data, slug: params.country };
  },
  head: ({ loaderData }: { loaderData?: { country: CountryData; slug: string } }) => ({
    meta: [
      {
        title: `Granite Exporter in ${loaderData?.country?.name ?? ""} — Premium Indian Granite | GraniteBridge`,
      },
      {
        name: "description",
        content: `GraniteBridge Exports supplies premium Indian granite slabs, tiles, and monuments to importers and developers in ${loaderData?.country?.name ?? ""}. Direct shipping to ${loaderData?.country?.port ?? ""}.`,
      },
      { property: "og:title", content: `Granite Exporter in ${loaderData?.country?.name ?? ""}` },
      {
        property: "og:description",
        content: `Container loads of premium Indian granite shipped to ${loaderData?.country?.name ?? ""}.`,
      },
      { property: "og:url", content: `/exporter/${loaderData?.slug ?? ""}` },
    ],
    links: [{ rel: "canonical", href: `/exporter/${loaderData?.slug ?? ""}` }],
  }),
  component: CountryPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-bone">
      <Link to="/markets" className="btn-ghost-dark rounded-full">
        View All Markets
      </Link>
    </div>
  ),
});

function CountryPage() {
  const { country: c } = Route.useLoaderData() as { country: CountryData };
  return (
    <>
      <section className="relative pt-40 pb-24 bg-onyx text-bone overflow-hidden">
        <img
          src={shippingImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/85 to-onyx" />
        <div className="container-wide relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Indian Granite Exporter · {c.name}</span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl max-w-4xl leading-[1]">
            Premium Indian granite,{" "}
            <span className="italic text-gold font-light">shipped to {c.name}.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-bone/70 text-lg leading-relaxed">{c.intro}</p>
        </div>
      </section>

      <section className="py-24 bg-bone">
        <div className="container-wide grid gap-8 lg:grid-cols-3">
          {[
            { t: "Discharge Ports", v: c.ports },
            { t: "Typical Transit", v: "18–35 days from Indian load port" },
            {
              t: "Documentation",
              v: "B/L, CoO, MSDS, fumigation, packing list, commercial invoice",
            },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="bg-white border border-[#E5E2DD] p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-500 h-full">
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{b.t}</div>
                <div className="mt-4 font-display text-2xl text-onyx leading-snug">{b.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-onyx text-bone py-24">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl lg:text-5xl">Request a quote for {c.name}.</h2>
            <p className="mt-6 text-bone/65">
              Tell us your destination port and requirements. Our export desk responds within 24
              hours.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <QuoteForm dark />
          </Reveal>
        </div>
      </section>
    </>
  );
}
