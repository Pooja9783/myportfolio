import React from "react";
import { ArrowUpRight, FolderKanban, Sparkles } from "lucide-react";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#0C0A09] py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          < div className="flex items-center gap-2 text-[#F97316]">
            <FolderKanban size={16} />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
              Projects
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF9] md:text-5xl">
            Things I've built.
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-[#292524] bg-[#1C1917] transition-all duration-300 hover:border-[#F97316]/60"
            >

              {/* Main Content */}
              <div className="p-6 md:p-10">

                {/* Header */}
                <div className="flex items-start justify-between gap-6">

                  <div>
                    <span className="font-mono text-sm text-[#F97316]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#FAFAF9] md:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#292524] text-[#A8A29E] transition-all duration-300 hover:border-[#F97316] hover:bg-[#F97316] hover:text-[#0C0A09]"
                  >
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                </div>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-sm leading-7 text-[#A8A29E] md:text-base">
                  {project.description}
                </p>

              </div>

              {/* Technologies */}
              <div className="border-t border-[#292524] px-6 py-5 md:px-10">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                    Built with
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#292524] px-3 py-1.5 text-xs font-medium text-[#A8A29E] transition-colors group-hover:border-[#F97316]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section >
  );
};

export default Projects;