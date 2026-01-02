import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gold hover:text-black border border-transparent",
    outline: "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Link Interno (Rolagem Suave)
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 100; // Espaço para o header fixo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      return;
    }

    // 2. Link Externo (Alerta de Demonstração)
    if (href) {
      e.preventDefault();
      const isWhatsApp = href.includes('wa.me') || href.includes('whatsapp');
      const actionName = isWhatsApp ? "o WhatsApp" : "uma página externa";
      
      alert(`MODO DEMONSTRAÇÃO\n\nNo projeto real, este botão abriria ${actionName} para contato/agendamento.\n\n(Link destino: ${href})`);
    }
  };

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleLinkClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};