import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Projects', path: '/projects' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for mobile or general tightening if needed
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navbar Container */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav 
          className={`
            w-full max-w-6xl 
            ${scrolled 
              ? 'bg-white/90 backdrop-blur-md border border-white/30 shadow-lg shadow-black/10' 
              : 'bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-lg shadow-black/10'
            }
            rounded-2xl transition-all duration-300
            ${scrolled ? 'py-4' : 'py-5'} px-6 md:px-10
          `}
        >
          <div className="flex justify-between items-center">
            
            {/* 1. Modern Logo */}
            <Link to="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-900 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                 <Terminal size={22} className="text-accent-sky" />
                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-sky rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-2xl leading-none text-neutral-900 tracking-tight">
                  Hitendra <span className="text-accent-sky">Singh</span>
                </span>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest group-hover:text-accent-violet transition-colors">
                  Product & Builder
                </span>
              </div>
            </Link>

            {/* 2. Desktop Navigation (Clean Text) */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`
                      relative text-base font-semibold transition-all duration-200 tracking-tight
                      ${active 
                        ? 'text-neutral-900' 
                        : (scrolled ? 'text-neutral-700 hover:text-neutral-900' : 'text-neutral-500 hover:text-neutral-900')
                      }
                    `}
                  >
                    {link.name}
                    {/* Active Indicator Line */}
                    {active && (
                       <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-accent-sky rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* 3. Right Side: Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm lg:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div 
        className={`
          fixed top-32 left-4 right-4 z-50 
          bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-neutral-100/40 
          transform transition-all duration-300 origin-top
          lg:hidden overflow-hidden
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="p-3 space-y-2">
          {navLinks.map((link) => {
             const active = isActive(link.path);
             return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-6 py-4 rounded-xl text-base font-semibold transition-all
                  ${active 
                    ? 'bg-neutral-50 text-accent-sky' 
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  {link.name}
                  {active && <Sparkles size={18} />}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;