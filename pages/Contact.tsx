import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Send, Copy, Linkedin, MessageCircle, MapPin, Mail, 
  CheckCircle, AlertCircle, Loader2 
} from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // MOCK API CALL for Static Demo
    // In a real Next.js env, this would be: await fetch('/api/submitContact', ...)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      // Simulate success
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="pb-20 pt-10 px-4">
      
      {/* 1. HERO SECTION */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-down">
           <span className="px-3 py-1 bg-accent-sky/10 text-accent-sky rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-sky/20">Collaboration</span>
           <span className="px-3 py-1 bg-accent-violet/10 text-accent-violet rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-violet/20">Mentorship</span>
           <span className="px-3 py-1 bg-accent-emerald/10 text-accent-emerald rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent-emerald/20">Opportunities</span>
        </div>
        <SectionHeader 
          title="Let's Connect" 
          subtitle="Whether you're hiring, collaborating, or seeking mentorship — I'd love to hear from you." 
          align="center" 
        />
      </section>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. CONTACT INFO BLOCK */}
        <div className="space-y-6">
           {/* Email Card */}
           <div 
             onClick={handleCopyEmail}
             className="group bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-neon-blue hover:border-accent-sky/50 transition-all cursor-pointer relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent-sky">
                 {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-accent-sky group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wide">Email</h4>
                    <p className="text-neutral-600 font-mono text-sm break-all">{socialLinks.email}</p>
                 </div>
              </div>
              <div className="mt-2 text-[10px] text-neutral-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                 {copied ? 'Copied to Clipboard' : 'Click to Copy'}
              </div>
           </div>

           {/* LinkedIn Card */}
           <a 
             href={socialLinks.linkedin}
             target="_blank" 
             rel="noopener noreferrer"
             className="block group bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-neon-purple hover:border-accent-violet/50 transition-all"
           >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-accent-violet group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wide">LinkedIn</h4>
                    <p className="text-neutral-600 text-sm">Connect Professionally</p>
                 </div>
              </div>
           </a>

           {/* WhatsApp / Location Grid */}
           <div className="grid grid-cols-2 gap-4">
              <a 
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-neon-teal hover:border-accent-emerald/50 transition-all flex flex-col items-center text-center gap-2 group cursor-pointer"
              >
                 <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-accent-emerald group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                 </div>
                 <span className="text-xs font-bold text-neutral-700">WhatsApp</span>
              </a>

              <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center text-center gap-2 cursor-default group hover:border-neutral-300 transition-colors">
                 <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 group-hover:text-red-500 transition-colors">
                    <MapPin size={20} />
                 </div>
                 <span className="text-xs font-bold text-neutral-700">India</span>
              </div>
           </div>
        </div>

        {/* 3. CONTACT FORM SECTION */}
        <div className="lg:col-span-2">
           <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 md:p-10 relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent-sky/5 rounded-full blur-3xl pointer-events-none" />
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label htmlFor="name" className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Player Name</label>
                       <input 
                         type="text" 
                         id="name" 
                         required
                         value={formData.name}
                         onChange={handleChange}
                         className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300"
                         placeholder="Start typing..."
                       />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email Address</label>
                       <input 
                         type="email" 
                         id="email" 
                         required
                         value={formData.email}
                         onChange={handleChange}
                         className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300"
                         placeholder="name@example.com"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Subject</label>
                    <select 
                       id="subject"
                       value={formData.subject}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300 appearance-none"
                    >
                       <option>General Inquiry</option>
                       <option>Project Collaboration</option>
                       <option>Mentorship Request</option>
                       <option>Speaking Opportunity</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Message</label>
                    <textarea 
                       id="message" 
                       rows={5}
                       required
                       value={formData.message}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300 resize-none"
                       placeholder="How can we level up together?"
                    ></textarea>
                 </div>

                 {/* 4. SUCCESS & ERROR STATES */}
                 {status === 'success' && (
                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-emerald-700 animate-fade-in">
                       <CheckCircle size={20} />
                       <span className="text-sm font-bold">Message sent! I will respond via email shortly.</span>
                    </div>
                 )}

                 {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700 animate-fade-in">
                       <AlertCircle size={20} />
                       <span className="text-sm font-bold">Something went wrong. Please reach out on LinkedIn.</span>
                    </div>
                 )}

                 <button 
                   type="submit" 
                   disabled={status === 'loading' || status === 'success'}
                   className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                     status === 'loading' 
                       ? 'bg-neutral-400 cursor-not-allowed' 
                       : status === 'success'
                       ? 'bg-accent-emerald hover:shadow-neon-teal'
                       : 'bg-neutral-900 hover:bg-black hover:shadow-neon-blue hover:-translate-y-1'
                   }`}
                 >
                   {status === 'loading' ? (
                     <><Loader2 size={20} className="mr-2 animate-spin" /> Sending...</>
                   ) : status === 'success' ? (
                     <><CheckCircle size={20} className="mr-2" /> Sent</>
                   ) : (
                     <><Send size={20} className="mr-2" /> Send Message</>
                   )}
                 </button>
              </form>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;