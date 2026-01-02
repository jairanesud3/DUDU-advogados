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
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gold hover:text-black border border-transparent",
    outline: "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
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