import { useRef } from "react";
import { Play, Maximize2, Video, Image as ImageIcon } from "lucide-react";

export function ProjectCard({ project, onOpenModal, delay = 0 }) {
  const videoRef = useRef(null);
  const isVideo = project.type === "video" || !!project.video;

  return (
    <div
      className="group relative overflow-hidden bg-slate-900 rounded-2xl transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between aspect-square reveal"
      data-delay={delay}
      onClick={() => onOpenModal && onOpenModal(project)}
    >
      {/* Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        {isVideo ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.img}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/80 transition-opacity duration-300" />
      </div>

      {/* Top Badge Bar */}
      <div className="relative z-10 p-3 sm:p-4 flex items-start justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-sans font-bold text-white border border-white/15 uppercase tracking-wider shadow-sm">
          {isVideo ? (
            <Video className="w-3.5 h-3.5 text-primary" />
          ) : (
            <ImageIcon className="w-3.5 h-3.5 text-primary" />
          )}
          <span>{isVideo ? "Live Video" : "Photo"}</span>
        </span>

        {/* Action Icon Pill */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
          {isVideo ? (
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
          ) : (
            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-3.5 sm:p-4 pt-0">
        {project.categoryName && (
          <span className="text-[11px] text-red-400 font-sans font-bold uppercase tracking-wider block mb-1">
            {project.categoryName}
          </span>
        )}
        <h3 className="font-display font-bold text-white text-sm sm:text-base leading-snug group-hover:text-red-200 transition-colors line-clamp-2">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
