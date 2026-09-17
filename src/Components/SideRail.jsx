import { socialLinks } from "../socialLinks";

const emailLink = socialLinks.find((link) => link.label === "Email");
const iconLinks = socialLinks.filter((link) => link.label !== "Email");

const SideRail = () => {
  return (
    <div className="hidden lg:flex fixed z-40 left-8 xl:left-14 top-0 bottom-0 flex-col items-center justify-between py-14">

      <div className="flex flex-col items-center gap-6">
        {iconLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-slate-400 hover:text-highlight hover:-translate-y-1 transition-all"
          >
            <link.icon className="h-5 w-auto" />
          </a>
        ))}
        <div className="w-px h-10 bg-slate-700" />
        <a
          href={emailLink.href}
          aria-label="Email"
          className="font-fira-code text-xs tracking-widest text-slate-400 hover:text-highlight hover:-translate-y-1 transition-all"
          style={{ writingMode: "vertical-rl" }}
        >
          zaaaafl654@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SideRail;