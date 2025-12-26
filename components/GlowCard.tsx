import React from 'react';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'teal' | 'emerald';
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = '', glowColor = 'blue', ...props }) => {
  const glowClasses = {
    blue: 'hover:shadow-neon-blue hover:border-accent-sky/60 focus:shadow-neon-blue focus:border-accent-sky/60 focus-within:shadow-neon-blue focus-within:border-accent-sky/60',
    purple: 'hover:shadow-neon-purple hover:border-accent-violet/60 focus:shadow-neon-purple focus:border-accent-violet/60 focus-within:shadow-neon-purple focus-within:border-accent-violet/60',
    teal: 'hover:shadow-neon-teal hover:border-accent-emerald/60 focus:shadow-neon-teal focus:border-accent-emerald/60 focus-within:shadow-neon-teal focus-within:border-accent-emerald/60',
    emerald: 'hover:shadow-neon-teal hover:border-accent-emerald/60 focus:shadow-neon-teal focus:border-accent-emerald/60 focus-within:shadow-neon-teal focus-within:border-accent-emerald/60',
  };

  return (
    <div 
      className={`
        bg-white rounded-xl border border-neutral-200 
        transition-all duration-300 ease-out 
        hover:-translate-y-1 hover:shadow-xl
        focus:outline-none transition-shadow
        ${glowClasses[glowColor]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlowCard;