import { useCallback, useEffect, useRef, useState } from "react";
import TerminalContent from "./TerminalContent";
import WindowFrame from "./WindowFrame";

const slides = [
  {
    id: "terminal",
    filename: "whoami.sh",
  },
  {
    id: "photo",
    filename: "profile.png",
    content: (
      <img
        src="https://github.com/z4fL.png"
        alt="GitHub profile photo"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    id: "logo",
    filename: "logo.png",
    content: (
      <div className="w-full h-full flex items-center justify-center p-2">
        <img src="/logo.png" alt="Logo" className="max-h-48 w-auto" />
      </div>
    ),
  },
  {
    id: "sindoro1",
    filename: "sindoro1.png",
    content: (
      <img src="assets/sindoro1.jpg" alt="Sindoro 1" className="w-full h-full object-cover" />
    ),
  },
  // {
  //   id: "sindoro2",
  //   filename: "sindoro2.png",
  //   content: (
  //     <img src="assets/sindoro2.jpg" alt="Sindoro 2" className="w-full h-full object-cover" />
  //   ),
  // },
];

const AUTO_ADVANCE_MS = 6500;
const SLIDE_WIDTH_PERCENT = 88;

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [terminalFinished, setTerminalFinished] = useState(false);
  const timeoutRef = useRef(null);

  const handleTerminalComplete = useCallback(() => {
    setTerminalFinished(true);
  }, []);

  useEffect(() => {
    if (paused) return undefined;

    // Initial terminal masih typing.
    if (index === 0 && !terminalFinished) {
      return undefined;
    }

    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => clearTimeout(timeoutRef.current);
  }, [index, paused, terminalFinished]);

  const handleSlideChange = (nextIndex) => {
    clearTimeout(timeoutRef.current);
    setIndex(nextIndex);
  };

  return (
    <div
      className="hidden md:block w-72 xl:w-84 shrink-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="h-80 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * SLIDE_WIDTH_PERCENT}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="shrink-0 h-full pl-px pr-3 box-border"
              style={{ flex: `0 0 ${SLIDE_WIDTH_PERCENT}%` }}
            >
              <WindowFrame filename={slide.filename}>
                {slide.id === "terminal" ? (
                  <TerminalContent onComplete={handleTerminalComplete} />
                ) : (
                  slide.content
                )}
              </WindowFrame>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => handleSlideChange(i)}
            aria-label={`Lihat ${slide.filename}`}
            className={`h-3 transition-all ${
              i === index
                ? "w-9 bg-highlight"
                : "w-3 bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
