import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-white text-black p-4 rounded-full shadow-2xl hover:bg-gold transition-all duration-500 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 stroke-1 group-hover:scale-110 transition-transform" />
    </a>
  );
};