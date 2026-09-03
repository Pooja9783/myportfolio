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

            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[#292524] bg-[#141210] shadow-xl shadow-black/20">

              {/* Editor Header */}
              <div className="flex items-center justify-between border-b border-[#292524] px-5 py-4">

                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FACC15]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                </div>

                {/* File Name */}
                <div className="flex items-center gap-2 text-xs text-[#78716C]">
                  <Code2 size={14} />
                  developer.js
                </div>

              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-8 md:p-7">

                {/* Line 1 */}
                <div className="flex">
                  <span className="w-7 select-none text-[#57534E]">1</span>

                  <span className="text-[#C084FC]">const</span>

                  <span className="ml-2 text-[#FAFAF9]">
                    developer
                  </span>

                  <span className="mx-2 text-[#A8A29E]">=</span>

                  <span className="text-[#F97316]">{"{"}</span>
                </div>

                {/* Line 2 */}
                <div className="flex">
                  <span className="w-7 select-none text-[#57534E]">2</span>

                  <span className="pl-4 text-[#60A5FA]">
                    name
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    "Pooja Sankhala"
                  </span>

                  <span className="text-[#A8A29E]">,</span>
                </div>

                {/* Line 3 */}
                <div className="flex">
                  <span className="w-7 select-none text-[#57534E]">3</span>

                  <span className="pl-4 text-[#60A5FA]">
                    role
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    "Full Stack Developer"
                  </span>

                  <span className="text-[#A8A29E]">,</span>
                </div>

                {/* Line 4 */}
                <div className="flex">
                  <span className="w-7 select-none text-[#57534E]">4</span>

                  <span className="pl-4 text-[#60A5FA]">
                    focus
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#FACC15]">
                    "Building scalable products"
                  </span>

                  <span className="text-[#A8A29E]">,</span>
                </div>

                {/* Line 5 */}
                <div className="flex">
                  <span className="w-7 select-none text-[#57534E]">5</span>

                  <span className="pl-4 text-[#60A5FA]">
                    stack
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    ["React", "Node.js", "MongoDB", "ExpressJs"]
                  </span>

                  <span className="text-[#A8A29E]"></span>
                </div>

                {/* Line 6 */}
                <div className="flex">
                  <span className="w-7 select-none text-[#57534E]">6</span>

                  <span className="pl-4 text-[#60A5FA]">
                    exploring
                  </span>

                  <span className="text-[#A8A29E]">:</span>

                  <span className="ml-2 text-[#86EFAC]">
                    "Generative AI"
                  </span>
                </div>

                {/* Line 7 */}
                <div className="flex">
                  <span className="w-7 select-none text-[#57534E]">7</span>

                  <span className="text-[#F97316]">{"}"}</span>

                  <span className="ml-2 animate-pulse text-[#F97316]">
                    |
                  </span>
                </div>

              </div>

              {/* Minimal Footer */}
              <div className="flex items-center justify-between border-t border-[#292524] px-5 py-3 text-xs text-[#78716C]">

                <span>JavaScript</span>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                  Available
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;