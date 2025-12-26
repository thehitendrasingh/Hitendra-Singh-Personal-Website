import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, Youtube, Dribbble, 
  ArrowUp, Mail, MapPin, ExternalLink, Terminal, Heart, Globe
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
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Custom Topmate Logo Component
const TopmateIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Pacman-like shape for Topmate logo */}
    <path d="M12 12L20.66 7A10 10 0 1 0 20.66 17Z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Contact', path: '/contact' },
  ];

  const projectLinks = [
    { name: 'Mannsukh AI', url: socialLinks.mannsukh },
    { name: 'Career Mitra GPT', url: socialLinks.careerMitra },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Side Projects', path: '/projects' },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-20 pb-10 border-t border-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 text-white shadow-lg group-hover:scale-105 group-hover:border-accent-sky/50 transition-all duration-300">
                 <Terminal size={22} className="text-accent-sky" />
                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-sky rounded-full border-2 border-neutral-950 animate-pulse"></div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-xl leading-none text-white tracking-tight">
                  Hitendra <span className="text-accent-sky">Singh</span>
                </span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest group-hover:text-accent-violet transition-colors">
                  Product & Builder
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-neutral-500">
              Product Manager & UX Thinker. Building digital experiences that merge strategy, data, and human empathy.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              OPEN TO OPPORTUNITIES
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-accent-sky transition-colors flex items-center gap-2 w-fit">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Selected Works */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Selected Works</h3>
            <ul className="space-y-3 text-sm">
              {projectLinks.map((link, idx) => (
                <li key={idx}>
                  {link.url ? (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-accent-violet transition-colors flex items-center gap-2 group w-fit"
                    >
                      {link.name} <Globe size={12} className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link to={link.path!} className="hover:text-accent-violet transition-colors flex items-center gap-2 w-fit">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Let's Connect</h3>
            <div className="space-y-3 text-sm mb-8">
              <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-3 hover:text-white transition-colors group w-fit">
                <Mail size={16} className="text-neutral-500 group-hover:text-accent-sky transition-colors" />
                {socialLinks.email}
              </a>
              <div className="flex items-center gap-3 text-neutral-500">
                <MapPin size={16} />
                <span>India (Remote / Relocate)</span>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Linkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: TopmateIcon, url: socialLinks.topmate, label: 'Topmate' },
                { icon: WhatsAppIcon, url: socialLinks.whatsapp, label: 'WhatsApp' },
                { icon: Youtube, url: socialLinks.youtube, label: 'YouTube' },
                { icon: Dribbble, url: socialLinks.dribbble, label: 'Dribbble' },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 bg-neutral-900 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-all"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-neutral-600 flex items-center gap-1">
            © {currentYear} Hitendra Singh. Crafted with <Heart size={12} className="text-red-600 fill-red-600" /> & Code.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-neutral-900 border border-transparent hover:border-neutral-800"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;