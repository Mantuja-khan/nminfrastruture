import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export function VideoModal({ project, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Header */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-black/70 hover:bg-primary hover:text-black text-white backdrop-blur-md transition-all duration-200 shadow-lg border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PURE FULL VIDEO DISPLAY */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={project.video}
            poster={project.img}
            autoPlay
            playsInline
            controls
            loop
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
