import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GraniteBridge Exports — Request a Quote in 24 Hours" },
      {
        name: "description",
        content:
          "Request a quotation for Indian granite slabs, tiles, monuments, and cut-to-size. Our export desk responds within 24 hours.",
      },
      { property: "og:title", content: "Contact GraniteBridge Exports" },
      { property: "og:description", content: "Get a granite export quotation in 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="pt-32 pb-28 bg-onyx text-bone min-h-screen">
      <div className="container-wide grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline" />
            <span className="eyebrow">Contact Our Export Desk</span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[1]">
            Get a quotation in <span className="text-gold italic font-light">24 hours.</span>
          </h1>
          <p className="mt-8 text-bone/65 leading-relaxed max-w-md">
            Tell us about your project, destination port, and quantity. A dedicated export
            coordinator will respond directly — no automated replies, no call centers.
          </p>

          <div className="mt-14 space-y-6">
            <ContactRow
              icon={Mail}
              label="Email"
              value="granitebridgeexports@gmail.com"
              href="mailto:granitebridgeexports@gmail.com"
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value="+91 93927 53192"
              href="tel:+919392753192"
            />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value="+91 93927 53192"
              href="https://wa.me/919392753192?text=Hello%20GraniteBridge%20Exports%2C%20I%27m%20interested%20in%20your%20granite%20products."
            />
            <ContactRow icon={MapPin} label="Headquarters" value="Khammam, Telangana, India" />
          </div>

          <div className="mt-14 pt-8 border-t border-white/10">
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-3">
              Loading Ports
            </div>
            <p className="text-sm text-bone/60">Chennai · Krishnapatnam · Tuticorin</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:pt-4">
          <QuoteForm dark />
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <Icon className="size-5 text-gold mt-1" strokeWidth={1.4} />
      <div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-bone/40">{label}</div>
        <div className="text-base mt-1 text-bone">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition">
      {inner}
    </a>
  ) : (
    inner
  );
}
