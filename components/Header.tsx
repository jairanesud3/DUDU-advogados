import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, CONTACT_INFO } from '../constants';
import { Button } from './Button';

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

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo - Transformado em div/button para não recarregar a página */}
        <div onClick={handleLogoClick} className="flex flex-col group z-50 cursor-pointer select-none">
          <span className="font-serif text-2xl text-white tracking-wide group-hover:text-gold transition-colors duration-500">
            VICTOR GALVÃO
          </span>
          <span className="text-[10px] text-gray-400 font-sans uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-500">
            Advocacia
          </span>
        </div>

        {/* Desktop Menu - Only visible on XL screens */}
        <nav className="hidden xl:flex items-center space-x-12">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button href={CONTACT_INFO.whatsapp} variant="outline" className="ml-4 px-8 py-3">
            Agendar
          </Button>
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden text-white hover:text-gold transition-colors z-50"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet Full Screen Menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-700 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center space-y-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-2xl font-serif text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-8">
             <Button href={CONTACT_INFO.whatsapp} onClick={() => setIsMobileMenuOpen(false)}>
               Agendar Consultoria
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
};