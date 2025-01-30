import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  {
    href: "https://github.com/z4fL",
    icon: <FaGithub className="h-8 w-auto text-slate-200" />,
  },
  {
    href: "https://www.instagram.com/z4fl15/",
    icon: <FaInstagram className="h-8 w-auto text-slate-200" />,
  },
  {
    href: "https://www.linkedin.com/in/dzaky-fadli-firmansyah/",
    icon: <FaLinkedin className="h-8 w-auto text-slate-200" />,
  },
  {
    href: "mailto:zaaaafl654@gmail.com",
    icon: <FaEnvelope className="h-8 w-auto text-slate-200" />,
  },
];

const ButtonLink = ({ href, className, text }) => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-[500px] pt-15 text-slate-50">
      <div className="pt-20 flex items-center justify-between">
        <div className="flex flex-col">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-auto w-12 mb-4 md:hidden"
          />
          <h4 className="font-general text-sm lg:text-base">Hi, my name is</h4>
          <h1 className="mt-3 font-general font-bold text-4xl">
            Dzaky Fadli Firmansyah
          </h1>
          <h2 className="mt-2 font-fira-code text-xl lg:text-2xl font-bold text-slate-300">
            Fullstack Developer + AI
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
          <ButtonLink
            href="#projects"
            className="w-fit mt-12 p-2 bg-[#F9564F] text-center font-general tracking-wide font-semibold text-slate-950"
            text="See my projects"
          />
        </div>
        <img
          src="/logo.png"
          alt="Logo"
          className="h-28 lg:h-40 w-auto mb-4 hidden md:block"
        />
      </div>
    </section>
  );
};

export default Hero;
