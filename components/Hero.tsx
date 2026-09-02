
import React from "react";
import {
  ArrowRight,
  Sparkles,
  Code2,
  BrainCircuit,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0C0A09]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Consistent Container */}
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-20 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#292524] bg-[#1C1917] px-4 py-2">
              <Sparkles size={15} className="text-[#F97316]" />

              <span className="text-sm font-medium text-[#A8A29E]">
                Full Stack Developer & AI Enthusiast
              </span>
            </div>

            {/* Heading */}
            <p className="mb-4 text-lg font-medium text-[#A8A29E]">
              Hi, I'm
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-[#FAFAF9] md:text-6xl">
              Pooja Sankhala.
            </h1>

            <h2 className="mt-3 text-2xl font-semibold text-[#F97316] md:text-3xl">
              I build modern web applications.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#A8A29E] md:text-lg">
              I'm a Full Stack Developer working with modern web technologies
              and exploring how Artificial Intelligence can create smarter,
              more useful digital products.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/20"
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:poojasankhala.dev@gmail.com"
                className="flex items-center justify-center rounded-xl border border-[#292524] bg-[#1C1917] px-6 py-3.5 font-semibold text-[#FAFAF9] transition-all hover:border-[#F97316] hover:text-[#F97316]"
              >
                Let's Talk
              </a>

            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md rounded-3xl border border-[#292524] bg-[#1C1917] p-8 shadow-2xl">

              {/* Decorative top bar */}
              <div className="mb-8 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* Code Block */}
              <div className="space-y-4 font-mono text-sm">

                <p className="text-[#F97316]">
                  const developer = {"{"}
                </p>

                <p className="pl-4 text-[#FAFAF9]">
                  name: <span className="text-[#FACC15]">"Pooja"</span>,
                </p>

                <p className="pl-4 text-[#FAFAF9]">
                  role: <span className="text-[#FACC15]">
                    "Full Stack Developer"
                  </span>,
                </p>

                <p className="pl-4 text-[#FAFAF9]">
                  passion: <span className="text-[#FACC15]">
                    "Building & Learning"
                  </span>
                </p>

                <p className="text-[#F97316]">{"}"}</p>

              </div>

              {/* Floating Icons */}
              <div className="absolute -left-6 -top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#292524] bg-[#1C1917] shadow-xl">
                <Code2 className="text-[#F97316]" size={25} />
              </div>

              <div className="absolute -bottom-6 -right-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#292524] bg-[#1C1917] shadow-xl">
                <BrainCircuit className="text-[#FACC15]" size={25} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

