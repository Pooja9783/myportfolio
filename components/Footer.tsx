import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-[#0C0A09] py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          < div className="flex items-center gap-2 text-[#F97316]">

            <Mail size={16} />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
              Contact
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF9] md:text-5xl">
            Let's build something meaningful.
          </h2>
        </div>

        {/* Main Contact Card */}
        <div className="overflow-hidden rounded-3xl border border-[#292524] bg-[#1C1917]">

          {/* Card Content */}
          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

            {/* Left Content */}
            <div>
              <p className="max-w-2xl text-base leading-8 text-[#A8A29E] md:text-lg">
                I'm always interested in discussing interesting products,
                challenging engineering problems, and opportunities where I
                can build useful, impactful technology.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:poojasankhala.dev@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-[#0C0A09] transition-all duration-300 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Start a conversation

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-[#292524] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                Connect
              </p>

              <div className="mt-6 space-y-5">

                {/* GitHub */}
                <a
                  href="https://github.com/Pooja9783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-[#292524] pb-4 text-sm transition-colors group"
                >
                  <span className="text-[#A8A29E] group-hover:text-[#F97316]">
                    GitHub
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#78716C] transition-colors group-hover:text-[#F97316]"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/pooja-sankhala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-[#292524] pb-4 text-sm transition-colors group"
                >
                  <span className="text-[#A8A29E] group-hover:text-[#F97316]">
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#78716C] transition-colors group-hover:text-[#F97316]"
                  />
                </a>

                {/* Email */}
                <a
                  href="mailto:poojasankhala.dev@gmail.com"
                  className="flex items-center justify-between text-sm transition-colors group"
                >
                  <span className="text-[#A8A29E] group-hover:text-[#F97316]">
                    Email
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#78716C] transition-colors group-hover:text-[#F97316]"
                  />
                </a>

              </div>
            </div>

          </div>

          {/* Bottom Card Footer */}
          <div className="flex flex-col gap-3 border-t border-[#292524] px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">

            <div>
              <p className="font-semibold text-[#FAFAF9]">
                Pooja Sankhala
              </p>

              <p className="mt-1 text-sm text-[#78716C]">
                Full Stack & AI Engineer
              </p>
            </div>

            <p className="text-sm text-[#78716C]">
              © {new Date().getFullYear()} Pooja Sankhala
            </p>

          </div>

        </div>

        {/* Small Bottom Text */}
        <p className="mt-8 text-center text-xs text-[#78716C]">
          Designed & built by Pooja.
        </p>

      </div>
    </footer>
  );
};

export default Footer;