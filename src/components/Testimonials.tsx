import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  community: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      quote: "A conexão com nossa terra ancestral não é apenas física, mas espiritual. Cada planta, cada rio, conta uma história de nossos antepassados que devemos preservar para as futuras gerações.",
      name: "Jurema Santos",
      role: "Anciã",
      community: "Aldeia Pataxó",
      image: "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Nossos rituais mantêm viva a memória do território, mesmo quando fisicamente estamos distantes dele. É através dessas práticas que mantemos nossa identidade e resistência cultural.",
      name: "Carlos Almeida",
      role: "Líder Comunitário",
      community: "Quilombo Ivaporunduva",
      image: "https://images.pexels.com/photos/3149516/pexels-photo-3149516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Aprendemos com os mais velhos a ler os sinais da terra e do céu. Esse conhecimento não está nos livros, mas na vivência diária com o território que nos abriga e alimenta.",
      name: "Maria Conceição",
      role: "Benzedeira",
      community: "Comunidade Ribeirinha do São Francisco",
      image: "https://images.pexels.com/photos/8179880/pexels-photo-8179880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-earth-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-earth-900 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-earth-900 to-transparent opacity-30"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-spirit-900 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-terracotta-900 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          {/* Quote icon */}
          <div className="flex justify-center mb-10">
            <Quote className="w-16 h-16 text-terracotta-400 rotate-180" />
          </div>
          
          {/* Testimonial */}
          <blockquote className="text-center mb-10">
            <p className="text-xl md:text-2xl text-white font-serif mb-8 leading-relaxed">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-terracotta-500">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-lg">{currentTestimonial.name}</div>
                <div className="text-earth-300">{currentTestimonial.role}</div>
                <div className="text-terracotta-400 text-sm">{currentTestimonial.community}</div>
              </div>
            </div>
          </blockquote>
          
          {/* Navigation controls */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-earth-700 flex items-center justify-center hover:bg-terracotta-500 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
            <div className="flex items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-terracotta-500 w-4' : 'bg-earth-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-earth-700 flex items-center justify-center hover:bg-terracotta-500 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;