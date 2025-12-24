import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, Youtube, Instagram, Dribbble, 
  ArrowUp, Mail, MapPin, ExternalLink, Cpu, Heart
} from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

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
    { name: 'CareerMitra GPT', url: socialLinks.careerMitra },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Side Projects', path: '/projects' },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-20 pb-10 border-t border-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group w-fit">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-accent-sky/50 transition-colors">
                <Cpu size={24} className="text-accent-sky" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Hitendra<span className="text-neutral-500"> Singh</span>
              </span>
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
                      {link.name} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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

            <div className="flex gap-3">
              {[
                { icon: Linkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: Youtube, url: socialLinks.youtube, label: 'YouTube' },
                { icon: Instagram, url: socialLinks.instagram, label: 'Instagram' },
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