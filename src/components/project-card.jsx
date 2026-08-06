import { useRef } from "react";
import { Play, Maximize2, Video, Image as ImageIcon } from "lucide-react";

export function ProjectCard({ project, onOpenModal, delay = 0 }) {
  const videoRef = useRef(null);
  const isVideo = project.type === "video" || !!project.video;

  return (
    <div
      className="group relative overflow-hidden bg-black/90 rounded-xl border border-white/10 hover:border-primary transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/20 flex flex-col justify-between aspect-[16/11] reveal"
      data-delay={delay}
      onClick={() => onOpenModal && onOpenModal(project)}
    >
      {/* Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10 group-hover:from-black/90 transition-opacity duration-300" />
      </div>

      {/* Top Badge Bar */}
      <div className="relative z-10 p-4 flex items-start justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-display font-bold text-white border border-white/10 uppercase tracking-wider">
          {isVideo ? (
            <Video className="w-3.5 h-3.5 text-primary" />
          ) : (
            <ImageIcon className="w-3.5 h-3.5 text-accent" />
          )}
          <span>{isVideo ? "Video" : "Photo"}</span>
        </span>

        {/* Action Icon Pill */}
        <div className="w-9 h-9 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
          {isVideo ? (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* Bottom Content Area — Shows exact file-based title */}
      <div className="relative z-10 p-4 pt-0">
        <h3 className="font-display font-extrabold text-white text-base sm:text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
