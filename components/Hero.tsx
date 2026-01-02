import React from 'react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-20 max-w-[1800px] mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-4xl">
          
          <RevealOnScroll>
            <p className="text-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 pl-1 font-medium">
              Direito Imobiliário de Elite
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8">
              SEU PATRIMÔNIO <br/>
              <span className="italic font-light">BLINDADO.</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.4}>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-xl mb-12 font-light border-l border-gold/50 pl-6">
              Assessoria jurídica especializada em aquisições, leilões e incorporações imobiliárias. Segurança total para grandes movimentos de capital.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button href={CONTACT_INFO.whatsapp}>
                Agendar Consultoria
              </Button>
              <Button href="#expertise" variant="outline">
                Nossa Expertise
              </Button>
            </div>
          </RevealOnScroll>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden md:block">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      </div>
    </section>
  );
};