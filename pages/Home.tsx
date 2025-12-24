import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, PlayCircle, BarChart2, Users, Layers, 
  Briefcase, Award, Zap, Gamepad2, Heart, Shield, 
  Code, Terminal, ChevronRight, Star, Cpu, Map, Target, Globe, Leaf
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlowCard from '../components/GlowCard';

const Home: React.FC = () => {
  const [xpProgress, setXpProgress] = useState(0);

  // Animate XP bar on mount
  useEffect(() => {
    const timer = setTimeout(() => setXpProgress(85), 500);
    return () => clearTimeout(timer);
  }, []);

  const brands = [
    { name: 'Meritto', domain: 'meritto.com' },
    { name: 'Stride Ahead', domain: 'strideahead.io' },
    { name: 'Virtual Diamond Boutique', domain: 'vdbapp.com' },
    { name: 'Clovia', domain: 'clovia.com' },
    { name: 'Truworth Wellness', domain: 'truworthwellness.com' },
    { name: 'ImpactGuru', domain: 'impactguru.com' },
  ];

  const missions = [
    { 
      title: 'Meet n Mate', 
      desc: 'Gamified mobile app redesign boosting retention by 35%.', 
      color: 'blue', 
      tags: ['Mobile', 'Gamification'],
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800' // Added social/mobile UI image
    },
    { 
      title: 'AgriChain PM', 
      desc: 'End-to-end supply chain roadmap for 10k+ users.', 
      color: 'teal', 
      tags: ['Strategy', 'B2B'],
      customCover: (
        <div className="w-full h-full relative bg-neutral-900 overflow-hidden">
          {/* Background Image - Wheat Field */}
          <img 
            src="https://images.unsplash.com/photo-1625246333195-0929b450d60c?auto=format&fit=crop&q=80&w=800" 
            alt="AgriChain Background" 
            className="absolute inset-0 w-full h-[65%] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-[65%] bg-black/20 pointer-events-none"></div>
          
          {/* Center Logo Group */}
          <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
            <div className="bg-white p-3 rounded-2xl shadow-xl mb-2">
              <Leaf size={28} className="text-emerald-600" fill="currentColor" />
            </div>
            <span className="text-neutral-900 font-extrabold tracking-tight bg-white/90 px-3 py-1 rounded-md text-sm backdrop-blur-sm shadow-sm border border-white/50">AGRICHAIN</span>
          </div>
  
          {/* Bottom Green Banner */}
          <div className="absolute bottom-0 w-full h-[35%] bg-lime-600 flex flex-col justify-center items-center px-4 text-center z-20 border-t-4 border-white/20">
            <h4 className="text-white font-bold text-lg leading-tight drop-shadow-sm">Product Manager Case Study</h4>
            <p className="text-lime-50 text-xs mt-1 font-medium tracking-wide">Time Slot Management for Delivery Sites</p>
          </div>
        </div>
      )
    },
    { 
      title: 'VDB UX Revamp', 
      desc: 'B2B luxury marketplace experience overhaul.', 
      color: 'purple', 
      tags: ['UX', 'E-com'],
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=800' // Added luxury/diamond/clean UI image
    }
  ];

  return (
    <div className="relative overflow-hidden pb-32">
      {/* Decorative Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-sky/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-accent-violet/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 px-4 max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8 animate-fade-in-up">
             {/* Floating Gamified Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-accent-sky/30 text-neutral-800 text-xs font-bold shadow-sm flex items-center gap-2">
                <Shield size={12} className="text-accent-sky" />
                <span className="tracking-wide">Level 6 PM</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-accent-violet/30 text-neutral-800 text-xs font-bold shadow-sm flex items-center gap-2">
                <Code size={12} className="text-accent-violet" />
                <span className="tracking-wide">XP: 6+ Years</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block text-neutral-900">Product Manager</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent-sky to-accent-violet">
                 AI-Driven Builder
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Crafting data-informed, user-centric digital products that improve engagement, performance, and business outcomes.
            </p>

            {/* XP Progress Bar */}
            <div className="max-w-sm mx-auto md:mx-0 relative group">
              <div className="flex justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <span>Lvl 6</span>
                <span className="text-accent-sky group-hover:text-accent-violet transition-colors">Next Level</span>
                <span>Lvl 7</span>
              </div>
              <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent-sky via-accent-violet to-accent-sky bg-[length:200%_100%] animate-shimmer rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${xpProgress}%` }}
                ></div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="relative px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold overflow-hidden group shadow-lg hover:shadow-accent-sky/20 transition-all hover:-translate-y-0.5"
              >
                 <span className="relative flex items-center gap-2">
                   Download Resume <ArrowRight size={18} />
                 </span>
              </a>
              
              <Link to="/portfolio" className="px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-xl font-bold hover:border-accent-sky hover:text-accent-sky transition-all flex items-center gap-2 shadow-sm">
                View Portfolio <Gamepad2 size={18} />
              </Link>
            </div>
          </div>

          {/* Right: Character Image */}
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex-shrink-0 animate-fade-in order-first md:order-last">
             {/* Glow Behind */}
             <div className="absolute inset-0 bg-gradient-to-tr from-accent-sky/20 to-accent-violet/20 rounded-[2rem] blur-2xl transform rotate-6 scale-95"></div>
             
             {/* Image Container */}
             <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl transform hover:rotate-2 hover:scale-[1.02] transition-all duration-500 bg-neutral-100 group">
                <img 
                  src="/Hitendra Profile Pic (2).jpg" 
                  alt="Hitendra Singh" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback if local image is missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Floating Status Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-lg flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Target size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Current Status</div>
                      <div className="text-sm font-bold text-neutral-900 flex items-center gap-1">
                        Open to Opportunities <span className="flex h-2 w-2 relative ml-1"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-neutral-50 animate-bounce-slow hidden md:block">
                <Star className="text-yellow-400 fill-yellow-400 w-8 h-8" />
             </div>
          </div>

        </div>
      </section>

      {/* PLAYER STATS GRID */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { icon: Briefcase, label: 'Experience', value: '6+ Years', color: 'text-accent-sky' },
            { icon: Layers, label: 'Features Shipped', value: '50+', color: 'text-accent-violet' },
            { icon: Users, label: 'Mentees', value: '100+', color: 'text-accent-emerald' },
            { icon: Award, label: 'Followers', value: '7,000+', color: 'text-amber-500' },
            { icon: Star, label: 'Topmate Mentor', value: 'Top 1%', color: 'text-rose-500' },
          ].map((stat, idx) => (
            <div key={idx} className="relative bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-neon-blue hover:border-accent-sky/30 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent-sky shadow-[0_0_8px_currentColor]"></div>
              </div>
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} transition-transform group-hover:scale-110 duration-300`} />
              <div className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ALLIES & GUILDS (Brands) */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <div className="text-center mb-12">
           <SectionHeader title="Allies & Guilds" align="center" subtitle="Trusted by brands across SaaS, EdTech, HealthTech, E-commerce & AI." />
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center space-x-3 px-5 py-3 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:border-accent-sky/30 transition-all duration-300 group cursor-default">
               <div className="w-8 h-8 flex items-center justify-center bg-neutral-50 rounded-lg p-1 overflow-hidden">
                 <img 
                   src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} 
                   alt={`${brand.name} logo`}
                   className="w-full h-full object-contain transition-all"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement?.classList.add('bg-neutral-200');
                   }}
                 />
               </div>
               <span className="font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors">
                 {brand.name}
               </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDIES (Missions) */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <SectionHeader title="Select Missions" subtitle="A selection of high-impact PM & UX work." />
          <Link to="/portfolio" className="hidden md:flex items-center font-bold text-neutral-500 hover:text-accent-sky transition-colors mb-4 group px-4 py-2 rounded-lg hover:bg-neutral-100">
            View Mission Log <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {missions.map((study, idx) => (
             <GlowCard key={idx} glowColor={study.color as any} className="flex flex-col h-full group relative overflow-hidden">
                {/* Pixel Accent */}
                <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                   <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-neutral-300 rounded-sm"></div>
                      <div className="w-1 h-1 bg-neutral-300 rounded-sm"></div>
                   </div>
                </div>

                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: study.color === 'blue' ? '#0ea5e9' : study.color === 'purple' ? '#8b5cf6' : '#10b981' }} />

                <div className="h-48 bg-neutral-50 rounded-t-xl flex items-center justify-center border-b border-neutral-100 overflow-hidden relative">
                   {/* Conditionally render custom cover, image, or default icon */}
                   {(study as any).customCover ? (
                     (study as any).customCover
                   ) : (study as any).image ? (
                     <div className="w-full h-full relative overflow-hidden">
                       <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10" />
                       <img 
                         src={(study as any).image} 
                         alt={study.title} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                     </div>
                   ) : (
                     <>
                       <div className="absolute inset-0 bg-neutral-100 opacity-50 pattern-grid-lg" />
                       <Gamepad2 size={32} className="text-neutral-300 relative z-10 group-hover:scale-110 group-hover:text-neutral-400 transition-all duration-500" />
                     </>
                   )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                   <div className="flex gap-2 mb-3">
                     {study.tags.map(tag => (
                       <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-neutral-100 text-neutral-500 rounded-md">{tag}</span>
                     ))}
                   </div>
                   <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-accent-sky transition-colors">{study.title}</h3>
                   <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">{study.desc}</p>
                   <button className="w-full py-3 rounded-lg border border-neutral-200 text-sm font-bold text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all shadow-sm flex items-center justify-center gap-2">
                     <PlayCircle size={16} /> Start Mission
                   </button>
                </div>
             </GlowCard>
           ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="btn-secondary w-full justify-center">View All Missions &rarr;</Link>
        </div>
      </section>

      {/* FEATURED VIDEO SECTION (UPDATED) */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <div className="text-center mb-12">
            <SectionHeader 
                title="Featured Product Thinking Breakdown" 
                subtitle="A practical deep dive into structured product analysis and decision-making." 
                align="center"
            />
        </div>
        
        <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden bg-black mt-12">
          <iframe
            src="https://www.youtube.com/embed/87-UUrCYTrc"
            className="w-full h-full"
            title="Featured Video"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* PERSONAL PROJECTS (Side Quests) */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <SectionHeader title="Side Quests" subtitle="Experiments in AI and User Experience." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Quest 1 */}
           <GlowCard className="p-8 group relative overflow-hidden" glowColor="purple">
              <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-10" alt="AI Background"/>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                <div className="w-16 h-16 bg-accent-violet/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent-violet/20">
                   <Zap size={32} className="text-accent-violet group-hover:animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-accent-violet transition-colors">CareerMitra AI</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-900 text-white uppercase">Live Beta</span>
                  </div>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                    A GPT-powered PM career assistant designed to improve product thinking, interviews, and skill development.
                  </p>
                  <button className="text-accent-violet font-bold text-sm flex items-center group/btn">
                    View Project <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
           </GlowCard>

           {/* Quest 2 */}
           <GlowCard className="p-8 group relative overflow-hidden" glowColor="teal">
              <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1544367563-12123d895e29?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-10" alt="Mannsukh Background"/>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                <div className="w-16 h-16 bg-accent-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent-emerald/20">
                   <Heart size={32} className="text-accent-emerald group-hover:animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-accent-emerald transition-colors">Mannsukh AI</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-900 text-white uppercase">Featured</span>
                  </div>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                    An AI emotional companion designed to help people reduce loneliness and improve emotional wellbeing.
                  </p>
                  <button className="text-accent-emerald font-bold text-sm flex items-center group/btn">
                    View Project <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
           </GlowCard>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Ready to collaborate?</h2>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Let's Talk <ArrowRight size={18} className="ml-2" />
        </Link>
      </section>
    </div>
  );
};

export default Home;