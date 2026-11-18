import { FaLinkedinIn } from "react-icons/fa6";
import { SiFacebook, SiGithub, SiGmail } from "react-icons/si";
import { contact, profile } from "@/data/profile";

export default function Contact() {
  const links = [
    { label: "GitHub", href: profile.socials.github, Icon: SiGithub },
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedinIn },
    { label: "Facebook", href: profile.socials.facebook, Icon: SiFacebook },
    { label: "Email", href: `mailto:${profile.email}`, Icon: SiGmail },
  ];
  return (
    <section id="contact" className="mt-24 scroll-mt-32 pb-24 md:mt-[239px] md:pb-[230px]">
      <h2 className="text-[25px] tracking-[0.5px]">{contact.title}</h2>
      <div className="mt-[70px] text-[14px] tracking-[0.3px] md:text-[15px]">
        {contact.text.map((t) => (
          <p key={t}>{t}</p>
        ))}
        <a href={`mailto:${profile.email}`} className="mt-[18px] inline-block hover:text-accent-light">
          {profile.email}
        </a>
      </div>
      <ul className="mt-[22px] flex items-center gap-[14px]">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="block text-white transition-colors hover:text-accent-light"
            >
              <Icon className="size-[17px]" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
