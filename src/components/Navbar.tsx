import { Menu, X } from "lucide-react";
import { useState } from "react";
import { personalInfo, navItems } from "../config/portfolio";

interface NavbarProps {
  navigate: (path: string) => void;
  currentPage: string;
}

export default function Navbar({ navigate, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-[#484848]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="text-[#c7c7c7] text-[28px] tracking-[-0.32px] cursor-pointer uppercase font-bold"
        >
          {personalInfo.displayName}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer font-['Manrope',sans-serif] text-[14px] uppercase transition-colors ${
                currentPage === item.path.slice(1) ||
                (item.path === "/" && currentPage === "home")
                  ? "text-[#d3e97a]"
                  : "text-[#c7c7c7] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#c7c7c7] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-t border-[#484848]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`font-['Manrope',sans-serif] text-[14px] uppercase text-left transition-colors ${
                  currentPage === item.path.slice(1) ||
                  (item.path === "/" && currentPage === "home")
                    ? "text-[#d3e97a]"
                    : "text-[#c7c7c7] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
