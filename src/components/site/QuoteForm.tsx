import { useState } from "react";
import { toast } from "sonner";

// ─────────────────────────────────────────────────────────────────────────────
// Paste your Google Apps Script Web App URL here after deploying the script.
// See the setup guide in apps_script_setup.md for full instructions.
// ─────────────────────────────────────────────────────────────────────────────
const SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

const COUNTRIES = [
  "Germany",
  "Spain",
  "Italy",
  "France",
  "Netherlands",
  "Belgium",
  "Cyprus",
  "United Kingdom",
  "Greece",
  "Poland",
  "United States",
  "UAE",
  "Saudi Arabia",
  "Other",
];

export function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);

    const now = new Date();
    const submissionDate = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const submissionTime = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const payload = {
      fullName: fd.get("name") as string,
      company: fd.get("company") as string,
      country: fd.get("country") as string,
      port: fd.get("port") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      product: fd.get("product") as string,
      qty: fd.get("qty") as string,
      message: fd.get("message") as string,
      submissionDate,
      submissionTime,
    };

    // If the URL hasn't been configured yet, simulate locally so the site works.
    if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_WEB_APP_URL_HERE") {
      setTimeout(() => {
        setLoading(false);
        form.reset();
        toast.success("Inquiry received", {
          description: "Our export team will respond within 24 hours.",
        });
      }, 900);
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Apps Script requires no-cors for cross-origin POST
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // no-cors means we can't read the response body, so we treat reaching here as success
      form.reset();
      toast.success("Inquiry received!", {
        description: "Our export team will respond within 24 hours.",
      });
    } catch {
      toast.error("Submission failed", {
        description: "Please email us directly at granitebridgeexports@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  const base = dark
    ? "bg-transparent border-b border-white/20 text-bone placeholder:text-bone/40 focus:border-gold"
    : "bg-transparent border-b border-onyx/20 text-onyx placeholder:text-onyx/40 focus:border-gold";
  const inp = `w-full px-0 py-3 text-sm outline-none transition-colors ${base}`;
  const lbl = `text-[10px] uppercase tracking-[0.22em] ${dark ? "text-bone/50" : "text-onyx/50"} mb-1 block`;

  return (
    <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
      <div>
        <label className={lbl}>Full Name *</label>
        <input required name="name" className={inp} placeholder="John Müller" />
      </div>
      <div>
        <label className={lbl}>Company *</label>
        <input required name="company" className={inp} placeholder="Acme Stone GmbH" />
      </div>
      <div>
        <label className={lbl}>Country *</label>
        <select required name="country" className={`${inp} appearance-none`}>
          <option value="" className="text-onyx">
            Select country
          </option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c} className="text-onyx">
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={lbl}>Destination Port</label>
        <input name="port" className={inp} placeholder="e.g. Hamburg, Valencia" />
      </div>
      <div>
        <label className={lbl}>Email *</label>
        <input required type="email" name="email" className={inp} placeholder="you@company.com" />
      </div>
      <div>
        <label className={lbl}>Phone</label>
        <input name="phone" className={inp} placeholder="+49 30 1234 5678" />
      </div>
      <div>
        <label className={lbl}>Product Requirement *</label>
        <input required name="product" className={inp} placeholder="Black Galaxy slabs 18mm" />
      </div>
      <div>
        <label className={lbl}>Quantity</label>
        <input name="qty" className={inp} placeholder="2 × 40ft containers" />
      </div>
      <div className="md:col-span-2">
        <label className={lbl}>Project Details</label>
        <textarea
          name="message"
          rows={4}
          className={`${inp} resize-none`}
          placeholder="Tell us about your project, timeline, finishes, dimensions…"
        />
      </div>
      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
        <button type="submit" disabled={loading} className="btn-gold rounded-full">
          {loading ? "Sending…" : "Get a Quotation in 24 Hours"}
        </button>
        <span className={`text-xs ${dark ? "text-bone/40" : "text-onyx/50"}`}>
          Direct response from our export desk. No intermediaries.
        </span>
      </div>
    </form>
  );
}
