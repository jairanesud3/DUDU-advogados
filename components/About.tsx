import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const About: React.FC = () => {
  return (
    <section id="marca" className="bg-almost-black w-full overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        
        {/* Left: Photo (Always Color, No Grayscale Bug) */}
        <div className="relative h-[500px] lg:h-auto w-full overflow-hidden">
           <div className="absolute inset-0 bg-black/10 z-10"></div>
           <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop" 
              alt="Dr. Victor Galvão" 
              className="w-full h-full object-cover object-top transition-transform duration-[2000ms] hover:scale-105"
           />
           {/* Subtle overlay at bottom for name readability if needed, but keeping it clean */}
        </div>

        {/* Right: Text Content */}
        <div className="flex items-center justify-center p-8 lg:p-24 bg-almost-black relative">
           {/* Decorative Line */}
           <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 lg:hidden"></div>
           <div className="absolute top-0 left-0 h-full w-[1px] bg-white/5 hidden lg:block"></div>

           <div className="max-w-xl">
              <RevealOnScroll direction="right">
                <p className="text-silver text-xs uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-silver"></span>
                  A Autoridade
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2} direction="right">
                <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-8">
                  Expertise em <br/>
                  <span className="text-silver italic">Milhões Negociados.</span>
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4} direction="right">
                <div className="space-y-6 text-gray-400 font-sans font-light text-lg leading-relaxed">
                  <p>
                    Dr. Victor Galvão não é um advogado comum. É um estrategista patrimonial que atua nos bastidores das maiores transações do estado.
                  </p>
                  <p>
                    Enquanto outros focam apenas na burocracia, nosso escritório foca na viabilidade financeira e na segurança jurídica absoluta. Garantimos que seu investimento não se torne um passivo.
                  </p>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.6} direction="right">
                <div className="mt-10">
                   <div className="h-[1px] w-full bg-white/10 mb-6"></div>
                   <p className="font-serif italic text-white text-xl">"Risco Zero é a nossa meta."</p>
                </div>
              </RevealOnScroll>
           </div>
        </div>

      </div>
    </section>
  );
};