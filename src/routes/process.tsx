import { createFileRoute, Link } from "@tanstack/react-router";
import factoryImg from "@/assets/factory.jpg";
import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  { n: "01", t: "Material Selection", d: "We translate your specification into the right Indian variety, quarry, and finish. Mood boards, samples, and technical data sheets included." },
  { n: "02", t: "Procurement", d: "Direct purchase from our trusted quarry and factory network — no intermediaries, no margin stacking." },
  { n: "03", t: "Processing", d: "Cutting, polishing, calibration, and edge work in our partner factories. Production typically 20–35 days." },
  { n: "04", t: "Quality Inspection", d: "Surface, dimensions, finish, thickness tolerance, and colour matching verified on every slab and piece." },
  { n: "05", t: "Packaging", d: "Heat-treated ISPM-15 wooden A-frame crates, foam edge protection, and lashing for sea freight." },
  { n: "06", t: "Container Loading", d: "Loading supervised at Chennai or Krishnapatnam. Photo and video records sent to you." },
  { n: "07", t: "Export Documentation", d: "Bill of lading, CoO, MSDS, fumigation, commercial invoice, packing list — all paperwork prepared in-house." },
  { n: "08", t: "International Shipping", d: "Booking and tracking with major carriers: MSC, Maersk, CMA CGM, Hapag-Lloyd." },
  { n: "09", t: "Delivery", d: "Customs clearance coordination and handover at your destination port. Quality complaint resolution within 5 days." },
];

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Export Process — How GraniteBridge Delivers Container Loads | GraniteBridge" },
      { name: "description", content: "Nine deliberate stages from quarry selection to delivery at your destination port. Quality, documentation, and timing under one roof." },
      { property: "og:title", content: "Granite Export Process | GraniteBridge" },
      { property: "og:description", content: "From quarry to your destination port — nine deliberate stages." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-onyx text-bone overflow-hidden">
        <img src={factoryImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/85 to-onyx" />
        <div className="container-wide relative">
          <div className="flex items-center gap-3 mb-6"><span className="hairline" /><span className="eyebrow">The Export Process</span></div>
          <h1 className="font-display text-5xl lg:text-7xl max-w-4xl leading-[1]">
            Nine stages.<br/><span className="italic text-gold font-light">One accountable team.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-onyx text-bone">
        <div className="container-wide grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="group relative border border-white/5 bg-[#1A1A1A]/35 backdrop-blur-sm p-10 hover:border-gold/40 hover:bg-[#1A1A1A]/60 transition-all duration-500 h-full shadow-lg">
                <div className="font-display text-6xl text-gold/20 group-hover:text-gold transition-all duration-500">{s.n}</div>
                <h2 className="font-display text-2xl mt-4 text-bone group-hover:text-gold transition-colors duration-300">{s.t}</h2>
                <p className="mt-3 text-sm text-bone/60 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container-wide mt-20 text-center">
          <Link to="/contact" className="btn-gold rounded-full">Start Your Order</Link>
        </div>
      </section>
    </>
  );
}
