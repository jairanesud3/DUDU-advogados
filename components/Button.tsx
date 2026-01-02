import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'minimal';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href,
  className = '',
  ...props 
}) => {
  // Minimalist Luxury Styles
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-500 font-sans border border-white/20";
  
  const variants = {
    primary: "bg-transparent text-white hover:bg-white hover:text-obsidian hover:border-white",
    minimal: "border-transparent text-silver hover:text-white"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const handleDemoClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      alert(`Demonstração: Esta ação levaria para: ${href.includes('wa.me') ? 'WhatsApp' : 'Página Externa/Contato'}`);
    }
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        onClick={handleDemoClick}
      >
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