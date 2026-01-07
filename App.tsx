
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Atelier from './components/Atelier';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pamplona from './components/Pamplona';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  useEffect(() => {
    // Basic smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Psychological nudge: Exclusivity & Scarcity */}
        <section className="py-20 text-center bg-white px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif italic text-rose-500 mb-6">"Para novias que no temen ser ellas mismas"</h3>
            <div className="w-20 h-px bg-rose-200 mx-auto mb-8"></div>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              En Ley Herma limitamos nuestras creaciones mensuales para asegurar que cada novia reciba la dedicación absoluta que su vestido merece. Alta costura real, sin prisas, en el corazón de Navarra.
            </p>
          </div>
        </section>

        <Atelier />
        
        <Gallery />

        <Testimonials />
        
        <Pamplona />

        {/* Call to Action Section - High Conversion Design */}
        <section id="contacto" className="py-24 bg-rose-50 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-gray-900">Tu Sueño Empieza <span className="text-rose-500 italic">Hoy</span></h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
              Estamos deseando conocer tu historia. Las citas para la temporada 2024/2025 ya están abiertas. Reserva tu espacio exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/34600000000?text=Hola,%20me%20gustaría%20reservar%20una%20cita%20en%20Ley%20Herma." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold tracking-widest shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-3 group"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                <span>CITA POR WHATSAPP</span>
              </a>
              <a 
                href="mailto:citas@leyherma.com" 
                className="bg-gray-900 text-white px-10 py-5 rounded-full font-bold tracking-widest shadow-xl hover:bg-gray-800 transition-all flex items-center justify-center"
              >
                CITA POR EMAIL
              </a>
            </div>
            <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-semibold italic">Tiempo estimado de respuesta en WhatsApp: 15 minutos</p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
