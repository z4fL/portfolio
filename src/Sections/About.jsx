const links = [
  {
    href: "https://enka.network/hsr/800735792",
    text: "HSR",
    icon: "/assets/hsr-icon.png",
  },
  // {
  //   href: "https://enka.network/zzz/1313976028",
  //   text: "ZZZ",
  //   icon: "/assets/zzz-icon.png",
  // },
  // {
  //   href: "https://enka.network/u/836625736",
  //   text: "GI",
  //   icon: "/assets/gi-icon.png",
  // },
];

const About = () => {
  return (
    <section id="about" className="py-15 text-slate-200">
      <h4 className="mb-8 font-fira-code text-xl font-semibold uppercase tracking-widest border-b-2 border-b-highlight/60">
        # About Me
      </h4>

      <div className="px-12 font-general lg:text-lg leading-normal text-slate-300 text-left md:text-justify [text-align-last:left]">
        <p className="mb-4">
          Hi, I'm Dzaky, a Computer Science graduate focused on Fullstack Web
          Development, with a particular interest in Backend Engineering and API
          Development.
        </p>
        <p className="mb-4">
          My journey in web development started with Laravel 8 in 2022, while I
          was studying at Vocational High School. Since then, I've continued
          exploring modern web technologies and eventually focused more on the
          React ecosystem. I've worked with ReactJS, NextJS, and Laravel, while
          also exploring Golang for backend development and Flutter for mobile
          application development.
        </p>
        <p className="mb-6">
          I participated in MBKM MSIB Batch 7 at Ruangguru, where I deepened my
          experience with Golang and ReactJS, including integrating applications
          with AI services such as Hugging Face.
        </p>
        <p className="mb-6">
          Currently, I'm focused on building web applications and APIs while
          improving my understanding of backend architecture, system design,
          testing, security, and scalability. I'm also interested in exploring
          how AI can be integrated into practical applications.
        </p>

        <div className="text-left">
          <p className="mb-3 flex items-center gap-2 text-sm lg:text-base">
            Outside of coding, I enjoy gacha and MOBA games. Here&apos;s my
            Honkai: Star Rail account:
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
                <span className="font-fira-code text-xs uppercase tracking-widest text-slate-300 group-hover:text-highlight transition-colors">
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
