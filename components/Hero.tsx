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

      {/* Main Container */}
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#292524] bg-[#1C1917] px-4 py-2">
              <Sparkles size={15} className="text-[#F97316]" />

              <span className="text-sm font-medium text-[#A8A29E]">
                Full Stack Developer & AI Enthusiast
              </span>
            </div>

            {/* Intro */}
            <p className="mb-4 text-lg font-medium text-[#A8A29E]">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl font-bold tracking-tight text-[#FAFAF9] md:text-6xl">
              Pooja Sankhala.
            </h1>

            {/* Heading */}
            <h2 className="mt-3 text-2xl font-semibold text-[#F97316] md:text-3xl">
              I build modern web applications.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#A8A29E] md:text-lg">
              I'm a Full Stack Developer building modern web applications
              and exploring how Artificial Intelligence can create smarter
              and more useful digital products.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/20"
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:poojasankhala.dev@gmail.com"
                className="flex items-center justify-center rounded-xl border border-[#292524] bg-[#1C1917] px-6 py-3.5 font-semibold text-[#FAFAF9] transition-all duration-300 hover:border-[#F97316] hover:text-[#F97316]"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* ================= RIGHT CODE EDITOR ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Editor */}
            <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-[#292524] bg-[#141210] shadow-2xl shadow-black/30">

              {/* Editor Header */}
              <div className="flex items-center justify-between border-b border-[#292524] bg-[#1C1917] px-5 py-4">

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                  <span className="h-3 w-3 rounded-full bg-[#FACC15]" />
                  <span className="h-3 w-3 rounded-full bg-[#22C55E]" />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#78716C]">
                  <Code2 size={14} />
                  developer.ts
                </div>

              </div>

              {/* File Tab */}
              <div className="border-b border-[#292524] bg-[#0C0A09] px-5 py-3">
                <span className="border-b-2 border-[#F97316] pb-3 text-sm text-[#FAFAF9]">
                  developer.ts
                </span>
              </div>

              {/* Code Area */}
              <div className="overflow-x-auto p-6 font-mono text-sm leading-8 md:text-base">

                <div className="flex">
                  <span className="mr-6 select-none text-[#57534E]">
                    1
                  </span>

                  <span className="text-[#C084FC]">const</span>

                  <span className="ml-2 text-[#FAFAF9]">
                    developer
                  </span>

                  <span className="mx-2 text-[#A8A29E]">=</span>

                  <span className="text-[#F97316]">{"{"}</span>
                </div>

                <div className="flex">
                  <span className="mr-6 select-none text-[#57534E]">
                    2
                  </span>

                  <span className="pl-4 text-[#60A5FA]">
                    name
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    "Pooja Sankhala"
                  </span>

                  <span className="text-[#A8A29E]">,</span>
                </div>

                <div className="flex">
                  <span className="mr-6 select-none text-[#57534E]">
                    3
                  </span>

                  <span className="pl-4 text-[#60A5FA]">
                    role
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    "Full Stack Developer"
                  </span>

                  <span className="text-[#A8A29E]">,</span>
                </div>

                <div className="flex">
                  <span className="mr-6 select-none text-[#57534E]">
                    4
                  </span>

                  <span className="pl-4 text-[#60A5FA]">
                    stack
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#FACC15]">
                    ["React", "Node.js", "MongoDB"]
                  </span>

                  <span className="text-[#A8A29E]">,</span>
                </div>

                <div className="flex">
                  <span className="mr-6 select-none text-[#57534E]">
                    5
                  </span>

                  <span className="pl-4 text-[#60A5FA]">
                    focus
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    "Building scalable products"
                  </span>

                  <span className="text-[#A8A29E]">,</span>
                </div>

                <div className="flex">
                  <span className="mr-6 select-none text-[#57534E]">
                    6
                  </span>

                  <span className="pl-4 text-[#60A5FA]">
                    exploring
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    "Generative AI"
                  </span>
                </div>

                <div className="flex">
                  <span className="mr-6 select-none text-[#57534E]">
                    7
                  </span>

                  <span className="text-[#F97316]">{"}"}</span>

                  <span className="ml-2 animate-pulse text-[#F97316]">
                    _
                  </span>
                </div>

              </div>

              {/* Editor Footer */}
              <div className="flex items-center justify-between border-t border-[#292524] bg-[#1C1917] px-5 py-3 text-xs text-[#78716C]">

                <div className="flex items-center gap-4">
                  <span>TypeScript</span>
                  <span>UTF-8</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                  Ready
                </div>

              </div>

            </div>

            {/* Floating Code Icon */}
            <div className="absolute -left-5 top-10 hidden h-14 w-14 items-center justify-center rounded-2xl border border-[#292524] bg-[#1C1917] shadow-xl lg:flex">
              <Code2
                className="text-[#F97316]"
                size={24}
              />
            </div>

            {/* Floating AI Icon */}
            <div className="absolute -bottom-5 -right-5 hidden h-14 w-14 items-center justify-center rounded-2xl border border-[#292524] bg-[#1C1917] shadow-xl lg:flex">
              <BrainCircuit
                className="text-[#FACC15]"
                size={24}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;