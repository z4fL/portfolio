import { asset } from "../lib/asset";

const links = [
  {
    href: "https://enka.network/hsr/800735792",
    text: "HSR",
    icon: asset("/assets/game/hsr-icon.webp"),
  },
];

const About = () => {
  return (
    <section id="about" className="pt-15 pb-8 text-slate-200">
      <h4
        className="mb-8 font-maple text-xl font-bold uppercase tracking-widest border-b-2 border-b-highlight/80 pb-2
                  before:content-['|>'] before:tracking-normal before:inline-block before:mr-2"
      >
        About Me
      </h4>

      <div className="px-4 md:px-12 font-general text-md lg:text-lg leading-normal text-slate-300 text-justify [text-align-last:left]">
        <p className="mb-4">
          Hi, I&apos;m Dzaky, a Computer Science graduate focused on Fullstack
          Web Development, with a particular interest in Backend Engineering and
          API Development.
        </p>
        <p className="mb-4">
          My journey started with Laravel back in 2022 during vocational high
          school, and later expanded into ReactJS, NextJS, and Golang through
          MBKM MSIB Batch 7 at Ruangguru. I&apos;m also the first author of a
          Sinta 3-accredited journal publication on esports match outcome
          prediction using machine learning.
        </p>
        <p className="mb-6">
          Currently, I&apos;m focused on building web applications and APIs
          while deepening my understanding of backend architecture, system
          design, security, and scalability, along with exploring how AI can be
          integrated into practical applications.
        </p>

        <div className="text-left">
          <p className="mb-3 flex items-center gap-2 text-sm lg:text-base">
            Outside of coding, I enjoy gacha and MOBA games. Here&apos;s my
            Honkai: Star Rail account
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-slate-700 bg-slate-800/60 px-3.5 py-2 hover:border-highlight transition-colors"
              >
                <img src={link.icon} alt={link.text} className="h-auto w-6" />
                <span className="font-maple text-xs uppercase tracking-widest text-slate-300 group-hover:text-highlight transition-colors">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
