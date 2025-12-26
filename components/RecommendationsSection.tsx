import React from 'react';
import { Quote, Linkedin, Star } from 'lucide-react';

interface Recommendation {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

// NOTE: Since this is a static site, live LinkedIn data cannot be fetched automatically due to API restrictions.
// Please replace the text below with the actual recommendations copied from your LinkedIn profile:
// https://www.linkedin.com/in/thehitendra/details/recommendations/
const recommendations: Recommendation[] = [
  {
    id: 1,
    name: "Bitan Purkayastha",
    role: "Founder & CEO",
    company: "Outreach Pro",
    image: "/Bitan.jpg",
    text: "Hitendra is a remarkable product advisor and mentor with a deep understanding of achieving product-market fit and driving business success. His ability to guide teams and individuals with actionable insights and strategic advice is truly impressive."
  },
  {
    id: 2,
    name: "Yadnyesh Dubla",
    role: "Technical Lead",
    company: "Encora",
    image: "/Yadnyesh.jpg",
    text: "Hitendra excelled at leading the team, managing timelines, and ensuring smooth communication across all stakeholders. Hitendra’s leadership and problem-solving skills were key to the project's success. I highly recommend him for any future roles."
  },
  {
    id: 3,
    name: "Siddhant Thakur",
    role: "Founder",
    company: "WearWoke",
    image: "/Siddhant.jpg",
    text: "Hitendra is one of the most insightful professionals I’ve come to know over my professional life. His thought process is highly structured and dynamic. A great problem solver who will bring high value to any team and any discussion. "
  }
];

const RecommendationsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-32">
      {/* Container for Highlighted Look */}
      <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-sky via-accent-violet to-accent-emerald"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-violet/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-sky/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Header - Custom for Dark Mode */}
        <div className="relative z-10 text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-4 backdrop-blur-md shadow-lg">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              Social Proof
           </div>
           <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
             Endorsed by Peers & Leaders
           </h2>
           <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Real feedback from the people I've built products with.
           </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full">
              
              {/* Top Row: Profile & LinkedIn Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-sm">
                    <img src={rec.image} alt={rec.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#0077b5] rounded-full p-1 shadow-sm border border-neutral-900">
                     <Linkedin size={12} className="text-white" fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{rec.name}</h4>
                  <div className="text-xs text-neutral-400 font-medium leading-tight mb-0.5">{rec.role}</div>
                  <div className="text-[10px] text-accent-sky uppercase tracking-wider font-bold">{rec.company}</div>
                </div>
              </div>

              {/* Recommendation Text */}
              <div className="relative flex-grow">
                 <Quote size={32} className="text-white/10 mb-2 fill-white/10 absolute -top-4 -left-4 transform -scale-x-100" />
                 <p className="text-neutral-300 text-sm leading-relaxed italic relative z-10">
                   "{rec.text}"
                 </p>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default RecommendationsSection;