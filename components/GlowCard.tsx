import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'teal' | 'emerald';
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = '', glowColor = 'blue' }) => {
  const glowClasses = {
    blue: 'hover:shadow-neon-blue hover:border-accent-sky/50',
    purple: 'hover:shadow-neon-purple hover:border-accent-violet/50',
    teal: 'hover:shadow-neon-teal hover:border-accent-emerald/50',
    emerald: 'hover:shadow-neon-teal hover:border-accent-emerald/50',
  };

  return (
    <div className={`bg-white rounded-xl border border-neutral-200 transition-all duration-300 ease-out hover:-translate-y-1 ${glowClasses[glowColor]} ${className}`}>
      {children}
    </div>
  );
};

export default GlowCard;