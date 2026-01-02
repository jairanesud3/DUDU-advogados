import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#111] border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-gold w-8 h-8" />
            <h2 className="text-2xl font-serif text-white">Política de Privacidade e Termos</h2>
          </div>

          <div className="space-y-6 text-gray-400 text-sm font-light leading-relaxed">
            <p>
              Esta Política de Privacidade descreve como o escritório Victor Galvão Advocacia coleta, usa e protege suas informações. Ao utilizar nosso site, você concorda com as práticas descritas aqui.
            </p>

            <h3 className="text-white font-medium text-lg">1. Coleta de Dados</h3>
            <p>
              Coletamos apenas as informações necessárias para contato inicial e agendamento de consultoria, como nome, e-mail e telefone, quando fornecidos voluntariamente através de nossos canais de atendimento (WhatsApp ou E-mail).
            </p>

            <h3 className="text-white font-medium text-lg">2. Uso das Informações</h3>
            <p>
              As informações são utilizadas estritamente para:
              <br/>• Retornar solicitações de contato;
              <br/>• Agendar reuniões e consultorias;
              <br/>• Enviar propostas de honorários (quando solicitadas).
            </p>

            <h3 className="text-white font-medium text-lg">3. Proteção e Sigilo</h3>
            <p>
              Adotamos medidas rigorosas de segurança digital. O sigilo advogado-cliente é absoluto. Seus dados jamais serão vendidos ou compartilhados com terceiros para fins de marketing.
            </p>

            <h3 className="text-white font-medium text-lg">4. Cookies</h3>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e melhoria da experiência do usuário. Você pode desativá-los nas configurações do seu navegador.
            </p>

            <div className="pt-6 border-t border-white/5">
              <p className="text-xs text-gray-500">
                Atualizado em: Janeiro de 2026. <br/>
                Para questões legais, contate nosso DPO via e-mail oficial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};