import versions from "../../version-history.json";

const Footer = () => {
  return (
    <footer className="mt-10 py-5 bg-slate-950 flex flex-col justify-center items-center">
      <p className="px-6 font-maple text-slate-400 text-sm text-center">
        Made with <br /> <span className="text-slate-300">Vite ReactJS</span>, <span className="text-slate-300">TailwindCSS</span>, <span className="text-slate-300">lightbox</span>
      </p>
      <div className="mt-3 font-maple text-highlight/90 text-sm font-semibold text-center">
        Z4FL@2026
      </div>
      {versions.length > 0 && (
        <div className="mt-4 flex justify-center">
          <select
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) window.location.href = e.target.value;
            }}
            aria-label="Select version"
            className="bg-slate-900 border border-slate-700 text-slate-400 font-maple text-[11px] uppercase tracking-widest px-2 py-1 hover:border-highlight focus:border-highlight focus:outline-none cursor-pointer"
          >
            <option value="">v{versions.length + 1} (current)</option>
            {versions.map((v) => (
              <option key={v.path} value={`${v.path}/`}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </footer>
  );
};

export default Footer;
