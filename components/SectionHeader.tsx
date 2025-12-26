import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center space-x-2 mb-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="w-2 h-2 bg-accent-sky rounded-sm" />
        <div className="w-2 h-2 bg-accent-violet rounded-sm opacity-60" />
        <div className="w-2 h-2 bg-accent-emerald rounded-sm opacity-30" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;