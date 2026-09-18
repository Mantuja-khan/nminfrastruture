import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useReveal } from "@/hooks/use-reveal";

const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NM Infrastructure — Get a Free Quote" },
      { name: "description", content: "Talk to NM Infrastructure about your construction project. Call or send us your brief for a free consultation." },
      { property: "og:title", content: "Contact NM Infrastructure" },
      { property: "og:description", content: "Reach us for a free construction consultation and quote." }
    ]
  }),
  component: ContactPage
});

function ContactPage() {
  useReveal();
  const [sent, setSent] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const info = [
    { icon: MapPin, title: "Head Office", lines: ["Shop No. 04, Yunus Colony", "Teh. Tapukara, Near Ashirwad Company", "Gadpur, Khairthal Tijara", "Rajasthan 301707"] },
    { icon: Phone, title: "Call Us", lines: ["+91 9887211937"] },
    { icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 9am – 7pm", "Sun: By appointment"] }
  ];

  return (
    <>
      <PageHero title="Get in Touch" subtitle="Tell us about your project. We'll come back within one working day with next steps." breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <section className="py-14 sm:py-20 bg-[#f6f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6 mb-14">
          {info.map((i, idx) => (
            <div key={i.title} className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all reveal" data-delay={idx * 100}>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-primary flex items-center justify-center mb-4">
                <i.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{i.title}</h3>
              {i.lines.map((l) => (
                <div key={l} className="text-xs sm:text-sm text-slate-500 leading-relaxed">{l}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/80 shadow-sm reveal-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary font-sans font-bold tracking-[0.2em] uppercase text-xs">Send a message</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight mb-6">
              Tell us about your <span className="text-primary">project</span>
            </h2>

            {sent ? (
              <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                <div className="font-display font-black text-xl text-slate-900 mb-1">Thanks — we got your request!</div>
                <div className="text-sm text-slate-600">Our engineering & estimation team will reach out within one working day.</div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Your name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-primary transition" />
                  <input required placeholder="Phone number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
                </div>
                <div className="grid sm:grid-cols-1 gap-4">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition text-slate-700">
                    <option>Project type</option>
                    <option>Warehouse / 3PL Infrastructure</option>
                    <option>Heavy Structural Steel & Mezzanine</option>
                    <option>Industrial Civil Construction</option>
                    <option>Epoxy Flooring & MEP Fitout</option>
                    <option>Commercial / Corporate</option>
                  </select>
                </div>
                <textarea required rows={4} placeholder="Tell us about your requirements, square footage, site location..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
                <button type="submit" className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-sans font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm transition">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="reveal-right relative h-[480px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              title="Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.80%2C27.90%2C77.00%2C28.10&layer=mapnik"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 left-4 sm:left-auto bg-slate-900 text-white p-5 rounded-2xl shadow-xl max-w-sm border border-slate-700">
              <div className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1">Our Location</div>
              <div className="font-display font-bold text-sm leading-snug">Tapukara / Gadpur, Khairthal Tijara, Rajasthan</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14">
          <div className="bg-[#10141b] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1">GSTIN</div>
              <div className="font-display font-bold text-base sm:text-lg break-all">08EJTPK5240J2ZN</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1">Legal Name</div>
              <div className="font-display font-bold text-base sm:text-lg">Arshad Khan</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1">Trade Name</div>
              <div className="font-display font-bold text-base sm:text-lg">NM Infrastructure</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1">Constitution</div>
              <div className="font-display font-bold text-base sm:text-lg">Proprietorship</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Route };
