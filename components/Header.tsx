import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoAction = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    alert(`Demonstração: Ação de ${label}`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen ? 'bg-obsidian/90 backdrop-blur-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="z-50 group">
            <h1 className="font-serif text-2xl text-white tracking-wide">
              VICTOR GALVÃO
            </h1>
            <p className="font-sans text-[10px] tracking-[0.3em] text-silver group-hover:text-white transition-colors">
              ADVOCACIA
            </p>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-12">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-xs font-sans text-silver uppercase tracking-[0.2em] hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#"
              onClick={(e) => handleDemoAction(e, 'Agendar Consultoria (WhatsApp)')}
              className="text-xs font-sans border border-white/30 px-6 py-2 text-white uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
            >
              Consultoria
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white z-50 p-2"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div className={`fixed inset-0 bg-obsidian z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="font-serif text-3xl text-white hover:text-silver transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleDemoAction(e, 'Agendar Consultoria (WhatsApp)');
            }}
            className="mt-8 px-8 py-3 border border-white/20 text-white uppercase tracking-widest text-sm"
          >
            Agendar Consultoria
          </a>
        </div>
      </div>
    </header>
  );
};