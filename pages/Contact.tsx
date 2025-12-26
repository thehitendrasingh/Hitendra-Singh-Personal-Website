import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Send, Copy, Linkedin, MapPin, Mail, 
  CheckCircle, AlertCircle, Loader2, ChevronDown, Terminal
} from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

// Custom WhatsApp Logo Component
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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
            className="group bg-white p-6 rounded-2xl border border-neutral-200
                      shadow-sm hover:shadow-neon-blue hover:border-accent-sky/50
                      transition-all cursor-pointer relative overflow-hidden
                      flex items-center min-h-[100px]"
          >
            {/* Copy Icon - Always visible on mobile, hover effect on desktop */}
            <div className="absolute top-3 right-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity text-accent-sky">
              {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
            </div>

            {/* Content */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-sky-50 rounded-xl flex items-center justify-center 
                              text-accent-sky group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>

              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wide">
                  Email
                </h4>
                <p className="text-neutral-600 text-sm leading-tight break-all">
                  {socialLinks.email}
                </p>
              </div>
            </div>

            {/* Helper Text - Visible on Desktop Hover */}
            <div className="absolute top-3 right-10
                            text-[10px] text-neutral-400 font-bold uppercase tracking-widest
                            opacity-0 lg:group-hover:opacity-100 transition-opacity hidden lg:block">
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
                    <WhatsAppIcon size={20} />
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
           <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-0 relative overflow-hidden group">
              
              {/* TERMINAL HEADER - GAMIFICATION */}
              <div className="bg-neutral-100 border-b border-neutral-200 p-4 flex items-center gap-2">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="ml-4 text-xs font-mono text-neutral-400 flex items-center gap-1">
                    <Terminal size={12} />
                    <span>comms_link_v1.0</span>
                 </div>
              </div>

              <div className="p-8 md:p-10 relative">
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
                             className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300 font-medium"
                             placeholder="Your Name"
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
                             className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300 font-medium"
                             placeholder="name@example.com"
                           />
                        </div>
                     </div>

                     {/* Custom Dropdown Styling */}
                     <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Quest Type (Subject)</label>
                        <div className="relative">
                            <select 
                               id="subject"
                               value={formData.subject}
                               onChange={handleChange}
                               className="w-full pl-4 pr-10 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300 appearance-none cursor-pointer font-medium text-neutral-800"
                            >
                               <option>General Inquiry</option>
                               <option>Project Collaboration</option>
                               <option>Mentorship Request</option>
                               <option>Speaking Opportunity</option>
                            </select>
                            {/* Custom Dropdown Icon */}
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                                <ChevronDown size={18} />
                            </div>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Message Log</label>
                        <textarea 
                           id="message" 
                           rows={5}
                           required
                           value={formData.message}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-accent-sky focus:ring-4 focus:ring-accent-sky/10 focus:shadow-neon-blue outline-none transition-all duration-300 resize-none font-medium text-neutral-800"
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
                       className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center transition-all duration-300 group ${
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
                         <><Send size={20} className="mr-2 group-hover:scale-110 transition-transform" /> Send Message</>
                       )}
                     </button>
                  </form>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;