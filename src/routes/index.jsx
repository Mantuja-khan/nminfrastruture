import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, HardHat } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import heroVideo from "@/assets/hero-construction.mp4.asset.json";
import video1 from "@/assets/video1.mp4";
import teamWorkers from "@/assets/team-workers.jpg";
import teamEngineers from "@/assets/team-engineers.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { SERVICES } from "@/lib/services-data";
import { PROJECTS } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";
import { VideoModal } from "@/components/video-modal";

const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  useReveal();
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const services = SERVICES.slice(0, 6);

  return <div className="text-foreground font-sans overflow-x-hidden">
      {
    /* HERO with parallax */
  }
      <section id="home" className="relative min-h-[640px] h-[100svh] sm:min-h-[720px] overflow-hidden bg-[var(--dark)]">
        <div
    className="absolute inset-0 will-change-transform"
    style={{
      transform: `translate3d(0, ${scrollY * 0.4}px, 0) scale(${1 + scrollY * 3e-4})`
    }}
  >
          <video
      src={heroVideo?.url || video1}
      poster={heroImg}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Building under construction"
      className="w-full h-full object-cover"
    />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        </div>

        <div
    className="pointer-events-none absolute -right-32 top-1/4 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] bg-primary/20 sm:bg-primary/90 skew-y-6 z-10"
    style={{ transform: `translate3d(0, ${scrollY * -0.15}px, 0) skewY(-8deg)` }}
  />
        <div
    className="pointer-events-none absolute right-6 bottom-16 sm:right-10 sm:bottom-20 w-24 h-24 sm:w-40 sm:h-40 bg-accent/25 sm:bg-accent/80 z-10"
    style={{ transform: `translate3d(0, ${scrollY * -0.25}px, 0) rotate(15deg)` }}
  />

        <div
    className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6"
    style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)`, opacity: Math.max(0, 1 - scrollY / 600) }}
  >
          <div className="max-w-2xl pt-20 sm:pt-0">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="w-12 h-[2px] bg-accent" />
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">Since 2024</span>
            </div>
            <h1 className="font-display font-black text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
              Create the Building
              <br />
              <span className="text-gradient-brand">You Want</span> Here
            </h1>
            <p className="mt-4 sm:mt-5 text-white/80 text-sm sm:text-base max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "250ms", animationFillMode: "both" }}>
              Founded in 2024 by Arshad Khan, NM Infrastructure delivers civil construction, fabrication, MEP and interior work with a fresh, hands-on approach across residential, commercial and industrial projects.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base hover:bg-white transition group">
                Start Consulting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 text-white font-display font-bold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border border-white/30 hover:border-primary hover:text-primary transition">
                Our Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 text-xs font-display uppercase tracking-widest flex flex-col items-center gap-2 animate-bounce">
          <span>Scroll</span>
          <span className="w-[1px] h-8 bg-white/40" />
        </div>
      </section>

      {
    /* MARQUEE STRIP */
  }
      <section className="bg-primary text-primary-foreground py-4 sm:py-5 overflow-hidden border-y-4 border-[var(--dark)]">
        <div className="flex whitespace-nowrap animate-marquee font-display font-black text-xl sm:text-3xl uppercase tracking-tight">
          {Array.from({ length: 2 }).map((_, k) => <div key={k} className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
              {["Residential", "Commercial", "Industrial", "Renovation", "Architecture", "Consulting"].map((t) => <span key={t + k} className="flex items-center gap-6 sm:gap-10">
                  {t} <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[var(--dark)] rotate-45 inline-block" />
                </span>)}
            </div>)}
        </div>
      </section>

      {
    /* SERVICES */
  }
      <section id="services" className="relative py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-primary" />
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">What We Do</span>
              <span className="w-10 h-[2px] bg-primary" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
              Building the future, <span className="text-primary">brick by brick</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {services.map((s, i) => <div key={s.title} className="relative group reveal" data-delay={i % 3 * 120}>
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary z-0 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative bg-white p-6 sm:p-10 border border-border shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6 flex items-center justify-center bg-[var(--dark)] text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-5xl sm:text-6xl font-display font-black text-muted absolute top-5 right-6 sm:top-6 sm:right-8 leading-none">0{i + 1}</div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl mb-3 pr-10">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">{s.short}</p>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-widest text-foreground hover:text-primary transition">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 bg-[var(--dark)] text-white font-display font-bold uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base hover:bg-primary hover:text-primary-foreground transition">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {
    /* ABOUT */
  }
      <section id="about" className="relative py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-left">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary z-0" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-primary z-0" />
            <img src={teamWorkers} alt="Team reviewing plans" width={1200} height={1400} loading="lazy" className="relative z-10 w-full h-[520px] object-cover" />
            <img src={teamEngineers} alt="Engineers on site" width={1e3} height={800} loading="lazy" className="absolute -bottom-10 -right-6 w-64 h-64 object-cover z-20 border-8 border-muted hidden md:block" />
            <div className="absolute top-6 right-6 z-30 bg-primary text-primary-foreground px-5 py-4 font-display shadow-xl">
              <div className="text-4xl font-black leading-none">2024</div>
              <div className="text-xs uppercase tracking-widest mt-1">Founded</div>
            </div>
          </div>
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-primary" />
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-sm">Founded 2024 · Arshad Khan</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-6xl leading-[0.95] mb-6">
              We Provide a full <span className="text-primary">range of services</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A new-generation construction firm led by founder Arshad Khan, combining modern engineering practice with honest craftsmanship. We take on tasks of varying complexity and deliver with clear timelines and long-term guarantees.
            </p>
            <ul className="space-y-3 mb-8">
              {["Licensed & fully insured construction team", "Transparent pricing & on-time delivery", "Sustainable, high-performance materials"].map((t) => <li key={t} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 w-5 h-5 bg-primary flex items-center justify-center rotate-45 shrink-0">
                    <span className="w-2 h-2 bg-[var(--dark)] rotate-45" />
                  </span>
                  {t}
                </li>)}
            </ul>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[["40+", "Projects"], ["2024", "Founded"], ["9", "Services"]].map(([n, l]) => <div key={l}>
                  <div className="font-display font-black text-4xl text-foreground">{n}</div>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>)}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 bg-[var(--dark)] text-white font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-primary hover:text-primary-foreground transition group">
              Discover More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-primary" />
                <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-sm">Featured Video Showcase</span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl leading-tight max-w-xl">
                Recent projects we're <span className="text-primary">proud of</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-lg">
                Explore our live video showcases featuring civil engineering, structural steel, and infrastructure developments.
              </p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-sm hover:text-primary transition">
              View All 9 Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                onOpenModal={(proj) => setSelectedProject(proj)}
                delay={i * 100}
              />
            ))}
          </div>

          {selectedProject && (
            <VideoModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </section>

      {
    /* CTA */
  }
      <section id="contact" className="relative py-20 overflow-hidden bg-[var(--dark)]">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/95 via-[var(--dark)]/80 to-primary/40" />
        <div className="absolute -left-20 top-0 w-96 h-full bg-primary/30 -skew-x-12" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <HardHat className="w-16 h-16 text-[var(--dark)] bg-primary p-3 shrink-0" />
            <h3 className="font-display font-black text-white text-3xl md:text-4xl max-w-xl">
              Ready to build something <span className="underline decoration-4 underline-offset-4">exceptional?</span>
            </h3>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider px-8 py-5 hover:bg-white hover:text-[var(--dark)] transition">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>;
}
export {
  Route
};
