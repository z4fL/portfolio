import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[600px] pt-15 flex flex-col text-slate-50">
      <img src="/logo.png" alt="Logo" className="h-auto w-12 mb-4" />
      <h4 className="font-general text-sm">Hi, my name is</h4>
      <h1 className="mt-3 font-general font-bold text-4xl">
        Dzaky Fadli Firmansyah
      </h1>
      <h2 className="mt-2 font-fira-code text-xl font-bold text-slate-300">
        Fullstack Developer + AI
      </h2>
      <div className="flex justify-start space-x-5 mt-5">
        <FaGithub className="h-8 w-auto text-slate-200" />
        <FaInstagram className="h-8 w-auto text-slate-200" />
        <FaLinkedin className="h-8 w-auto text-slate-200" />
        <IoMdMail className="h-8 w-auto text-slate-200" />
      </div>
      <a
        href="#projects"
        className="w-fit mt-12 p-2 bg-[#F9564F] text-center font-general tracking-wide font-semibold text-slate-950"
      >
        See my projects
      </a>
    </section>
  );
};

export default Hero;
