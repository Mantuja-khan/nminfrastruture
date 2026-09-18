import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Video, Image as ImageIcon, Sparkles, Filter, Layers, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECTS, PROJECT_CATEGORIES, VIDEO_PROJECTS, PHOTO_PROJECTS } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";
import { VideoModal } from "@/components/video-modal";
import { ImageModal } from "@/components/image-modal";

const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Galleries — NM Infrastructure" },
      { name: "description", content: "Explore categorized project showcases, videos and high-definition photos of Dharuhera Reliance, Gujrat, Bikaner, Sonipat, Kota and Dehradun sites." },
      { property: "og:title", content: "Categorized Projects Portfolio — NM Infrastructure" },
      { property: "og:description", content: "High-definition video and photo documentation categorized by major industrial and commercial sites." }
    ]
  }),
  component: ProjectsPage
});

function ProjectsPage() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeMediaType, setActiveMediaType] = useState("all"); // 'all' | 'video' | 'photo'
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter items based on activeCategory and activeMediaType
  const getFilteredItems = (catId = activeCategory) => {
    return PROJECTS.filter((p) => {
      const matchCat = catId === "all" || p.category === catId;
      const matchMedia = activeMediaType === "all" || p.type === activeMediaType;
      return matchCat && matchMedia;
    });
  };

  const currentDisplayList = getFilteredItems(activeCategory);

  // Active categories that have matching media for grouped view
  const visibleCategories =
    activeCategory === "all"
      ? PROJECT_CATEGORIES.filter((cat) => cat.id !== "all" && getFilteredItems(cat.id).length > 0)
      : PROJECT_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <>
      <PageHero
        title="Project Showcase & Galleries"
        subtitle="Explore our live video showcases and high-definition photo documentation categorized by major site developments across India."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="py-14 sm:py-20 bg-[#f6f7fa] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Controls Section - Clean, Simple, Light styling without dark background */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 mb-10 text-slate-900 border border-slate-200/90 shadow-sm reveal">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-[2px] bg-primary" />
                  <span className="text-primary font-sans font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    Categorized Portfolio
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Site <span className="text-primary">Developments & Works</span>
                </h2>
              </div>

              {/* Right Side Controls: Media Filter + Project / Category Dropdown */}
              <div className="flex flex-wrap items-center gap-3 self-start lg:self-center">
                {/* Media Format Filter Pills */}
                <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200">
                  <button
                    onClick={() => setActiveMediaType("all")}
                    className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all ${
                      activeMediaType === "all"
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    All ({PROJECTS.length})
                  </button>
                  <button
                    onClick={() => setActiveMediaType("video")}
                    className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      activeMediaType === "video"
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    Videos ({VIDEO_PROJECTS.length})
                  </button>
                  <button
                    onClick={() => setActiveMediaType("photo")}
                    className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      activeMediaType === "photo"
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    Photos ({PHOTO_PROJECTS.length})
                  </button>
                </div>

                {/* Categories & Projects Dropdown (Right side corner) */}
                <div className="relative min-w-[220px]">
                  <div className="flex items-center gap-2 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-sans font-bold hover:border-primary transition-colors cursor-pointer group">
                    <Filter className="w-3.5 h-3.5 text-primary shrink-0" />
                    <select
                      value={activeCategory}
                      onChange={(e) => setActiveCategory(e.target.value)}
                      className="bg-transparent text-slate-800 w-full font-sans font-bold focus:outline-none cursor-pointer pr-2 appearance-none text-xs"
                      aria-label="Filter by site category or project name"
                    >
                      {PROJECT_CATEGORIES.map((cat) => {
                        const count =
                          cat.id === "all"
                            ? getFilteredItems("all").length
                            : getFilteredItems(cat.id).length;
                        return (
                          <option key={cat.id} value={cat.id} className="bg-white text-slate-800 py-1.5">
                            {cat.name} ({count})
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DISPLAY SECTIONS */}
          {activeCategory === "all" ? (
            /* GROUPED BY CATEGORIES */
            <div className="space-y-16">
              {visibleCategories.map((cat) => {
                const items = getFilteredItems(cat.id);
                if (items.length === 0) return null;

                const videoCount = items.filter((i) => i.type === "video").length;
                const photoCount = items.filter((i) => i.type === "photo").length;

                return (
                  <div key={cat.id} className="reveal">
                    {/* Category Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-8 bg-primary rounded-full" />
                        <div>
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                            {cat.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        {videoCount > 0 && (
                          <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold px-3 py-1 bg-slate-900 text-white rounded-full">
                            <Video className="w-3 h-3 text-primary" /> {videoCount} {videoCount === 1 ? "Video" : "Videos"}
                          </span>
                        )}
                        {photoCount > 0 && (
                          <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold px-3 py-1 bg-slate-100 text-slate-800 border border-slate-200 rounded-full">
                            <ImageIcon className="w-3 h-3 text-primary" /> {photoCount} {photoCount === 1 ? "Photo" : "Photos"}
                          </span>
                        )}
                        <button
                          onClick={() => setActiveCategory(cat.id)}
                          className="text-xs font-sans font-bold text-primary hover:text-red-700 underline ml-2"
                        >
                          View Category Only
                        </button>
                      </div>
                    </div>

                    {/* Cards Grid: 2 cols on mobile, 4 cols on large screens */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                      {items.map((project, idx) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          onOpenModal={(proj) => setSelectedMedia(proj)}
                          delay={(idx % 4) * 60}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* SINGLE CATEGORY VIEW */
            <div className="reveal">
              <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs text-primary font-sans font-bold uppercase tracking-widest block mb-1">
                    Selected Category
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                    {PROJECT_CATEGORIES.find((c) => c.id === activeCategory)?.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCategory("all")}
                  className="px-5 py-2.5 bg-primary text-white hover:bg-red-700 text-xs font-sans font-bold uppercase rounded-full shadow-sm transition"
                >
                  View All Categories
                </button>
              </div>

              {currentDisplayList.length === 0 ? (
                <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <p className="text-slate-500 font-sans font-semibold">
                    No media items found in this category for the selected filter.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                  {currentDisplayList.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onOpenModal={(proj) => setSelectedMedia(proj)}
                      delay={(idx % 4) * 60}
                    />
                  ))}
                </div>
              )}
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


