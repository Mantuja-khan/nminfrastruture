import { useEffect } from "react";
import { X, Image as ImageIcon } from "lucide-react";

export function ImageModal({ project, onClose }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--dark)] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/20 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-accent uppercase tracking-wider mb-1">
              <ImageIcon className="w-3.5 h-3.5" /> Photo Showcase
            </span>
            <h3 className="font-display font-extrabold text-white text-base sm:text-lg">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image Display */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
