import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="size-11 rounded-full bg-onyx text-bone flex items-center justify-center shadow-lg hover:bg-charcoal transition"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </button>
      )}
      <Link
        to="/contact"
        className="hidden md:inline-flex btn-gold !py-3 !px-5 !text-[10px] shadow-xl"
      >
        Request Quote
      </Link>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener"
        className="size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}