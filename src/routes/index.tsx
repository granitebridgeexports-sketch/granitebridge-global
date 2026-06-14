import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Ship,
  Award,
  Boxes,
  FileCheck,
  Headset,
  Handshake,
  Search,
  Compass,
  Hammer,
  ClipboardCheck,
  Anchor,
  MapPin,
  CheckSquare,
  FileText,
  Clock,
  ExternalLink,
  Globe2,
} from "lucide-react";

import factoryImg from "@/assets/factory.jpg";
import shippingImg from "@/assets/shipping.jpg";
import hotelImg from "@/assets/project-hotel.jpg";
import villaImg from "@/assets/project-villa.jpg";
import towerImg from "@/assets/project-tower.jpg";
import monumentImg from "@/assets/project-monument.jpg";
import { PRODUCTS } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GraniteBridge Exports — Premium Indian Granite for Global Projects" },
      {
        name: "description",
        content:
          "GraniteBridge Exports Pvt Ltd supplies premium Indian granite to importers, distributors, developers and construction companies across Europe and the Middle East.",
      },
      { property: "og:title", content: "GraniteBridge Exports — Premium Indian Granite Worldwide" },
      {
        property: "og:description",
        content: "A company that connects the world's buyers with high-quality Indian granite.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GraniteBridge Exports Pvt Ltd",
          url: "/",
          description:
            "Premium Indian granite export company supplying slabs, tiles, and monuments worldwide.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressRegion: "Telangana",
            addressLocality: "Khammam",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Products />
      <WhyUs />
      <Process />
      <Markets />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#050505] pt-[120px] pb-16 lg:pb-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/hero-showroom.jpg"
          alt="Premium luxury granite showroom with polished Indian stone slabs"
          className="w-full h-full object-cover object-[center_35%] lg:object-[80%_35%]"
        />
        {/* Desktop left-to-right gradient overlay */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        {/* Mobile vertical gradient overlay */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.70) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="mx-auto w-[92%] md:w-[90%] lg:w-full lg:max-w-[1400px] px-0 lg:px-[100px] relative z-10">
        <div className="max-w-[650px] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 w-full">
            <span className="h-px w-6 bg-[#D4AF6A] shrink-0" />
            <span className="text-[10px] md:text-[12px] font-semibold tracking-[2px] md:tracking-[3px] lg:tracking-[4px] text-[#D4AF6A] uppercase text-center leading-[1.6]">
              Bridging India's Finest Granite with Global Markets
            </span>
            <span className="h-px w-6 bg-[#D4AF6A] shrink-0" />
          </div>

          {/* Heading */}
          <h1
            className="font-display text-white text-[1.65rem] md:text-[2.8rem] lg:text-[clamp(2.4rem,3.8vw,4rem)] font-medium leading-[1.35] md:leading-[1.2] tracking-tight mt-5 max-w-[320px] md:max-w-none mx-auto lg:mx-0"
            style={{
              fontFamily: "Playfair Display, Cormorant Garamond, serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            }}
          >
            “A company that connects
            <br />
            the world’s buyers with
            <br />
            high-quality Indian granite.”
          </h1>

          {/* Description */}
          <p className="text-[14px] md:text-[16px] leading-[1.8] text-white/92 mt-6 max-w-[320px] md:max-w-full mx-auto lg:mx-0">
            We source, inspect and export premium granite directly from trusted Indian quarries to
            importers, distributors and construction projects worldwide.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[340px] lg:max-w-none mx-auto lg:mx-0 mt-8">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4AF6A] text-[#111111] rounded-full font-semibold transition-all duration-300 hover:bg-[#E0BB76] hover:-translate-y-[2px] shadow-lg hover:shadow-xl active:translate-y-0 text-xs uppercase tracking-widest"
            >
              Request Quote <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://wa.me/919392753192?text=Hello%20GraniteBridge%20Exports%2C%20I%20am%20interested%20in%20requesting%20a%20commercial%20quote%20for%20Indian%20granite."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-[rgba(212,175,106,0.5)] text-white rounded-full font-semibold transition-all duration-300 hover:border-[#D4AF6A] hover:text-[#D4AF6A] hover:-translate-y-[2px] text-xs uppercase tracking-widest"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust Badges */}
          <div className="w-full pt-8 border-t border-white/10 mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center lg:justify-items-start w-full">
              {[
                { label: "Direct Quarry Sourcing", icon: Search },
                { label: "Quality Inspection", icon: ClipboardCheck },
                { label: "Export Documentation", icon: FileCheck },
                { label: "Worldwide Shipping", icon: Ship },
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start group/badge">
                  <div className="flex size-12 lg:size-14 items-center justify-center rounded-full border border-[#D4AF6A]/60 text-[#D4AF6A] bg-transparent transition-all duration-300 group-hover/badge:bg-[#D4AF6A] group-hover/badge:text-[#111111] group-hover/badge:border-[#D4AF6A] group-hover/badge:scale-105 mb-3">
                    <badge.icon className="size-5 lg:size-6" strokeWidth={1.3} />
                  </div>
                  <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70 group-hover/badge:text-white transition-colors duration-300 text-center lg:text-left">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BADGES = [
  "Export Ready",
  "Quality Inspected",
  "Worldwide Shipping",
  "Competitive Pricing",
  "Dedicated Export Team",
  "Container Loading Support",
  "Reliable Supply Chain",
];

function Marquee() {
  return (
    <div className="bg-onyx border-y border-white/5 py-6 overflow-hidden">
      <div
        className="flex gap-12 animate-[scroll_40s_linear_infinite] whitespace-nowrap"
        style={{ animation: "scroll 45s linear infinite" }}
      >
        {[...BADGES, ...BADGES, ...BADGES].map((b, i) => (
          <span
            key={i}
            className="text-bone/40 text-[11px] uppercase tracking-[0.32em] flex items-center gap-3"
          >
            <span className="size-1 rounded-full bg-gold" />
            {b}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

const STATS = [
  { n: "50+", l: "Granite Varieties" },
  { n: "10+", l: "Countries Served" },
  { n: "100+", l: "Containers Delivered" },
  { n: "500+", l: "Projects Supported" },
  { n: "99%", l: "Client Satisfaction" },
];

function About() {
  return (
    <section className="py-28 lg:py-40 bg-bone">
      <div className="container-wide grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">The Company</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] text-onyx">
            Bridging India's finest quarries with the world's leading projects.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7 lg:pt-4">
          <p className="text-lg leading-relaxed text-onyx/70">
            GraniteBridge Exports Pvt Ltd is a professional Indian granite export company — not a
            broker or marketplace. We procure granite directly from trusted Indian suppliers and
            manufacturing partners, conduct rigorous quality inspections, manage export
            documentation, container loading, and international shipping.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-onyx/70">
            We take full responsibility for quality, procurement, customer support, and timely
            delivery — built for buyers handling large commercial orders and long-term supply
            contracts.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-10 border-t border-onyx/10 pt-12">
            {STATS.map((s) => (
              <div key={s.l} className="group/stat">
                <div className="font-display text-4xl text-onyx group-hover/stat:text-gold transition-colors duration-300">
                  {s.n}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-onyx/50 group-hover/stat:text-onyx transition-colors duration-300">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="py-28 lg:py-40 bg-onyx text-bone">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Catalogue</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl max-w-3xl">
              Premium granite, curated for international specification.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/products" className="btn-ghost-light">
              View Full Catalogue
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative flex flex-col justify-between bg-[#1A1A1A] border border-white/5 hover:border-gold/30 p-6 h-full overflow-hidden transition-all duration-500 shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden relative mb-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0F0F0F]/15 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                        {p.family} Granite
                      </span>
                      <span className="text-[10px] text-bone/40">
                        {p.origin.split(",")[1] || p.origin}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-bone group-hover:text-gold transition-colors duration-300">
                      {p.name}
                    </h3>
                    {/* Best For */}
                    <div className="flex items-center gap-1.5 flex-wrap mt-2.5">
                      <span className="text-[9px] uppercase tracking-[0.22em] text-gold/70 font-semibold shrink-0">
                        Best For
                      </span>
                      {p.bestFor.map((label) => (
                        <span
                          key={label}
                          className="text-[9px] uppercase tracking-[0.16em] text-bone/50 border border-white/10 px-2 py-0.5 rounded-full"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-bone/50 mt-3 leading-relaxed">{p.description}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-2">
                  <div className="flex justify-between text-[11px] text-bone/40">
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
      </div>
    </section>
  );
}

const WHY = [
  {
    icon: Award,
    t: "Direct Quarry Sourcing",
    d: "Direct partnerships with premier quarries in Karnataka, Andhra Pradesh, Tamil Nadu, and Rajasthan. We source select block-level materials, ensuring control over color consistency and competitive direct pricing.",
  },
  {
    icon: ShieldCheck,
    t: "3-Stage Quality Inspections",
    d: "Rigorous inspections at three key stages: block selection, slab sizing and polishing uniformity, and a final pre-loading check. Every slab is verified for hairline cracks, thickness tolerance, and gloss levels.",
  },
  {
    icon: Boxes,
    t: "Seaworthy ISPM-15 Packaging",
    d: "Heavy-duty wooden A-frame crates, heat-treated and stamped per international ISPM-15 regulations. Reinforced with steel straps, corner guards, and high-density rubber pads to eliminate transit movement.",
  },
  {
    icon: FileText,
    t: "Complete Export Documentation",
    d: "Zero customs clearance delays. We prepare all international trade paperwork, including custom invoices, packing lists, Certificates of Origin, fumigation reports, and cargo insurance documentation.",
  },
  {
    icon: ClipboardCheck,
    t: "Supervised Container Loading",
    d: "Every container is loaded under our direct supervision at port terminal gates. We verify container floor integrity, weight distribution, lashing security, and provide real-time photographic loading reports.",
  },
  {
    icon: Headset,
    t: "Dedicated Account Support",
    d: "No call centers or generic broker emails. A dedicated trade coordinator manages your account, providing weekly production schedules, ocean freight bookings, and real-time transit tracking.",
  },
];

function WhyUs() {
  return (
    <section className="py-28 lg:py-40 bg-bone">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Why GraniteBridge</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl max-w-3xl text-onyx">
            Built for buyers who demand consistency, paperwork, and follow-through.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 0.04}>
              <div className="bg-white border border-[#E5E2DD] hover:border-gold/40 p-8 lg:p-10 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#F7F5F2] text-gold mb-8 transition-transform duration-500 hover:rotate-6">
                    <w.icon className="size-5" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl text-onyx">{w.t}</h3>
                  <p className="mt-3 text-sm text-onyx/60 leading-relaxed">{w.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    icon: Search,
    t: "Material Selection",
    d: "Inquiry intake. We match your specifications to the right Indian quarry and variety.",
  },
  {
    n: "02",
    icon: Handshake,
    t: "Procurement",
    d: "Direct purchase from our trusted quarry and factory partners — no intermediaries.",
  },
  {
    n: "03",
    icon: Hammer,
    t: "Processing",
    d: "Cutting, polishing, and finishing in our partner factories to your specifications.",
  },
  {
    n: "04",
    icon: ShieldCheck,
    t: "Quality Inspection",
    d: "Surface, dimensions, finish, and tolerance verification by our QC team.",
  },
  {
    n: "05",
    icon: Boxes,
    t: "Packaging",
    d: "Export-grade wooden crates with fumigation, edge protection, and lashing.",
  },
  {
    n: "06",
    icon: ClipboardCheck,
    t: "Container Loading",
    d: "Loading supervision at Chennai and Krishnapatnam ports with photo documentation.",
  },
  {
    n: "07",
    icon: FileText,
    t: "Export Documentation",
    d: "Bill of lading, certificate of origin, fumigation, MSDS, commercial invoices.",
  },
  {
    n: "08",
    icon: Ship,
    t: "International Shipping",
    d: "Booking, tracking, and coordination with leading global freight forwarders.",
  },
  {
    n: "09",
    icon: MapPin,
    t: "Delivery",
    d: "Customs clearance support and final handover at your destination port.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="py-28 lg:py-40 bg-[#0c0c0c] text-bone relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <img src={factoryImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0c0c0c]/85 to-[#0c0c0c]" />
      </div>
      <div className="container-wide relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">The Export Process</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl max-w-3xl">
            From quarry to your destination port — nine deliberate stages.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="group relative border border-white/5 bg-[#1A1A1A]/35 backdrop-blur-sm p-8 hover:border-gold/40 hover:bg-[#1A1A1A]/60 transition-all duration-500 h-full shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-display text-5xl text-gold/20 group-hover:text-gold transition-all duration-500">
                      {s.n}
                    </div>
                    <s.icon
                      className="size-6 text-gold/40 group-hover:text-gold group-hover:scale-110 transition-all duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-2xl text-bone group-hover:text-gold transition-colors duration-300">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-sm text-bone/60 leading-relaxed">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PORTS = [
  {
    name: "UAE",
    port: "Port of Jebel Ali (Dubai)",
    x: 580,
    y: 260,
    days: 12,
    region: "Middle East",
    transit: "Direct Ocean Freight",
  },
  {
    name: "Cyprus",
    port: "Port of Limassol",
    x: 460,
    y: 220,
    days: 22,
    region: "Eastern Mediterranean",
    transit: "Feeder Connection",
  },
  {
    name: "Italy",
    port: "Port of Genoa",
    x: 390,
    y: 180,
    days: 20,
    region: "Mediterranean",
    transit: "Direct Ocean Freight",
  },
  {
    name: "Spain",
    port: "Port of Valencia",
    x: 330,
    y: 195,
    days: 24,
    region: "Western Mediterranean",
    transit: "Direct Ocean Freight",
  },
  {
    name: "France",
    port: "Port of Marseille",
    x: 370,
    y: 175,
    days: 22,
    region: "Western Mediterranean",
    transit: "Transshipment",
  },
  {
    name: "Belgium",
    port: "Port of Antwerp",
    x: 375,
    y: 140,
    days: 30,
    region: "North Europe",
    transit: "Direct Ocean Freight",
  },
  {
    name: "Netherlands",
    port: "Port of Rotterdam",
    x: 385,
    y: 135,
    days: 29,
    region: "North Europe",
    transit: "Direct Ocean Freight",
  },
  {
    name: "Germany",
    port: "Port of Hamburg",
    x: 405,
    y: 130,
    days: 28,
    region: "North Europe",
    transit: "Direct Ocean Freight",
  },
];

function Markets() {
  const [hoveredPort, setHoveredPort] = useState<(typeof PORTS)[0] | null>(null);

  return (
    <section className="py-28 lg:py-40 bg-onyx text-bone relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A66B_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Export Markets</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl mb-6">
              Global logistics, predictable transit times.
            </h2>
            <p className="text-bone/70 leading-relaxed">
              We ship container loads from Chennai, Krishnapatnam, and Tuticorin ports directly to
              key global trading hubs. Hover over any destination port to check standard B2B sea
              transit timelines.
            </p>

            <div className="mt-8 p-6 bg-[#1A1A1A] border border-white/5 rounded-2xl min-h-[160px] flex flex-col justify-center">
              {hoveredPort ? (
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                      {hoveredPort.region}
                    </span>
                    <span className="text-[10px] text-bone/40 flex items-center gap-1">
                      <Clock className="size-3" /> {hoveredPort.days} Days Transit
                    </span>
                  </div>
                  <h4 className="font-display text-2xl text-bone mb-1">{hoveredPort.name}</h4>
                  <p className="text-sm text-gold/80 font-medium mb-2">{hoveredPort.port}</p>
                  <p className="text-xs text-bone/50">
                    {hoveredPort.transit} route from Indian East Coast ports.
                  </p>
                </div>
              ) : (
                <div className="text-center text-bone/40 text-sm py-4">
                  <Globe2
                    className="size-8 text-gold/30 mx-auto mb-3 animate-pulse"
                    strokeWidth={1}
                  />
                  Hover over the shipping destination ports on the map to view transit details.
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {PORTS.map((p) => (
                <button
                  key={p.name}
                  onMouseEnter={() => setHoveredPort(p)}
                  onMouseLeave={() => setHoveredPort(null)}
                  className={`text-[10px] uppercase tracking-[0.2em] px-3.5 py-2 rounded-full border transition-all duration-300 ${
                    hoveredPort?.name === p.name
                      ? "bg-gold border-gold text-onyx font-semibold"
                      : "border-white/10 hover:border-gold/50 text-bone/70"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-8">
            <div className="relative aspect-[16/9] bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden shadow-2xl p-4">
              <svg viewBox="250 80 550 280" className="w-full h-full select-none">
                <style>{`
                  @keyframes pulseGlow {
                    0% { r: 4px; opacity: 0.8; }
                    50% { r: 12px; opacity: 0.2; }
                    100% { r: 4px; opacity: 0.8; }
                  }
                  .pulse-ring {
                    transform-origin: center;
                    animation: pulseGlow 2.5s infinite ease-in-out;
                  }
                `}</style>

                {/* Grid Pattern in SVG background */}
                <defs>
                  <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.75" fill="rgba(255,255,255,0.06)" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#map-grid)" />

                {/* Ocean Shipping Lanes */}
                {PORTS.map((p) => {
                  // Quad curves from India (700, 310) to ports
                  const dx = 700 - p.x;
                  const dy = 310 - p.y;
                  const ctrlX = 700 - dx * 0.5 - dy * 0.1;
                  const ctrlY = 310 - dy * 0.5 - dx * 0.05;
                  const isHovered = hoveredPort?.name === p.name;
                  return (
                    <g key={p.name}>
                      <path
                        d={`M 700 310 Q ${ctrlX} ${ctrlY} ${p.x} ${p.y}`}
                        fill="none"
                        stroke={isHovered ? "#C9A66B" : "rgba(201, 166, 107, 0.15)"}
                        strokeWidth={isHovered ? 2 : 1}
                        strokeDasharray={isHovered ? "5, 3" : "4, 6"}
                        className="transition-all duration-350"
                      />
                      {/* Interactive hover trigger area */}
                      <path
                        d={`M 700 310 Q ${ctrlX} ${ctrlY} ${p.x} ${p.y}`}
                        fill="none"
                        stroke="transparent"
                        strokeWidth={12}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredPort(p)}
                        onMouseLeave={() => setHoveredPort(null)}
                      />
                    </g>
                  );
                })}

                {/* India Port (Origin Node) */}
                <g transform="translate(700, 310)">
                  <circle cx="0" cy="0" r="10" fill="rgba(201,166,107,0.15)" />
                  <circle cx="0" cy="0" r="4" fill="#C9A66B" />
                  <text
                    x="10"
                    y="4"
                    fill="#C9A66B"
                    className="text-[9px] uppercase tracking-[0.2em] font-bold"
                  >
                    Origin (IN)
                  </text>
                </g>

                {/* Destination Port Nodes */}
                {PORTS.map((p) => {
                  const isHovered = hoveredPort?.name === p.name;
                  return (
                    <g
                      key={p.name}
                      transform={`translate(${p.x}, ${p.y})`}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPort(p)}
                      onMouseLeave={() => setHoveredPort(null)}
                    >
                      {/* Pulse Ring */}
                      <circle
                        cx="0"
                        cy="0"
                        r="8"
                        className="pulse-ring"
                        fill={isHovered ? "#C9A66B" : "rgba(201,166,107,0.4)"}
                      />
                      {/* Core Dot */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isHovered ? 4.5 : 3.5}
                        fill={isHovered ? "#FFFFFF" : "#C9A66B"}
                        className="transition-all duration-300"
                      />
                      {/* Port Label */}
                      <text
                        x={p.name === "Cyprus" ? -45 : 8}
                        y={p.name === "UAE" ? -8 : 4}
                        fill={isHovered ? "#FFFFFF" : "rgba(247, 245, 242, 0.45)"}
                        className={`text-[8px] font-semibold tracking-wider transition-colors duration-300 ${isHovered ? "font-bold text-[9px]" : ""}`}
                      >
                        {p.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Ocean Overlay Details */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/5 rounded px-3.5 py-2 text-[10px] text-bone/50 tracking-wider flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold inline-block animate-pulse" />
                Indian Port Terminals Direct Connection
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: hotelImg, t: "Hotels & Resorts" },
  { src: villaImg, t: "Luxury Villas" },
  { src: towerImg, t: "Commercial Towers" },
  { src: monumentImg, t: "Monuments" },
];

function Gallery() {
  return (
    <section className="py-28 lg:py-40 bg-onyx text-bone">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Projects</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl max-w-2xl">
              Stone that ends up in extraordinary places.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.t} delay={i * 0.06}>
              <figure className="group relative overflow-hidden aspect-[3/4] border border-white/5 hover:border-gold/30 transition-colors duration-500 shadow-2xl">
                <img
                  src={g.src}
                  alt={g.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent group-hover:via-onyx/20 transition-all duration-700" />
                <figcaption className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-1">
                    Project Type
                  </div>
                  <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors duration-300">
                    {g.t}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    q: "Three years of containers without a single quality dispute. GraniteBridge has become an extension of our procurement team.",
    n: "Klaus Reinhardt",
    c: "Reinhardt Naturstein GmbH",
    co: "Germany",
  },
  {
    q: "Their export documentation is the best we've seen out of India. Customs clearance is now a non-event.",
    n: "Elena Marchetti",
    c: "Pietre Italiane SRL",
    co: "Italy",
  },
  {
    q: "Honest pricing, predictable lead times, and a coordinator who actually responds. Rare combination.",
    n: "Andreas Papadopoulos",
    c: "Hellenic Stone Imports",
    co: "Greece",
  },
];

function Testimonials() {
  return (
    <section className="py-28 lg:py-40 bg-bone">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Voices from Our Buyers</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl max-w-3xl text-onyx">
            Long-term partners across Europe.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <blockquote className="bg-white border border-[#E5E2DD] p-8 lg:p-10 h-full flex flex-col hover:border-gold/30 hover:shadow-lg transition-all duration-500">
                <svg className="size-8 text-gold/30 mb-6" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M12 8H4v8h4c0 4-2 6-4 6v4c6 0 12-4 12-12V8zm16 0h-8v8h4c0 4-2 6-4 6v4c6 0 12-4 12-12V8h-4z" />
                </svg>
                <p className="font-display text-lg leading-relaxed text-onyx flex-1">"{t.q}"</p>
                <footer className="mt-8 pt-6 border-t border-[#E5E2DD]">
                  <div className="font-semibold text-onyx text-sm">{t.n}</div>
                  <div className="text-xs text-onyx/50 mt-1">
                    {t.c} · {t.co}
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What is your minimum order quantity?",
    a: "We typically work in container loads — one 20ft or 40ft container minimum. For new buyers we can structure trial orders with mixed varieties.",
  },
  {
    q: "Do you provide samples?",
    a: "Yes. We ship A4 or 10×10cm samples of any variety in our catalogue. Sample cost is credited against your first commercial order.",
  },
  {
    q: "Which countries do you export to?",
    a: "Active markets include Germany, Spain, Italy, France, Netherlands, Belgium, Cyprus, the UK, Greece, Poland, and the Middle East. We can ship to any port served by major container lines.",
  },
  {
    q: "What payment methods are accepted?",
    a: "30% advance via T/T, balance against scanned bill of lading. Letters of Credit (irrevocable, at sight) are accepted for orders above three containers.",
  },
  {
    q: "What are typical shipping timelines?",
    a: "Production: 20–35 days depending on finish and volume. Sea freight to North Europe: 28–35 days; to the Mediterranean: 18–25 days.",
  },
  {
    q: "Can you produce custom sizes and finishes?",
    a: "Yes. Cut-to-size, calibrated thicknesses, polished/honed/leathered/flamed/brushed finishes, and bespoke edge profiles are routine work.",
  },
  {
    q: "What are your packaging standards?",
    a: "Heat-treated wooden A-frame crates with foam edge protection, plastic strapping, and certified ISPM-15 fumigation marks.",
  },
  {
    q: "What's a typical container capacity?",
    a: "A 20ft container holds approximately 22–25 tons of slabs; a 40ft holds 26–28 tons. Cut-to-size and monument shipments vary by piece weight.",
  },
];

function FAQ() {
  return (
    <section className="py-28 lg:py-40 bg-bone border-t border-onyx/5">
      <div className="container-wide grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">FAQ</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-onyx">
            Common questions from international buyers.
          </h2>
          <p className="mt-6 text-onyx/60">
            Don't see your question? Our export desk replies within 24 hours.
          </p>
          <Link to="/contact" className="btn-ghost-dark rounded-full mt-8 inline-flex">
            Ask Our Team
          </Link>
        </Reveal>
        <div className="lg:col-span-8">
          <div className="divide-y divide-onyx/10 border-y border-onyx/10">
            {FAQS.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display text-xl text-onyx pr-6 group-hover:text-gold transition-colors duration-300">
                    {f.q}
                  </span>
                  <span className="size-8 rounded-full border border-onyx/20 flex items-center justify-center text-onyx/60 group-hover:border-gold group-hover:text-gold group-open:rotate-45 transition-all duration-300">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-onyx/65 leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const contactDetails = (
    <div className="mt-12 space-y-4 text-sm">
      <div>
        <span className="text-bone/40 text-xs uppercase tracking-[0.22em]">Email</span>
        <div className="mt-1">granitebridgeexports@gmail.com</div>
      </div>
      <div>
        <span className="text-bone/40 text-xs uppercase tracking-[0.22em]">Phone / WhatsApp</span>
        <div className="mt-1.5 space-y-1 text-bone">
          <a href="tel:+919392753192" className="block hover:text-gold transition-colors">
            +91 93927 53192
          </a>
          <a href="tel:+919492442269" className="block hover:text-gold transition-colors">
            +91 94924 42269
          </a>
        </div>
      </div>
      <div>
        <span className="text-bone/40 text-xs uppercase tracking-[0.22em]">Directors</span>
        <div className="mt-1.5 space-y-1 text-bone">
          <div>RAYALA SAI SRUJAN</div>
          <div>KANDHIMALLA SAI KARTHIK</div>
        </div>
      </div>
      <div>
        <span className="text-bone/40 text-xs uppercase tracking-[0.22em]">Headquarters</span>
        <div className="mt-1">Khammam · Telangana · India</div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="bg-onyx text-bone py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={shippingImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/80 to-onyx" />
      </div>
      <div className="container-wide relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Start a Conversation</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
              Get a quotation within <span className="text-gold italic">24 hours.</span>
            </h2>
            <p className="mt-6 text-bone/65 leading-relaxed max-w-md">
              Tell us about your project, destination port, and requirements. A dedicated export
              coordinator will respond — direct, no call centers.
            </p>
            <div className="hidden lg:block">{contactDetails}</div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-7">
          <QuoteForm dark />
          <div className="block lg:hidden mt-12">{contactDetails}</div>
        </Reveal>
      </div>
    </section>
  );
}
