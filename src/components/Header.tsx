import Link from "next/link";
import { profile } from "@/data/profile";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#projects" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-header shadow-[0px_6px_22px_-3px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1170px] items-center justify-between px-5 md:h-[113px] xl:px-0">
        <Link href="#home" aria-label="Trang chủ" className="ml-0 xl:ml-[39px]">
          <span className="font-display text-[30px] leading-none tracking-[1px] text-white transition-colors hover:text-accent-light">
            {profile.shortName}
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-jakarta text-base font-semibold tracking-[0.4px] sm:gap-12 md:text-[20px] lg:gap-[160px] xl:mr-[-14px]">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-accent-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
