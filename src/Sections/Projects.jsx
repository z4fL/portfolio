import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import FsLightbox from "fslightbox-react";
import CTAButton from "../Components/CTAButton";

const projects = {
  featured: [
    {
      title: "Chatbot Energy Eanagement",
      description:
        "A web application that can analyze historical data from the IOT server to answer user questions. It can also provide energy saving recommendations by asking directly to the chat prompt.",
      stack: "Reactjs, TailwindCSS, Golang, Huggingface API, PostgreSQL",
      link: "https://github.com/z4fL/chatbot-smarthome-energy-management",
      images: ["/img/chatbot1.png", "/img/chatbot2.png"],
    },
    {
      title: "MPL ID Season 14 Winning Prediction",
      description:
        "Application to predict game wins based on the draft pick from the Mobile Legend: Bang Bang game in the MPL ID S14 tournament. First thing i'have made is prediction model with Random Forest and after that i create Flask API to connect Backend Golang before displaying result with Reactjs, and otherwise.",
      stack:
        "Reactjs, TailwindCSS, Golang, Flask, Jupyter Notebook, Random Forest Algorithm",
      link: "https://github.com/z4fL/prediction-mpl-id-s14",
      images: [
        "/img/mplids14_prediction1.png",
        "/img/mplids14_prediction2.png",
        "/img/mplids14_prediction3.png",
      ],
    },
    {
      title: "Heroes",
      description:
        "My version of Mobile Legends: Bang Bang Wikipedia containing info about: heroes, equipment, galleries, and more.",
      stack: "Nextjs, TailwindCSS, Framer Motion, Prisma, PostgreSQL",
      link: "https://github.com/z4fL/heroes-mlbb",
      images: [
        "/img/heroes1.png",
        "/img/heroes2.png",
        "/img/heroes3.png",
        "/img/heroes4.png",
      ],
      isComplete: false,
    },
    {
      title: "Jual Beli Akun Game (JBAG)",
      description:
        "A simple application for buying and selling various game accounts between seller and buyer. The payment method still using manual method like provide payment evidence, but the process of transaction is done.",
      stack: "Flutter, Laravel, MySQL",
      link: "https://github.com/Asyra20/JBAG-Jual-Beli-Akun-Game",
      images: [
        "/img/jbag1.jpg",
        "/img/jbag2.jpg",
        "/img/jbag3.jpg",
        "/img/jbag4.jpg",
      ],
      isTeam: true,
    },
  ],
  other: [
    {
      title: "SMEGA MART",
      description: "SMKN 1 Purbalingga online retail store with COD payment.",
      stack: "Laravel, TailwindCSS, Flowbite, MySQL, Cloudinary",
      link: "https://github.com/softdevid/smega-mart",
      images: [
        "/img/smegamart1.png",
        "/img/smegamart2.png",
        "/img/smegamart3.png",
      ],
      isTeam: true,
    },
    {
      title: "BIMA HELM",
      description:
        "A catalog website to see various brands of helmets, accessories, and sparepart for Bima Helm store in Purbalingga.",
      stack: "Laravel, MySQL, Cloudinary",
      link: "https://github.com/softdevid/bima-helm",
      images: [
        "/img/bimahelm1.png",
        "/img/bimahelm2.png",
        "/img/bimahelm3.png",
      ],
      isTeam: true,
    },
  ],
};

const ProjectSection = ({ header, children }) => {
  return (
    <div>
      <p className="font-general lg:text-lg text-slate-300 mb-8">{header}</p>
      <div className="flex flex-col items-center space-y-5">{children}</div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  stack,
  link,
  images,
  isTeam = false,
  isComplete = true,
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="bg-slate-950 p-3.5 lg:p-5 flex flex-col items-start w-full max-w-2xl">
      <p className="font-general font-semibold text-base lg:text-lg">{title}</p>
      <div className="flex justify-start divide-x text-[10px] lg:text-xs font-fira-code">
        {isTeam && <div className="-mt-1 mr-2">Team</div>}
        {!isComplete && <div className="-mt-1">Still Ongoing</div>}
      </div>
      <p className="font-general text-sm lg:text-base text-slate-300 mt-2 mb-5">
        {description}
      </p>
      <p className="font-fira-code text-[10px] lg:text-xs">{stack}</p>
      <div className="mt-6 flex justify-start space-x-5">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FiGithub className="h-5 w-auto text-slate-200 hover:text-highlight" />
        </a>
        <FaImage
          onClick={() => setToggler(!toggler)}
          className="h-5 w-auto text-slate-200 hover:text-highlight cursor-pointer"
        />
        <FsLightbox toggler={toggler} sources={images} />
      </div>
    </div>
  );
};

const Projects = () => {
  const [toggleMore, setToggleMore] = useState(true);

  return (
    <section id="projects" className="py-15 text-slate-200">
      <h4 className="mb-8 font-fira-code text-xl font-semibold uppercase tracking-widest border-b border-b-slate-400">
        # Projects
      </h4>

      <div className="flex flex-col space-y-12">
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
              images={project.images}
              isTeam={project.isTeam}
              isComplete={project.isComplete}
            />
          ))}
        </ProjectSection>

        {!toggleMore && (
          <ProjectSection
            header={
              <>
                Some other projects with my team,{" "}
                <a
                  href="https://github.com/softdevid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold"
                >
                  SoftDev
                </a>
                , are:
              </>
            }
          >
            {projects.other.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                stack={project.stack}
                link={project.link}
                images={project.images}
                isTeam={project.isTeam}
                isComplete={project.isComplete}
              />
            ))}
          </ProjectSection>
        )}

        <div className="pt-5 flex justify-center">
          <button onClick={() => setToggleMore(!toggleMore)}>
            <CTAButton text={`${toggleMore ? "See More...": "See Less..."}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
