import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

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
  const [mounted, setMounted] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  // Desktop underline state
  const [desktopStyle, setDesktopStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [desktopTransition, setDesktopTransition] = useState<string>("");
  const desktopRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const desktopContainerRef = useRef<HTMLDivElement | null>(null);

  // Mobile underline state
  const [mobileStyle, setMobileStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [mobileTransition, setMobileTransition] = useState<string>("");
  const mobileRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);

  // Active item tracking
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(-1);

  // Find index of nav item that best matches currentPath
  const getActiveIndex = () => {
    return nav.findIndex((n) => {
      if (n.to === "/") {
        return currentPath === "/";
      }
      return currentPath.startsWith(n.to);
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const activeIndex = getActiveIndex();
    if (activeIndex !== currentIndex) {
      setPrevIndex(currentIndex);
      setCurrentIndex(activeIndex);
    }
  }, [currentPath, currentIndex]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update Desktop indicator position
  useEffect(() => {
    if (!mounted) return;

    const updateDesktopPosition = () => {
      if (currentIndex === -1) {
        setDesktopStyle({ opacity: 0 });
        return;
      }

      const activeTo = nav[currentIndex].to;
      const activeEl = desktopRefs.current[activeTo];
      const containerEl = desktopContainerRef.current;

      if (activeEl && containerEl) {
        const activeRect = activeEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();

        const left = activeRect.left - containerRect.left;
        const right = containerRect.right - containerRect.right;

        // Calculate transition delay for stretch effect
        let transition = "opacity 300ms ease-in-out";
        if (prevIndex !== -1 && currentIndex !== prevIndex) {
          const movingRight = currentIndex > prevIndex;
          const leftDelay = movingRight ? "70ms" : "0ms";
          const rightDelay = movingRight ? "0ms" : "70ms";
          transition = `
            left 380ms cubic-bezier(0.25, 1, 0.5, 1) ${leftDelay},
            right 380ms cubic-bezier(0.25, 1, 0.5, 1) ${rightDelay},
            opacity 300ms ease-in-out
          `;
        } else {
          // Fade in or transition instantly on mount/resize
          transition = "left 150ms ease-out, right 150ms ease-out, opacity 300ms ease-out";
        }

        setDesktopTransition(transition);
        setDesktopStyle({
          left: `${left}px`,
          right: `${right}px`,
          opacity: 1,
        });
      } else {
        setDesktopStyle({ opacity: 0 });
      }
    };

    updateDesktopPosition();
    window.addEventListener("resize", updateDesktopPosition);
    return () => window.removeEventListener("resize", updateDesktopPosition);
  }, [currentIndex, prevIndex, mounted]);

  // Update Mobile indicator position
  useEffect(() => {
    if (!mounted || !open) {
      setMobileStyle({ opacity: 0 });
      return;
    }

    const updateMobilePosition = () => {
      if (currentIndex === -1) {
        setMobileStyle({ opacity: 0 });
        return;
      }

      const activeTo = nav[currentIndex].to;
      const activeEl = mobileRefs.current[activeTo];
      const containerEl = mobileContainerRef.current;

      if (activeEl && containerEl) {
        const activeRect = activeEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();

        const left = activeRect.left - containerRect.left;
        const right = containerRect.right - containerRect.right;
        const top = activeRect.top - containerRect.top + activeRect.height - 2;

        let transition = "opacity 300ms ease-in-out";
        if (prevIndex !== -1 && currentIndex !== prevIndex) {
          const movingDown = currentIndex > prevIndex;
          const leftDelay = movingDown ? "70ms" : "0ms";
          const rightDelay = movingDown ? "0ms" : "70ms";
          transition = `
            left 380ms cubic-bezier(0.25, 1, 0.5, 1) ${leftDelay},
            right 380ms cubic-bezier(0.25, 1, 0.5, 1) ${rightDelay},
            top 380ms cubic-bezier(0.25, 1, 0.5, 1),
            opacity 300ms ease-in-out
          `;
        } else {
          transition = "opacity 300ms ease-out";
        }

        setMobileTransition(transition);
        setMobileStyle({
          left: `${left}px`,
          right: `${right}px`,
          top: `${top}px`,
          opacity: 1,
        });
      } else {
        setMobileStyle({ opacity: 0 });
      }
    };

    const id = requestAnimationFrame(updateMobilePosition);
    window.addEventListener("resize", updateMobilePosition);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateMobilePosition);
    };
  }, [currentIndex, prevIndex, open, mounted]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-black/45 backdrop-blur-[12px] border-b border-white/5 h-[80px] flex items-center">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-[100px] flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-[#D4AF6A] text-[#D4AF6A] font-display text-lg tracking-widest transition-transform duration-500 group-hover:rotate-180">
            G
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-wide text-white">GraniteBridge</span>
            <span className="text-[9px] uppercase tracking-[0.32em] text-[#D4AF6A]">
              Exports Pvt Ltd
            </span>
          </span>
        </Link>

        {/* Desktop / Tablet Nav */}
        <nav
          ref={desktopContainerRef}
          className="relative hidden lg:flex items-center gap-10 py-1"
        >
          {nav.map((n, index) => {
            const isActive = currentIndex === index;
            return (
              <Link
                key={n.to}
                to={n.to}
                ref={(el) => {
                  desktopRefs.current[n.to] = el;
                }}
                className={cn(
                  "group text-[11px] uppercase tracking-[0.22em] text-white/70 hover:text-[#D4AF6A] transition-colors duration-300 relative py-1",
                  !mounted && isActive && "text-[#D4AF6A] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4AF6A]"
                )}
                activeProps={{ className: "text-[#D4AF6A]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
                {/* Thinner gold line that smoothly expands from the center outward on hover */}
                {!isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#D4AF6A]/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center pointer-events-none" />
                )}
              </Link>
            );
          })}

          {/* Desktop single moving underline indicator */}
          {mounted && currentIndex !== -1 && (
            <div
              className="absolute bg-[#D4AF6A] h-[2px] pointer-events-none rounded-full bottom-[-4px]"
              style={{
                ...desktopStyle,
                transition: desktopTransition,
              }}
            />
          )}
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

      {/* Mobile Nav Menu */}
      {open && (
        <div className="absolute top-[calc(100%+0.5rem)] inset-x-0 mx-auto w-[95%] rounded-3xl border border-white/10 bg-[#0F0F0F]/95 backdrop-blur-lg p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:hidden">
          <nav
            ref={mobileContainerRef}
            className="relative flex flex-col gap-1 items-start w-full"
          >
            {nav.map((n, index) => {
              const isActive = currentIndex === index;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  ref={(el) => {
                    mobileRefs.current[n.to] = el;
                  }}
                  onClick={() => {
                    const isNewRoute = getActiveIndex() !== index;
                    if (isNewRoute) {
                      setTimeout(() => {
                        setOpen(false);
                      }, 400);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className={cn(
                    "py-3 text-sm uppercase tracking-[0.22em] text-white/80 hover:text-[#D4AF6A] transition-colors duration-300 w-fit relative group",
                    !mounted && isActive && "text-[#D4AF6A] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4AF6A]"
                  )}
                  activeProps={{ className: "text-[#D4AF6A]" }}
                >
                  {n.label}
                  {/* Thinner gold line that smoothly expands from the center outward on hover */}
                  {!isActive && (
                    <span className="absolute bottom-[4px] left-0 right-0 h-[1px] bg-[#D4AF6A]/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center pointer-events-none" />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4 rounded-full text-center w-full"
            >
              Request Quote
            </Link>

            {/* Mobile single moving underline indicator */}
            {mounted && currentIndex !== -1 && (
              <div
                className="absolute bg-[#D4AF6A] h-[2px] pointer-events-none rounded-full"
                style={{
                  ...mobileStyle,
                  transition: mobileTransition,
                }}
              />
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
