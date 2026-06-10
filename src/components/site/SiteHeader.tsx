import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process" },
  { to: "/markets", label: "Markets" },
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
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 mx-auto max-w-[95%] xl:max-w-[1280px] rounded-full border border-white/10 bg-[#0F0F0F]/80 backdrop-blur-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          : "top-0 bg-transparent"
      }`}
    >
      <div className={`container-wide flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16 px-6 lg:px-8" : "h-20"}`}>
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-gold text-gold font-display text-lg tracking-widest transition-transform duration-500 group-hover:rotate-180">
            G
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-bone tracking-wide">
              GraniteBridge
            </span>
            <span className="text-[9px] uppercase tracking-[0.32em] text-gold/80">
              Exports Pvt Ltd
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-[0.22em] text-bone/70 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{ className: "text-gold after:w-full!" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold !py-2.5 !px-5 !text-[10px] rounded-full">
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-bone p-2 hover:text-gold transition-colors"
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
                className="py-3 text-sm uppercase tracking-[0.22em] text-bone/80 hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-4 rounded-full text-center">
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}