import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

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
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-black/45 backdrop-blur-[12px] border-b border-white/5 h-[68px] md:h-[80px] flex items-center">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-6 lg:px-[100px] flex items-center justify-between">
        {/* Brand logo */}
        <Link to="/" className="group flex items-center gap-2.5 md:gap-3">
          <img
            src="/logo.png"
            alt="GraniteBridge Exports logo"
            className="
              w-16 h-auto flex-shrink-0
              object-contain object-center
              transition-transform duration-500 group-hover:scale-105
              sm:w-[78px] sm:h-auto
            "
            style={{
              filter: "drop-shadow(0 0 6px rgba(212,175,55,0.25))",
            }}
          />
          {/* Brand text — visible on screens ≥ 400px */}
          <span className="hidden xs:flex flex-col leading-tight">
            <span className="font-display text-[15px] sm:text-[17px] tracking-wide text-white font-bold">
              GraniteBridgeExports
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.38em] text-[#D4AF6A] mt-0.5">
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
          className="lg:hidden flex items-center justify-center size-12 hover:text-[#D4AF6A] transition-colors text-white -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="absolute top-[calc(100%+0.5rem)] inset-x-0 mx-auto w-[95%] rounded-3xl border border-white/10 bg-[#0F0F0F]/95 backdrop-blur-lg p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {nav.map((n) =>
              n.label === "Products" ? (
                <div key={n.to}>
                  {/* Products toggle row */}
                  <button
                    onClick={() => setProductsOpen((o) => !o)}
                    className="w-full flex items-center justify-between py-3 text-sm uppercase tracking-[0.22em] text-white/80 hover:text-[#D4AF6A] transition-colors"
                  >
                    <span>Products</span>
                    <ChevronDown
                      className={`size-4 text-[#D4AF6A]/60 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Expandable product sub-menu */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.19,1,0.22,1)] ${productsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pl-4 border-l border-[#D4AF6A]/20 ml-2 mb-2 flex flex-col gap-0.5">
                      <Link
                        to="/products"
                        onClick={() => setOpen(false)}
                        className="py-2 text-[12px] uppercase tracking-[0.18em] text-[#D4AF6A]/80 hover:text-[#D4AF6A] transition-colors font-medium"
                      >
                        All Products
                      </Link>
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.slug}
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          onClick={() => setOpen(false)}
                          className="py-2 text-[12px] tracking-[0.12em] text-white/60 hover:text-[#D4AF6A] transition-colors"
                        >
                          {p.name}
                        </Link>
                      ))}
                      <a
                        href="/#premium-stone-collection"
                        onClick={() => setOpen(false)}
                        className="py-2 text-[12px] tracking-[0.12em] text-white/60 hover:text-[#D4AF6A] transition-colors"
                      >
                        Premium Collection
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm uppercase tracking-[0.22em] text-white/80 hover:text-[#D4AF6A] transition-colors"
                  activeProps={{ className: "text-[#D4AF6A]" }}
                >
                  {n.label}
                </Link>
              ),
            )}
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
