
import React from "react";

const AboutMe: React.FC = () => {
    return (
        <section
            id="about"
            className="bg-[#0C0A09] py-24 scroll-mt-20"
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
                        About Me
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#292524] bg-[#1C1917]">

                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 border-b border-[#292524] px-5 py-4">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />

                        <span className="ml-3 font-mono text-xs text-[#A8A29E]">
                            pooja.profile
                        </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono text-sm leading-8 md:p-10 md:text-base">

                        <p>
                            <span className="text-[#F97316]">const</span>{" "}
                            <span className="text-[#FAFAF9]">pooja</span>{" "}
                            <span className="text-[#A8A29E]">=</span>{" "}
                            <span className="text-[#FAFAF9]">{"{"}</span>
                        </p>

                        <p className="pl-6">
                            <span className="text-[#FACC15]">role</span>
                            <span className="text-[#A8A29E]">:</span>{" "}
                            <span className="text-green-400">
                                "Full Stack Developer"
                            </span>
                            <span className="text-[#A8A29E]">,</span>
                        </p>

                        <p className="pl-6">
                            <span className="text-[#FACC15]">focus</span>
                            <span className="text-[#A8A29E]">:</span>{" "}
                            <span className="text-green-400">
                                "MERN Stack + AI"
                            </span>
                            <span className="text-[#A8A29E]">,</span>
                        </p>

                        <p className="pl-6">
                            <span className="text-[#FACC15]">passion</span>
                            <span className="text-[#A8A29E]">:</span>{" "}
                            <span className="text-green-400">
                                "Building useful products"
                            </span>
                            <span className="text-[#A8A29E]">,</span>
                        </p>

                        <p className="pl-6">
                            <span className="text-[#FACC15]">currently</span>
                            <span className="text-[#A8A29E]">:</span>{" "}
                            <span className="text-green-400">
                                "Learning Full Stack AI Engineering"
                            </span>
                        </p>

                        <p>
                            <span className="text-[#FAFAF9]">{"}"}</span>
                            <span className="animate-pulse text-[#F97316]">_</span>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

