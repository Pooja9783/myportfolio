
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white tracking-tighter mb-4 leading-none">
              My Tech <span className="text-indigo-600">Arsenal.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Over 4 years of mastering the MERN stack and beyond.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {SKILLS.map((skillGroup, idx) => {
            const isMain = skillGroup.category === "Frontend" || skillGroup.category === "Backend & DB";
            return (
              <div 
                key={idx} 
                className={`p-8 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden flex flex-col justify-between ${
                  isMain 
                    ? 'md:col-span-2 md:row-span-2 bg-indigo-50/50 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-500 shadow-sm' 
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 shadow-sm'
                }`}
              >
                <div>
                  <h3 className={`font-black tracking-tight mb-6 ${isMain ? 'text-2xl text-indigo-900 dark:text-indigo-100' : 'text-lg text-slate-800 dark:text-slate-200'}`}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border transition-all ${
                          isMain 
                            ? 'bg-white dark:bg-slate-900 border-indigo-100 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400' 
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {isMain && (
                  <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-indigo-400 dark:text-indigo-600 opacity-50 group-hover:opacity-100 transition-opacity">
                    Core Specialization
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
