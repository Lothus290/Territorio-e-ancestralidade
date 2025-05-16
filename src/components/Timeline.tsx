import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isRight?: boolean;
  isInView: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  isRight = false,
  isInView
}) => {
  return (
    <div className={`mb-16 flex flex-col ${isRight ? 'md:items-end' : 'md:items-start'}`}>
      <div 
        className={`w-full md:w-1/2 transition-all duration-700 ${
          isInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div 
          className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
            isRight ? 'border-spirit-500' : 'border-terracotta-500'
          }`}
        >
          <div className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-3 ${
            isRight ? 'bg-spirit-100 text-spirit-700' : 'bg-terracotta-100 text-terracotta-700'
          }`}>
            {year}
          </div>
          <h3 className="text-xl font-bold text-earth-800 mb-2">{title}</h3>
          <p className="text-earth-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const timelineItems = [
    {
      year: 'Passado Ancestral',
      title: 'Conexão Primordial',
      description: 'Os primeiros povos estabelecem relações profundas com o território, desenvolvendo sistemas de conhecimento e práticas culturais intimamente ligadas à terra.'
    },
    {
      year: 'Colonização',
      title: 'Rupturas Territoriais',
      description: 'Processos de colonização causam deslocamentos forçados e interrompem conexões ancestrais com os territórios tradicionais, criando cicatrizes históricas.'
    },
    {
      year: 'Resistência',
      title: 'Preservação de Saberes',
      description: 'Comunidades resistem através da transmissão oral de conhecimentos, mantendo vivas as práticas culturais e a memória territorial mesmo em contextos adversos.'
    },
    {
      year: 'Presente',
      title: 'Reconstrução e Fortalecimento',
      description: 'Movimentos contemporâneos lutam pelo reconhecimento de direitos territoriais e pela valorização dos conhecimentos tradicionais como patrimônio da humanidade.'
    },
    {
      year: 'Futuro',
      title: 'Revitalização e Continuidade',
      description: 'As novas gerações renovam o compromisso com a terra, combinando conhecimentos ancestrais com tecnologias contemporâneas para proteger territórios e culturas.'
    }
  ];

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="section-padding bg-earth-50 relative overflow-hidden"
    >
      <div className="absolute w-96 h-96 -top-48 -left-48 bg-forest-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute w-80 h-80 -bottom-40 -right-40 bg-terracotta-200 rounded-full opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="section-title text-center mb-16">
          Jornada Através do Tempo
        </h2>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-earth-300"></div>
          
          {/* Timeline content */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                isRight={index % 2 !== 0}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;