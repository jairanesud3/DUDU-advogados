import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { ServiceItemProps } from '../types';

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title, description }) => (
  <div 
    className="group border-b border-white/10 py-12 hover:bg-white/5 transition-colors duration-500 cursor-pointer"
    onClick={() => alert(`Demonstração: Detalhes sobre ${title}`)}
  >
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-baseline justify-between gap-6">
      
      {/* Left: Number & Title */}
      <div className="md:w-1/2 flex items-baseline gap-8">
        <span className="text-white/30 font-serif text-lg">{number}</span>
        <h3 className="text-3xl font-serif text-white group-hover:translate-x-4 transition-transform duration-500">
          {title}
        </h3>
      </div>

      {/* Right: Description & Arrow */}
      <div className="md:w-1/2 flex items-center justify-between gap-8">
        <p className="text-gray-500 font-sans font-light leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
          {description}
        </p>
        <ArrowRight className="text-white w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
      </div>
      
    </div>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Leilões de Alto Padrão",
      description: "Assessoria completa pré e pós-arrematação. Análise de nulidades processuais e desocupação ágil."
    },
    {
      number: "02",
      title: "Incorporações Imobiliárias",
      description: "Estruturação jurídica de empreendimentos. SPEs, SCPs e Patrimônio de Afetação."
    },
    {
      number: "03",
      title: "Blindagem Patrimonial",
      description: "Proteção de ativos familiares e empresariais através de holdings e estruturas societárias robustas."
    },
    {
      number: "04",
      title: "Due Diligence Avançada",
      description: "Investigação profunda de riscos em aquisições de fazendas, terrenos e imóveis comerciais."
    }
  ];

  return (
    <section id="expertise" className="bg-black py-24 lg:py-32">
       <RevealOnScroll>
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12 mb-16">
            <h2 className="text-xs font-sans text-white/50 uppercase tracking-[0.4em] mb-4">Áreas de Atuação</h2>
            <div className="w-full h-[1px] bg-white/20"></div>
          </div>
       </RevealOnScroll>

      <div className="flex flex-col border-t border-white/10">
        {services.map((service, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <ServiceItem {...service} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};