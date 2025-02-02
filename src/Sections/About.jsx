import { useState } from "react";

const links = [
  {
    href: "https://enka.network/hsr/800735792",
    text: "HSR",
    icon: "/assets/hsr-icon.png",
  },
  {
    href: "https://enka.network/zzz/1313976028",
    text: "ZZZ",
    icon: "/assets/zzz-icon.png",
  },
  {
    href: "https://enka.network/u/836625736",
    text: "GI",
    icon: "/assets/gi-icon.png",
  },
];

const About = () => {
  const [isClickEnka, setIsClickEnka] = useState(false);

  return (
    <section id="about" className="py-15 text-slate-200 ">
      <h4 className="mb-8 font-fira-code text-xl font-semibold uppercase tracking-widest border-b border-b-slate-400">
        # About Me
      </h4>

      <div className="font-general lg:text-lg leading-relaxed text-slate-300">
        <p className="mb-4">
          Hi, I&apos;m Dzaky and currently focusing on Fullstack
          Web Development with <span className="font-semibold">ReactJS</span>. My
          experience is building applications with framework like{" "}
          <span className="font-semibold">NextJS</span> and
          <span className="font-semibold"> Laravel</span>, but I have also built
          backends with <span className="font-semibold">Golang</span> and can
          build mobile applications with{" "}
          <span className="font-semibold">Flutter</span>.
        </p>
        <p className="mb-4">
          My First experience on Web Development is using Laravel 8 at <span className="font-semibold">2022</span> before graduation from Vocation State School, and i finally find ReactJS who continue learning until now. But sometime i also touch Flutter for learning Mobile Application.
        </p>
        <p className="mb-4">
          I have participated in{" "}
          <span className="font-semibold">MBKM MSIB Batch 7</span> at Ruangguru
          to deepen Golang and Reactjs for integration with AI from <span className="font-semibold">Hunggingface</span>.
        </p>
        <p className="mb-2">
          I like gacha and moba games, you can check the gacha account at link
          below:
        </p>
        <div className="flex flex-col items-center">
          <img
            src="/assets/enka-network-icon.png"
            alt="enka-network"
            className="w-auto h-8 mb-2 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setIsClickEnka((prev) => !prev)}
          />
          <div className="h-14">
            <div
              className={`${
                isClickEnka ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } flex justify-center space-x-5 transition-all duration-200 ease-out`}
            >
              {links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 duration-100"
                >
                  <img
                    src={link.icon}
                    alt={link.text}
                    className="h-auto w-10 md:w-14"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
