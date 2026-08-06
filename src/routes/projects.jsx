import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Video, Image as ImageIcon, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useReveal } from "@/hooks/use-reveal";
import { VIDEO_PROJECTS, PHOTO_PROJECTS } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";
import { VideoModal } from "@/components/video-modal";
import { ImageModal } from "@/components/image-modal";

const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — NM Infrastructure" },
      { name: "description", content: "Explore live video showcases and high-resolution photo galleries of landmark infrastructure developments by NM Infrastructure." },
      { property: "og:title", content: "Video & Photo Projects Portfolio — NM Infrastructure" },
      { property: "og:description", content: "A high-definition video and photo portfolio of industrial, commercial, and residential projects." }
    ]
  }),
  component: ProjectsPage
});

function ProjectsPage() {
  useReveal();
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'videos' | 'photos'
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        title="Project Showcase & Gallery"
        subtitle="Explore our live video showcases and high-definition photo documentation of landmark infrastructure developments."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-[2px] bg-primary" />
                <span className="text-primary font-display font-bold tracking-[0.25em] uppercase text-xs sm:text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Portfolio Showcase
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground">
                Featured <span className="text-primary">Developments</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1.5 bg-muted rounded-xl border border-border">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All ({VIDEO_PROJECTS.length + PHOTO_PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-5 py-2.5 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "videos"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Video className="w-4 h-4" />
                Videos ({VIDEO_PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-5 py-2.5 rounded-lg font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "photos"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                Photos ({PHOTO_PROJECTS.length})
              </button>
            </div>
          </div>

          {/* SECTION 1: VIDEO PROJECTS SHOWCASE */}
          {(activeTab === "all" || activeTab === "videos") && (
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8 reveal">
                <span className="w-8 h-[2px] bg-primary" />
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-foreground uppercase tracking-wide flex items-center gap-2">
                  <Video className="w-5 h-5 text-primary" />
                  Video Project Showcases ({VIDEO_PROJECTS.length})
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {VIDEO_PROJECTS.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    onOpenModal={(proj) => setSelectedMedia(proj)}
                    delay={(i % 3) * 100}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SECTION 2: PHOTO PROJECTS GALLERY */}
          {(activeTab === "all" || activeTab === "photos") && (
            <div>
              <div className="flex items-center gap-3 mb-8 reveal">
                <span className="w-8 h-[2px] bg-accent" />
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-foreground uppercase tracking-wide flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-accent" />
                  Photo Project Gallery ({PHOTO_PROJECTS.length})
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PHOTO_PROJECTS.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    onOpenModal={(proj) => setSelectedMedia(proj)}
                    delay={(i % 3) * 100}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modals */}
      {selectedMedia?.type === "video" && (
        <VideoModal
          project={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}

      {selectedMedia?.type === "photo" && (
        <ImageModal
          project={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </>
  );
}

export { Route };
