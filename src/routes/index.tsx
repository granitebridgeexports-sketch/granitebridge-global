import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Ship,
  Award,
  Globe2,
  Boxes,
  FileCheck,
  Headset,
  Handshake,
} from "lucide-react";

import heroImg from "@/assets/hero-quarry.jpg";
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
  meta: () => [
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
  links: () => [{ rel: "canonical", href: "/" }],
  scripts: () => [
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-onyx">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img src={heroImg} alt="Indian granite quarry at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/40 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/70 via-transparent to-transparent" />
      </motion.div>

      <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="hairline" />
            <span className="eyebrow">Indian Granite · Global Reach</span>
          </div>
          <h1 className="font-display text-bone text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
            Premium Indian Granite
            <span className="block text-gold italic font-light">for global projects.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 leading-relaxed">
            A company that connects the world's buyers with high-quality Indian granite.
            We procure, inspect, package, and ship container loads to importers,
            distributors, and developers across Europe and beyond.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-gold">
              Request a Quote <ArrowRight className="size-4" />
            </Link>
            <Link to="/products" className="btn-ghost-light">
              Explore Catalogue
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-end gap-2 text-bone/40 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <div className="h-12 w-px bg-bone/30 animate-pulse" />
      </motion.div>
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
      <div className="flex gap-12 animate-[scroll_40s_linear_infinite] whitespace-nowrap"
        style={{ animation: "scroll 45s linear infinite" }}>
        {[...BADGES, ...BADGES, ...BADGES].map((b, i) => (
          <span key={i} className="text-bone/40 text-[11px] uppercase tracking-[0.32em] flex items-center gap-3">
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
            GraniteBridge Exports Pvt Ltd is a professional Indian granite export
            company — not a broker or marketplace. We procure granite directly from
            trusted Indian suppliers and manufacturing partners, conduct rigorous
            quality inspections, manage export documentation, container loading, and
            international shipping.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-onyx/70">
            We take full responsibility for quality, procurement, customer support,
            and timely delivery — built for buyers handling large commercial orders
            and long-term supply contracts.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-10 border-t border-onyx/10 pt-12">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-onyx">{s.n}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-onyx/50">
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

        <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3 border border-white/5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative block bg-onyx p-8 h-full overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="pt-6 flex items-start justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-2">{p.family} Granite</div>
                    <h3 className="font-display text-2xl text-bone">{p.name}</h3>
                    <p className="text-sm text-bone/50 mt-2 max-w-xs">{p.tagline}</p>
                  </div>
                  <ArrowRight className="size-5 text-bone/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
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
  { icon: ShieldCheck, t: "Quality Assurance", d: "Every shipment undergoes strict multi-stage inspection before container loading." },
  { icon: Globe2, t: "Global Export Experience", d: "Professional handling of international orders to 10+ countries across Europe and the Middle East." },
  { icon: Award, t: "Competitive Pricing", d: "Direct procurement from trusted Indian quarries removes intermediaries and protects your margin." },
  { icon: FileCheck, t: "Export Documentation", d: "Complete paperwork — invoices, packing lists, certificates of origin, fumigation, MSDS." },
  { icon: Ship, t: "Reliable Logistics", d: "End-to-end coordination of container loading, freight booking, and port operations." },
  { icon: Headset, t: "Dedicated Support", d: "A single export coordinator owns your account from inquiry through final delivery." },
  { icon: Boxes, t: "Custom Orders", d: "Tailored cut-to-size, finishes, packaging, and bespoke project specifications." },
  { icon: Handshake, t: "Long-Term Partnerships", d: "Built for repeat container orders, framework supply contracts, and trusted relationships." },
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

        <div className="mt-20 grid gap-px bg-onyx/10 sm:grid-cols-2 lg:grid-cols-4 border border-onyx/10">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 0.04}>
              <div className="bg-bone p-8 lg:p-10 h-full">
                <w.icon className="size-7 text-gold mb-8" strokeWidth={1.2} />
                <h3 className="font-display text-xl text-onyx">{w.t}</h3>
                <p className="mt-3 text-sm text-onyx/60 leading-relaxed">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Material Selection", d: "Inquiry intake. We match your specifications to the right Indian quarry and variety." },
  { n: "02", t: "Procurement", d: "Direct purchase from our trusted quarry and factory partners — no intermediaries." },
  { n: "03", t: "Processing", d: "Cutting, polishing, and finishing in our partner factories to your specifications." },
  { n: "04", t: "Quality Inspection", d: "Surface, dimensions, finish, and tolerance verification by our QC team." },
  { n: "05", t: "Packaging", d: "Export-grade wooden crates with fumigation, edge protection, and lashing." },
  { n: "06", t: "Container Loading", d: "Loading supervision at Chennai and Krishnapatnam ports with photo documentation." },
  { n: "07", t: "Export Documentation", d: "Bill of lading, certificate of origin, fumigation, MSDS, commercial invoices." },
  { n: "08", t: "International Shipping", d: "Booking, tracking, and coordination with leading global freight forwarders." },
  { n: "09", t: "Delivery", d: "Customs clearance support and final handover at your destination port." },
];

function Process() {
  return (
    <section id="process" className="py-28 lg:py-40 bg-[#0c0c0c] text-bone relative overflow-hidden">
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
              <div className="group relative border border-white/10 p-8 hover:border-gold/60 transition-colors duration-500 h-full">
                <div className="font-display text-5xl text-gold/30 group-hover:text-gold transition-colors">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl mt-4">{s.t}</h3>
                <p className="mt-3 text-sm text-bone/55 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const COUNTRIES = [
  "Germany","Spain","Italy","France","Netherlands","Belgium",
  "Cyprus","United Kingdom","Greece","Poland","UAE","Saudi Arabia",
];

function Markets() {
  return (
    <section className="py-28 lg:py-40 bg-bone">
      <div className="container-wide grid gap-16 lg:grid-cols-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Countries We Serve</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-onyx">
            Trusted by importers across Europe & the Middle East.
          </h2>
          <p className="mt-6 text-onyx/65 leading-relaxed max-w-md">
            Our containers ship from Chennai, Krishnapatnam, and Tuticorin to leading
            European ports — Hamburg, Antwerp, Valencia, Genoa, Piraeus, and Felixstowe.
          </p>
          <Link to="/contact" className="btn-ghost-dark mt-10 inline-flex">
            Discuss your market
          </Link>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative aspect-[5/4] bg-onyx text-bone overflow-hidden">
            <img src={shippingImg} alt="Container port at night" className="absolute inset-0 h-full w-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-onyx via-onyx/60 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {COUNTRIES.map((c) => (
                  <div key={c} className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-gold" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
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
              <figure className="group relative overflow-hidden aspect-[3/4]">
                <img
                  src={g.src}
                  alt={g.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                <figcaption className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-1">Project Type</div>
                  <div className="font-display text-2xl">{g.t}</div>
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

        <div className="mt-16 grid gap-px bg-onyx/10 md:grid-cols-3 border border-onyx/10">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <blockquote className="bg-bone p-10 h-full flex flex-col">
                <svg className="size-8 text-gold mb-6" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M12 8H4v8h4c0 4-2 6-4 6v4c6 0 12-4 12-12V8zm16 0h-8v8h4c0 4-2 6-4 6v4c6 0 12-4 12-12V8h-4z" />
                </svg>
                <p className="font-display text-xl leading-snug text-onyx flex-1">"{t.q}"</p>
                <footer className="mt-8 pt-6 border-t border-onyx/10">
                  <div className="font-medium text-onyx text-sm">{t.n}</div>
                  <div className="text-xs text-onyx/50 mt-1">{t.c} · {t.co}</div>
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
  { q: "What is your minimum order quantity?", a: "We typically work in container loads — one 20ft or 40ft container minimum. For new buyers we can structure trial orders with mixed varieties." },
  { q: "Do you provide samples?", a: "Yes. We ship A4 or 10×10cm samples of any variety in our catalogue. Sample cost is credited against your first commercial order." },
  { q: "Which countries do you export to?", a: "Active markets include Germany, Spain, Italy, France, Netherlands, Belgium, Cyprus, the UK, Greece, Poland, and the Middle East. We can ship to any port served by major container lines." },
  { q: "What payment methods are accepted?", a: "30% advance via T/T, balance against scanned bill of lading. Letters of Credit (irrevocable, at sight) are accepted for orders above three containers." },
  { q: "What are typical shipping timelines?", a: "Production: 20–35 days depending on finish and volume. Sea freight to North Europe: 28–35 days; to the Mediterranean: 18–25 days." },
  { q: "Can you produce custom sizes and finishes?", a: "Yes. Cut-to-size, calibrated thicknesses, polished/honed/leathered/flamed/brushed finishes, and bespoke edge profiles are routine work." },
  { q: "What are your packaging standards?", a: "Heat-treated wooden A-frame crates with foam edge protection, plastic strapping, and certified ISPM-15 fumigation marks." },
  { q: "What's a typical container capacity?", a: "A 20ft container holds approximately 22–25 tons of slabs; a 40ft holds 26–28 tons. Cut-to-size and monument shipments vary by piece weight." },
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
          <Link to="/contact" className="btn-ghost-dark mt-8 inline-flex">Ask Our Team</Link>
        </Reveal>
        <div className="lg:col-span-8">
          <div className="divide-y divide-onyx/10 border-y border-onyx/10">
            {FAQS.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display text-xl text-onyx pr-6">{f.q}</span>
                  <span className="size-8 border border-onyx/20 flex items-center justify-center text-onyx/60 group-open:rotate-45 transition-transform">
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
              Tell us about your project, destination port, and requirements. A
              dedicated export coordinator will respond — direct, no call centers.
            </p>
            <div className="mt-12 space-y-4 text-sm">
              <div><span className="text-bone/40 text-xs uppercase tracking-[0.22em]">Email</span><div className="mt-1">granitebridgeexports@gmail.com</div></div>
              <div><span className="text-bone/40 text-xs uppercase tracking-[0.22em]">Phone / WhatsApp</span><div className="mt-1">+91 93927 53192</div></div>
              <div><span className="text-bone/40 text-xs uppercase tracking-[0.22em]">Headquarters</span><div className="mt-1">Khammam · Telangana · India</div></div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-7">
          <QuoteForm dark />
        </Reveal>
      </div>
    </section>
  );
}
