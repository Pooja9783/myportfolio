
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0C0A09] py-24">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* CTA Card */}
                <div className="relative overflow-hidden rounded-3xl border border-[#292524] bg-[#141210]">

                    {/* Top Accent Line */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-70" />

                    <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

                        {/* Left */}
                        <div>
                            <div className="flex items-center gap-2 text-[#F97316]">
                                <Sparkles size={16} />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                                    Let's work together
                                </span>
                            </div>

                            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-[#FAFAF9] md:text-6xl">
                                Have an idea worth building?
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-[#A8A29E]">
                                I'm always interested in discussing interesting products,
                                challenging engineering problems, and new opportunities.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="lg:flex lg:justify-end">
                            <a
                                href="mailto:poojasankhala.dev@gmail.com"
                                className="group inline-flex items-center gap-4 rounded-2xl bg-[#F97316] px-6 py-4 text-sm font-semibold text-[#0C0A09] transition-all hover:bg-[#EA580C]"
                            >
                                Start a conversation

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-col gap-6 border-t border-[#292524] px-8 py-6 md:flex-row md:items-center md:justify-between md:px-12">

                        <div>
                            <p className="font-semibold text-[#FAFAF9]">
                                Pooja Sankhala
                            </p>

                            <p className="mt-1 text-sm text-[#78716C]">
                                Full Stack & AI Engineer
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <a
                                href="https://github.com/Pooja9783"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[#A8A29E] transition-colors hover:text-[#F97316]"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/in/pooja-sankhala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[#A8A29E] transition-colors hover:text-[#F97316]"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="mailto:poojasankhala.dev@gmail.com"
                                className="text-sm text-[#A8A29E] transition-colors hover:text-[#F97316]"
                            >
                                Email
                            </a>
                        </div>

                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 flex flex-col gap-3 text-xs text-[#78716C] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Pooja Sankhala
                    </p>

                    <p>
                        Designed & built by Pooja.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

