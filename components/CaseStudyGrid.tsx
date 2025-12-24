import React from 'react';
import GlowCard from './GlowCard';
import { ArrowRight, Tag, Gamepad2 } from 'lucide-react';

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  color?: 'blue' | 'purple' | 'teal';
  image?: string;
  customCover?: React.ReactNode;
}

interface CaseStudyGridProps {
  studies: CaseStudy[];
}

const CaseStudyGrid: React.FC<CaseStudyGridProps> = ({ studies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {studies.map((study) => (
        <GlowCard key={study.id} glowColor={study.color || 'blue'} className="flex flex-col h-full group relative overflow-hidden">
          <div className="h-48 bg-neutral-100 rounded-t-xl flex items-center justify-center border-b border-neutral-100 overflow-hidden relative">
            {study.customCover ? (
              study.customCover
            ) : study.image ? (
               <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
               </div>
            ) : (
              <>
                 <div className="absolute inset-0 bg-neutral-100 opacity-50 pattern-grid-lg" />
                 <span className="text-neutral-300 font-mono text-sm relative z-10 flex flex-col items-center gap-2">
                    <Gamepad2 size={24} />
                    Mission Log
                 </span>
              </>
            )}
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-neutral-50 text-neutral-600 border border-neutral-200 uppercase tracking-wider">
                  <Tag size={10} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">{study.title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
              {study.summary}
            </p>
            <button className="flex items-center text-sm font-bold text-accent-sky hover:text-accent-violet transition-colors group">
              Read Case Study 
              <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </GlowCard>
      ))}
    </div>
  );
};

export default CaseStudyGrid;