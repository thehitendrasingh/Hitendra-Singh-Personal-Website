import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import XPBadge from './XPBadge';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-1.5 rounded-lg bg-neutral-100 group-hover:shadow-neon-blue transition-all duration-300">
              <Cpu size={20} className="text-accent-sky" />
            </div>
            <span className="font-bold text-lg tracking-tight group-hover:text-accent-sky transition-colors">
              Hitendra<span className="text-neutral-400"> Singh</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-accent-sky'
                    : 'text-neutral-600 hover:text-accent-sky'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-sky shadow-neon-blue rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* XP Badge (Desktop) */}
            <XPBadge label="Level 6 PM" xp="XP: 6+ Years" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-neutral-50 text-accent-sky border-l-4 border-accent-sky'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-accent-sky'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <div className="pt-4 flex items-center justify-between border-t border-neutral-100 mt-2">
                <XPBadge label="Level 6 PM" xp="XP: 6+ Years" />
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;