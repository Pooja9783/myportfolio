
import React from "react";
import { EXPERIENCES } from "../constants";
import { BriefcaseBusiness } from "lucide-react";

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[#0C0A09] py-24"
    >
      {/* Consistent Page Width */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          < div className="flex items-center gap-2 text-[#F97316]">

            <BriefcaseBusiness size={16} />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
              Work Experience
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF9] md:text-5xl">
            Where I've built and grown.
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="rounded-3xl border border-[#292524] bg-[#1C1917] p-6 transition-all duration-300 hover:border-[#F97316]/60 md:p-10"
            >
              {/* Card Header */}
              <div className="flex flex-col justify-between gap-6 border-b border-[#292524] pb-8 md:flex-row md:items-start">

                {/* Company & Role */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#FAFAF9] md:text-3xl">
                    {exp.company}
                  </h3>

                  <p className="mt-3 text-base font-medium text-[#A8A29E]">
                    {exp.role}
                  </p>

                  {exp.location && (
                    <p className="mt-2 text-sm text-[#78716C]">
                      {exp.location}
                    </p>
                  )}
                </div>

                {/* Period */}
                <div className="shrink-0 md:text-right">
                  <span className="inline-flex rounded-full border border-[#F97316]/25 bg-[#F97316]/5 px-4 py-2 text-sm font-medium text-[#F97316]">
                    {exp.period}
                  </span>
                </div>

              </div>

              {/* Experience Content */}
              <ul className="mt-8 space-y-5">
                {exp.description.map((desc, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-sm leading-7 text-[#A8A29E] md:text-base"
                  >
                    {/* Orange Bullet */}
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />

                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;

