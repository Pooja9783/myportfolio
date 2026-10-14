
import { Code2, Menu, X, Download } from "lucide-react";
import { useState } from "react";

const resume = "/pooja_shankhla_resume_2026.pdf";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResumeClick = () => {
    // Open the resume in a new tab.
    window.open(resume, "_blank", "noopener,noreferrer");

    // Download the resume.
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Pooja_Sankhala_Resume_2026.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-800 bg-[#0C0A09]/90 backdrop-blur-lg">
      <nav
        className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-[#FAFAF9]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F97316] shadow-lg shadow-orange-500/20">
            <Code2 size={21} />
          </div>

          <span>
            Pooja<span className="text-[#F97316]">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF9]"
            >
              {link.name}
            </a>
          ))}

          {/* Resume: open in a new tab and download */}
          <button
            type="button"
            onClick={handleResumeClick}
            className="group flex items-center gap-2 rounded-lg border border-[#F97316]/50 bg-[#F97316]/10 px-4 py-2 text-sm font-semibold text-[#F97316] transition-all duration-300 hover:border-[#F97316] hover:bg-[#F97316] hover:text-[#0C0A09] hover:shadow-lg hover:shadow-orange-500/20"
          >
            <Download
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-[#FAFAF9] transition hover:text-[#F97316] md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#292524] bg-[#0C0A09] px-6 py-6 md:hidden"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#A8A29E] transition-colors hover:text-[#F97316]"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Resume */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                handleResumeClick();
              }}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#F97316] bg-[#F97316]/10 px-5 py-3 text-sm font-semibold text-[#F97316] transition hover:bg-[#F97316] hover:text-[#0C0A09]"
            >
              <Download size={17} />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
