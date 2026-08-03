import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useReveal } from "@/hooks/use-reveal";
import { SERVICES } from "@/lib/services-data";
const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services \u2014 NM Infrastructure" },
      { name: "description", content: "Civil construction, industrial civil works, fabrication, electrical, plumbing, painting, interiors, labour supply and machine shifting \u2014 all under one roof." },
      { property: "og:title", content: "Our Services \u2014 NM Infrastructure" },
      { property: "og:description", content: "One accountable partner for every construction discipline." }
    ]
  }),
  component: ServicesPage
});
function ServicesPage() {
  useReveal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
      <PageHero
    title="Our Services"
    subtitle="Nine specialised disciplines — one accountable builder from foundation to final finish."
    breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
  />

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => <Link
    key={s.slug}
    to="/services/$slug"
    params={{ slug: s.slug }}
    className="group relative bg-white border border-border p-6 sm:p-8 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 reveal block"
    data-delay={i % 3 * 100}
  >
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--dark)] text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-5 transition-colors">
                <s.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-4xl sm:text-5xl font-display font-black text-muted absolute top-5 right-5 sm:top-6 sm:right-6 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl mb-3 pr-10">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">{s.short}</p>
              <span className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition">
                View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>)}
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-primary" />
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">How We Work</span>
              <span className="w-10 h-[2px] bg-primary" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl">
              A simple, <span className="text-primary">proven process</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
    ["01", "Consult", "We understand your goals, site and budget."],
    ["02", "Design", "Architects & engineers shape the plans."],
    ["03", "Build", "Our crews execute with weekly progress updates."],
    ["04", "Handover", "Finished on time, backed by our warranty."]
  ].map(([n, t, d], i) => <div key={t} className="relative reveal" data-delay={i * 100}>
                <div className="font-display font-black text-5xl sm:text-7xl text-primary/40 leading-none mb-3">{n}</div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl mb-2">{t}</h3>
                <p className="text-muted-foreground text-sm">{d}</p>
              </div>)}
          </div>
        </div>
      </section>
    </>;
}
export {
  Route
};
