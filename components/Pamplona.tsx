
import React from 'react';
import { MapPin } from 'lucide-react';

const Pamplona: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 bg-[#FAF7F7] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-rose-500 p-4 rounded-full text-white animate-pulse">
              <MapPin size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900">
            En el Corazón de <span className="italic text-rose-500">Pamplona</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
            Ubicados en el emblemático <strong>Casco Viejo de Pamplona</strong>, nuestro atelier respira la historia y el arte de la ciudad. Un entorno privilegiado para un momento único en tu vida.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-rose-300">
              <h3 className="text-2xl font-serif mb-4">Nuestra Boutique</h3>
              <p className="text-gray-500 mb-6">Un espacio íntimo y acogedor diseñado exclusivamente para que te sientas como la protagonista de tu cuento.</p>
              <address className="not-italic text-rose-500 font-semibold uppercase tracking-wider text-sm">
                Casco Viejo, Pamplona<br />
                Navarra, España
              </address>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-rose-300 flex flex-col justify-center">
              <h3 className="text-2xl font-serif mb-4">Cita Personalizada</h3>
              <p className="text-gray-500 mb-6">Atendemos solo con cita previa para garantizarte exclusividad total y toda nuestra atención.</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="text-gray-900 font-bold border-b-2 border-rose-300 pb-1 hover:text-rose-500 hover:border-rose-500 transition-all self-center"
              >
                CÓMO LLEGAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pamplona;
