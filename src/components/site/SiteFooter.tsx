import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0F0F0F] text-bone/70 border-t border-white/5">
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
              A professional Indian granite export company connecting the world's buyers with
              high-quality natural stone from India's finest quarries.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href="mailto:granitebridgeexports@gmail.com"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail className="size-4 text-gold" /> granitebridgeexports@gmail.com
              </a>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919392753192"
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Phone className="size-4 text-gold" /> +91 93927 53192
                </a>
                <a
                  href="tel:+919492442269"
                  className="flex items-center gap-3 hover:text-gold transition-colors pl-7"
                >
                  +91 94924 42269
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-gold mt-0.5" />
                <span>Khammam · Telangana · India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-gold transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-gold transition">
                  Export Process
                </Link>
              </li>
              <li>
                <Link to="/markets" className="hover:text-gold transition">
                  Markets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Products</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/products" className="hover:text-gold transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products/$slug"
                  params={{ slug: "absolute-black" }}
                  className="hover:text-gold transition"
                >
                  Absolute Black
                </Link>
              </li>
              <li>
                <Link
                  to="/products/$slug"
                  params={{ slug: "black-galaxy" }}
                  className="hover:text-gold transition"
                >
                  Black Galaxy
                </Link>
              </li>
              <li>
                <Link
                  to="/products/$slug"
                  params={{ slug: "steel-grey" }}
                  className="hover:text-gold transition"
                >
                  Steel Grey
                </Link>
              </li>
              <li>
                <Link
                  to="/products/$slug"
                  params={{ slug: "viscount-white" }}
                  className="hover:text-gold transition"
                >
                  Viscount White
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">
              B2B Export Support
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Request our premium stone digital catalogue, inspection reports, or contact our
              coordinators directly.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="btn-gold !py-2.5 !px-5 text-center rounded-full text-xs"
              >
                Request Catalogue
              </Link>
              <a
                href="https://wa.me/919392753192?text=Hello%20GraniteBridge%20Exports%2C%20I%20would%20like%20to%20request%20your%20granite%20catalogue%20and%20price%20sheet."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-gold/40 hover:border-gold bg-transparent text-gold hover:bg-gold/10 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/40">
          <div>
            © {new Date().getFullYear()} GraniteBridge Exports Pvt Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold transition">
              Privacy Policy
            </Link>
            <Link to="/process" className="hover:text-gold transition">
              Quality Control
            </Link>
            <Link to="/markets" className="hover:text-gold transition">
              Global Export Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
