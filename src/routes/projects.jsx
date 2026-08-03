import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Video } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECTS } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";
import { VideoModal } from "@/components/video-modal";

const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — NM Infrastructure" },
      { name: "description", content: "Explore high-definition video showcases of 9 key landmark projects by NM Infrastructure." },
      { property: "og:title", content: "Video Projects Portfolio — NM Infrastructure" },
      { property: "og:description", content: "A high-definition video portfolio of landmark projects." }
    ]
  }),
  component: ProjectsPage
});

function ProjectsPage() {
  useReveal();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        title="Video Projects Showcase"
        subtitle="Explore our live video showcases of landmark developments."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10 reveal">
            <span className="w-10 h-[2px] bg-primary" />
            <span className="text-primary font-display font-bold tracking-[0.25em] uppercase text-xs sm:text-sm flex items-center gap-2">
              <Video className="w-4 h-4 text-primary" />
              9 Live Video Showcases
            </span>
          </div>

          {/* Pure Video Grid — All text/location content removed */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                onOpenModal={(proj) => setSelectedProject(proj)}
                delay={i % 3 * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pure Video Lightbox Modal */}
      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display font-black text-[var(--dark)] text-3xl md:text-4xl mb-2">
              Have a structural project in mind?
            </h3>
            <p className="text-[var(--dark)]/80 text-sm font-medium">
              We bring technical expertise and craftsmanship to every build site.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--dark)] text-white font-display font-bold uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-[var(--dark)] transition shadow-xl shrink-0"
          >
            Start Consulting <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export { Route };
