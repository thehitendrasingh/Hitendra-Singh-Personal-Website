import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import SectionHeader from '../components/SectionHeader';
import GlowCard from '../components/GlowCard';
import { 
  Award, Heart, Zap, Briefcase, Code, Terminal, 
  Cpu, Users, BarChart, Download, Smile, Coffee, 
  Gamepad2, Feather, Globe, Target, Star, ChevronDown, ChevronUp 
} from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const About: React.FC = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);

  // Scroll handler to avoid HashRouter conflicts
  const scrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('origin-story');
    if (element) {
      // Offset for fixed navbar (approx 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // 3. Experience Timeline Data
  const timelineData = [
    {
      role: 'Product Management Consultant',
      company: 'Freelance',
      period: '2024 – Present',
      desc: 'Helping startups optimize product market fit and streamline delivery pipelines.',
      xp: ['Strategy +5', 'Leadership +3']
    },
    {
      role: 'Product Manager',
      company: 'Meritto (NoPaperForms)',
      period: '2024',
      desc: 'Led B2B product initiatives focusing on education CRM scalability.',
      xp: ['B2B Growth +4', 'Stakeholder Mgmt +4']
    },
    {
      role: 'Product Manager',
      company: 'Stride Ahead',
      period: '2023 – 2024',
      desc: 'Spearheaded AI integration and 0-to-1 product development cycles.',
      xp: ['AI Integration +5', '0-to-1 Launch +4']
    },
    {
      role: 'Associate Product Manager',
      company: 'Virtual Diamond Boutique',
      period: 'Jan 2023 – Apr 2023',
      desc: 'Enhanced e-commerce user experience for a luxury B2B marketplace.',
      xp: ['UX Research +3', 'E-com +3']
    },
    {
      role: 'Associate Product Manager',
      company: 'Clovia',
      period: 'Jun 2022 – Dec 2022',
      desc: 'Focused on retention metrics and data-driven feature improvements.',
      xp: ['Retention +4', 'Data Analysis +3']
    },
    {
      role: 'Product Management Consultant',
      company: 'Digital Futur',
      period: '2019 – 2022',
      desc: 'Consulted on digital transformation roadmaps and agile processes.',
      xp: ['Consulting +4', 'Roadmap +3']
    },
    {
      role: 'Product Management Fellowship',
      company: 'Brightigo Product School',
      period: '2020 – 2021',
      desc: 'Intensive cohort-based learning on product discovery and execution.',
      xp: ['Product Discovery +5', 'Frameworks +3']
    },
    {
      role: 'B.Tech CSE',
      company: 'Amity University, Noida',
      period: '2014 – 2018',
      desc: 'Foundation in Computer Science, algorithms, and system design.',
      xp: ['CS Fundamentals +10', 'Engineering +5']
    }
  ];

  // Logic to slice data for "Show Less" view (Show top 4 items by default)
  const visibleTimeline = showAllExperience ? timelineData : timelineData.slice(0, 4);

  // 4. Skills Snapshot Data
  const skills = [
    { category: 'Product Strategy', icon: Target, tags: ['Roadmapping', 'OKRs', 'Market Research', 'GTM Strategy'], color: 'text-accent-sky' },
    { category: 'UX & Design', icon: Heart, tags: ['Figma', 'User Journeys', 'Wireframing', 'Empathy Mapping'], color: 'text-accent-violet' },
    { category: 'Agile & Delivery', icon: Zap, tags: ['Jira', 'Scrum', 'Sprint Planning', 'Backlog Mgmt'], color: 'text-amber-500' },
    { category: 'Data & Insight', icon: BarChart, tags: ['SQL', 'Mixpanel', 'Google Analytics', 'A/B Testing'], color: 'text-accent-emerald' },
    { category: 'AI Tools', icon: Cpu, tags: ['ChatGPT', 'Prompt Eng', 'Automation', 'LLMs'], color: 'text-rose-500' },
    { category: 'Communication', icon: Users, tags: ['Stakeholder Mgmt', 'Storytelling', 'Documentation', 'Mentoring'], color: 'text-indigo-500' },
  ];

  // 5. Brands Data
  const brands = [
    { name: 'Meritto', domain: 'meritto.com' },
    { name: 'Stride Ahead', domain: 'strideahead.io' },
    { name: 'VDB', domain: 'vdbapp.com' },
    { name: 'Clovia', domain: 'clovia.com' },
    { name: 'Truworth', domain: 'truworthwellness.com' },
    { name: 'ImpactGuru', domain: 'impactguru.com' },
  ];

  return (
    <div className="pb-20 pt-10 space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 animate-fade-in-up">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-accent-sky/10 text-accent-sky rounded-full text-xs font-bold tracking-wider uppercase mb-2">
            Level 6 Product Manager
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Hi, I'm Hitendra — <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-sky to-accent-violet">
              Product Builder, UX Thinker & AI Explorer.
            </span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Bridging the gap between complex engineering and delightful user experiences through data, empathy, and a bit of gamification.
          </p>
          <div className="pt-4 flex justify-center md:justify-start gap-4">
             {/* UX Fix: Button with programmatic scroll to avoid HashRouter issues */}
             <button 
               onClick={scrollToStory} 
               className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
             >
               View My Journey
             </button>
             {/* UX Fix: Route to Contact Page */}
             <Link to="/contact" className="px-6 py-3 border border-neutral-200 text-neutral-600 rounded-lg font-bold hover:border-accent-sky hover:text-accent-sky transition-colors">
               Contact Me
             </Link>
          </div>
        </div>
        
        {/* Hero Avatar */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-accent-sky via-accent-violet to-accent-emerald shadow-2xl animate-pulse-slow">
             <div className="w-full h-full rounded-full bg-neutral-100 border-4 border-white overflow-hidden flex items-center justify-center relative">
                <img 
                  src="/Hitendra Profile Pic (2).jpg" 
                  alt="Hitendra Singh" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-2 animate-bounce-slow">
             <Star className="text-yellow-400 fill-yellow-400" size={20} />
             <span className="font-bold text-sm text-neutral-800">Top 1% Mentor</span>
          </div>
        </div>
      </section>

      {/* 2. MY STORY (GAMIFIED NARRATIVE) */}
      <section id="origin-story" className="max-w-4xl mx-auto scroll-mt-28">
        <SectionHeader title="Origin Story" subtitle="Every character has a backstory. Here's mine." align="center" />
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent-sky to-accent-violet"></div>
           <p className="text-lg text-neutral-600 leading-relaxed mb-6">
             My journey started in the realm of <strong>Computer Science</strong>, where I learned the language of machines. But I quickly realized that writing code was only half the battle—the real quest was building things that humans actually <em>loved</em> to use.
           </p>
           <p className="text-lg text-neutral-600 leading-relaxed">
             I pivoted to <strong>Product Management</strong> to become the bridge between technical complexity and user delight. Over the last 6+ years, I've treated my career like an RPG—leveling up my skills in strategy, UX, and AI across diverse industries like EdTech, HealthTech, and E-commerce. My philosophy is simple: <strong>Build with data, design with empathy, and always keep the user as the main character.</strong>
           </p>
        </div>
      </section>

      {/* 3. EXPERIENCE TIMELINE (CONNECTED LOG) */}
      <section id="timeline" className="max-w-3xl mx-auto">
        <SectionHeader title="Adventure Log" subtitle="A chronological record of quests and experience gained." align="center" />
        
        <div className="relative mt-12 space-y-12">
           {/* Vertical Connector Line - Gradient for style */}
           <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200"></div>

           {visibleTimeline.map((item, index) => (
             <div key={index} className="relative pl-12 group animate-fade-in">
                {/* Node Dot */}
                <div className="absolute left-[10px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-accent-sky shadow-md group-hover:scale-125 group-hover:bg-accent-violet transition-all duration-300 z-10"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                   <div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-accent-sky transition-colors">{item.role}</h3>
                      <div className="text-base font-medium text-neutral-700">{item.company}</div>
                   </div>
                   <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-neutral-100 text-neutral-500 text-xs font-mono font-bold rounded-full whitespace-nowrap">
                     {item.period}
                   </span>
                </div>
                
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed max-w-xl">
                  {item.desc}
                </p>

                {/* XP Badges */}
                <div className="flex flex-wrap gap-2">
                   {item.xp.map((badge, i) => (
                     <span key={i} className="inline-flex items-center px-2 py-0.5 rounded border border-accent-sky/20 bg-accent-sky/5 text-accent-sky text-[10px] font-bold uppercase tracking-wide">
                        + {badge}
                     </span>
                   ))}
                </div>
             </div>
           ))}
        </div>
        
        {/* Show More / Show Less Toggle */}
        <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-neutral-200 text-neutral-600 font-bold rounded-full shadow-sm hover:shadow-md hover:text-accent-sky transition-all duration-300"
            >
              {showAllExperience ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>Load More Quests <ChevronDown size={16} /></>
              )}
            </button>
        </div>
      </section>

      {/* 4. SKILLS SNAPSHOT */}
      <section>
        <SectionHeader title="Skill Tree" subtitle="Unlocked abilities and proficiencies." align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {skills.map((skill, idx) => (
             <GlowCard key={idx} className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                   <skill.icon className={`w-6 h-6 ${skill.color}`} />
                   <h3 className="font-bold text-lg text-neutral-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                   {skill.tags.map(tag => (
                     <span key={tag} className="px-3 py-1.5 bg-neutral-50 border border-neutral-100 rounded-md text-sm text-neutral-600 font-medium hover:bg-white hover:shadow-sm transition-all cursor-default">
                       {tag}
                     </span>
                   ))}
                </div>
             </GlowCard>
           ))}
        </div>
      </section>

      {/* 5. BRANDS I'VE WORKED WITH */}
      <section className="text-center">
         <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8">Guilds & Alliances</h3>
         <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {brands.map((brand, idx) => (
              <div key={idx} className="group flex flex-col items-center justify-center gap-2 w-24 md:w-32 transition-all duration-500 cursor-default">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-neutral-100 p-2 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                    <img 
                       src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} 
                       alt={brand.name}
                       className="w-full h-full object-contain"
                    />
                 </div>
                 <span className="text-xs font-bold text-neutral-900">{brand.name}</span>
              </div>
            ))}
         </div>
      </section>

      {/* 6. PERSONAL SIDE (PLAYER PROFILE) */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           
           <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                 <div className="flex items-center gap-3 mb-6">
                    <Gamepad2 className="text-accent-emerald" size={28} />
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Beyond the Workbench</h2>
                 </div>
                 <p className="text-neutral-400 mb-8 leading-relaxed">
                   When I'm not optimizing backlogs or analyzing cohorts, I'm recharging my mana. I believe a balanced player performs best in the long game.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4">
                    {[
                       { label: 'Watching Movies', icon: Zap },
                       { label: 'Gaming (PC/Mobile)', icon: Gamepad2 },
                       { label: 'Badminton & Cricket', icon: Target },
                       { label: 'Food Lover', icon: Coffee },
                       { label: 'Character Sketching', icon: Feather },
                       { label: 'Internet Surfing', icon: Globe },
                    ].map((interest, i) => (
                       <div key={i} className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                          <interest.icon size={14} className="text-accent-sky" />
                          {interest.label}
                       </div>
                    ))}
                 </div>
              </div>

              {/* Character Stats Visual */}
              <div className="w-full md:w-64 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                 <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Player Stats</h4>
                 <div className="space-y-4">
                    {[
                       { label: 'Creativity', val: '90%' },
                       { label: 'Curiosity', val: '95%' },
                       { label: 'Caffeine', val: '80%' },
                    ].map((stat, i) => (
                       <div key={i}>
                          <div className="flex justify-between text-xs font-bold mb-1">
                             <span>{stat.label}</span>
                             <span className="text-accent-emerald">{stat.val}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                             <div className="h-full bg-gradient-to-r from-accent-sky to-accent-emerald" style={{ width: stat.val }}></div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. FEATURED ACHIEVEMENTS */}
      <section className="max-w-4xl mx-auto">
        <SectionHeader title="Trophy Cabinet" subtitle="Recognitions and milestones unlocked." align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl border border-amber-100 text-center shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                 <Award size={24} />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Content Catalyst Award</h4>
              <p className="text-xs text-neutral-600">Awarded by Topmate (2024) for community impact.</p>
           </div>
           
           <div className="bg-gradient-to-b from-sky-50 to-white p-6 rounded-xl border border-sky-100 text-center shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-600">
                 <Feather size={24} />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">PM Scholarship</h4>
              <p className="text-xs text-neutral-600">Prime Minister’s Scholarship for academic excellence (2015).</p>
           </div>

           <div className="bg-gradient-to-b from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 text-center shadow-sm hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                 <Users size={24} />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">Top 1% Mentor</h4>
              <p className="text-xs text-neutral-600">Mentored 100+ aspiring PMs on Topmate.</p>
           </div>
        </div>
      </section>

      {/* 8. RESUME CTA */}
      <section className="text-center pb-12">
         <a href="/resume.pdf" target="_blank" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-sky via-accent-violet to-accent-sky opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Download My Resume</span>
         </a>
      </section>

    </div>
  );
};

export default About;