import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";
import logoAsset from "@/assets/nm-logo.png.asset.json";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || !transparent;
  return <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? "bg-[var(--dark)] shadow-lg py-3" : "bg-transparent py-5"}`}
  >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoImg || logoAsset.url}
            alt="NM Infrastructure — We Build Your Dreams"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain my-1 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-white font-display font-semibold text-sm tracking-widest uppercase">
          {links.map((l) => <Link
    key={l.to}
    to={l.to}
    activeOptions={{ exact: l.to === "/" }}
    activeProps={{ className: "text-primary" }}
    className="hover:text-primary transition relative py-2"
  >
              {l.label}
            </Link>)}
        </nav>

        <a
    href="tel:+919876543210"
    className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-display font-bold hover:bg-white transition-colors"
  >
          <Phone className="w-4 h-4" />
          <span>+91 98765 43210</span>
        </a>

        <button
    onClick={() => setOpen((v) => !v)}
    className="lg:hidden text-white p-2"
    aria-label="Toggle menu"
  >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && <div className="lg:hidden bg-[var(--dark)] border-t border-white/10 animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => <Link
    key={l.to}
    to={l.to}
    onClick={() => setOpen(false)}
    activeOptions={{ exact: l.to === "/" }}
    activeProps={{ className: "text-primary" }}
    className="text-white font-display font-semibold text-sm tracking-widest uppercase hover:text-primary"
  >
                {l.label}
              </Link>)}
            <a
    href="tel:+919876543210"
    className="mt-2 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 font-display font-bold w-fit"
  >
              <Phone className="w-4 h-4" /> +91 98765 43210
            </a>
          </div>
        </div>}
    </header>;
}
export {
  SiteHeader
};
