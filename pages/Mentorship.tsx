import React from 'react';
import SectionHeader from '../components/SectionHeader';
import GlowCard from '../components/GlowCard';
import { 
  Users, Star, MessageCircle, Award, CheckCircle, 
  ExternalLink, Calendar, MapPin, Globe, BookOpen, 
  Zap, FileText, Linkedin, Target, Coffee, Quote
} from 'lucide-react';

const Mentorship: React.FC = () => {

  // --- Data: Expertise ---
  const expertiseAreas = [
    { icon: FileText, label: 'Resume Review', color: 'blue' },
    { icon: MessageCircle, label: 'Interview Prep', color: 'purple' },
    { icon: BookOpen, label: 'PM Case Studies', color: 'teal' },
    { icon: Target, label: 'Product Sense', color: 'emerald' },
    { icon: Zap, label: 'Portfolio Building', color: 'blue' },
    { icon: MapPin, label: 'Roadmap Strategy', color: 'purple' },
    { icon: Users, label: 'Transition to PM', color: 'teal' },
    { icon: Star, label: 'Personal Branding', color: 'emerald' },
  ];

  // --- Data: Testimonials ---
  const testimonials = [
    {
      name: 'Priya S.',
      role: 'Associate PM @ FinTech Startup',
      text: "Hitendra's mock interview feedback was a game changer. He spotted my weakness in root cause analysis immediately and gave me a framework that helped me crack the actual interview.",
      source: 'Topmate'
    },
    {
      name: 'Rahul K.',
      role: 'Aspiring PM',
      text: "I was struggling to transition from engineering to PM. His roadmap was practical, jargon-free, and actually actionable. Highly recommend his 1:1 sessions.",
      source: 'LinkedIn'
    },
    {
      name: 'Sarah M.',
      role: 'Product Analyst',
      text: "The portfolio review session was eye-opening. He helped me turn boring documents into a compelling story that recruiters actually want to read.",
      source: 'Topmate'
    },
    {
      name: 'Amit V.',
      role: 'Senior PM',
      text: "Even as an experienced PM, I found value in his strategic thinking frameworks. A genuine mentor who cares about your long-term growth.",
      source: 'LinkedIn'
    }
  ];

  return (
    <div className="pb-20 pt-10">
      
      {/* 1. HERO SECTION */}
      <section className="text-center mb-16 px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-down">
           <span className="px-4 py-1.5 bg-accent-sky/10 text-accent-sky rounded-full text-xs font-bold uppercase tracking-wider border border-accent-sky/20 shadow-sm">100+ Mentees</span>
           <span className="px-4 py-1.5 bg-accent-violet/10 text-accent-violet rounded-full text-xs font-bold uppercase tracking-wider border border-accent-violet/20 shadow-sm">Top 1% Mentor</span>
           <span className="px-4 py-1.5 bg-accent-emerald/10 text-accent-emerald rounded-full text-xs font-bold uppercase tracking-wider border border-accent-emerald/20 shadow-sm">Career Coach</span>
        </div>
        <SectionHeader 
          title="Mentorship & Career Coaching" 
          subtitle="Empowering aspiring Product Managers with practical guidance, structured learning, and real-world clarity."
          align="center" 
        />
      </section>

      {/* 2. FEATURED PLATFORM: TOPMATE */}
      <section className="max-w-5xl mx-auto px-4 mb-24">
        <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-neutral-700 group transition-all duration-500 hover:shadow-neon-blue">
           
           {/* Background Effects */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-emerald/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-sky/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
           
           <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              
              {/* Left: Content */}
              <div className="flex-1 text-center lg:text-left">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-amber-500/30">
                    <Star size={12} fill="currentColor" /> Top 1% Mentor on Topmate
                 </div>
                 <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Level Up with <br className="hidden md:block"/> 1:1 Coaching</h2>
                 <p className="text-neutral-400 mb-8 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                   Join 100+ others who have accelerated their PM careers. Whether it's cracking interviews or building a portfolio, we tackle it together.
                 </p>
                 
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {[
                       { val: '70+', label: '1:1 Sessions' },
                       { val: '40+', label: 'Mock Interviews' },
                       { val: '20+', label: 'Resume Reviews' },
                       { val: 'Global', label: 'Mentee Base' }
                    ].map((stat, i) => (
                       <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <div className="text-xl md:text-2xl font-bold text-accent-emerald">{stat.val}</div>
                          <div className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-wide font-medium">{stat.label}</div>
                       </div>
                    ))}
                 </div>

                 <a 
                   href="https://topmate.io/hitendra" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-8 py-4 bg-accent-emerald text-neutral-900 rounded-xl font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 text-lg"
                 >
                   Book a Session <ExternalLink size={20} className="ml-2" />
                 </a>
              </div>

              {/* Right: Visual Mockup */}
              <div className="flex-1 w-full max-w-sm relative perspective-[1000px] group-hover:scale-105 transition-transform duration-500">
                 <div className="bg-white rounded-2xl p-5 shadow-2xl transform lg:rotate-y-12 transition-transform duration-500 hover:rotate-y-0 relative border border-neutral-200">
                    {/* Mockup Header */}
                    <div className="flex items-center gap-4 mb-6 border-b border-neutral-100 pb-4">
                       <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden flex-shrink-0">
                          <img 
                            src="/Hitendra Profile Pic (2).jpg" 
                            alt="Hitendra Singh" 
                            className="w-full h-full object-cover object-top" 
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                            }}
                          />
                       </div>
                       <div>
                          <div className="font-bold text-neutral-900 text-lg">Hitendra Singh</div>
                          <div className="text-xs text-neutral-500 font-medium">Product Manager @ Meritto</div>
                       </div>
                       <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Available
                       </div>
                    </div>
                    {/* Mockup Service List */}
                    <div className="space-y-3">
                       {['Mock Interview', 'Portfolio Review', 'PM Career Strategy', 'Resume Audit'].map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-accent-emerald/30 hover:bg-emerald-50/30 transition-colors cursor-default">
                             <span className="text-sm font-semibold text-neutral-700">{item}</span>
                             <div className="w-6 h-6 rounded-full bg-accent-emerald text-white flex items-center justify-center shadow-sm">
                                <CheckCircle size={14} />
                             </div>
                          </div>
                       ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-neutral-100 text-center">
                       <div className="text-xs text-neutral-400 font-mono font-medium">topmate.io/hitendra</div>
                    </div>
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -left-6 bg-neutral-900 text-white p-4 rounded-xl shadow-xl border border-neutral-700 flex items-center gap-3 animate-bounce-slow z-20">
                    <div className="p-2 bg-yellow-500/20 rounded-full">
                       <Star className="text-yellow-400 fill-yellow-400" size={20} />
                    </div>
                    <div>
                       <div className="font-bold text-sm">5.0 Rating</div>
                       <div className="text-[10px] text-neutral-400 font-medium">Based on 50+ Reviews</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 3. OTHER PLATFORMS */}
      <section className="max-w-4xl mx-auto px-4 mb-24">
         <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest text-center mb-8 flex items-center justify-center gap-4">
            <span className="h-px bg-neutral-200 w-12"></span> Also Mentoring On <span className="h-px bg-neutral-200 w-12"></span>
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <GlowCard className="p-6 flex items-center justify-between group" glowColor="blue">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold border border-blue-100 text-lg group-hover:scale-110 transition-transform">
                     UP
                  </div>
                  <div>
                     <h4 className="font-bold text-neutral-900 text-lg">UpmentorX</h4>
                     <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Featured Mentor</p>
                  </div>
               </div>
               <button className="text-xs font-bold px-4 py-2 bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-white hover:border-blue-200 hover:text-blue-600 rounded-lg transition-all shadow-sm">
                  View
               </button>
            </GlowCard>

            <GlowCard className="p-6 flex items-center justify-between group" glowColor="purple">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 font-bold border border-purple-100 text-lg group-hover:scale-110 transition-transform">
                     CU
                  </div>
                  <div>
                     <h4 className="font-bold text-neutral-900 text-lg">CareerUplifter</h4>
                     <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">PM Mentor</p>
                  </div>
               </div>
               <button className="text-xs font-bold px-4 py-2 bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-white hover:border-purple-200 hover:text-purple-600 rounded-lg transition-all shadow-sm">
                  View
               </button>
            </GlowCard>

         </div>
      </section>

      {/* 4. IMPACT METRICS (BADGES) */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
         <SectionHeader title="Impact Unlocked" subtitle="Real results from real mentorship sessions." align="center" />
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
               { icon: TrophyIcon, val: '20+', label: 'Job Transitions', sub: 'To PM Roles', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
               { icon: Star, val: '5.0', label: 'Mentor Rating', sub: 'Consistent Quality', color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-100' },
               { icon: Users, val: '100+', label: 'Active Mentees', sub: 'Growing Community', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
               { icon: Globe, val: 'Global', label: 'Reach', sub: 'India, US, EU, UAE', color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100' },
            ].map((stat, i) => (
               <div key={i} className={`p-6 rounded-2xl border ${stat.border} shadow-sm flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ${stat.bg} group cursor-default`}>
                  <div className="p-3 bg-white rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                     <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-extrabold text-neutral-900 mb-1">{stat.val}</div>
                  <div className="text-sm font-bold text-neutral-800">{stat.label}</div>
                  <div className="text-xs text-neutral-500 mt-1 font-medium">{stat.sub}</div>
               </div>
            ))}
         </div>
      </section>

      {/* 5. EXPERTISE AREAS */}
      <section className="max-w-5xl mx-auto px-4 mb-32">
         <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-neutral-900">Areas of Expertise</h3>
            <p className="text-neutral-500 mt-2">Unlock specific skills to level up your PM game.</p>
         </div>
         
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {expertiseAreas.map((skill, idx) => (
               <GlowCard key={idx} glowColor={skill.color as any} className="flex flex-col items-center justify-center p-6 text-center h-full group cursor-default hover:bg-neutral-50/50">
                  <div className={`p-3 rounded-xl bg-neutral-50 group-hover:bg-white border border-neutral-100 group-hover:shadow-md mb-4 transition-all duration-300`}>
                     <skill.icon size={28} className={`text-neutral-400 group-hover:text-${skill.color === 'emerald' || skill.color === 'teal' ? 'emerald-500' : skill.color === 'purple' ? 'violet-500' : 'sky-500'} transition-colors`} />
                  </div>
                  <span className="text-sm font-bold text-neutral-700 group-hover:text-neutral-900">{skill.label}</span>
               </GlowCard>
            ))}
         </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
         <SectionHeader title="Wall of Love" subtitle="What mentees are saying about our sessions." align="center" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="absolute top-6 right-8 text-neutral-100 group-hover:text-neutral-200 transition-colors">
                     <Quote size={48} fill="currentColor" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full flex items-center justify-center text-neutral-500 font-bold text-lg border border-neutral-200">
                           {t.name.charAt(0)}
                        </div>
                        <div>
                           <div className="font-bold text-base text-neutral-900">{t.name}</div>
                           <div className="text-xs text-neutral-500 font-medium">{t.role}</div>
                        </div>
                     </div>
                  </div>
                  
                  <p className="text-neutral-600 italic leading-relaxed relative z-10 mb-6 text-lg">"{t.text}"</p>
                  
                  <div className="flex items-center justify-between border-t border-neutral-50 pt-4">
                     <span className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 rounded text-[10px] font-bold text-neutral-500 flex items-center gap-1.5 uppercase tracking-wide">
                        {t.source === 'LinkedIn' ? <Linkedin size={12} className="text-blue-600" /> : <CheckCircle size={12} className="text-emerald-500" />} {t.source}
                     </span>
                     <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                        <CheckCircle size={14} /> Verified Mentee
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 7. PHILOSOPHY */}
      <section className="max-w-3xl mx-auto px-4 mb-24">
         <div className="bg-neutral-900 text-white rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl text-center border border-neutral-800">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-sky via-accent-violet to-accent-emerald"></div>
            
            <div className="relative z-10">
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md shadow-inner border border-white/5">
                  <Coffee size={32} className="text-accent-sky" />
               </div>
               <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">My Mentorship Philosophy</h3>
               <p className="text-neutral-300 leading-relaxed text-lg md:text-xl font-light">
                  I believe mentorship should be <strong>practical, not theoretical</strong>. I don't just share frameworks; I help you apply them to your specific context. My goal isn't just to help you land a job, but to help you gain the <strong>confidence and clarity</strong> to thrive as a Product Manager. <br/><br/><span className="text-white font-medium">No jargon, just real talk.</span>
               </p>
            </div>
         </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="text-center pb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 tracking-tight">Ready to Level Up Your PM Career?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
           <a 
             href="https://topmate.io/hitendra" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg group"
           >
             Book on Topmate <Calendar size={20} className="ml-2 group-hover:scale-110 transition-transform" />
           </a>
           <a 
             href="https://linkedin.com/in/thehitendra" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 border border-blue-200 rounded-xl font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-lg"
           >
             Follow on LinkedIn <Linkedin size={20} className="ml-2" />
           </a>
        </div>
      </section>

    </div>
  );
};

// Helper Icon for Trophy since it's not standard in all lucide versions, using Award as fallback or custom SVG
const TrophyIcon = ({ className }: { className?: string }) => (
  <Award className={className} />
);

export default Mentorship;