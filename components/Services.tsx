import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Building2, Gavel, FileCheck } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8 text-gold mb-6" />,
    title: "Incorporações & Aquisições",
    description: "Estruturação jurídica completa para grandes empreendimentos imobiliários e due diligence para aquisição de terrenos."
  },
  {
    icon: <Gavel className="w-8 h-8 text-gold mb-6" />,
    title: "Leilões de Imóveis",
    description: "Assessoria especializada para arrematação segura, análise de riscos processuais e desocupação ágil do imóvel."
  },
  {
    icon: <FileCheck className="w-8 h-8 text-gold mb-6" />,
    title: "Regularização Fundiária",
    description: "Soluções complexas para imóveis irregulares, usucapião extrajudicial e retificação de áreas urbanas e rurais."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-black relative">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white max-w-lg">
              Expertise <span className="italic text-gray-500">Jurídica</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mt-6 md:mt-0 leading-relaxed">
              Atuação técnica e estratégica para investidores e incorporadoras que não aceitam riscos desnecessários.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <div className="group border-t border-white/10 pt-8 hover:border-gold transition-colors duration-500">
                <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                   {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-7 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};