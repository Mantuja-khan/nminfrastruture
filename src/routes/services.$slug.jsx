import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useReveal } from "@/hooks/use-reveal";
import { getService, SERVICES } from "@/lib/services-data";
const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found \u2014 NM Infrastructure" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} \u2014 NM Infrastructure` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.title} \u2014 NM Infrastructure` },
        { property: "og:description", content: service.short }
      ]
    };
  },
  notFoundComponent: ServiceNotFound,
  errorComponent: ServiceError,
  component: ServiceDetail
});
function ServiceNotFound() {
  return <div className="pt-40 pb-24 max-w-2xl mx-auto px-6 text-center">
      <h1 className="font-display font-black text-4xl mb-4">Service not found</h1>
      <Link to="/services" className="text-primary underline font-display uppercase tracking-widest">
        Back to all services
      </Link>
    </div>;
}
function ServiceError({ reset }) {
  return <div className="pt-40 pb-24 max-w-2xl mx-auto px-6 text-center">
      <h1 className="font-display font-black text-4xl mb-4">Something went wrong</h1>
      <button onClick={reset} className="text-primary underline font-display uppercase tracking-widest">
        Try again
      </button>
    </div>;
}
function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
  useReveal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);
  return <>
      <PageHero
    title={service.title}
    subtitle={service.short}
    breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]}
  />

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-2 reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl">Overview</h2>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">{service.overview}</p>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl mb-4">What's included</h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {service.highlights.map((h) => <li key={h} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 w-6 h-6 bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span>{h}</span>
                </li>)}
            </ul>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl mb-6">Our process</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.process.map((p) => <div key={p.step} className="border-l-4 border-primary bg-muted p-5">
                  <div className="font-display font-black text-primary text-3xl leading-none mb-2">{p.step}</div>
                  <div className="font-display font-extrabold text-lg mb-1">{p.title}</div>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>)}
            </div>
          </div>

          <aside className="reveal-right space-y-6">
            <div className="bg-[var(--dark)] text-white p-6 sm:p-8">
              <h4 className="font-display font-black text-2xl mb-3">Get a free quote</h4>
              <p className="text-white/70 text-sm mb-5">Tell us about your project — we respond within one working day.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider px-5 py-3 hover:bg-white transition w-full justify-center">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="border border-border p-6 sm:p-8">
              <h4 className="font-display font-extrabold text-lg mb-4 uppercase tracking-widest">Other Services</h4>
              <ul className="space-y-3">
                {others.map((o) => <li key={o.slug}>
                    <Link to="/services/$slug" params={{ slug: o.slug }} className="flex items-center justify-between gap-3 text-foreground hover:text-primary transition font-display font-semibold">
                      <span className="flex items-center gap-3 min-w-0">
                        <o.icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{o.title}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                  </li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>;
}
export {
  Route
};
