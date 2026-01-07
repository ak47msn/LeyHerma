
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonios" className="py-24 bg-rose-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-400 font-bold tracking-[0.3em] uppercase text-xs">Experiencias Reales</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">Nuestras Novias</h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-12 rounded-3xl shadow-xl relative text-center min-h-[400px] flex flex-col justify-center overflow-hidden">
                    <Quote 
                      className={`text-rose-100 absolute top-8 left-8 w-16 h-16 -z-0 transition-all duration-700 ${
                        currentIndex === i ? 'opacity-30 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
                      }`} 
                    />
                    
                    <p className={`text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed relative z-10 mb-8 transition-all duration-1000 delay-100 ${
                      currentIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      "{t.text}"
                    </p>
                    
                    <div className={`relative z-10 transition-all duration-1000 delay-300 ${
                      currentIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <h4 className="font-bold text-gray-900 tracking-widest uppercase text-sm">{t.name}</h4>
                      <p className="text-rose-400 text-xs mt-1 font-semibold">{t.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-rose-400 hover:bg-rose-500 hover:text-white transition-all z-20 group"
          >
            <ChevronLeft size={24} className="group-active:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-rose-400 hover:bg-rose-500 hover:text-white transition-all z-20 group"
          >
            <ChevronRight size={24} className="group-active:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex justify-center mt-10 space-x-2">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-rose-500 w-8' : 'bg-rose-200'}`}
                aria-label={`Ver testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
