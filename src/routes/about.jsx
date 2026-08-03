import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useReveal } from "@/hooks/use-reveal";
import teamWorkers from "@/assets/team-workers.jpg";
import teamEngineers from "@/assets/team-engineers.jpg";
const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NM Infrastructure \u2014 Founded 2024 by Arshad Khan" },
      { name: "description", content: "NM Infrastructure \u2014 a new-generation construction firm founded in 2024 by Arshad Khan, delivering civil, industrial and interior projects." },
      { property: "og:title", content: "About NM Infrastructure" },
      { property: "og:description", content: "Founded 2024 by Arshad Khan \u2014 trusted construction and architecture across residential, commercial and industrial projects." }
    ]
  }),
  component: AboutPage
});
function AboutPage() {
  useReveal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [
    { icon: Award, title: "Quality First", desc: "Uncompromising standards on every material, weld and finish." },
    { icon: Users, title: "People Focused", desc: "Skilled crews treated well produce beautiful, lasting work." },
    { icon: Target, title: "On Time, On Budget", desc: "Transparent scheduling and pricing from day one." },
    { icon: Heart, title: "Built to Last", desc: "We build the way we'd build for our own families." }
  ];
  return <>
      <PageHero title="About Our Firm" subtitle="Founded in 2024 by Arshad Khan, NM Infrastructure is a next-generation construction firm delivering honest craftsmanship across India." breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-left">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary z-0" />
            <img src={teamWorkers} alt="Team" width={1200} height={1400} loading="lazy" className="relative z-10 w-full h-[520px] object-cover" />
            <img src={teamEngineers} alt="Engineers" width={1e3} height={800} loading="lazy" className="absolute -bottom-10 -right-6 w-64 h-64 object-cover z-20 border-8 border-background hidden md:block" />
          </div>
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-primary" />
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-sm">Our Story</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6">
              Constructing spaces that <span className="text-primary">inspire life</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Founded in 2024 by <span className="text-primary font-semibold">Arshad Khan</span>, NM Infrastructure was built on a simple belief — that great construction is a promise kept, not just a project delivered.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From day one we've focused on nine core disciplines — civil, industrial, fabrication, electrical, plumbing, painting, interiors, labour supply and machine shifting — so clients get one accountable builder from foundation to final finish.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[["40+", "Projects"], ["2024", "Founded"], ["9", "Services"]].map(([n, l]) => <div key={l}>
                  <div className="font-display font-black text-4xl">{n}</div>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-primary" />
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-sm">Our Values</span>
              <span className="w-10 h-[2px] bg-primary" />
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl">What we <span className="text-primary">stand for</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => <div key={v.title} className="bg-white p-8 border border-border hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 reveal" data-delay={i * 100}>
                <div className="w-14 h-14 bg-primary flex items-center justify-center mb-5">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-extrabold text-xl mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--dark)] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center reveal">
          <h3 className="font-display font-black text-3xl md:text-4xl mb-6">Let's build your next <span className="text-primary">landmark</span> together</h3>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-white transition">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>;
}
export {
  Route
};
