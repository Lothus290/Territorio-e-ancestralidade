import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-earth-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            <h2 className="section-title">
              Nossa Missão
            </h2>
            <div className="mt-12 space-y-6 text-lg text-earth-800">
              <p>
                O projeto <strong>TerraAncestral</strong> nasceu da necessidade de preservar e honrar as conexões profundas entre os povos e seus territórios tradicionais. Nosso objetivo é documentar, celebrar e fortalecer os laços entre as comunidades e os espaços que moldaram sua identidade cultural através das gerações.
              </p>
              <p>
                Acreditamos que a relação com a terra não é apenas física, mas espiritual e histórica. As marcas de nossos ancestrais permanecem no território e continuam a informar quem somos hoje. Preservar estas conexões é essencial para a continuidade das tradições e para a construção de um futuro que respeite a diversidade cultural.
              </p>
              <p>
                Trabalhamos em parceria com comunidades tradicionais, pesquisadores e educadores para construir um acervo vivo de conhecimentos que possam ser transmitidos para as próximas gerações.
              </p>
            </div>
            <div className="mt-8">
              <a href="#stories" className="btn btn-primary">Conhecer histórias</a>
            </div>
          </div>
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
            }`}
          >
            <div className="aspect-square max-w-md mx-auto relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4262413/pexels-photo-4262413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Anciã compartilhando sabedoria tradicional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 right-8 w-full h-full border-4 border-terracotta-500 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-spirit-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;