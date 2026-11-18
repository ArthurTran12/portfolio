import Image from "next/image";
import { otherProjects, projects, type Project } from "@/data/profile";
import Img from "./Img";

function Logo({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) {
  return (
    <span
      className="relative inline-grid shrink-0 place-items-center overflow-hidden rounded-[10px] bg-white/5 ring-1 ring-white/10"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} width={size * 2} height={size * 2} className="size-full object-contain" />
    </span>
  );
}

function ProjectRow({ project, reverse }: { project: Project; reverse: boolean }) {
  const align = reverse ? "xl:right-0 xl:text-right xl:items-end" : "xl:left-0";
  return (
    <article className="relative flex flex-col gap-6 xl:block xl:h-[341px]">
      {/* Ảnh dự án: khung tím 583×341, ảnh 539×311 dính góc như design */}
      <div
        className={`relative order-2 aspect-[583/341] w-full max-w-[583px] rounded-[10px] bg-[#2b0b3a] xl:absolute xl:top-0 xl:h-[341px] xl:w-[583px] ${
          reverse ? "xl:left-0" : "xl:right-0 xl:ml-auto"
        }`}
      >
        <div
          className={`absolute bottom-0 h-[91.2%] w-[92.45%] overflow-hidden ${
            reverse ? "left-0 rounded-bl-[10px] rounded-tr-[15px]" : "right-0 rounded-br-[10px] rounded-tl-[15px]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 640px) 539px, 92vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div
        className={`relative z-10 order-1 flex flex-col xl:absolute xl:w-[669px] ${align} ${
          reverse ? "xl:top-[7px]" : "xl:top-[24px]"
        }`}
      >
        <p className="font-poppins text-[16px] font-semibold tracking-[0.32px] text-accent-soft">
          Featured&nbsp;&nbsp;Project
          <span className="ml-2 text-[12px] font-medium text-slate-text/60">· {project.category}</span>
        </p>
        <div className={`mt-[9px] flex items-center gap-3 ${reverse ? "xl:flex-row-reverse" : ""}`}>
          <Logo src={project.logo} alt={`${project.title} logo`} />
          <h3 className="font-poppins text-[26px] font-semibold tracking-[0.68px] text-slate-text md:text-[34px]">
            {project.title}
          </h3>
        </div>
        <div className="project-card relative mt-[19px] w-full rounded-[14px] px-6 py-6 text-left md:px-[34px] md:py-[26px]">
          <p className="relative font-poppins text-[15px] font-medium leading-[27px] text-slate-text md:text-[18px]">
            {project.description}
          </p>
        </div>
        <ul className={`mt-3 flex flex-wrap gap-x-4 gap-y-1 font-poppins text-[13px] text-accent-light ${reverse ? "xl:justify-end" : ""}`}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className={`mt-4 flex gap-[17px] ${reverse ? "xl:mr-[42px]" : "xl:ml-[25px]"}`}>
          {project.links.map((l) => (
            <a key={l.label} href={l.href} aria-label={l.label} className="transition-transform hover:scale-110">
              <Img src="/figma/click.svg" width={31} height={31} className="size-[31px]" />
            </a>
          ))}
          <a href="#contact" aria-label="Liên hệ" className="transition-transform hover:scale-110">
            <Img src="/figma/click.svg" width={31} height={31} className="size-[31px]" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mt-16 scroll-mt-32 md:mt-[191px]">
      <Img src="/figma/glow-1.svg" width={642} height={720} className="pointer-events-none absolute left-[400px] top-[-182px] -z-10 hidden h-[720px] w-[642px] max-w-none xl:block" />
      <Img src="/figma/glow-2.svg" width={625} height={700} className="pointer-events-none absolute left-[626px] top-[-191px] -z-10 hidden h-[700px] w-[625px] max-w-none xl:block" />
      <Img src="/figma/glow-3.svg" width={572} height={641} className="pointer-events-none absolute left-[-184px] top-[404px] -z-10 hidden h-[641px] w-[572px] max-w-none xl:block" />

      <div className="flex flex-col gap-20 xl:gap-[227px]">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-24 xl:mt-[180px]">
        <h2 className="ml-[10px] text-[28px] tracking-[0.8px] md:text-[40px]">Other Projects</h2>
        <div className="mt-8 grid gap-[17px] sm:grid-cols-2 lg:gap-5 md:mt-[56px]">
          {otherProjects.map((p, i) => {
            const Tag = p.href ? "a" : "div";
            return (
              <Tag
                key={p.title}
                {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                className={`exp-card-${(i % 4) + 1} flex gap-5 rounded-[15px] p-6 shadow-[4px_7px_26px_0px_rgba(0,0,0,0.12),inset_0_3px_0_0_var(--color-card-edge)] transition-transform hover:-translate-y-1`}
              >
                {p.logo ? (
                  <Logo src={p.logo} alt={`${p.title} logo`} size={56} />
                ) : (
                  <span className="grid size-14 shrink-0 place-items-center rounded-[10px] bg-accent font-poppins text-[15px] font-semibold">
                    {p.title.slice(0, 3).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0">
                  <h3 className="font-poppins text-[20px] font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-0.5 font-poppins text-[11px] font-medium text-accent-light">{p.category}</p>
                  <p className="mt-2 font-poppins text-[13px] leading-[19px] text-slate-text">{p.description}</p>
                  <p className="mt-2 font-poppins text-[11px] text-white/60">{p.tech.join(" · ")}</p>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
