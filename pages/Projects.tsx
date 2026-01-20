import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import GlowCard from '../components/GlowCard';
import useSEO from '../hooks/useSEO';
import { 
  ExternalLink, Github, Bot, Heart, Layout, Code, 
  Cpu, Rocket, Search, MessageSquare, Repeat, Zap, 
  Smartphone, Briefcase, ArrowRight, Layers, Globe, MessageCircle
} from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const Projects: React.FC = () => {
  const location = useLocation();

  useSEO({
  title: 'Projects | Hitendra Singh',
  description:
    'A collection of self-driven product experiments, prototypes, and AI-powered builds by Hitendra Singh.',
  canonical: 'https://thehitendrasingh.com/projects',
});

useEffect(() => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://thehitendrasingh.com/projects#work",
    "name": "Personal Product Projects by Hitendra Singh",
    "url": "https://thehitendrasingh.com/projects",
    "creator": {
      "@id": "https://thehitendrasingh.com/#person"
    },
    "about": [
      "AI Products",
      "Product Prototyping",
      "Mental Wellness",
      "UX Design",
      "MVP Development"
    ],
    "inLanguage": "en"
  });

  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
}, []);


  // Handle scroll to section based on hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300); // Slight delay to ensure render layout is stable
      }
    }
  }, [location]);

  const approachBadges = [
    { icon: Search, label: 'Problem Discovery' },
    { icon: Zap, label: 'Fast Prototyping' },
    { icon: MessageSquare, label: 'User Research' },
    { icon: Rocket, label: 'MVP Definition' },
    { icon: Bot, label: 'AI-First Thinking' },
    { icon: Repeat, label: 'Iteration Loops' },
  ];

  return (
    <div className="pb-20 pt-10">
      
      {/* 1. HERO SECTION */}
      <section className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 mb-6">
           <span className="px-3 py-1 bg-accent-sky/10 text-accent-sky rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-sky/20">AI Projects</span>
           <span className="px-3 py-1 bg-accent-violet/10 text-accent-violet rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-violet/20">Prototyping</span>
           <span className="px-3 py-1 bg-accent-emerald/10 text-accent-emerald rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-emerald/20">Experiments</span>
        </div>
        <SectionHeader 
          title="Personal Projects" 
          subtitle="A collection of self-driven product experiments, prototypes, and AI-powered builds."
          align="center" 
        />
      </section>

      {/* 2. FEATURED PROJECT: MANNSUKH */}
      <section id="mannsukh" className="mb-16 max-w-5xl mx-auto px-4 scroll-mt-32">
        <div className="flex items-center gap-2 mb-4">
            <div className="h-px bg-neutral-200 flex-grow"></div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Featured Build</span>
            <div className="h-px bg-neutral-200 flex-grow"></div>
        </div>
        
        <GlowCard glowColor="teal" className="p-8 md:p-12 relative overflow-hidden group">
           {/* Decorative Background Image */}
           <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200" 
               alt="Mannsukh Background" 
               className="w-full h-full object-cover opacity-15 transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
           </div>
           
           <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                 <div>
                    <h3 className="text-3xl font-extrabold text-neutral-900 mb-2">Mannsukh AI</h3>
                    <div className="flex gap-2 flex-wrap">
                       <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded uppercase tracking-wide">AI Product</span>
                       <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded uppercase tracking-wide">Mental Wellness</span>
                       <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded uppercase tracking-wide">MVP</span>
                    </div>
                 </div>
                 <div className="hidden md:block">
                    <Heart size={48} className="text-accent-emerald opacity-20 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110 transform" />
                 </div>
              </div>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-3xl">
                Mannsukh is an AI emotional companion designed to help people reduce loneliness and improve emotional wellbeing. 
                Includes voice-first concept, lead-gen funnel, UX prototypes, and early messaging tests.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                 {[
                   'Built pre-launch landing page using V0.dev',
                   'Deployed on Vercel',
                   'Conducted content testing with 3 iterations',
                   'Designed positioning & value proposition'
                 ].map((point, i) => (
                   <div key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-emerald flex-shrink-0"></div>
                      {point}
                   </div>
                 ))}
              </div>

              <div className="flex flex-wrap gap-4">
                 <a 
                   href={socialLinks.mannsukh} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-6 py-3 bg-neutral-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
                 >
                    View Landing Page <Globe size={16} />
                 </a>
              </div>
           </div>
        </GlowCard>
      </section>

      {/* 3. SECONDARY PROJECT: CAREER MITRA */}
      <section id="careermitra" className="mb-16 max-w-4xl mx-auto px-4 scroll-mt-32">
        <GlowCard glowColor="purple" className="p-8 relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-2 h-full bg-accent-violet z-10"></div>
           {/* Background Overlay */}
           <img 
               src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
               className="absolute inset-0 w-full h-full object-cover opacity-5" 
               alt="AI Tech"
           />

           <div className="flex flex-col md:flex-row gap-8 relative z-20">
              <div className="flex-shrink-0">
                 <div className="w-16 h-16 bg-accent-violet/10 rounded-2xl flex items-center justify-center text-accent-violet mb-4 md:mb-0 border border-accent-violet/20">
                    <Bot size={32} />
                 </div>
              </div>
              
              <div className="flex-grow">
                 <h3 className="text-2xl font-bold text-neutral-900 mb-2">Career Mitra AI (Custom GPT)</h3>
                 <p className="text-neutral-600 mb-6 leading-relaxed">
                   Career Mitra AI is a custom-built GPT designed to help job seekers improve resumes, interview prep, PM thinking, and career clarity.
                 </p>
                 
                 <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 text-sm text-neutral-500">
                    <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-violet rounded-full"></div> Custom GPT Logic</span>
                    <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-violet rounded-full"></div> Prompt Architecture</span>
                    <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-violet rounded-full"></div> Portfolio Integration</span>
                 </div>

                 <a 
                   href={socialLinks.careerMitra}
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-violet/10 text-accent-violet font-bold rounded-lg hover:bg-accent-violet hover:text-white transition-all"
                 >
                    Try Career Mitra AI <Zap size={16} />
                 </a>
              </div>
           </div>
        </GlowCard>
      </section>

      {/* 4. PROJECTS GRID (MINI PROJECTS) */}
      <section className="max-w-5xl mx-auto mb-20 px-4">
         <h3 className="text-xl font-bold text-neutral-900 mb-8 pl-4 border-l-4 border-neutral-200">More Experiments</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Meet n Mate */}
            <GlowCard glowColor="blue" className="p-6 flex flex-col h-full relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                     <Layout size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-neutral-100 text-neutral-500 rounded">UX / Prototype</span>
               </div>
               <h4 className="text-xl font-bold text-neutral-900 mb-2 relative z-10">Meet n Mate</h4>
               <p className="text-neutral-600 text-sm mb-6 flex-grow relative z-10">
                  Dog-dating app prototype focusing on gamified retention loops and trust-building UX flows.
               </p>
               <div className="flex items-center justify-between mt-auto relative z-10">
                  <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-neutral-200 border-2 border-white" title="Figma"></div>
                     <div className="w-6 h-6 rounded-full bg-neutral-300 border-2 border-white" title="MVP"></div>
                  </div>
                  <a 
                    href="https://www.figma.com/proto/UMK8spWnp8UYj06d753Ptb/Meet-n-Mate-Mobile-App?node-id=0-1&p=f&t=kNm4BiI4sZy2LKJP-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=290%3A367"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-accent-sky hover:underline flex items-center"
                  >
                     View Prototype <Smartphone size={16} className="ml-1" />
                  </a>
               </div>
            </GlowCard>

            {/* Portfolio Website */}
            <GlowCard glowColor="teal" className="p-6 flex flex-col h-full relative overflow-hidden group">
               <div className="absolute inset-0 bg-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                     <Code size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-neutral-100 text-neutral-500 rounded">React / AI</span>
               </div>
               <h4 className="text-xl font-bold text-neutral-900 mb-2 relative z-10">PM Portfolio (This Site)</h4>
               <p className="text-neutral-600 text-sm mb-6 flex-grow relative z-10">
                  Built using React, Tailwind, and Google AI Studio. Deployed on Vercel with a gamified UX strategy.
               </p>
               <div className="flex items-center justify-between mt-auto relative z-10">
                  <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-neutral-200 border-2 border-white" title="React"></div>
                     <div className="w-6 h-6 rounded-full bg-neutral-300 border-2 border-white" title="Tailwind"></div>
                  </div>
                  <a 
                    href="https://github.com/thehitendrasingh/Hitendra-Singh-Personal-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-accent-emerald hover:underline flex items-center"
                  >
                     View Code <Github size={16} className="ml-1" />
                  </a>
               </div>
            </GlowCard>

         </div>
      </section>

      {/* 5. APPROACH SECTION */}
      <section className="max-w-4xl mx-auto mb-20 text-center px-4">
        <h3 className="text-lg font-bold text-neutral-400 uppercase tracking-widest mb-8">My Build Process</h3>
        <div className="flex flex-wrap justify-center gap-4">
           {approachBadges.map((badge, idx) => (
             <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full shadow-sm hover:border-accent-sky hover:shadow-md transition-all cursor-default group">
                <badge.icon size={16} className="text-neutral-400 group-hover:text-accent-sky transition-colors" />
                <span className="text-sm font-bold text-neutral-700 group-hover:text-neutral-900">{badge.label}</span>
             </div>
           ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Ready to collaborate?</h2>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Let's Talk <MessageCircle size={18} className="ml-2" />
        </Link>
      </section>

    </div>
  );
};

export default Projects;