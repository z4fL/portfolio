import { useState } from "react";
import CTAButton from "../Components/CTAButton";
import HeroSlider from "../Components/HeroSlider";
import PdfPreviewModal from "../Components/PdfPreviewModal";
import { socialLinks } from "../socialLinks";

const linkClass =
  "h-8 w-auto text-slate-200 hover:text-highlight active:text-highlight";

const Hero = () => {
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);

  return (
    <>
      <section id="hero" className="min-h-[500px] pt-10 md:pt-10 text-slate-50">
        <div className="md:pt-10 lg:pt-20 flex items-center justify-between gap-10 lg:gap-16">
          <div className="flex flex-col">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-auto w-12 mb-4 md:hidden"
            />
            <div className="w-12 h-1 bg-highlight mb-4" />
            <h4 className="font-general text-sm lg:text-base">
              Hi, my name is
            </h4>
            <h1 className="mt-3 font-general font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.05] tracking-tight">
              Dzaky Fadli Firmansyah
            </h1>
            <h2 className="mt-4 font-maple text-xl lg:text-2xl font-bold text-slate-300">
              <span className="text-highlight">{"<"}</span>
              Fullstack Developer + AI{" "}
              <span className="text-highlight">{"/>"}</span>
            </h2>
            <div className="flex lg:hidden justify-start space-x-5 mt-5">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className={linkClass} />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-10 md:mt-12">
              <a
                href="#projects"
                className="w-fit text-center text-sm md:text-base font-general tracking-wide font-semibold text-slate-900"
              >
                <CTAButton text="See my projects" />
              </a>
              <CTAButton
                text="CV"
                dark={false}
                onClick={() => setIsCvPreviewOpen(true)}
                className="w-fit text-center text-sm font-general font-semibold tracking-wide text-slate-900 md:text-base"
              />
            </div>
          </div>
          <HeroSlider />
        </div>
      </section>
      <PdfPreviewModal
        key="/cv/dzaky-fadli-firmansyah-cv.pdf"
        isOpen={isCvPreviewOpen}
        onClose={() => setIsCvPreviewOpen(false)}
        fileUrl="/cv/dzaky-fadli-firmansyah-cv.pdf"
      />
    </>
  );
};

export default Hero;
