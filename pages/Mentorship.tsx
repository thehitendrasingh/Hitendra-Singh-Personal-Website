import React from 'react';
import SectionHeader from '../components/SectionHeader';
import GlowCard from '../components/GlowCard';
import useSEO from '../hooks/useSEO';
import { 
  Users, Star, MessageCircle, Award, CheckCircle, 
  MapPin, Globe, BookOpen, 
  Zap, FileText, Linkedin, Target, Coffee, Quote,
  Heart, CalendarCheck, User
} from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

// Custom Icons for Topmate and WhatsApp to match website theme
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const TopmateIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Pacman-like shape for Topmate logo */}
    <path d="M12 12L20.66 7A10 10 0 1 0 20.66 17Z"/>
  </svg>
);

const Mentorship: React.FC = () => {

  // --- Data: Expertise ---
  const expertiseAreas = [
    { icon: FileText, label: 'Resume Review' },
    { icon: MessageCircle, label: 'Interview Prep' },
    { icon: BookOpen, label: 'PM Case Studies' },
    { icon: Target, label: 'Product Sense' },
    { icon: Zap, label: 'Portfolio Building' },
    { icon: MapPin, label: 'Roadmap Strategy' },
    { icon: Users, label: 'Transition to PM' },
    { icon: Star, label: 'Personal Branding' },
  ];
useSEO({
  title: 'Mentorship | Hitendra Singh',
  description:
    'Product management mentorship by Hitendra Singh, focused on real-world PM skills, career clarity, and execution.',
  canonical: 'https://thehitendrasingh.com/mentorship',
});

  // --- Data: Testimonials (All from Topmate with Profile Pics) ---
  const testimonials = [
    
   {
      name: 'Darshan Suwalka',
      role: 'UI/UX Designer at Astonous',
      text: "Hitendra provided clear guidance and valuable insights that truly made a huge difference in my journey. I appreciate his support and highly recommend him to anyone seeking clarity on becoming a PM!",
      source: 'Topmate',
      image: '/Darshan.webp'
    },
   
    {
      name: 'Priti Nayak',
      role: 'Senior Product Manager at Mitratech',
      text: "I have done a couple of mock interview sessions with him and he shared a lot of useful feedback with me which in turn became helpful in my actual interview. Thanks Hitendra",
      source: 'Topmate',
      image: '/Priti.webp'
    },
    {
      name: 'Nikkhil Amresh',
      role: 'Life Underwriting Consultant at Ethos',
      text: "The mentorship was instrumental in clarifying my career aspirations. His guidance helped me gain positive belief in my decision to take up product management",
      source: 'Topmate',
      image: '/Nikkhil.webp'
    },
    {
      name: 'Saurabh Thakur',
      role: 'Senior Manager at Simplilearn',
      text: "Hitendra guided me on how to remove the blockers that I am facing currently. He addresses the problems and gives real solutions to them. Looking forward to talking to him more frequently",
      source: 'Topmate',
      image: '/Saurabh.webp'
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

      {/* 2. FEATURED PLATFORM: TOPMATE (HIGHLIGHTED) */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="relative bg-neutral-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-neutral-800 group transition-all duration-500 hover:shadow-neon-blue/40">
           
           {/* Background Effects */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-violet/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-sky/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
           <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
           
           <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              
              {/* Left: Content */}
              <div className="flex-1 text-center lg:text-left text-white">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                    <Star size={12} fill="currentColor" /> Top 1% Mentor on Topmate
                 </div>
                 <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-sm">Level Up with <br className="hidden md:block"/> 1:1 Coaching</h2>
                 <p className="text-neutral-300 mb-8 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                   Join 100+ others who have accelerated their PM careers. Whether it's cracking interviews or building a portfolio, we tackle it together.
                 </p>
                 
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {[
                       { val: '70+', label: '1:1 Sessions' },
                       { val: '40+', label: 'Mock Interviews' },
                       { val: '20+', label: 'Resume Reviews' },
                       { val: 'Global', label: 'Mentee Base' }
                    ].map((stat, i) => (
                       <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center transition-all hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm">
                          <div className="text-xl md:text-2xl font-bold text-accent-emerald">{stat.val}</div>
                          <div className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-wide font-medium">{stat.label}</div>
                       </div>
                    ))}
                 </div>

                 <a 
                   href="https://topmate.io/hitendra" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-8 py-4 bg-white text-neutral-900 rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 text-lg group"
                 >
                   Book a Session <CalendarCheck size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>

              {/* Right: Visual Mockup */}
              <div className="flex-1 w-full max-w-sm relative perspective-[1000px] group-hover:scale-105 transition-transform duration-500">
                 <div className="bg-white rounded-2xl p-5 shadow-2xl transform lg:rotate-y-12 transition-transform duration-500 hover:rotate-y-0 relative border border-white/20">
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
                       <div className="ml-auto bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-100">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Available
                       </div>
                    </div>
                    {/* Mockup Service List */}
                    <div className="space-y-3">
                       {['Mock Interview', 'Portfolio Review', 'PM Career Strategy', 'Resume Audit'].map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-accent-emerald/30 hover:bg-emerald-50/30 transition-colors cursor-default">
                             <span className="text-sm font-semibold text-neutral-700">{item}</span>
                             <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
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
                       <div className="font-bold text-sm">4.9 Rating</div>
                       <div className="text-[10px] text-neutral-400 font-medium">Based on 15+ Reviews</div>
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
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-neutral-100 p-2 group-hover:scale-110 transition-transform overflow-hidden">
                     <img 
                       src="https://www.google.com/s2/favicons?domain=upmentorx.com&sz=128" 
                       alt="UpMentorX Logo" 
                       className="w-full h-full object-contain"
                     />
                  </div>
                  <div>
                     <h4 className="font-bold text-neutral-900 text-lg">UpMentorX</h4>
                     <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Featured Mentor</p>
                  </div>
               </div>
               <a 
                 href="https://upmentorx.com/mentor-list/28"
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="text-xs font-bold px-4 py-2 bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-white hover:border-blue-200 hover:text-blue-600 rounded-lg transition-all shadow-sm"
               >
                  View
               </a>
            </GlowCard>

            <GlowCard className="p-6 flex items-center justify-between group" glowColor="purple">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-neutral-100 p-2 group-hover:scale-110 transition-transform overflow-hidden">
                     <img 
                       src="https://www.google.com/s2/favicons?domain=careeruplift.ai&sz=128" 
                       alt="CareerUplift Logo" 
                       className="w-full h-full object-contain"
                     />
                  </div>
                  <div>
                     <h4 className="font-bold text-neutral-900 text-lg">CareerUplift</h4>
                     <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">PM Mentor</p>
                  </div>
               </div>
               <a 
                 href="https://careeruplift.ai/share/counsellor/share_counsellor_user_56382945060077714889_1766680532640"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-xs font-bold px-4 py-2 bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-white hover:border-purple-200 hover:text-purple-600 rounded-lg transition-all shadow-sm"
               >
                  View
               </a>
            </GlowCard>

         </div>
      </section>

      {/* 4. IMPACT METRICS (BADGES) */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
         <SectionHeader title="Impact Unlocked" subtitle="Real results from real mentorship sessions." align="center" />
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
               { icon: TrophyIcon, val: '20+', label: 'Job Transitions', sub: 'To PM Roles', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
               { icon: Star, val: '4.9', label: 'Mentor Rating', sub: 'Consistent Quality', color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-100' },
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
               <GlowCard key={idx} glowColor="blue" className="flex flex-col items-center justify-center p-6 text-center h-full group cursor-default">
                  {/* Icon Box: White background, Blue Icon, No Hover Change */}
                  <div className="p-4 rounded-xl bg-white border border-neutral-100 shadow-sm mb-4">
                     <skill.icon size={28} className="text-accent-sky" />
                  </div>
                  <span className="text-sm font-bold text-neutral-700">{skill.label}</span>
               </GlowCard>
            ))}
         </div>
      </section>

      {/* 6. TESTIMONIALS (WALL OF LOVE - TOPMATE) */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
         <SectionHeader title="Wall of Love" subtitle="What mentees are saying about our sessions on Topmate." align="center" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="absolute top-6 right-8 text-neutral-100 group-hover:text-neutral-200 transition-colors">
                     <Quote size={48} fill="currentColor" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-100 shadow-sm">
                           <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <div className="font-bold text-base text-neutral-900">{t.name}</div>
                           <div className="text-xs text-neutral-500 font-medium">{t.role}</div>
                        </div>
                     </div>
                  </div>
                  
                  <p className="text-neutral-600 italic leading-relaxed relative z-10 mb-6 text-lg">"{t.text}"</p>
                  
                  <div className="flex items-center justify-between border-t border-neutral-50 pt-4">
                     <span className="px-2.5 py-1 bg-white border border-neutral-200 rounded text-[10px] font-bold text-neutral-500 flex items-center gap-1.5 uppercase tracking-wide">
                        <CheckCircle size={12} className="text-emerald-500" /> {t.source}
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

      {/* 8. LIFE COACH @ FLUTE SECTION */}
      <section className="max-w-3xl mx-auto px-4 mb-24">
         <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-500">
               <Heart size={28} className="fill-rose-500" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
               <h3 className="text-xl font-bold text-neutral-900 mb-2">Also a Life Coach @ Flute</h3>
               <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Beyond product, I help individuals navigate life's complexities and find clarity as a verified Life Coach on Flute.
               </p>
               
               <a 
                 href={socialLinks.flute}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-sm font-bold text-rose-600 hover:text-rose-700 hover:underline"
               >
                 View Profile <User size={14} className="ml-1" />
               </a>
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="text-center pb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 tracking-tight">Ready to Level Up Your PM Career?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
           <a 
             href="https://topmate.io/hitendra" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg group"
           >
             Book on Topmate <TopmateIcon size={20} className="ml-2 group-hover:scale-110 transition-transform" />
           </a>
           <a 
             href="https://linkedin.com/in/thehitendra" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0077b5] border border-[#0077b5] rounded-xl font-bold shadow-sm hover:shadow-md hover:bg-[#0077b5]/5 hover:-translate-y-1 transition-all duration-300 text-lg"
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