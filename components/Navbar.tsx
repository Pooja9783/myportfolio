
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Search', href: '#ai-chat' }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 py-6 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      <nav className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl border transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 shadow-2xl' 
          : 'bg-white dark:bg-slate-900 border-transparent shadow-none'
      }`}>
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/20">P</div>
          <span className="hidden sm:block text-lg font-black tracking-tight dark:text-white">POOJA.S</span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-4 py-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all active:scale-90"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <a 
            href="mailto:poojashankhla15@gmail.com"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            Hire
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
