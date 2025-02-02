import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import CTAButton from "../Components/CTAButton";

const linkClass = "h-8 w-auto text-slate-200 hover:text-highlight active:text-highlight"

const links = [
  {
    href: "https://github.com/z4fL",
    icon: <FaGithub className={linkClass} />,
  },
  {
    href: "https://www.instagram.com/z4fl15/",
    icon: <FaInstagram className={linkClass} />,
  },
  {
    href: "https://www.linkedin.com/in/dzaky-fadli-firmansyah/",
    icon: <FaLinkedin className={linkClass} />,
  },
  {
    href: "mailto:zaaaafl654@gmail.com",
    icon: <FaEnvelope className={linkClass} />,
  },
];

const Hero = () => {
  return (
    <section id="hero" className="min-h-[500px] pt-10 md:pt-15 text-slate-50">
      <div className="md:pt-10 lg:pt-20 flex items-center justify-between">
        <div className="flex flex-col">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-auto w-12 mb-4 md:hidden"
          />
          <h4 className="font-general text-sm lg:text-base">Hi, my name is</h4>
          <h1 className="mt-3 font-general font-bold text-4xl lg:text-[42px] leading-normal">
            Dzaky Fadli Firmansyah
          </h1>
          <h2 className="mt-2 font-fira-code text-xl lg:text-2xl font-bold text-slate-300">
            {"<"}Fullstack Developer + AI {"/>"}
          </h2>
          <div className="flex justify-start space-x-5 mt-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a
            href="#projects"
            className="w-fit mt-10 md:mt-12 text-center text-sm md:text-base font-general tracking-wide font-semibold text-slate-900"
            >
              <CTAButton text="See my projects" />
          </a>
        </div>
        <img
          src="/logo.png"
          alt="Logo"
          className="h-28 lg:h-40 xl:h-48 w-auto mb-4 hidden md:block"
        />
      </div>
    </section>
  );
};

export default Hero;
