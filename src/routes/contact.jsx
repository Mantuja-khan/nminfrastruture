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

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-16">
          {info.map((i, idx) => (
            <div key={i.title} className="bg-white border border-border p-6 hover:border-primary transition reveal" data-delay={idx * 100}>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <i.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg mb-2">{i.title}</h3>
              {i.lines.map((l) => (
                <div key={l} className="text-sm text-muted-foreground">{l}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-primary" />
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-sm">Send a message</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-8">
              Tell us about your <span className="text-primary">project</span>
            </h2>

            {sent ? (
              <div className="bg-primary/20 border border-primary p-6 font-display">
                <div className="font-black text-xl mb-1">Thanks — we got it.</div>
                <div className="text-sm">Our team will reach out within one working day.</div>
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
                  <input required placeholder="Your name" className="w-full bg-muted border border-border px-4 py-3 font-sans focus:outline-none focus:border-primary transition" />
                  <input required placeholder="Phone number" className="w-full bg-muted border border-border px-4 py-3 focus:outline-none focus:border-primary transition" />
                </div>
                <div className="grid sm:grid-cols-1 gap-4">
                  <select className="w-full bg-muted border border-border px-4 py-3 focus:outline-none focus:border-primary transition">
                    <option>Project type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Renovation</option>
                  </select>
                </div>
                <textarea required rows={5} placeholder="Tell us about your project..." className="w-full bg-muted border border-border px-4 py-3 focus:outline-none focus:border-primary transition" />
                <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-[var(--dark)] hover:text-white transition">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="reveal-right relative h-[560px] bg-muted">
            <iframe
              title="Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.80%2C18.90%2C72.90%2C19.00&layer=mapnik"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-6 font-display max-w-xs shadow-xl">
              <div className="text-xs uppercase tracking-widest mb-1">Visit us</div>
              <div className="font-black text-lg leading-tight">Gadpur, Khairthal Tijara, Rajasthan</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="bg-[var(--dark)] text-white p-8 md:p-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-2">GSTIN</div>
              <div className="font-display font-black text-lg break-all">08EJTPK5240J2ZN</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-2">Legal Name</div>
              <div className="font-display font-black text-lg">Arshad Khan</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-2">Trade Name</div>
              <div className="font-display font-black text-lg">NM Infrastructure</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-2">Constitution</div>
              <div className="font-display font-black text-lg">Proprietorship</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Route };
