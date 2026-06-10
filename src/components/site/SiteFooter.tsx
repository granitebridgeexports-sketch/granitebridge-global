import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-bone/70">
      <div className="container-wide py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-gold text-gold font-display text-xl">
                G
              </span>
              <div>
                <div className="font-display text-xl text-bone">GraniteBridge</div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold/80">
                  Exports Pvt Ltd
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed max-w-sm">
              A professional Indian granite export company connecting the world's
              buyers with high-quality natural stone from India's finest quarries.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href="mailto:granitebridgeexports@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="size-4 text-gold" /> granitebridgeexports@gmail.com
              </a>
              <a href="tel:+919392753192" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="size-4 text-gold" /> +91 93927 53192
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-gold mt-0.5" />
                <span>Khammam · Telangana · India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
              <li><Link to="/process" className="hover:text-gold transition">Export Process</Link></li>
              <li><Link to="/markets" className="hover:text-gold transition">Markets</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Products</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-gold transition">All Granite</Link></li>
              <li><Link to="/products/black-granite" className="hover:text-gold transition">Black Granite</Link></li>
              <li><Link to="/products/white-granite" className="hover:text-gold transition">White Granite</Link></li>
              <li><Link to="/products/monument-granite" className="hover:text-gold transition">Monument Stone</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Newsletter</div>
            <p className="text-sm mb-4">
              Quarterly updates on new varieties, market intelligence, and export trends.
            </p>
            <form className="flex border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@company.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-bone/40 focus:outline-none"
              />
              <button className="bg-gold px-5 text-[10px] uppercase tracking-[0.22em] font-semibold text-onyx hover:bg-gold-soft transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/40">
          <div>© {new Date().getFullYear()} GraniteBridge Exports Pvt Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold transition">Privacy</Link>
            <Link to="/" className="hover:text-gold transition">Terms</Link>
            <Link to="/" className="hover:text-gold transition">Export Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
