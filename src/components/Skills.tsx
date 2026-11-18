import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiApple,
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZalo,
} from "react-icons/si";
import { profile, skills, type SkillIcon } from "@/data/profile";
import Img from "./Img";
import SkillWires from "./SkillWires";

const icons: Record<SkillIcon, { Icon: IconType; color: string }> = {
  flutter: { Icon: SiFlutter, color: "#54C5F8" },
  dart: { Icon: SiDart, color: "#0175C2" },
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: "#ffffff" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  tailwind: { Icon: SiTailwindcss, color: "#38BDF8" },
  firebase: { Icon: SiFirebase, color: "#FFCA28" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  git: { Icon: SiGit, color: "#F05032" },
  android: { Icon: SiAndroid, color: "#3DDC84" },
  apple: { Icon: SiApple, color: "#ffffff" },
  zalo: { Icon: SiZalo, color: "#0068FF" },
};

type Abs = { src: string; l: number; t: number; w: number; h: number; inset?: string; flip?: boolean };

// Toạ độ lấy từ design (gốc = góc trên trái khối 895×572)

const orbitIcons: Abs[] = [
  { src: "orbit-icon-1", l: 833, t: 353.3, w: 20.09, h: 20.87 },
  { src: "orbit-icon-2", l: 771, t: 323, w: 13, h: 15.16 },
  { src: "orbit-icon-3", l: 879, t: 405.8, w: 16, h: 22.16 },
  { src: "orbit-icon-4", l: 766, t: 493.25, w: 11, h: 19.24 },
  { src: "orbit-icon-5", l: 826, t: 425.6, w: 13.59, h: 15.45 },
  { src: "orbit-icon-6", l: 709, t: 330.2, w: 20.31, h: 11.49 },
  { src: "orbit-icon-7", l: 120, t: 395.3, w: 14, h: 17.49 },
  { src: "orbit-icon-8", l: 28, t: 464, w: 13, h: 20.33 },
  { src: "orbit-icon-9", l: 187, t: 302, w: 12, h: 14.74 },
  { src: "orbit-icon-10", l: 82, t: 339.3, w: 12.57, h: 14.95 },
  { src: "orbit-icon-11", l: 128, t: 473.4, w: 21.71, h: 18.66 },
];

const box = (a: Abs) => ({ left: a.l, top: a.t, width: a.w, height: a.h });

export default function Skills() {
  return (
    <section id="skills" className="relative mt-24 md:mt-[160px]">
      <SkillWires />
      <div className="text-center tracking-[0.48px]">
        <p className="text-[18px] leading-[31px] md:text-[24px]">
          I&apos;m currently looking to join a{" "}
          <span className="text-accent-light">cross-functional</span> team
        </p>
        <p className="text-[14px] leading-[31px] md:text-[17px]">
          that values building products people love to use
        </p>
      </div>

      <ul className="relative z-10 mx-auto mt-8 grid w-fit grid-cols-7 gap-2 md:mt-[32px] md:flex md:max-w-[374px] md:flex-wrap md:justify-center md:gap-x-[11px] md:gap-y-[17px]">
        {skills.map((s) => {
          const { Icon, color } = icons[s.icon];
          return (
            <li
              key={s.name}
              data-skill-node
              title={s.name}
              className="relative grid size-10 place-items-center transition-transform hover:-translate-y-1 md:size-[44px]"
            >
              <Img src="/figma/skill-circle.svg" width={44} height={44} className="absolute inset-0 size-full" />
              <Icon aria-label={s.name} className="relative size-5 md:size-[22px]" style={{ color }} />
            </li>
          );
        })}
      </ul>

      {/* Khối quỹ đạo 895×572 – scale theo màn hình */}
      <div className="relative -mt-5 h-[calc(572px*var(--s))] overflow-hidden [--s:0.4] min-[400px]:[--s:0.44] sm:[--s:0.7] md:[--s:0.85] lg:overflow-visible lg:[--s:1]">
        <div className="absolute left-1/2 top-0 h-[572px] w-[895px] -translate-x-1/2 scale-(--s) origin-top">
          <Img src="/figma/orbit-glow.svg" width={542} height={330} className="absolute max-w-none" style={box({ src: "", l: 181, t: 242, w: 542, h: 330 })} />
          <Img data-skill-core src="/figma/core.svg" width={180} height={180} className="absolute max-w-none" style={box({ src: "", l: 350, t: 266, w: 180, h: 180 })} />
          <div className="absolute grid place-items-center" style={box({ src: "", l: 350, t: 266, w: 180, h: 180 })}>
            <span className="font-display text-[64px] leading-none tracking-[2px] text-white [text-shadow:0_0_12px_rgba(255,255,255,0.9),0_0_28px_rgba(196,155,255,0.8)]">
              {profile.shortName}
            </span>
          </div>
          <Img src="/figma/orbit-1.svg" width={881} height={269} className="absolute max-w-none" style={box({ src: "", l: 0, t: 275, w: 881, h: 269 })} />
          <Img src="/figma/orbit-2.svg" width={764} height={269} className="absolute max-w-none" style={box({ src: "", l: 63, t: 275, w: 764, h: 269 })} />
          <Img src="/figma/orbit-3.svg" width={695} height={269} className="absolute max-w-none" style={box({ src: "", l: 108, t: 275, w: 695, h: 269 })} />
          <Img src="/figma/core-ring.svg" width={306} height={275} className="absolute max-w-none" style={box({ src: "", l: 292, t: 203, w: 306, h: 275 })} />

          {orbitIcons.map((o) => (
            <Img key={o.src} src={`/figma/${o.src}.svg`} width={Math.ceil(o.w)} height={Math.ceil(o.h)} className="absolute max-w-none" style={box(o)} />
          ))}
        </div>
      </div>
    </section>
  );
}
