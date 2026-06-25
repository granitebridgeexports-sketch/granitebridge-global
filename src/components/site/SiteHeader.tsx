import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoWeb from "@/assets/logo.png";
import logoHires from "@/assets/logo-source-hires.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process" },
  { to: "/markets", label: "Markets" },
  { to: "/feedback", label: "Feedback" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-black/45 backdrop-blur-[12px] border-b border-white/5 h-[80px] flex items-center">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-[100px] flex items-center justify-between">

        {/* Brand logo — New Ridge style: emblem + name + tagline */}
        <Link to="/" className="group flex items-center gap-3">
          {/* Circular emblem — trimmed transparent PNG, no box/border/shadow */}
          <img
            src={logoWeb}
            srcSet={`${logoHires} 2x`}
            alt=""
            aria-hidden="true"
            className="
              h-12 w-12 flex-shrink-0
              object-contain object-center
              transition-transform duration-500 group-hover:scale-105
              sm:h-[78px] sm:w-[78px]
            "
            style={{
              filter: "drop-shadow(0 0 6px rgba(212,175,55,0.25))",
              imageRendering: "crisp-edges",
            }}
          />
          {/* Brand text — visible on screens ≥ 400px */}
          <span className="hidden xs:flex flex-col leading-tight">
            <span className="font-display text-[17px] tracking-wide text-white font-bold">
              GraniteBridgeExports
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-[#D4AF6A] mt-0.5">
              Private Limited
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#D4AF6A] after:transition-all after:duration-300 hover:after:w-full text-white/70 hover:text-[#D4AF6A]"
              activeProps={{ className: "text-[#D4AF6A] after:w-full!" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="btn-gold !bg-[#D4AF6A] hover:!bg-[#E0BB76] !text-[#111111] !py-2.5 !px-5 !text-[10px] rounded-full"
          >
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 hover:text-[#D4AF6A] transition-colors text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="absolute top-[calc(100%+0.5rem)] inset-x-0 mx-auto w-[95%] rounded-3xl border border-white/10 bg-[#0F0F0F]/95 backdrop-blur-lg p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.22em] text-white/80 hover:text-[#D4AF6A] transition-colors"
                activeProps={{ className: "text-[#D4AF6A]" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4 rounded-full text-center"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
