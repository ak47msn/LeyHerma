
import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with stronger dark overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-slowZoom"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${IMAGES.HERO})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle vignettes or blur for focus */}
      <div className="absolute inset-0 z-1 backdrop-brightness-75 md:backdrop-brightness-100"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <div className="mb-4 inline-block animate-fadeInUp">
           <span className="text-xs md:text-sm font-semibold tracking-[0.5em] uppercase text-rose-200">Exclusividad en Pamplona</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif mb-6 tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] animate-fadeInUp animation-delay-100">
          Ley Herma
        </h1>
        
        <p className="text-xl md:text-3xl font-light tracking-[0.25em] uppercase mb-12 drop-shadow-md animate-fadeInUp animation-delay-200 text-gray-100">
          Alta Costura para <span className="italic font-serif normal-case tracking-normal text-rose-100">Novias Únicas</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp animation-delay-300">
          <a 
            href="#contacto" 
            className="bg-white text-gray-900 px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-rose-50 transition-all hover-lift shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            SOLICITAR CITA PREVIA
          </a>
          <a 
            href="#coleccion" 
            className="bg-transparent border border-white/60 text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-white/10 hover:border-white backdrop-blur-md transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          >
            VER COLECCIÓN
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slowZoom { animation: slowZoom 20s infinite alternate ease-in-out; }
        .animate-fadeInUp { 
          animation: fadeInUp 1s ease-out forwards; 
          opacity: 0; 
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default Hero;
