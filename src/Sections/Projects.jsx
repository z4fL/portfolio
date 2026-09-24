import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import FsLightbox from "fslightbox-react";
import CTAButton from "../Components/CTAButton";
import { HiOutlineBookOpen } from "react-icons/hi";
import { projects } from "../projects";

const ProjectSection = ({ header, children }) => {
  return (
    <div>
      <p className="font-general text-md lg:text-lg text-slate-300 mb-8">
        {header}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">{children}</div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  stack,
  link,
  images,
  coverStyle,
  org = false,
  isComplete = true,
  publication,
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="bg-slate-950 flex flex-col items-start w-full overflow-hidden border border-slate-700 hover:border-highlight/50 transition-colors">
      <button
        type="button"
        onClick={() => setToggler(!toggler)}
        className="w-full aspect-video overflow-hidden bg-slate-900 group relative"
      >
        <img
          src={images[0]}
          alt={`${title} screenshot`}
          loading="lazy"
          className={`w-full h-full ${coverStyle} group-hover:scale-105 transition-transform duration-300`}
        />
        {images.length > 1 && (
          <span className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-maple bg-slate-950/80 px-2 py-1 text-slate-200">
            <FaImage className="h-3 w-auto" /> {images.length}
          </span>
        )}
      </button>

      <FsLightbox toggler={toggler} sources={images} />

      <div className="p-3.5 lg:p-5 flex flex-col items-start w-full">
        <p className="font-general font-semibold text-base lg:text-lg">
          {title}
        </p>
        <div className="flex justify-start divide-x text-[10px] lg:text-xs font-maple text-slate-400">
          {org && (
            <div>
              with {" "}
              <a
                href={org.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:underline"
              >
                {org.name}
              </a>
            </div>
          )}
          {!isComplete && <div className="-mt-1">Still Ongoing</div>}
        </div>
        <p className="font-general text-sm lg:text-base text-slate-300 mt-2 mb-5">
          {description}
        </p>
        <p className="font-maple text-[10px] lg:text-xs text-slate-300">
          {stack}
        </p>
        <div className="mt-6 flex justify-start space-x-5">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FiGithub className="h-5 w-auto text-slate-200 hover:text-highlight" />
          </a>
          {publication && (
            <a href={`#${publication}`}>
              <HiOutlineBookOpen className="h-5 w-auto text-slate-200 hover:text-highlight" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showTeam, setShowTeam] = useState(true);

  return (
    <section id="projects" className="pt-15 text-slate-200">
      <h4
        className="mb-8 font-maple text-xl font-bold uppercase tracking-widest border-b-2 border-b-highlight/80 pb-2
                  before:content-['|>'] before:tracking-normal before:inline-block before:mr-2"
      >
        Projects
      </h4>

      <div className="flex flex-col space-y-12">
        <ProjectSection header="Some of the latest projects that I have developed myself are:">
          {projects.mySelf.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ProjectSection>

        {!showTeam && (
          <ProjectSection header="Some other projects I've collaborated on with my team are:">
            {projects.team.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ProjectSection>
        )}

        <div className="pt-5 flex justify-center">
          <CTAButton
            text={`${showTeam ? "Show Team Projects" : "Hide Team Projects..."}`}
            onClick={() => setShowTeam(!showTeam)}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
