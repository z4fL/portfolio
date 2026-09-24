import { skills } from "../skills";

const CORE_STACK = ["ReactJS", "Laravel", "PostgreSQL", "Jupyter Notebook"];

const coreTech = skills
  .flatMap((group) => group.tech)
  .filter((item) => CORE_STACK.includes(item.alt));

const TechStack = () => {
  return (
    <section id="skills" className="pt-15 flex flex-col">
      <h4
        className="mb-8 text-base-color font-maple text-xl font-bold tracking-widest uppercase border-b-2 border-b-highlight/80 pb-2
                  before:content-['|>'] before:tracking-normal before:inline-block before:mr-2"
      >
        Core Stack
      </h4>

      <div className="w-full max-w-4xl mx-auto border border-charcoal/50">
        {/* Workbench header */}
        <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 border-b border-charcoal/50">
          <span className="font-maple text-[10px] lg:text-xs text-base-color uppercase tracking-widest">
            core_stack.conf
          </span>

          {/* <span className="font-maple text-[10px] lg:text-xs text-highlight uppercase tracking-widest">
            {String(coreTech.length).padStart(2, "0")} tools
          </span> */}
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-base-color divide-x divide-y divide-charcoal/30 lg:divide-y-0">
          {coreTech.map((item, index) => (
            <div
              key={item.alt}
              className="group relative flex flex-col items-center justify-center gap-4 px-4 py-7 lg:px-6 lg:py-9"
            >
              <div className="absolute top-3 left-3 font-maple text-[11px] text-charcoal/40">
                0{index + 1}
              </div>

              <img
                src={item.icon}
                alt={item.alt}
                title={item.alt}
                className="h-8 lg:h-10 w-auto transition-transform group-hover:scale-110"
              />

              <span className="font-maple text-[10px] lg:text-xs text-charcoal uppercase tracking-widest text-center group-hover:text-slate-950 transition-colors">
                {item.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
