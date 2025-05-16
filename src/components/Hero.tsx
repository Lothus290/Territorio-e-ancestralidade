import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/50 to-earth-900/70"></div>
        </div>
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 font-serif leading-tight">
          Território e<br/>
          <span className="text-terracotta-500">Ancestralidade</span>
        </h1>
        <p className="text-xl sm:text-2xl text-earth-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Explorando a conexão sagrada entre a terra e a memória dos povos. Nossa identidade é moldada pelos territórios que habitamos e pelas histórias de nossos ancestrais.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#about" 
            className="btn btn-primary text-lg px-8 py-4 rounded-full transform hover:scale-105"
          >
            Explorar Jornada
          </a>
          <a 
            href="#stories" 
            className="btn btn-outline text-white border-2 border-white hover:bg-white hover:text-earth-900 text-lg px-8 py-4 rounded-full transform hover:scale-105"
          >
            Histórias Ancestrais
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow"
        aria-label="Rolar para baixo"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium tracking-wider">Descubra Mais</span>
          <ArrowDown className="h-6 w-6" />
        </div>
      </a>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-20 w-64 h-64 rounded-full bg-terracotta-500 mix-blend-overlay opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-20 w-80 h-80 rounded-full bg-spirit-500 mix-blend-overlay opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-forest-500 mix-blend-overlay opacity-10 blur-2xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;