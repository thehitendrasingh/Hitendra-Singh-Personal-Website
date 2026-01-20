import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { 
  ArrowRight, PlayCircle, BarChart2, Users, Layers, 
  Briefcase, Award, Zap, Gamepad2, Heart, Shield, 
  Code, Terminal, ChevronRight, Star, Cpu, Map, Target, Globe, Leaf,
  FileDown, Grid, MessageCircle, Rocket, Lock
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlowCard from '../components/GlowCard';
import RecommendationsSection from '../components/RecommendationsSection';

const Home: React.FC = () => {
  const [xpProgress, setXpProgress] = useState(0);
  const xpBarRef = useRef<HTMLDivElement>(null);

  // Animate XP bar when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Delay slightly for visual effect
          setTimeout(() => setXpProgress(85), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (xpBarRef.current) {
      observer.observe(xpBarRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
    { name: 'Meritto', domain: 'meritto.com' },
    { name: 'Stride Ahead', domain: 'strideahead.io' },
    { name: 'Virtual Diamond Boutique', domain: 'vdbapp.com' },
    { name: 'Clovia', domain: 'clovia.com' },
    { name: 'Digital Futur', domain: 'thedigitalfutur.com' },
    
  ];

  const missions = [
    { 
      title: 'Metadrob Growth PM', 
      desc: 'Product-led growth strategy increasing user activation for a 3D showroom SaaS.', 
      color: 'blue', 
      tags: ['SaaS', 'Growth'],
      image: '/Metadrob.webp',
    },
    { 
      title: 'AgriChain PM', 
      desc: 'End-to-end supply chain roadmap for 10k+ users.', 
      color: 'teal', 
      tags: ['Strategy', 'B2B'],
      image: '/Agrichain.webp', //  Agrichain cover
    },
    { 
      title: 'VDB UX Revamp', 
      desc: 'B2B luxury marketplace experience overhaul.', 
      color: 'purple', 
      tags: ['UX', 'E-com'],
      image: '/VDB.webp',
    }
  ];
useSEO({
  title: 'Hitendra Singh | Product Manager & Mentor',
  description:
    'Product leader with 6+ years of experience driving D2C, HealthTech, EdTech and AI-powered products from idea to scale.',
  canonical: 'https://thehitendrasingh.com/',
});

useEffect(() => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://thehitendrasingh.com/#person",
        "name": "Hitendra Singh",
        "url": "https://thehitendrasingh.com/",
        "jobTitle": "Product Manager | Mentor",
        "description":
          "Product Manager with 6+ years of experience building D2C, HealthTech, EdTech and AI-powered products.",
        "sameAs": [
          "https://www.linkedin.com/in/thehitendra",
          "https://github.com/thehitendrasingh"
        ],
        "knowsAbout": [
          "Product Management",
          "Product Strategy",
          "D2C Products",
          "HealthTech",
          "AI Products",
          "UX Strategy",
          "Mentorship"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://thehitendrasingh.com/#website",
        "url": "https://thehitendrasingh.com/",
        "name": "Hitendra Singh – Product Manager Portfolio",
        "publisher": {
          "@id": "https://thehitendrasingh.com/#person"
        },
        "inLanguage": "en"
      }
    ]
  });

  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
}, []);

  return (
    <div className="relative overflow-hidden pb-32">
      {/* Decorative Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-sky/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-accent-violet/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 px-4 max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left space-y-10 animate-fade-in-up">
             {/* Floating Gamified Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               {/* Availability Signal */}
              <div className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-sm flex items-center gap-2 hover:bg-emerald-100 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-wide uppercase">Open to Work</span>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-accent-sky/30 text-neutral-800 text-xs font-bold shadow-sm flex items-center gap-2">
                <Shield size={14} className="text-accent-sky" />
                <span className="tracking-wide uppercase">Role: PM</span>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-accent-violet/30 text-neutral-800 text-xs font-bold shadow-sm flex items-center gap-2">
                <Code size={14} className="text-accent-violet" />
                <span className="tracking-wide uppercase">XP: 6+ Years</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-tight mb-6">
              <span className="text-neutral-900">Product Manager building </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-sky to-accent-violet">
                 user-centric digital products
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              I bring 6+ years of experience turning complex workflows into intuitive, high-impact digital experiences through strong product thinking, UX collaboration, and data-driven execution.
            </p>

            {/* XP Progress Bar */}
            <div className="max-w-sm mx-auto md:mx-0 relative group" ref={xpBarRef}>
              <div className="flex justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <span>XP: 6 Years</span>
                <span className="text-neutral-500 font-medium">Next Milestone</span>
                <span className="text-accent-sky group-hover:text-accent-violet transition-colors">XP: 7 Years</span>
              </div>
              <div className="h-2.5 bg-neutral-200 rounded-full overflow-hidden shadow-inner border border-neutral-100">
                <div 
                  className="h-full bg-gradient-to-r from-accent-sky via-accent-violet to-accent-sky bg-[length:200%_100%] animate-shimmer rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${xpProgress}%` }}
                ></div>
              </div>
            </div>
            
            {/* CTAs - Improved Hierarchy */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-5 pt-2">
              <a 
                href="/Hitendra%20Singh%20Product%20Manager%20Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold overflow-hidden group shadow-xl hover:shadow-2xl hover:bg-black transition-all hover:-translate-y-0.5 w-full sm:w-auto flex justify-center"
              >
                 <span className="relative flex items-center gap-2">
                   Download Resume <FileDown size={18} className="animate-bounce" />
                 </span>
              </a>
              
              <Link to="/portfolio" className="px-8 py-4 bg-transparent text-neutral-600 border border-neutral-300 rounded-xl font-bold hover:border-neutral-900 hover:text-neutral-900 transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-white hover:shadow-sm">
                View Missions <Gamepad2 size={18} />
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
              <div className="absolute top-0 right-0 p-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
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
            View Mission Log <Map size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {missions.map((study, idx) => (
             <GlowCard key={idx} glowColor={study.color as any} className="flex flex-col h-full group relative overflow-hidden">
                {/* Pixel Accent */}
                <div className="absolute top-0 right-0 p-2 lg:opacity-50 lg:group-hover:opacity-100 transition-opacity">
                   <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-neutral-300 rounded-sm"></div>
                      <div className="w-1 h-1 bg-neutral-300 rounded-sm"></div>
                   </div>
                </div>

                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" style={{ color: study.color === 'blue' ? '#0ea5e9' : study.color === 'purple' ? '#8b5cf6' : '#10b981' }} />

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
                   <Link 
                     to="/portfolio"
                     className="w-full py-3 rounded-lg border border-neutral-200 text-sm font-bold text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all shadow-sm flex items-center justify-center gap-2"
                   >
                     <PlayCircle size={16} /> Start Mission
                   </Link>
                </div>
             </GlowCard>
           ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="btn-secondary w-full justify-center flex items-center gap-2">View All Missions <Grid size={16} /></Link>
        </div>
      </section>

      {/* RECOMMENDATIONS (Social Proof) */}
      <RecommendationsSection />

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
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-accent-violet transition-colors">Career Mitra AI</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-900 text-white uppercase">Live Beta</span>
                  </div>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                    A GPT-powered PM career assistant designed to improve product thinking, interviews, and skill development.
                  </p>
                  <Link to="/projects#careermitra" className="text-accent-violet font-bold text-sm flex items-center group/btn">
                    View Project <Rocket size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
           </GlowCard>

           {/* Quest 2 */}
           <GlowCard className="p-8 group relative overflow-hidden" glowColor="teal">
              <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-5 transition-transform duration-700 group-hover:scale-110" alt="Mannsukh Background"/>
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
                  <Link to="/projects#mannsukh" className="text-accent-emerald font-bold text-sm flex items-center group/btn">
                    View Project <Rocket size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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
          Let's Talk <MessageCircle size={18} className="ml-2" />
        </Link>
      </section>
    </div>
  );
};

export default Home;