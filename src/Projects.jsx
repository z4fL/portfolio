import React from "react";
import { FiGithub } from "react-icons/fi";

const ProjectSection = ({ header, children }) => {
  return (
    <div className="mt-5">
      <p className="font-general text-slate-300 mb-8">{header}</p>
      <div className="mb-5">{children}</div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  stack,
  link,
  isTeam = false,
  isComplete = true,
}) => {
  return (
    <div className="mb-4">
      <div className="bg-slate-950 p-3.5">
        <p className="font-inter font-semibold text-base">{title}</p>
        <div className="justify-start divide-x">
          {isTeam && (
            <div className="-mt-1 mr-2 font-fira-code text-[10px]">Team</div>
          )}
          {!isComplete && (
            <div className="-mt-1 font-fira-code text-[10px]">
              Still Ongoing
            </div>
          )}
          <p className="font-general text-sm text-slate-300 mt-2 mb-5">
            {description}
          </p>
        </div>
        <p className="font-fira-code text-[10px]">{stack}</p>
        <div className="mt-6">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FiGithub className="h-5 w-auto text-slate-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

const projects = {
  featured: [
    {
      title: "Chatbot Energy Eanagement",
      description:
        "An application for managing user electricity usage by uploading historical data from the IoT server for analysis and can provide energy saving recommendations.",
      stack: "Reactjs, TailwindCSS, Golang, Huggingface API, PostgreSQL",
      link: "https://github.com/z4fL/chatbot-smarthome-energy-management",
    },
    {
      title: "MPL ID Season 14 Winning Prediction",
      description:
        "Application to predict game wins based on draft picks from Mobile Legend: Bang Bang in the MPL ID S14 tournament.",
      stack:
        "Reactjs, TailwindCSS, Golang, Flask, Jupyter Notebook, Random Forest",
      link: "https://github.com/z4fL/prediction-mpl-id-s14",
    },
    {
      title: "Heroes",
      description:
        "Wikipedia of Mobile Legends: Bang Bang based on design from Dota2 web with awesome design.",
      stack: "Nextjs, TailwindCSS, Framer Motion, Prisma, PostgreSQL",
      link: "https://github.com/z4fL/heroes-mlbb",
      isComplete: false,
    },
    {
      title: "Jual Beli Akun Game (JBAG)",
      description:
        "A simple application for buying and selling various game accounts between seller and buyer. Flutter for Frontend and Laravel for Backend.",
      stack: "Flutter, Laravel",
      link: "https://github.com/Asyra20/JBAG-Jual-Beli-Akun-Game",
      isTeam: true,
    },
  ],
  other: [
    {
      title: "SMEGA MART",
      description: "SMKN 1 Purbalingga online retail store with COD payment.",
      stack: "Laravel, Reactjs, TailwindCSS, Flowbite, MySQL, Cloudinary",
      link: "https://github.com/softdevid/smega-mart",
      isTeam: true,
    },
    {
      title: "BIMA HELM",
      description:
        "A website to buy various brands of helmets. Warehouse stock management and monthly reports",
      stack: "Laravel, Reactjs, TailwindCSS, Flowbite, MySQL, Cloudinary",
      link: "https://github.com/softdevid/bima-helm",
      isTeam: true,
    },
  ],
};

const Projects = () => {
  return (
    <section id="projects" className="py-15 text-slate-200">
      <h4 className="font-fira-code text-xl font-semibold uppercase tracking-widest border-b border-b-slate-400">
        # Projects
      </h4>

      <div className="flex flex-col space-y-5">
        <ProjectSection
          header="Some of the latest projects that I have developed myself or with my
          friends are:"
        >
          {projects.featured.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              link={project.link}
              isTeam={project.isTeam}
              isComplete={project.isComplete}
            />
          ))}
        </ProjectSection>

        <ProjectSection header="And other projects with my team are:">
          {projects.other.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              link={project.link}
              isTeam={project.isTeam}
              isComplete={project.isComplete}
            />
          ))}
        </ProjectSection>
      </div>
    </section>
  );
};

export default Projects;
