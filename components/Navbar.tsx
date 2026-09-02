
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "AI Assistant", href: "#ai" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-800 bg-[#0C0A09]/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
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
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF9]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="mailto:poojasankhala.dev@gmail.com"
            className="rounded-lg bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/20"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FAFAF9] transition hover:text-[#F97316] md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#292524] bg-[#0C0A09] px-6 py-6 md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 lg:px-8">
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

            <a
              href="mailto:poojasankhala.dev@gmail.com"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-[#F97316] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#EA580C]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
