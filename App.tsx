
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Robust theme switching: ensure both DOM and React state are in sync
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-[#020617]">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative">
        <Hero />
        
        <section id="about" className="py-32 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-8">About Pooja</h2>
            <div className="relative">
              <p className="text-2xl md:text-4xl text-slate-900 dark:text-white leading-tight font-black tracking-tighter">
                "Code is the medium through which I solve complex human problems. With 4+ years dedicated to the MERN stack, I've developed a rigorous approach to architecture that prioritizes <span className="text-indigo-600">scalability</span> and <span className="text-blue-500">performance</span>."
              </p>
            </div>
          </div>
        </section>

        <Skills />
        <ExperienceSection />
        <Projects />
        <AIChat />
      </main>

      <footer className="py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-[#030712] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-black text-slate-950 dark:text-white mb-2 tracking-tighter uppercase">Pooja Sankhala</h4>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Full-Stack Engineering Expert</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
              <a href="https://github.com/Pooja9783" target="_blank" rel="noreferrer" className="text-sm font-black text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors uppercase tracking-[0.2em]">GitHub</a>
              <a href="https://linkedin.com/in/pooja-sankhala" target="_blank" rel="noreferrer" className="text-sm font-black text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors uppercase tracking-[0.2em]">LinkedIn</a>
              <a href="mailto:poojashankhla15@gmail.com" className="text-sm font-black text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors uppercase tracking-[0.2em]">Email</a>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
             <p className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
              © {new Date().getFullYear()} Pooja Sankhala • Crafted for Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
