import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  navigate: (path: string) => void;
  currentPage?: string;
}

export default function Navbar({ navigate, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-[#484848]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="font-['Bebas_Neue:Regular',sans-serif] text-[#c7c7c7] text-[28px] tracking-[-0.32px] cursor-pointer">
          robert garcia
        </button>
        <div className="hidden lg:flex gap-8 font-['Inter:Medium',sans-serif] font-medium text-[#c7c7c7] text-[16px]">
          <button 
            onClick={() => navigate('/projects')} 
            className={`hover:text-white transition-colors ${currentPage === 'projects' ? 'text-white' : ''}`}
          >
            Work
          </button>
          <button 
            onClick={() => navigate('/about')} 
            className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-white' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => navigate('/resume')} 
            className={`hover:text-white transition-colors ${currentPage === 'resume' ? 'text-white' : ''}`}
          >
            Resume
          </button>
          {currentPage === 'home' ? (
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          ) : (
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Contact</button>
          )}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#c7c7c7] hover:text-white transition-colors">
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-neutral-950/80 backdrop-blur-sm border-t border-[#484848]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-start gap-4 font-['Inter:Medium',sans-serif] font-medium text-[#c7c7c7] text-[16px]">
            <button 
              onClick={() => { navigate('/projects'); setIsOpen(false); }} 
              className={`hover:text-white transition-colors ${currentPage === 'projects' ? 'text-white' : ''}`}
            >
              Work
            </button>
            <button 
              onClick={() => { navigate('/about'); setIsOpen(false); }} 
              className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-white' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => { navigate('/resume'); setIsOpen(false); }} 
              className={`hover:text-white transition-colors ${currentPage === 'resume' ? 'text-white' : ''}`}
            >
              Resume
            </button>
            {currentPage === 'home' ? (
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Contact</a>
            ) : (
              <button onClick={() => { navigate('/'); setIsOpen(false); }} className="hover:text-white transition-colors">Contact</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
