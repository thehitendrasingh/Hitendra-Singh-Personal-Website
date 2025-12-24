import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import GlowCard from '../components/GlowCard';
import { 
  Leaf, ExternalLink, X, ChevronRight, Layout, 
  Search, Target, Zap, BarChart3, RefreshCw, 
  Gamepad2, Layers, PenTool, Globe
} from 'lucide-react';

// --- Types ---
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  categories: string[]; // For filtering
  tags: string[]; // Visual tags
  link: string;
  linkType: 'Google Slides' | 'Google Doc' | 'Figma' | 'Google Sites' | 'External';
  color: 'blue' | 'purple' | 'teal' | 'emerald';
  customCover?: React.ReactNode;
  image?: string; // Fallback if no custom cover
  skills?: string[]; // For modal
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  // --- AgriChain Custom Cover Component ---
  // Reusing the robust HTML/CSS design for consistent branding
  const AgriChainCover = (
    <div className="w-full h-full relative bg-neutral-900 overflow-hidden group-hover:scale-105 transition-transform duration-700">
      <img 
        src="https://images.unsplash.com/photo-1625246333195-0929b450d60c?auto=format&fit=crop&q=80&w=600" 
        alt="AgriChain Background" 
        className="absolute inset-0 w-full h-[65%] object-cover opacity-80"
      />
      <div className="absolute inset-0 w-full h-[65%] bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
      
      <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
        <div className="bg-white p-3 rounded-2xl shadow-xl mb-2">
          <Leaf size={28} className="text-emerald-600" fill="currentColor" />
        </div>
        <span className="text-neutral-900 font-extrabold tracking-tight bg-white/90 px-3 py-1 rounded-md text-sm backdrop-blur-sm shadow-sm border border-white/50">AGRICHAIN</span>
      </div>

      <div className="absolute bottom-0 w-full h-[35%] bg-lime-600 flex flex-col justify-center items-center px-4 text-center z-20 border-t-4 border-white/10">
        <h4 className="text-white font-bold text-lg leading-tight drop-shadow-sm">PM Case Study</h4>
        <p className="text-lime-100 text-[10px] mt-1 font-medium tracking-wide uppercase">Supply Chain Optimization</p>
      </div>
    </div>
  );

  // --- Case Studies Data ---
  const caseStudies: CaseStudy[] = [
    // PRODUCT MANAGEMENT
    {
      id: 'agrichain',
      title: 'AgriChain PM Case Study',
      description: 'End-to-end supply chain roadmap for 10k+ users, optimizing delivery slot management.',
      categories: ['Product Management', 'Research'],
      tags: ['B2B', 'Strategy', 'Roadmap'],
      link: '#', // Replace with actual Google Slides link
      linkType: 'Google Slides',
      color: 'teal',
      customCover: AgriChainCover,
      skills: ['Market Research', 'Stakeholder Mgmt', 'PRD Writing', 'Go-To-Market']
    },
    {
      id: 'redcliffe',
      title: 'Redcliffe Labs PM Case Study',
      description: 'Diagnostic services platform expansion strategy aimed at increasing home collection efficiency.',
      categories: ['Product Management', 'Research'],
      tags: ['HealthTech', 'Operations', 'Growth'],
      link: '#', // Replace with actual link
      linkType: 'Google Slides',
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600', // Updated to medical/lab tech UI vibe
      skills: ['User Flows', 'Data Analysis', 'Operational Efficiency']
    },
    {
      id: 'hawaikhana',
      title: 'Hawaikhana PM Case Study',
      description: 'Product requirement documentation (PRD) and feature prioritization for a cloud kitchen aggregator.',
      categories: ['Product Management'],
      tags: ['FoodTech', 'PRD', 'MVP'],
      link: '#', // Replace with actual link
      linkType: 'Google Doc',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600', // Updated to modern payment/terminal UI
      skills: ['Requirement Gathering', 'Prioritization (RICE)', 'Wireframing']
    },
    
    // UX / UI
    {
      id: 'meetnmate',
      title: 'Meet n Mate',
      description: 'Complete mobile app redesign focusing on gamification elements to boost retention.',
      categories: ['UX/UI'],
      tags: ['Mobile App', 'Figma', 'Gamification'],
      link: '#', // Replace with actual link
      linkType: 'Figma',
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600', // Mobile UI interaction
      skills: ['UI Design', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      id: 'vdb',
      title: 'VDB UI/UX Improvement',
      description: 'Heuristic evaluation and UX overhaul for a B2B diamond marketplace interface.',
      categories: ['UX/UI', 'Research', 'Product Management'],
      tags: ['B2B', 'Audit', 'Redesign'],
      link: '#', // Replace with actual link
      linkType: 'Google Doc',
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=600', // Clean minimal UI
      skills: ['Heuristic Analysis', 'UX Writing', 'Information Architecture']
    },
    {
      id: 'sleepbetter',
      title: 'SleepBetter App',
      description: 'Wellness app concept focused on sleep tracking and bedtime routine building.',
      categories: ['UX/UI'],
      tags: ['Wellness', 'Concept', 'Mobile'],
      link: '#', // Replace with actual link
      linkType: 'Google Sites',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ce7d94?auto=format&fit=crop&q=80&w=600', // Tech/Mobile concept
      skills: ['User Research', 'Visual Design', 'Interaction Design']
    },
    {
      id: 'shoekart',
      title: 'Shoekart App',
      description: 'E-commerce shoe shopping experience designed for simplified checkout and discovery.',
      categories: ['UX/UI'],
      tags: ['E-commerce', 'Mobile', 'Retail'],
      link: '#', // Replace with actual link
      linkType: 'Google Sites',
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=600', // E-com UI vibe
      skills: ['E-com Patterns', 'Cart Optimization', 'Visual Design']
    }
  ];

  // --- Approach Data ---
  const approachSteps = [
    { icon: Target, title: 'Product Thinking', desc: 'Aligning business goals with user needs.' },
    { icon: Search, title: 'Problem Framing', desc: 'Deep diving into the "Why" before the "How".' },
    { icon: Layout, title: 'UX Research', desc: 'Validating assumptions with real data.' },
    { icon: PenTool, title: 'MVP Design', desc: 'Defining the core value proposition.' },
    { icon: BarChart3, title: 'Metrics & Impact', desc: 'Measuring success via KPIs.' },
    { icon: RefreshCw, title: 'Iteration', desc: 'Continuous improvement loops.' }
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.categories.includes(activeFilter));

  return (
    <div className="pb-20 pt-10">
      
      {/* 1. HERO SECTION */}
      <section className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-accent-sky/10 text-accent-sky rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-sky/20">PM Case Studies</span>
          <span className="px-3 py-1 bg-accent-violet/10 text-accent-violet rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-violet/20">UX/UI Design</span>
          <span className="hidden sm:inline-block px-3 py-1 bg-accent-emerald/10 text-accent-emerald rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-emerald/20">Research</span>
        </div>
        <SectionHeader 
          title="Portfolio & Case Studies" 
          subtitle="A curated collection of product, UX, and strategy work across multiple industries." 
          align="center" 
        />
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="mb-12 flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-neutral-100 rounded-xl border border-neutral-200">
          {['All', 'Product Management', 'UX/UI', 'Research'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-neutral-900 shadow-sm scale-105'
                  : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CASE STUDY GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-24">
        {filteredStudies.map((study) => (
          <div key={study.id} onClick={() => setSelectedStudy(study)} className="cursor-pointer">
            <GlowCard 
              glowColor={study.color} 
              className="flex flex-col h-full group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Card Image / Cover */}
              <div className="h-48 bg-neutral-100 rounded-t-xl flex items-center justify-center border-b border-neutral-100 overflow-hidden relative">
                {study.customCover ? (
                  study.customCover
                ) : study.image ? (
                  <div className="w-full h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                    <Gamepad2 size={32} className="text-neutral-300" />
                  </div>
                )}
                
                {/* Floating Category Badge */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded border border-neutral-200 shadow-sm text-neutral-600">
                    {study.categories[0]}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-accent-sky transition-colors">
                  {study.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                   <div className="flex gap-2">
                      {study.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                   </div>
                   <button className="text-sm font-bold text-accent-sky flex items-center group/btn">
                     View Case <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
      </section>

      {/* 4. APPROACH SECTION */}
      <section className="mb-24 px-4">
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           
           <div className="relative z-10 text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">My Case Study Approach</h2>
             <p className="text-neutral-400 max-w-2xl mx-auto">
               I don't just build features; I solve problems. Here is the framework I use to navigate from ambiguity to clarity.
             </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {approachSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-accent-sky group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <step.icon size={24} className="text-neutral-300 group-hover:text-white transition-colors" />
                   </div>
                   <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                   <p className="text-neutral-500 text-[10px] leading-tight">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. HIGHLIGHTED VIDEO PLACEHOLDER */}
      <section className="max-w-4xl mx-auto px-4 mb-24 text-center">
        <div className="border border-dashed border-neutral-300 rounded-2xl p-12 bg-neutral-50 flex flex-col items-center justify-center gap-4">
           <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center animate-pulse">
              <Zap size={32} className="text-neutral-400" />
           </div>
           <div>
             <h3 className="text-lg font-bold text-neutral-900">Featured Video Walkthrough — Coming Soon</h3>
             <p className="text-sm text-neutral-500">I'm currently recording a deep-dive walkthrough of my product philosophy.</p>
           </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="text-center pb-12">
        <h3 className="text-2xl font-bold mb-6 text-neutral-900">Want to see what else I'm building?</h3>
        <Link 
          to="/projects" 
          className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Explore Side Projects <Layers size={18} className="ml-2" />
        </Link>
      </section>

      {/* --- MISSION BRIEF MODAL --- */}
      {selectedStudy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" onClick={() => setSelectedStudy(null)} />
          
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="relative h-40 bg-neutral-100 flex-shrink-0">
               {selectedStudy.customCover ? (
                  <div className="w-full h-full">{selectedStudy.customCover}</div>
               ) : selectedStudy.image ? (
                  <img src={selectedStudy.image} className="w-full h-full object-cover" alt="Cover" />
               ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                     <Gamepad2 className="text-neutral-600" size={48} />
                  </div>
               )}
               <button 
                 onClick={() => setSelectedStudy(null)}
                 className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto">
               <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white ${
                    selectedStudy.color === 'teal' ? 'bg-teal-500' :
                    selectedStudy.color === 'purple' ? 'bg-purple-500' :
                    selectedStudy.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'
                  }`}>
                    {selectedStudy.categories[0]}
                  </span>
                  <span className="text-neutral-400 text-xs font-mono flex items-center gap-1">
                    <Globe size={12} /> {selectedStudy.linkType}
                  </span>
               </div>

               <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">{selectedStudy.title}</h2>
               <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                 {selectedStudy.description}
               </p>

               <div className="mb-8">
                 <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-3">Skills & Tools Deployed</h4>
                 <div className="flex flex-wrap gap-2">
                    {selectedStudy.skills?.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-md text-sm font-medium border border-neutral-200">
                        {skill}
                      </span>
                    ))}
                    {selectedStudy.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-md text-sm font-medium border border-neutral-200 opacity-70">
                        {tag}
                      </span>
                    ))}
                 </div>
               </div>

               <div className="flex gap-4">
                  <a 
                    href={selectedStudy.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-neutral-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 hover:shadow-lg transition-all"
                  >
                    Open Full Case Study <ExternalLink size={18} />
                  </a>
                  <button 
                    onClick={() => setSelectedStudy(null)}
                    className="px-6 py-3.5 border border-neutral-200 text-neutral-600 rounded-xl font-bold hover:bg-neutral-50 transition-all"
                  >
                    Close
                  </button>
               </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;