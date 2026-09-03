import React from "react";
import { ArrowUpRight, UserRound } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#0C0A09] py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          < div className="flex items-center gap-2 text-[#F97316]">

            <UserRound size={16} />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
              About Me
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF9] md:text-5xl">
            From curiosity to a career in technology.
          </h2>
        </div>

        {/* About Card */}
        <article className="overflow-hidden rounded-3xl border border-[#292524] bg-[#1C1917]">

          {/* Card Header */}
          <div className="flex flex-col justify-between gap-6 border-b border-[#292524] p-6 md:flex-row md:items-center md:p-10">

            <div>
              <p className="text-sm font-medium text-[#78716C]">
                My journey
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#FAFAF9] md:text-3xl">
                From Arts to{" "}
                <span className="text-[#F97316]">
                  Engineering.
                </span>
              </h3>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#78716C]">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              Curiosity changed everything
            </div>

          </div>

          {/* Content */}
          <div className="grid gap-10 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">

            {/* Story */}
            <div className="space-y-5 text-sm leading-7 text-[#A8A29E] md:text-base">

              <p>
                My journey into technology didn't start with a computer
                science background. Coming from an arts background, I was
                exploring different career paths and had never really been
                exposed to coding.
              </p>

              <p>
                Everything changed when a friend suggested that I create a
                LinkedIn profile. While exploring LinkedIn, I came across a
                coding snippet that immediately caught my attention. I didn't
                understand what it was, but I wanted to find out.
              </p>

              <p>
                That curiosity led me to start learning HTML and CSS through
                YouTube and W3Schools. JavaScript was challenging, and I
                struggled with it, but instead of giving up, I decided to take
                my learning more seriously.
              </p>

              <p>
                I eventually joined Masai School, learned Full Stack
                Development, and began my professional journey in software
                development. Today, I continue building modern applications
                while expanding into AI-powered products.
              </p>

            </div>

            {/* Journey Summary */}
            <div className="border-t border-[#292524] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                The Journey
              </p>

              <div className="mt-6 space-y-5">

                <div className="border-b border-[#292524] pb-5">
                  <p className="text-sm font-medium text-[#FAFAF9]">
                    Arts
                  </p>

                  <p className="mt-1 text-sm text-[#78716C]">
                    Exploring my career path
                  </p>
                </div>

                <div className="border-b border-[#292524] pb-5">
                  <p className="text-sm font-medium text-[#FAFAF9]">
                    Curiosity
                  </p>

                  <p className="mt-1 text-sm text-[#78716C]">
                    Discovered the world of coding
                  </p>
                </div>

                <div className="border-b border-[#292524] pb-5">
                  <p className="text-sm font-medium text-[#FAFAF9]">
                    Full Stack Development
                  </p>

                  <p className="mt-1 text-sm text-[#78716C]">
                    Built a foundation through Masai School
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#F97316]">
                    Today
                  </p>

                  <p className="mt-1 text-sm text-[#78716C]">
                    Building applications and exploring AI
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 border-t border-[#292524] px-6 py-5 text-sm font-semibold text-[#F97316] md:px-10">
            <span>One curiosity. A completely new career.</span>
            <ArrowUpRight size={16} />
          </div>

        </article>

      </div>
    </section>
  );
};

export default AboutMe;