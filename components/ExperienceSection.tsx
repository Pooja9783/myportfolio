
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 scroll-mt-24 bg-slate-50/30 dark:bg-slate-900/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white tracking-tighter mb-4 leading-none">
            Career <span className="text-blue-500">Timeline.</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium italic">Building impactful solutions, step by step.</p>
        </div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="group relative grid md:grid-cols-[1fr_2.5fr] gap-8 p-1 rounded-3xl transition-all">
              <div className="md:text-right pt-2">
                <div className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">{exp.period}</div>
                <div className="text-xl font-black text-slate-950 dark:text-white">{exp.company}</div>
              </div>

              <div className="relative pl-8 md:pl-12 border-l-2 border-slate-100 dark:border-slate-800 group-hover:border-blue-500/50 transition-colors pb-8">
                <div className="absolute top-2.5 left-[-9px] w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-125 transition-transform"></div>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">{exp.role}</h3>
                <ul className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-4 font-medium">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500/30 flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
