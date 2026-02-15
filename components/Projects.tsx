
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white tracking-tighter mb-4 leading-none">
              Featured <span className="text-emerald-500">Works.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Selected applications that showcase my technical depth.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative h-[450px] rounded-[2.5rem] bg-slate-950 overflow-hidden shadow-2xl transition-all hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-slate-300 text-sm font-medium mb-6 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[9px] font-black text-white uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-[0.2em] group/btn"
                  >
                    Launch Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
