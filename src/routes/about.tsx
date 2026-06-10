import { createFileRoute, Link } from "@tanstack/react-router";
import factoryImg from "@/assets/factory.jpg";
import quarryImg from "@/assets/hero-quarry.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GraniteBridge Exports — Indian Granite Export Company" },
      {
        name: "description",
        content:
          "GraniteBridge Exports Pvt Ltd is a professional Indian granite export company supplying premium natural stone to importers and developers worldwide.",
      },
      { property: "og:title", content: "About GraniteBridge Exports" },
      {
        property: "og:description",
        content:
          "Procurement, quality control, packaging, container loading, and international shipping — under one roof.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] bg-onyx overflow-hidden">
        <img
          src={quarryImg}
          alt="Indian granite quarry"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/40 to-onyx" />
        <div className="relative container-wide h-full flex flex-col justify-end pb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">About the Company</span>
          </div>
          <h1 className="font-display text-bone text-5xl lg:text-7xl max-w-4xl leading-[1]">
            A professional export company —<br />
            <span className="text-gold italic font-light">not a marketplace.</span>
          </h1>
        </div>
      </section>

      <section className="py-28 bg-bone">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl lg:text-5xl text-onyx">
              Built on direct sourcing & operational ownership.
            </h2>
          </Reveal>
          <div className="lg:col-span-7 space-y-6 text-onyx/70 text-lg leading-relaxed">
            <Reveal>
              <p>
                GraniteBridge Exports Pvt Ltd is headquartered in Khammam, Telangana, India with
                strong sourcing relationships across Karnataka, Andhra Pradesh, Tamil Nadu, and
                Rajasthan — the four states that produce the world's most exported granite.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                We are not a broker, a directory, or an online platform. We procure stone directly,
                run quality inspections inside our partner factories, manage export documentation
                in-house, and supervise container loading at Chennai and Krishnapatnam ports.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                The result for international buyers: a single, accountable counterparty for granite
                supply — with consistent quality, predictable lead times, and complete paperwork
                ready for European customs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-onyx text-bone py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img src={factoryImg} alt="Granite factory" className="w-full h-[520px] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Our Promise</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl">
              Container loads delivered on quality, paperwork, and time.
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                "Direct procurement from trusted Indian quarries",
                "Multi-stage quality inspection on every shipment",
                "Export-grade ISPM-15 packaging as standard",
                "Complete documentation: B/L, CoO, MSDS, fumigation",
                "Container loading supervision with photo records",
                "Dedicated export coordinator per account",
              ].map((p) => (
                <li key={p} className="flex gap-4 items-start">
                  <span className="mt-2 size-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-bone/80">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold rounded-full mt-12 inline-flex">
              Work With Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
