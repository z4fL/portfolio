import React from "react";

const links = [
  {
    href: "https://enka.network/hsr/800735792/",
    text: "HSR",
    icon: "/assets/hsr-icon.png",
  },
  {
    href: "https://enka.network/zzz/1313976028",
    text: "ZZZ",
    icon: "/assets/zzz-icon.png",
  },
  {
    href: "https://enka.network/u/836625736/",
    text: "GI",
    icon: "/assets/gi-icon.png",
  },
];

const About = () => {
  return (
    <section id="about" className="py-15 text-slate-200 ">
      <h4 className="font-fira-code text-xl font-semibold uppercase tracking-widest border-b border-b-slate-400">
        # About Me
      </h4>

      <div className="mt-8 font-general lg:text-lg leading-relaxed text-slate-300">
        <p className="mb-4">
          Hi, my name is Dzaky and I am currently focusing on Fullstack
          Development with <span className="font-semibold">ReactJS</span>. My
          experience is building applications with framework like{" "}
          <span className="font-semibold">NextJS</span> and
          <span className="font-semibold"> Laravel</span>, but I have also built
          backends with <span className="font-semibold">Golang</span> and can
          build mobile applications with{" "}
          <span className="font-semibold">Flutter</span>.
        </p>
        <p className="mb-4">
          I have participated in{" "}
          <span className="font-semibold">MBKM MSIB Batch 7</span> at Ruangguru
          to deepen Golang and Reactjs for integration with AI.
        </p>
        <p className="mb-2">
          I like gacha and moba games, you can check the gacha account at link
          below:
        </p>
        <div className="flex flex-col items-center">
          <img
            src="/assets/enka-network-icon.png"
            alt="enka-network"
            className="w-auto h-5 md:h-8"
          />
          <div className="flex justify-center space-x-5 mt-2">
            {links.map((link) => (
              <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.text} className="h-auto w-10 md:w-14" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
