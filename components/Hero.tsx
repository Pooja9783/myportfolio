
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm animate-fade-in shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Available for high-impact roles
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-slate-950 dark:text-white">
          Architecting <br />
          <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 dark:from-indigo-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Digital Future.
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
          I'm <span className="font-bold text-slate-900 dark:text-white">Pooja Sankhala</span>. A Senior MERN Engineer building scalable web ecosystems with architectural precision and high-performance code.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#projects" 
            className="group relative px-10 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
          >
            <span className="relative z-10">Explores Works</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="#ai-chat" 
            className="group px-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            Ask My AI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
