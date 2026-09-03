
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';
import AIChat from './components/AIChat';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import MyJourney from './components/MyJourney';

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
        <AboutMe />
        <MyJourney />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Certifications />
        <AIChat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
