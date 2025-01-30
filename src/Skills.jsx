import React from "react";

const SkillCard = ({ title, tech }) => {
  return (
    <div className="bg-slate-200 p-3.5 flex flex-col items-center ">
      <h4 className="mb-2 text-slate-800 font-general font-base uppercase">
        {title}
      </h4>
      <div className="flex justify-center space-x-3">
        {tech.map((item) => (
          <img
            key={item.alt}
            src={item.icon}
            alt={item.alt}
            className="w-auto h-9"
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
      <h4 className="text-slate-200 font-fira-code text-xl font-semibold uppercase tracking-widest border-b border-b-slate-400">
        # Skills
      </h4>

      <div className="mt-5 flex flex-col space-y-7">
        {skills.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} tech={skill.tech} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
