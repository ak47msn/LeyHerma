
import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="coleccion" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-rose-400 font-bold tracking-[0.3em] uppercase text-xs">Universo Ley Herma</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4">Nuestra Inspiración</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:min-h-[1000px]">
          {/* Main big image */}
          <div className="md:col-span-8 md:row-span-2 group overflow-hidden relative rounded-2xl shadow-lg aspect-square md:aspect-auto">
             <img src={IMAGES.MODERN_BRIDE} alt="Vestido de novia moderno" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 rounded-full font-serif italic text-xl">Atrevida & Elegante</span>
             </div>
          </div>

          {/* Side image 1 */}
          <div className="md:col-span-4 group overflow-hidden relative rounded-2xl shadow-lg aspect-video md:aspect-auto">
             <img src={IMAGES.DRESS_DETAIL} alt="Detalle de alta costura" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 rounded-full font-serif italic text-xl">Libertad Natural</span>
             </div>
          </div>

          {/* Side image 2 */}
          <div className="md:col-span-4 group overflow-hidden relative rounded-2xl shadow-lg aspect-video md:aspect-auto">
             <img src={IMAGES.SHOWROOM} alt="Showroom Ley Herma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 rounded-full font-serif italic text-xl">Nuestro Templo</span>
             </div>
          </div>

          {/* Bottom long image */}
          <div className="md:col-span-12 group overflow-hidden relative rounded-2xl shadow-lg h-80">
             <img src={IMAGES.FLOWERS} alt="Detalle flores novia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 rounded-full font-serif italic text-xl">Detalles que Enamoran</span>
             </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic font-serif text-xl mb-8">Cada imagen cuenta una historia de exclusividad y pasión por la costura.</p>
          <a 
            href="#contacto" 
            className="inline-block bg-rose-500 text-white px-12 py-5 rounded-full font-bold tracking-[0.2em] shadow-xl hover:bg-rose-600 transition-all hover-lift"
          >
            RESERVA TU EXPERIENCIA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
