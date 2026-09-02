
import React from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

const Certifications: React.FC = () => {
    return (
        <section
            id="certifications"
            className="scroll-mt-24 bg-[#0C0A09] py-20"
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-[#F97316]">
                            <Award size={16} />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                                Certifications
                            </p>
                        </div>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#FAFAF9] md:text-4xl">
                            Credentials that support my craft.
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-[#78716C] sm:text-right">
                        A collection of certifications and professional learning milestones.
                    </p>
                </div>

                {/* Certificate Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {CERTIFICATIONS.map((certificate, index) => (
                        <article
                            key={certificate.id}
                            className="group overflow-hidden rounded-2xl border border-[#292524] bg-[#141210] transition-all duration-300 hover:border-[#F97316]/60"
                        >
                            {/* Image */}
                            <div className="relative border-b border-[#292524] bg-[#0C0A09] p-4">
                                <span className="absolute left-7 top-7 z-10 text-xs font-semibold text-[#F97316]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex items-start justify-between gap-4 p-5">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#78716C]">
                                        {certificate.issuer}
                                    </p>

                                    <h3 className="mt-2 text-base font-semibold leading-6 text-[#FAFAF9] transition-colors group-hover:text-[#F97316]">
                                        {certificate.title}
                                    </h3>

                                    {/* Skills */}
                                    {certificate.skills?.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {certificate.skills.slice(0, 3).map((skill: string) => (
                                                <span
                                                    key={skill}
                                                    className="text-xs text-[#78716C]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>


                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;

