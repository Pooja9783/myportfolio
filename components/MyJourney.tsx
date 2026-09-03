import React from "react";
import { ArrowUpRight } from "lucide-react";

const MyJourney: React.FC = () => {
  return (
    <section id="journey" className="bg-[#0C0A09] py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
            My Journey
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-[#292524] bg-[#141210] md:grid-cols-[1.1fr_1.9fr]">

          {/* Left */}
          <div className="flex flex-col justify-between border-b border-[#292524] p-8 md:border-b-0 md:border-r md:p-10">

            <div>
              <p className="text-sm font-mono text-[#F97316]">
                2019 → Now
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#FAFAF9] md:text-4xl">
                From Arts
                <br />
                to <span className="text-[#F97316]">Engineering.</span>
              </h2>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-[#78716C]">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              Curiosity changed everything
            </div>

          </div>

          {/* Right */}
          <div className="p-8 md:p-10">
            <p className="text-base leading-8 text-[#A8A29E]">
              After completing my Arts degree in 2019, I moved to Bangalore
              without knowing anything about programming.
            </p>

            <p className="mt-5 text-base leading-8 text-[#A8A29E]">
              A friend suggested LinkedIn, where I saw a code snippet that
              made me curious enough to Google what coding actually was.
            </p>

            <p className="mt-5 text-base leading-8 text-[#A8A29E]">
              I started learning HTML and CSS through YouTube and W3Schools,
              struggled with JavaScript, joined Masai School, learned Full
              Stack Development, and eventually landed my first job as a
              React.js Developer.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#F97316]">
              <span>One curiosity. A completely new career.</span>
              <ArrowUpRight size={16} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyJourney;