import React, { useRef } from 'react';
import { BookOpen, FileText, Video, Download, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isInView: boolean;
  delay: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  isInView,
  delay
}) => {
  return (
    <div 
      className={`card hover:border-l-4 hover:border-terracotta-500 transition-all duration-700 delay-${delay} ${
        isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-500 mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-earth-800">{title}</h3>
        </div>
        <p className="text-earth-700 mb-4">{description}</p>
        <a 
          href={link}
          className="inline-flex items-center text-terracotta-500 font-medium hover:text-terracotta-700 transition-colors"
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Acessar recurso
        </a>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const resources = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Guia de Mapeamento Cultural",
      description: "Material educativo para comunidades que desejam documentar seus territórios e práticas culturais associadas.",
      link: "#"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Cartilha de Direitos Territoriais",
      description: "Documento que orienta sobre os direitos das comunidades tradicionais sobre seus territórios ancestrais.",
      link: "#"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Série Documental",
      description: "Conjunto de vídeos que registram as conexões entre povos e seus territórios em diferentes regiões do país.",
      link: "#"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Acervo Fotográfico",
      description: "Coleção de imagens históricas e contemporâneas dos territórios e comunidades, disponíveis para download educativo.",
      link: "#"
    }
  ];

  return (
    <section 
      id="resources" 
      ref={sectionRef}
      className="section-padding bg-earth-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title inline-block">
            Biblioteca de Recursos
          </h2>
          <p className="text-lg text-earth-700 mt-6">
            Acesse materiais educativos, documentos e recursos multimídia sobre território e ancestralidade. Estes materiais são desenvolvidos em colaboração com comunidades tradicionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              link={resource.link}
              isInView={isInView}
              delay={index % 2 * 100}
            />
          ))}
        </div>
        
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <a href="#" className="btn btn-primary">
            Ver todos os recursos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;