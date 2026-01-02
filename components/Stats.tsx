import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Stats: React.FC = () => {
  return (
    <section id="resultados" className="bg-lead-gray py-32">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-20 text-center">
          
          <RevealOnScroll>
             <div className="relative p-10 border border-white/5 hover:border-white/10 transition-colors duration-500 flex flex-col items-center justify-center">
                {/* Flex container for perfect alignment */}
                <div className="inline-flex items-start justify-center mb-4 leading-none">
                  <span className="text-6xl md:text-8xl font-serif text-white tracking-tighter">
                     R$ 40
                  </span>
                  {/* Adjusted top margin to align visually with the cap height of the numbers */}
                  <span className="text-gold text-3xl md:text-5xl font-serif mt-2 ml-2">
                     Mi
                  </span>
                </div>
                <span className="block text-xs uppercase tracking-[0.3em] text-gray-500">
                   Recuperados / Negociados
                </span>
             </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
             <div className="relative p-10 border border-white/5 hover:border-white/10 transition-colors duration-500 flex flex-col items-center justify-center">
                <div className="inline-flex items-start justify-center mb-4 leading-none">
                  <span className="text-6xl md:text-8xl font-serif text-white tracking-tighter">
                     150
                  </span>
                  {/* Adjusted margin for the plus sign */}
                  <span className="text-gold text-3xl md:text-5xl font-serif mt-1 ml-1">
                     +
                  </span>
                </div>
                <span className="block text-xs uppercase tracking-[0.3em] text-gray-500">
                   Imóveis Regularizados
                </span>
             </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};