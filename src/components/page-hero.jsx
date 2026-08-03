import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
function PageHero({ title, subtitle, breadcrumbs }) {
  return <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[var(--dark)] overflow-hidden">
      <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/95 via-[var(--dark)]/80 to-[var(--dark)]/60" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.03) 48%, rgba(255,255,255,0.03) 52%, transparent 52%)", backgroundSize: "24px 24px" }} />
      <div className="pointer-events-none absolute -right-32 top-10 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] bg-primary/20 sm:bg-primary/50 -skew-y-6" />
      <div className="pointer-events-none absolute right-10 bottom-0 w-20 h-20 sm:w-32 sm:h-32 bg-primary/25 sm:bg-primary/40 rotate-12 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs sm:text-sm font-display uppercase tracking-widest text-white/60">
          {breadcrumbs.map((b, i) => <span key={i} className="flex items-center gap-2">
              {b.to ? <Link to={b.to} className="hover:text-primary">{b.label}</Link> : <span className="text-primary">{b.label}</span>}
              {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
            </span>)}
        </div>
        <h1 className="font-display font-black text-white text-4xl sm:text-5xl md:text-7xl leading-[0.95]">{title}</h1>
        {subtitle && <p className="mt-4 sm:mt-5 text-white/70 max-w-2xl text-base sm:text-lg">{subtitle}</p>}
      </div>
    </section>;
}
export {
  PageHero
};
