import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

function PageHero({ title, subtitle, breadcrumbs }) {
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#10141b] overflow-hidden">
      <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10141b]/85 via-[#10141b]/65 to-[#10141b]/45" />
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.03) 48%, rgba(255,255,255,0.03) 52%, transparent 52%)", backgroundSize: "24px 24px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-sans uppercase tracking-widest text-slate-400">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.to ? (
                <Link to={b.to} className="hover:text-primary transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-primary font-bold">{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3 text-slate-500" />}
            </span>
          ))}
        </div>
        <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}

export { PageHero };

