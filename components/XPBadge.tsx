import React from 'react';

interface XPBadgeProps {
  label: string;
  xp: string;
}

const XPBadge: React.FC<XPBadgeProps> = ({ label, xp }) => {
  return (
    <div className="inline-flex items-center space-x-2 bg-neutral-900 text-white rounded-full px-1 py-1 pr-4 shadow-lg border border-neutral-700">
      <div className="bg-accent-sky text-white text-xs font-bold px-2 py-1 rounded-full shadow-neon-blue">
        {label}
      </div>
      <span className="text-xs font-mono tracking-wide text-neutral-300">
        {xp}
      </span>
    </div>
  );
};

export default XPBadge;