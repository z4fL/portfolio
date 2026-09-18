const WindowFrame = ({ filename, children }) => {
  return (
    <div className="w-full h-full border border-slate-700 bg-slate-950 flex flex-col overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-700 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-maple text-[11px] text-slate-500">
          {filename}
        </span>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
};

export default WindowFrame;