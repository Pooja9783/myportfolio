
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24 bg-[#0C0A09] py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#FAFAF9] md:text-5xl">
            Selected work.
          </h2>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-h-[300px] overflow-hidden border border-[#292524]"
            >
              {/* Background */}
              {/* <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-700 group-hover:scale-105 group-hover:opacity-35"
              /> */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09] via-[#0C0A09]/90 to-transparent" />

              {/* Content */}
              <div className="relative flex min-h-[300px] flex-col justify-between p-8 md:p-12">

                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-[#F97316]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    className="text-[#F97316] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="max-w-xl">
                  <h3 className="text-3xl font-bold text-[#FAFAF9] md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#A8A29E] md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium uppercase tracking-wider text-[#F97316]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

