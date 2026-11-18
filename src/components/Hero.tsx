import { profile } from "@/data/profile";
import Img from "./Img";

function Tagline({ className = "" }: { className?: string }) {
  const { tagline } = profile;
  return (
    <h2 className={`leading-[0.92] tracking-[1px] ${className}`}>
      {tagline.line1}
      <br />
      {tagline.line2Start}
      <span className="text-accent">{tagline.highlight}</span>
      {tagline.line2End}
    </h2>
  );
}

export default function Hero() {
  const { tagline } = profile;
  return (
    <section id="home" className="relative pt-10 sm:pt-12 md:pt-[107px]">
      {/* Điện thoại: bố cục xếp dọc */}
      <div className="flex flex-col items-center text-center sm:hidden">
        <div className="relative h-[220px] w-[220px]">
          <Img src="/figma/avatar-glow.svg" width={258} height={259} className="absolute inset-0 size-full max-w-none" />
          <Img
            src="/figma/avatar.png"
            alt={profile.name}
            width={165}
            height={223}
            priority
            className="absolute left-1/2 top-[6px] h-[190px] w-[141px] -translate-x-1/2 object-cover"
          />
        </div>
        <p className="mt-2 text-[16px] tracking-[-0.3px]">
          Hello! I Am <span className="text-accent-light">{profile.name}</span>
        </p>
        <p className="mt-5 text-[15px] underline">{tagline.lead}</p>
        <Tagline className="mt-2 text-[38px]" />
        <p className="mt-3 text-[11px] tracking-[0.22px]">{tagline.note}</p>
      </div>

      {/* Từ sm trở lên: giữ đúng bố cục design, scale theo màn hình */}
      <div className="relative hidden h-[calc(345px*var(--s))] [--s:0.82] sm:block md:[--s:1]">
        <div className="absolute left-0 top-0 h-[345px] w-[700px] origin-top-left scale-(--s)">
          <Img
            src="/figma/glow-hero.svg"
            width={385}
            height={431}
            className="pointer-events-none absolute left-[-73px] top-0 h-[431px] w-[385px] max-w-none"
          />

          <p className="absolute left-[249px] top-[26px] text-[19px] tracking-[-0.5px] whitespace-nowrap">
            Hello! I Am <span className="text-accent">{profile.name}</span>
          </p>
          <div className="absolute left-[145.78px] top-[4px] flex h-[117.878px] w-[121.105px] items-center justify-center">
            <div className="flex-none -scale-y-100 rotate-[-148.29deg]">
              <Img src="/figma/arrow.svg" width={92} height={82} className="h-[81.857px] w-[91.782px] max-w-none" />
            </div>
          </div>

          <Img
            src="/figma/avatar-glow.svg"
            width={258}
            height={259}
            className="absolute left-[3px] top-[86px] h-[259px] w-[258px] max-w-none"
          />
          <Img
            src="/figma/avatar.png"
            alt={profile.name}
            width={165}
            height={223}
            priority
            className="absolute left-[51px] top-[91.7px] h-[223px] w-[165px] object-cover"
          />

          <p className="absolute left-[269px] top-[137px] text-[17px] tracking-[0.34px] underline whitespace-nowrap">
            {tagline.lead}
          </p>
          <Tagline className="absolute left-[269px] top-[177px] text-[50px] whitespace-nowrap" />
          <div className="absolute left-[417px] top-[215px] flex h-[73.298px] w-[192.727px] items-center justify-center">
            <div className="flex-none rotate-[-4.74deg]">
              <Img src="/figma/cover-circle.svg" width={189} height={58} className="h-[57.899px] w-[188.584px] max-w-none" />
            </div>
          </div>
          <p className="absolute left-[269px] top-[292px] text-[11px] tracking-[0.22px] whitespace-nowrap">
            {tagline.note}
          </p>
        </div>
      </div>

      <div id="about" className="mt-14 scroll-mt-32 md:ml-4 md:mt-[100px]">
        <h1 className="text-[32px] leading-tight tracking-[1px] md:text-[50px]">
          {profile.headline}
          <span className="caret">|</span>
        </h1>
        <p className="mt-1 text-[16px] tracking-[0.42px] md:text-[21px]">
          {profile.current.prefix}{" "}
          <a href={profile.current.link} className="text-[#1877f2] hover:underline">
            {profile.current.company}
          </a>
          ,
        </p>
        <p className="mt-10 max-w-[892px] text-[16px] leading-relaxed tracking-[0.44px] md:mt-[83px] md:text-[22px] md:leading-normal">
          {profile.intro.map((line, i) => (
            <span key={line} className="xl:block">
              {line}
              {i < profile.intro.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
