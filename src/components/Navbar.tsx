"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo, navItems } from "../config/portfolio";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-[#484848]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-[#c7c7c7] text-[28px] tracking-[-0.32px] cursor-pointer uppercase font-bold"
        >
          {personalInfo.displayName}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-['Manrope',sans-serif] text-[14px] uppercase transition-colors ${
                isActive(item.path)
                  ? "text-[#d3e97a]"
                  : "text-[#c7c7c7] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-['Manrope',sans-serif] text-[14px] uppercase text-left transition-colors ${
                  isActive(item.path)
                    ? "text-[#d3e97a]"
                    : "text-[#c7c7c7] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
