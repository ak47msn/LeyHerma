
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex flex-col items-center">
          <span className={`text-2xl md:text-3xl font-serif tracking-widest ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            LEY HERMA
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase ${isScrolled ? 'text-rose-400' : 'text-rose-500'}`}>
            Alta Costura Novias
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest hover:text-rose-400 transition-colors font-semibold"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-rose-100 hover:bg-rose-200 text-rose-800 px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all shadow-sm"
          >
            RESERVAR CITA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full h-screen flex flex-col items-center pt-20 space-y-8 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg uppercase tracking-widest hover:text-rose-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-rose-100 text-rose-800 px-8 py-3 rounded-full text-sm font-bold tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            RESERVAR CITA
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
