import { useEffect } from "react";
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            const delay = el.dataset.delay ?? "0";
            el.style.animationDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
export {
  useReveal
};
