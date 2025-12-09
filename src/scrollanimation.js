import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  useEffect(() => {
    function initAnimations() {
      const sections = document.querySelectorAll(".min-h-screen > div, .objective, .getstarted");
      sections.forEach((sec) => {
        gsap.from(sec, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            end: "top 60%",
          },
        });
      });

      // Refresh ScrollTrigger positions
      ScrollTrigger.refresh();
    }

    // Wait for browser to render everything
    if (document.readyState === "complete") {
      initAnimations();
    } else {
      window.addEventListener("load", initAnimations);
    }

    return () => {
      window.removeEventListener("load", initAnimations);
    };
  }, []);
}
