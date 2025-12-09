import { useEffect, useRef, useState, useMemo } from "react";
import { BookOpen, Trophy } from "lucide-react";
import Analytics from "./Analytics";
import Achievements from "./achievements";

export default function Toggle() {
  const [htmlindex, sethtmlindex] = useState(() => Number(localStorage.getItem("currentIndexhtml")) || 0);
  const [cssindex, setcssindex] = useState(() => Number(localStorage.getItem("currentIndexcss")) || 0);
  const [jsindex, setjsindex] = useState(() => Number(localStorage.getItem("currentIndexjs")) || 0);

  const options = useMemo(
    () => [
      { value: "lessons", label: "My analytics", Icon: BookOpen },
      { value: "achievements", label: "Achievements", Icon: Trophy },
    ],
    []
  );

  const [selected, setSelected] = useState("lessons");

  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  buttonRefs.current = options.map((_, i) => buttonRefs.current[i] ?? null);

  // 🟦 Update slider on tab change
  useEffect(() => {
    const idx = options.findIndex((o) => o.value === selected);
    const btn = buttonRefs.current[idx];
    const container = containerRef.current;
    if (!btn || !container) return;

    const rect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setSliderStyle({
      left: rect.left - containerRect.left,
      width: rect.width,
    });
  }, [selected, options]);

  console.log("htmlindex:", htmlindex);
  console.log("cssindex:", cssindex);
  console.log("jsindex:", jsindex);

  // 🟦 Fix: Update indexes when localStorage changes
  useEffect(() => {
    const updateIndexes = () => {
      sethtmlindex(Number(localStorage.getItem("currentIndexhtml")) || 0);
      setcssindex(Number(localStorage.getItem("currentIndexcss")) || 0);
      setjsindex(Number(localStorage.getItem("currentIndexjs")) || 0);
    };

    window.addEventListener("storage", updateIndexes);

    // Initial load
    updateIndexes();

    return () => {
      window.removeEventListener("storage", updateIndexes);
    };
  }, []);

  // 🟦 Update slider on resize
  useEffect(() => {
    const updateSlider = () => {
      const idx = options.findIndex((o) => o.value === selected);
      const btn = buttonRefs.current[idx];
      const container = containerRef.current;
      if (!btn || !container) return;

      const rect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setSliderStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    };

    const t = setTimeout(updateSlider, 50);
    window.addEventListener("resize", updateSlider);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateSlider);
    };
  }, [selected, options]);

  return (
    <div className="flex items-center justify-center bg-[#0f172a] p-6 w-full">
      <div className="flex flex-col items-center w-full max-w-lg">

        {/* Toggle Button Container */}
        <div ref={containerRef} className="relative bg-gray-800 rounded-xl p-1 w-fit">
          
          {/* Sliding Highlight */}
          <div
            aria-hidden
            className="absolute top-1/2 -translate-y-1/2 bg-[#0f172a] rounded-lg shadow-inner transition-all duration-300"
            style={{
              left: sliderStyle.left,
              width: sliderStyle.width,
              height: "calc(100% - 12px)",
            }}
          />

          {/* Buttons */}
          <div className="relative z-10 flex gap-2">
            {options.map((opt, i) => {
              const active = selected === opt.value;
              return (
                <button
                  key={opt.value}
                  ref={(el) => (buttonRefs.current[i] = el)}
                  onClick={() => setSelected(opt.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    active ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <opt.Icon className="w-4 h-4" />
                  <span className="select-none">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Below Toggle */}
        <div className="mt-6 flex justify-center items-center text-white">
          {selected === "lessons" && <Analytics />}
          {selected === "achievements" && (
            <Achievements
              htmlque={htmlindex}
              cssque={cssindex}
              jsque={jsindex}
            />
          )}
        </div>
      </div>
    </div>
  );
}
