
import React from 'react';
import { IMAGES } from '../constants';

const Atelier: React.FC = () => {
  return (
    <section id="atelier" className="py-24 bg-soft-pink">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-rose-200 rounded-lg group-hover:inset-0 transition-all duration-500"></div>
              <img 
                src={IMAGES.HAND_SEWING} 
                alt="Manos expertas cosiendo" 
                className="relative rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              La Magia de la <br /><span className="text-rose-400">Artesanía Pura</span>
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              En Ley Herma, cada vestido es una obra maestra inacabada hasta que tú lo vistes. Nuestro atelier en el Casco Viejo de Pamplona es un santuario de telas nobles, encajes antiguos y sueños que cobran vida puntada a puntada.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              No hacemos vestidos en serie. Creamos piezas únicas de <strong>Alta Costura</strong> diseñadas para reflejar tu alma, tu personalidad y la historia que quieres contar en tu gran día.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-serif text-xl mb-2 text-rose-500 italic">Diseño Exclusivo</h4>
                <p className="text-sm text-gray-500">Patronaje a medida para un ajuste perfecto.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2 text-rose-500 italic">Materiales Nobles</h4>
                <p className="text-sm text-gray-500">Seda, encaje de chantilly y pedrería fina.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atelier;
