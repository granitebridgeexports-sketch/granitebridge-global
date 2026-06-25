import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Customer Feedback — Trusted by Builders & Architects Worldwide | GraniteBridge" },
      {
        name: "description",
        content:
          "See what our customers say about the quality, finish, packaging, and professionalism of GraniteBridge Exports Pvt Ltd. Trusted by builders, architects, and homeowners worldwide.",
      },
      { property: "og:title", content: "Customer Feedback | GraniteBridge Exports" },
      {
        property: "og:description",
        content:
          "Trusted by builders, architects & homeowners worldwide. Read testimonials from our global customers.",
      },
      { property: "og:url", content: "/feedback" },
    ],
    links: [{ rel: "canonical", href: "/feedback" }],
  }),
  component: FeedbackPage,
});

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Interior Designer",
    location: "Hyderabad",
    initials: "RK",
    quote:
      "The Black Galaxy granite quality exceeded our expectations. The polishing and consistency were outstanding. Our clients loved the final kitchen finish.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Bengaluru",
    initials: "PS",
    quote:
      "We used GraniteBridge materials for our modular kitchen and dining area. The stone is beautiful, durable, and very easy to maintain.",
  },
  {
    name: "David Wilson",
    role: "Import Partner",
    location: "UAE",
    initials: "DW",
    quote:
      "Professional team, secure packaging, and on-time delivery. The granite slabs arrived in excellent condition.",
  },
  {
    name: "Sarah Johnson",
    role: "Architect",
    location: "Australia",
    initials: "SJ",
    quote:
      "The premium finish and unique patterns helped elevate our luxury residential project. Highly recommended.",
  },
  {
    name: "Ahmed Hassan",
    role: "Builder",
    location: "Saudi Arabia",
    initials: "AH",
    quote:
      "Excellent communication throughout the process. The granite quality is consistent and perfect for large commercial projects.",
  },
  {
    name: "Michael Brown",
    role: "Contractor",
    location: "USA",
    initials: "MB",
    quote:
      "Reliable supplier with exceptional craftsmanship. We are satisfied with both product quality and customer support.",
  },
];

const STATS = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Years of Trust" },
];

function useCountUp(target: number, isVisible: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);

  return count;
}

function StatCounter({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="text-center px-4">
      <div className="font-display text-5xl lg:text-6xl" style={{ color: "#D4AF37" }}>
        {count}
        {suffix}
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/50">{label}</div>
    </div>
  );
}

function FeedbackPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: "#0A0A0A" }}>
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(212,175,55,0.13) 0%, transparent 65%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-wide relative text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Customer Feedback</span>
              <span className="hairline" />
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.08] max-w-4xl mx-auto"
              style={{ color: "#F7F5F2" }}
            >
              Trusted by Builders,{" "}
              <span className="italic font-light" style={{ color: "#D4AF37" }}>
                Architects & Homeowners
              </span>{" "}
              Worldwide
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className="mt-8 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(247,245,242,0.6)" }}
            >
              See what our customers say about the quality, finish, packaging, and professionalism
              of GraniteBridge Exports Pvt Ltd.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Testimonials Grid ─────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0F0F0F" }}>
        <div className="container-wide">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Statistics ────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="container-wide relative">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-16">
              <span className="hairline" />
              <span className="eyebrow">Our Achievements</span>
              <span className="hairline" />
            </div>
          </Reveal>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center relative">
                {i < STATS.length - 1 && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px"
                    style={{ background: "rgba(212,175,55,0.2)" }}
                  />
                )}
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  isVisible={statsVisible}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#0F0F0F" }}>
        {/* Gold border top */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(212,175,55,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="container-wide relative text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="hairline" />
              <span className="eyebrow">Start Your Project</span>
              <span className="hairline" />
            </div>
            <h2
              className="font-display text-4xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto"
              style={{ color: "#F7F5F2" }}
            >
              Ready to Start Your{" "}
              <span className="italic font-light" style={{ color: "#D4AF37" }}>
                Project?
              </span>
            </h2>
            <p
              className="mt-6 text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(247,245,242,0.6)" }}
            >
              Join hundreds of satisfied customers and source premium granite directly from
              GraniteBridge Exports Pvt Ltd.
            </p>
            <div className="mt-12">
              <Link to="/contact" className="btn-gold">
                Request a Quote
              </Link>
            </div>
          </Reveal>
        </div>
        {/* Gold border bottom */}
        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
          }}
        />
      </section>
    </>
  );
}

function TestimonialCard({
  name,
  role,
  location,
  initials,
  quote,
}: {
  name: string;
  role: string;
  location: string;
  initials: string;
  quote: string;
}) {
  return (
    <div
      className="group relative flex flex-col p-8 rounded-sm h-full"
      style={{
        background: "linear-gradient(145deg, #141414 0%, #111111 100%)",
        border: "1px solid rgba(212,175,55,0.12)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-8px)";
        el.style.boxShadow =
          "0 20px 40px -10px rgba(212,175,55,0.2), 0 8px 16px -8px rgba(0,0,0,0.6)";
        el.style.borderColor = "rgba(212,175,55,0.35)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "rgba(212,175,55,0.12)";
      }}
    >
      {/* Gold top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="#D4AF37"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="flex-1 text-sm leading-relaxed mb-8"
        style={{ color: "rgba(247,245,242,0.7)" }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.08))",
            border: "1px solid rgba(212,175,55,0.4)",
            color: "#D4AF37",
            letterSpacing: "0.05em",
          }}
        >
          {initials}
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: "#F7F5F2" }}>
            {name}
          </div>
          <div
            className="text-[11px] mt-0.5 uppercase tracking-[0.18em]"
            style={{ color: "rgba(212,175,55,0.75)" }}
          >
            {role} · {location}
          </div>
        </div>
      </div>
    </div>
  );
}
