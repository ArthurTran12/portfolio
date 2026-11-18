import Image from "next/image";
import { SiReact } from "react-icons/si";
import { experiences, type LogoBadge } from "@/data/profile";
import Img from "./Img";

function Badge({ logo, alt }: { logo: LogoBadge; alt: string }) {
  return (
    <span
      className="relative grid size-[92px] -rotate-6 place-items-center overflow-hidden rounded-[24px] shadow-[0_18px_30px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/15 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
      style={{ background: logo.bg ?? "#0b0b14" }}
    >
      {logo.kind === "image" && (
        <Image
          src={logo.src}
          alt={alt}
          width={184}
          height={184}
          className="size-full object-contain"
          style={{ padding: logo.padding ?? 0 }}
        />
      )}
      {logo.kind === "icon" && <SiReact aria-label={alt} className="size-12 text-[#61DAFB]" />}
      {logo.kind === "text" && (
        <span className="font-poppins text-[28px] font-semibold" style={{ color: logo.color ?? "#fff" }}>
          {logo.text}
        </span>
      )}
      {/* ánh sáng bóng phía trên cho cảm giác 3D */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />
    </span>
  );
}

const cardBg = ["exp-card-1", "exp-card-2", "exp-card-3", "exp-card-4"];

export default function Experience() {
  return (
    <section id="experience" className="relative mt-20 scroll-mt-32 md:mt-[180px]">
      <Img
        src="/figma/glow-2.svg"
        width={625}
        height={700}
        className="pointer-events-none absolute left-[281px] top-[-125px] -z-10 hidden h-[700px] w-[625px] max-w-none md:block"
      />
      <h2 className="ml-[10px] text-[28px] tracking-[0.8px] md:text-[40px]">Work Experience</h2>

      <div className="mt-8 grid gap-[17px] md:mt-[56px] lg:grid-cols-2 lg:gap-x-5">
        {experiences.map((exp, i) => (
          <article
            key={exp.company}
            className={`${cardBg[i % 4]} group relative flex min-h-[192.676px] items-center gap-5 overflow-hidden rounded-[15px] px-6 py-8 shadow-[4px_7px_26px_0px_rgba(0,0,0,0.12),inset_0_3px_0_0_var(--color-card-edge)] sm:gap-[50px] sm:pl-[50px] sm:pr-8`}
          >
            <div className="relative h-[115px] w-[115px] shrink-0">
              <div className="absolute left-[2px] top-[63px] flex h-[48.085px] w-[113.929px] items-center justify-center">
                <div className="flex-none rotate-[176.86deg] skew-x-[0.62deg]">
                  <Img src={exp.shadow} width={111} height={42} className="h-[42.076px] w-[111.339px] max-w-none" />
                </div>
              </div>
              <div className="relative grid size-[115px] place-items-center">
                <Badge logo={exp.logo} alt={exp.company} />
              </div>
              <Img src="/figma/dot-1.svg" width={5} height={4} className="absolute left-[3.6px] top-[76.7px] h-[4.418px] w-[4.834px]" />
              <Img src="/figma/dot-1.svg" width={5} height={4} className="absolute left-[117px] top-[54.3px] h-[4.418px] w-[4.834px]" />
              <Img src="/figma/dot-2.svg" width={5} height={4} className="absolute left-[19.5px] top-[19px] h-[4.418px] w-[4.834px]" />
              <Img src="/figma/dot-2.svg" width={5} height={4} className="absolute left-[93px] top-[99.8px] h-[4.418px] w-[4.834px]" />
            </div>

            <div className="min-w-0">
              <h3 className="font-poppins text-[22px] font-semibold leading-[32.5px] sm:text-[26px]">
                {exp.company}
              </h3>
              <p className="mt-0.5 font-poppins text-[10px] font-medium leading-[14px] text-accent-light">
                {exp.role} · {exp.period}
              </p>
              <p className="mt-1 max-w-[232px] font-poppins text-[8px] font-medium leading-[10.5px]">
                {exp.description}
              </p>
              <a
                href={exp.link ?? "#contact"}
                className="mt-3 inline-flex h-[33px] w-[119px] items-center justify-center bg-[url('/figma/btn-outline.svg')] bg-contain bg-no-repeat font-poppins text-[10px] font-medium leading-[15px] transition-opacity hover:opacity-80"
              >
                LEARN MORE
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
