const SkillCard = ({ title, tech }) => {
  return (
    <div className="bg-slate-100 p-4 lg:p-5 flex flex-col items-center border border-transparent hover:border-highlight transition-colors">
      <h4 className="mb-4 text-slate-800 font-maple font-semibold text-xs lg:text-sm uppercase tracking-widest">
        {title}
      </h4>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {tech.map((item) => (
          <img
            key={item.alt}
            src={item.icon}
            alt={item.alt}
            title={item.alt}
            className="w-auto h-8 lg:h-9 transition-transform hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};

const skills = [
  {
    title: "Frontend",
    tech: [
      {
        icon: "/assets/nextjs-icon.png",
        alt: "NextJS",
      },
      {
        icon: "/assets/reactjs-icon.png",
        alt: "ReactJS",
      },
      {
        icon: "/assets/flutter-icon.png",
        alt: "Flutter",
      },
    ],
  },
  {
    title: "Backend",
    tech: [
      {
        icon: "/assets/golang-icon.png",
        alt: "Golang",
      },
      {
        icon: "/assets/laravel-icon.png",
        alt: "Laravel",
      },
    ],
  },
  {
    title: "AI Tools",
    tech: [
      {
        icon: "/assets/huggingface-icon.png",
        alt: "Huggingface",
      },
      {
        icon: "/assets/jupyternotebook-icon.png",
        alt: "Jupyter Notebook",
      },
    ],
  },
  {
    title: "Database",
    tech: [
      {
        icon: "/assets/postgresql-icon.png",
        alt: "PostgreSQL",
      },
      {
        icon: "/assets/mysql-icon.png",
        alt: "MySQL",
      },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-15 flex flex-col">
      <h4 className="mb-8 text-slate-200 font-maple text-xl font-semibold uppercase tracking-widest border-b-2 border-b-highlight/60">
        # Skills
      </h4>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} tech={skill.tech} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
