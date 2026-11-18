import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Img from "@/components/Img";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative isolate overflow-x-clip">
        <Img
          src="/figma/background.svg"
          width={1990}
          height={4298}
          className="pointer-events-none absolute left-1/2 top-[-11px] -z-20 h-[4298px] w-[1990px] max-w-none -translate-x-1/2"
        />
        <div className="mx-auto w-full max-w-[1170px] px-5 xl:px-0">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
