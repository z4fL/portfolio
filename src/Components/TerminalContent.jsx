import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "Dzaky Fadli Firmansyah" },

  { prompt: "$", text: "focus --current" },
  { prompt: ">", text: "learning · building · experimenting" },

  { prompt: "$", text: "git status" },
  { prompt: ">", text: "working on something interesting..." },

  { prompt: "$", text: "echo $STATUS" },
  { prompt: ">", text: "open_to_work = true" },
];

const TerminalContent = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      onComplete?.();
      return;
    }

    const currentLine = lines[visibleLines];

    if (charCount < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setCharCount((c) => c + 1);
      }, 45);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, currentLine.prompt === "$" ? 400 : 600);

    return () => clearTimeout(timeout);
  }, [charCount, visibleLines, onComplete]);

  return (
    <div className="terminal-scrollbar h-full overflow-y-auto p-4 font-maple text-xs lg:text-sm">
      <div className="space-y-2">
        {Array.from(
          { length: Math.ceil(visibleLines / 2) },
          (_, pairIndex) => {
            const commandIndex = pairIndex * 2;
            const resultIndex = commandIndex + 1;

            const command = lines[commandIndex];
            const result = lines[resultIndex];

            return (
              <div key={pairIndex} className="space-y-0">
                {command && commandIndex < visibleLines && (
                  <p>
                    <span className="text-highlight">
                      {command.prompt}{" "}
                    </span>
                    <span className="text-slate-200">
                      {command.text}
                    </span>
                  </p>
                )}

                {result && resultIndex < visibleLines && (
                  <p>
                    <span className="text-slate-500">
                      {result.prompt}{" "}
                    </span>
                    <span className="text-slate-400">
                      {result.text}
                    </span>
                  </p>
                )}
              </div>
            );
          }
        )}

        {visibleLines < lines.length && (
          <p>
            <span
              className={
                lines[visibleLines].prompt === "$"
                  ? "text-highlight"
                  : "text-slate-500"
              }
            >
              {lines[visibleLines].prompt}{" "}
            </span>

            <span
              className={
                lines[visibleLines].prompt === "$"
                  ? "text-slate-200"
                  : "text-slate-400"
              }
            >
              {lines[visibleLines].text.slice(0, charCount)}
            </span>

            <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-highlight align-middle" />
          </p>
        )}
      </div>
    </div>
  );
};

export default TerminalContent;