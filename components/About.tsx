import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-almost-black">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <RevealOnScroll>
            <div className="relative">
              <div className="aspect-[3/4] w-full max-w-md mx-auto lg:ml-0 bg-gray-900 relative z-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                 {/* Placeholder for Attorney Photo */}
                 <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                   alt="Dr. Victor Galvão" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-serif text-2xl">Dr. Victor Galvão</p>
                    <p className="text-xs uppercase tracking-widest text-gold mt-1">Sócio Fundador</p>
                 </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-64 h-64 border border-white/5 z-0 hidden lg:block"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 z-0 hidden lg:block"></div>
            </div>
          </RevealOnScroll>

          <div className="lg:pl-10">
            <RevealOnScroll delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
                Segurança jurídica para <br/>
                <span className="italic text-gray-500">grandes negociações.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
                Com uma trajetória marcada pela excelência e discrição, o escritório Victor Galvão atua exclusivamente na defesa de interesses patrimoniais de alto valor.
              </p>
              <p className="text-gray-400 leading-relaxed mb-12 font-light text-sm">
                Entendemos que cada imóvel conta uma história e cada investimento carrega um legado. Nossa missão é blindar esse patrimônio através de estratégias jurídicas meticulosas, antecipando riscos que passariam despercebidos pelo olhar comum.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="flex items-center gap-8">
                 <div className="border-l border-gold pl-6">
                    <span className="block text-3xl font-serif text-white">12+</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Anos de Experiência</span>
                 </div>
                 <Button href={CONTACT_INFO.whatsapp} variant="outline">
                   Conhecer o Escritório
                 </Button>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};