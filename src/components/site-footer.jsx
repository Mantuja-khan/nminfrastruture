import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight, FileText } from "lucide-react";
import logoAsset from "@/assets/nm-logo.png.asset.json";
function SiteFooter() {
  return <footer className="bg-[var(--dark)] text-white/70 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-10 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white text-center md:text-left leading-tight">
          Ready to build your <span className="text-primary">dream project</span>?
        </h3>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors">
          Start a Conversation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div className="lg:pr-4">
          <div className="flex items-center gap-2 mb-5">
            <img src={logoAsset.url} alt="NM Infrastructure" className="h-20 md:h-24 w-auto" />
          </div>
          <p className="text-sm leading-relaxed mb-5">
            Founded 2024 by Arshad Khan — building residential, commercial and industrial projects with quality craftsmanship and reliable delivery.
          </p>
          <div className="text-xs leading-relaxed mb-5 space-y-1.5 text-white/60 border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start gap-2"><FileText className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /><span>GSTIN: <span className="text-white/85">08EJTPK5240J2ZN</span></span></div>
            <div>Legal Name: <span className="text-white/85">Arshad Khan</span></div>
            <div>Proprietorship</div>
          </div>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => <a key={i} href="#" aria-label="Social link" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all">
                <Icon className="w-4 h-4" />
              </a>)}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-primary">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Our Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ].map((l) => <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition inline-flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {l.label}
                </Link>
              </li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-primary">Services</h4>
          <ul className="space-y-3 text-sm">
            {["Residential", "Commercial", "Industrial", "Renovation", "Consulting"].map((s) => <li key={s}><span className="hover:text-primary transition cursor-pointer">{s}</span></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-primary">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Shop No. 04, Yunus Colony,<br />Teh. Tapukara, Near Ashirwad Company,<br />Gadpur, Khairthal Tijara,<br />Rajasthan 301707</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" /><a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" /><a href="mailto:hello@nminfra.com" className="hover:text-primary">hello@nminfra.com</a></li>
          </ul>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-14 py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div>© {(/* @__PURE__ */ new Date()).getFullYear()} NM Infrastructure. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>;
}
export {
  SiteFooter
};
