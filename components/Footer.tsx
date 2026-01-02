import React from 'react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  const handleDemoClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    alert(`Demonstração: Link para ${type}`);
  };

  return (
    <footer id="contato" className="bg-black py-20 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
           <h2 className="text-2xl font-serif text-white tracking-wide">VICTOR GALVÃO</h2>
           <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-1">Advocacia de Elite</p>
        </div>
        
        {/* Simple Contact */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:space-x-8">
           <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-xs font-sans text-gray-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1"
           >
             {CONTACT_INFO.email}
           </a>
           <span className="hidden md:inline text-gray-800">|</span>
           <span className="text-xs font-sans text-gray-500 uppercase tracking-widest">
             {CONTACT_INFO.address}
           </span>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-[10px] text-gray-800 uppercase tracking-[0.2em]">
            © 2026 Victor Galvão. Todos os direitos reservados.
          </p>
      </div>
    </footer>
  );
};