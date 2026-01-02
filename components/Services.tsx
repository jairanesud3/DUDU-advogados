import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Building2, Gavel, FileCheck, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8 text-gold" />,
    title: "Incorporações & Aquisições",
    description: "Estruturação jurídica completa para grandes empreendimentos imobiliários e due diligence profunda para aquisição de terrenos."
  },
  {
    icon: <Gavel className="w-8 h-8 text-gold" />,
    title: "Leilões de Imóveis",
    description: "Assessoria especializada para arrematação segura, análise de riscos processuais e desocupação ágil do imóvel."
  },
  {
    icon: <FileCheck className="w-8 h-8 text-gold" />,
    title: "Regularização Fundiária",
    description: "Soluções complexas para imóveis irregulares, usucapião extrajudicial e retificação de áreas urbanas e rurais."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-[#050505] relative">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white max-w-lg leading-tight">
              Expertise <span className="italic text-gray-500">Jurídica</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mt-6 md:mt-0 leading-relaxed font-light">
              Atuação técnica e estratégica para investidores e incorporadoras que não aceitam riscos desnecessários.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <div className="group relative p-8 h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:from-white/[0.08] transition-all duration-500 overflow-hidden">
                
                {/* Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-gold/30 transition-colors">
                       {service.icon}
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-7 group-hover:text-gray-300 transition-colors mt-auto">
                    {service.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};