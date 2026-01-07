
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif tracking-widest mb-6">LEY HERMA</h2>
            <p className="text-gray-400 font-light max-w-sm mb-8">
              Tu sueño de alta costura comienza aquí. Diseñamos para la mujer que busca elegancia, autenticidad y un detalle inolvidable en el corazón de Pamplona.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://instagram.com/leyherma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Seguir a Ley Herma en Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com/leyherma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-rose-400 transition-colors"
                aria-label="Seguir a Ley Herma en Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 italic text-rose-300">Contacto</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-rose-400" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-rose-400" />
                <span>info@leyherma.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-rose-400" />
                <span>Casco Viejo, Pamplona</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 italic text-rose-300">Horario</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Lunes a Viernes</li>
              <li className="text-white">10:00 - 20:00</li>
              <li>Sábados</li>
              <li className="text-white">10:00 - 14:00</li>
              <li className="text-xs italic">*Atención solo con cita previa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs tracking-widest">
          <p>© {new Date().getFullYear()} LEY HERMA ALTA COSTURA. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
