import React from 'react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Layer 1: Background Image with People in Suits */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop")',
        }}
      >
      </div>

      {/* Layer 1.5: Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <RevealOnScroll delay={0.1}>
          <div className="inline-block border-b border-gold/50 pb-2 mb-8">
            <span className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] font-sans">
              Direito Imobiliário de Elite
            </span>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            SEU PATRIMÔNIO <br />
            <span className="italic text-silver">BLINDADO.</span>
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.4}>
          <p className="text-gray-300 font-sans font-light text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Assessoria jurídica especializada em aquisições, leilões e incorporações imobiliárias. Segurança total para grandes movimentos de capital.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
          {/* Ghost Button */}
          <Button href={CONTACT_INFO.whatsapp} className="border-white/30 hover:bg-white hover:text-black">
            Agendar Consultoria
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
};