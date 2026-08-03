import { useRef } from "react";

export function ProjectCard({ project, onOpenModal, delay = 0 }) {
  const videoRef = useRef(null);

  return (
    <div
      className="group relative overflow-hidden bg-black rounded-xl border border-white/10 hover:border-primary transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/30 aspect-[16/10] reveal"
      data-delay={delay}
      onClick={() => onOpenModal && onOpenModal(project)}
    >
      {/* PURE VIDEO ONLY — No text, no category tags, no locations, no overlays */}
      <video
        ref={videoRef}
        src={project.video}
        poster={project.img}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
