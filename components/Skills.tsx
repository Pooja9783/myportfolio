
import React from "react";
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-[#0C0A09] py-24 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
            Tech Stack
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF9] md:text-5xl">
            My development environment.
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#292524] bg-[#141210]">

          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-[#292524] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />

            <span className="ml-3 font-mono text-xs text-[#A8A29E]">
              pooja@portfolio:~/skills
            </span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-6 p-6 font-mono text-sm md:p-10 md:text-base">

            <p className="text-[#A8A29E]">
              <span className="text-[#F97316]">$</span> cat skills.json
            </p>

            <div className="space-y-4">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <span className="text-[#FACC15]">
                    {skillGroup.category}:
                  </span>

                  <span className="ml-3 text-[#FAFAF9]">
                    [{skillGroup.items.map((item) => `"${item}"`).join(", ")}]
                  </span>
                </div>
              ))}
            </div>

            <p className="animate-pulse text-[#F97316]">_</p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

