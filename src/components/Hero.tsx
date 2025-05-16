import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            srcSet="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1600"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=800"
            media="(min-width: 400px)"
          />
          <img
            src="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/80 via-earth-900/60 to-earth-900/80"></div>
      </div>
      
      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <span className="inline-block text-terracotta-400 text-lg md:text-xl mb-4 font-medium tracking-wider">
          Memória • Identidade • Território
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 sm:mb-8 font-serif leading-tight">
          Território e<br/>
          <span className="text-terracotta-500">Ancestralidade</span>
        </h1>
        <p className="text-lg sm:text-2xl text-earth-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Explorando a conexão sagrada entre a terra e a memória dos povos. Nossa identidade é moldada pelos territórios que habitamos e pelas histórias de nossos ancestrais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a 
            href="#about" 
            className="w-full sm:w-auto btn btn-primary text-lg px-8 py-4 rounded-full transform hover:scale-105"
          >
            Explorar Jornada
          </a>
          <a 
            href="#stories" 
            className="w-full sm:w-auto btn btn-outline text-white border-2 border-white hover:bg-white hover:text-earth-900 text-lg px-8 py-4 rounded-full transform hover:scale-105"
          >
            Histórias Ancestrais
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow"
        aria-label="Rolar para baixo"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium tracking-wider">Descubra Mais</span>
          <ArrowDown className="h-6 w-6" />
        </div>
      </a>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-terracotta-500 mix-blend-overlay opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 sm:right-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-spirit-500 mix-blend-overlay opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-forest-500 mix-blend-overlay opacity-10 blur-2xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;