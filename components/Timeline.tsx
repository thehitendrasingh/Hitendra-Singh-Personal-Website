import React from 'react';
import { Briefcase } from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-neutral-200 ml-3 space-y-12 py-4">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 group">
          {/* Node Dot */}
          <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${item.current ? 'bg-accent-sky border-accent-sky shadow-neon-blue' : 'bg-white border-neutral-300 group-hover:border-accent-sky'}`} />
          
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className={`text-xl font-bold ${item.current ? 'text-accent-sky' : 'text-neutral-900'}`}>
              {item.title}
            </h3>
            <span className="text-sm font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
              {item.year}
            </span>
          </div>
          
          <h4 className="text-md font-medium text-neutral-700 mb-2 flex items-center">
            <Briefcase size={14} className="mr-2 text-neutral-400" />
            {item.subtitle}
          </h4>
          
          <p className="text-neutral-600 leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;