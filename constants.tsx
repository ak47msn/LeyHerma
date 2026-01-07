
import { NavItem, GalleryImage, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Atelier', href: '#atelier' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Ubicación', href: '#ubicacion' },
];

export const IMAGES = {
  // A striking, high-contrast image that works better for hero text overlay
  HERO: "https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=2000&auto=format&fit=crop", 
  DRESS_DETAIL: "https://i.ibb.co/WvjvhcT0/Screenshot-20260107-140409.jpg", 
  MODERN_BRIDE: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop", 
  HAND_SEWING: "https://i.ibb.co/tPW5X2Fh/Screenshot-20260107-140424.jpg", 
  FLOWERS: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop", 
  SHOWROOM: "https://i.ibb.co/jP5Y3qcK/Screenshot-20260107-140455.jpg", 
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Elena Garmendia",
    text: "No es solo un vestido, es la experiencia de sentirte escuchada. En Ley Herma cada puntada cuenta una historia. El resultado en el Casco Viejo fue mágico.",
    date: "Boda en Junio, 2024"
  },
  {
    name: "Marta San Martín",
    text: "Buscaba algo diferente, alta costura real. El equipo de Ley Herma superó todas mis expectativas. Un trato humano y profesional inmejorable.",
    date: "Boda en Septiembre, 2023"
  },
  {
    name: "Lucía Iturbide",
    text: "Entrar en su atelier es transportarse a otro mundo. Me sentí la novia más especial de Pamplona. Gracias por vuestro arte.",
    date: "Boda en Mayo, 2024"
  }
];

export const WHATSAPP_LINK = "https://wa.me/34637981644?text=Hola%20Ley%20Herma,%20me%20gustaría%20solicitar%20una%20cita%20previa%20para%20mi%20vestido%20de%20novia.";
