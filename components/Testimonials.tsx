import React from 'react';
import { Star, Quote } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const testimonials = [
  {
    name: "Carlos Eduardo Mendes",
    role: "CEO | Construtora Horizon",
    text: "A atuação do Dr. Victor na regularização de um terreno complexo salvou um empreendimento de R$ 45 milhões. A estratégia jurídica foi impecável e rápida.",
    stars: 5
  },
  {
    name: "Fernanda Lins",
    role: "Diretora Financeira",
    text: "Já trabalhamos com grandes bancas, mas o atendimento personalizado e a visão de negócio que encontramos aqui foram superiores. Blindagem patrimonial executada com maestria.",
    stars: 5
  },
  {
    name: "Roberto Viana",
    role: "Investidor Imobiliário",
    text: "Especialista em leilões de verdade. A análise de risco pré-arrematação me livrou de processos que durariam anos. Lucro garantido com segurança jurídica.",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-serif text-white text-center mb-20">
            O que dizem nossos <span className="text-gold italic">Parceiros</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <div className="relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group h-full flex flex-col justify-between">
                <div>
                  <Quote className="text-gold/30 w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
                  <p className="text-gray-300 font-light italic mb-8 leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wide">{item.name}</h4>
                    <p className="text-gray-500 text-xs mt-1">{item.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};