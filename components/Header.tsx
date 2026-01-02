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
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6 lg:py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div onClick={handleLogoClick} className="flex flex-col group z-50 cursor-pointer select-none relative">
            <span className={`font-serif text-xl lg:text-2xl tracking-wide transition-colors duration-500 ${isMobileMenuOpen ? 'text-white' : 'text-white group-hover:text-gold'}`}>
              VICTOR GALVÃO
            </span>
            <span className="text-[9px] lg:text-[10px] text-gray-400 font-sans uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-500">
              Advocacia
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center space-x-12">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button href={CONTACT_INFO.whatsapp} variant="outline" className="ml-4 px-8 py-3 bg-white/5 hover:bg-white text-white hover:text-black border-white/20">
              Agendar
            </Button>
          </nav>

          {/* Mobile/Tablet Toggle Button - CORREÇÃO DE BUG */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden z-[60] relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:text-gold transition-all active:scale-95"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#080808] z-40 flex flex-col items-center justify-center transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[-20px] pointer-events-none'
      }`}
      >
        {/* Background Noise/Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

        <nav className="flex flex-col items-center space-y-8 relative z-10 w-full px-8">
          {NAVIGATION_LINKS.map((link, idx) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-3xl font-serif text-white hover:text-gold transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {link.label}
            </a>
          ))}
          
          <div className={`pt-12 w-full max-w-xs transition-all duration-500 delay-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
             <Button href={CONTACT_INFO.whatsapp} onClick={() => setIsMobileMenuOpen(false)} className="w-full justify-center">
               Agendar Consultoria
             </Button>
          </div>
        </nav>
      </div>
    </>
  );
};