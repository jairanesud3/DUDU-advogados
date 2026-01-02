import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`MODO DEMONSTRAÇÃO\n\nNo site real, este link abriria seu aplicativo de e-mail para enviar uma mensagem para:\n${CONTACT_INFO.email}`);
  };

  return (
    <>
      <footer id="contato" className="bg-[#050505] py-20 border-t border-white/5 relative z-10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          
          {/* Logo Block */}
          <div className="text-center md:text-left">
             <h2 className="text-2xl font-serif text-white tracking-wide">VICTOR GALVÃO</h2>
             <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-1">Advocacia de Elite</p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:space-x-12">
             <a 
              href={`mailto:${CONTACT_INFO.email}`}
              onClick={handleEmailClick}
              className="text-xs font-sans text-gray-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1 cursor-pointer"
             >
               {CONTACT_INFO.email}
             </a>
             <span className="hidden md:inline text-white/10">|</span>
             <span className="text-xs font-sans text-gray-500 uppercase tracking-widest text-center md:text-left">
               {CONTACT_INFO.address}
             </span>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em]">
              © 2026 Victor Galvão. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-[10px] text-gray-700 hover:text-gold uppercase tracking-[0.2em] transition-colors"
              >
                Política de Privacidade
              </button>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-[10px] text-gray-700 hover:text-gold uppercase tracking-[0.2em] transition-colors"
              >
                Termos de Uso
              </button>
            </div>
        </div>
      </footer>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};