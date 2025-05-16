import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, User } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface StoryCardProps {
  image: string;
  title: string;
  territory: string;
  excerpt: string;
  isInView: boolean;
  delay: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ 
  image, 
  title, 
  territory, 
  excerpt,
  isInView,
  delay
}) => {
  return (
    <div 
      className={`card hover:scale-105 transition-all duration-700 delay-${delay} ${
        isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-forest-600 mb-2">
          <User className="h-4 w-4 mr-1" />
          <span>{territory}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-earth-800">{title}</h3>
        <p className="text-earth-700 mb-4">{excerpt}</p>
        <button className="text-terracotta-500 font-medium hover:text-terracotta-700 transition-colors">
          Ler mais →
        </button>
      </div>
    </div>
  );
};

const Stories: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [currentPage, setCurrentPage] = useState(0);
  
  const stories = [
    {
      image: "https://images.pexels.com/photos/5648396/pexels-photo-5648396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Guardiões da Floresta",
      territory: "Povo Ashaninka",
      excerpt: "Como uma comunidade indígena mantém viva a tradição de proteção da floresta amazônica através de práticas sustentáveis transmitidas por gerações."
    },
    {
      image: "https://images.pexels.com/photos/4219073/pexels-photo-4219073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Memórias do Sertão",
      territory: "Comunidades Sertanejas",
      excerpt: "A relação das famílias do sertão nordestino com a caatinga e como os saberes sobre a terra seca são fundamentais para a sobrevivência."
    },
    {
      image: "https://images.pexels.com/photos/5292197/pexels-photo-5292197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Cantos da Terra",
      territory: "Quilombo dos Palmares",
      excerpt: "As músicas e rituais que preservam a conexão com a África ancestral e fortalecem o vínculo com o território conquistado e defendido."
    },
    {
      image: "https://images.pexels.com/photos/5257587/pexels-photo-5257587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Guardiãs das Sementes",
      territory: "Mulheres do Vale do Ribeira",
      excerpt: "Como um grupo de mulheres agricultoras preserva variedades nativas de sementes e os conhecimentos associados ao seu cultivo e uso."
    },
    {
      image: "https://images.pexels.com/photos/10415357/pexels-photo-10415357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Navegadores Ancestrais",
      territory: "Povos Caiçaras",
      excerpt: "As técnicas tradicionais de navegação e pesca que conectam os caiçaras ao mar, mantendo viva a ancestralidade através das ondas."
    },
    {
      image: "https://images.pexels.com/photos/2675052/pexels-photo-2675052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Patrimônio das Alturas",
      territory: "Povos da Serra da Mantiqueira",
      excerpt: "A relação espiritual com as montanhas e como as comunidades tradicionais preservam os caminhos ancestrais entre os picos."
    }
  ];
  
  // Stories for mobile view (3 at a time)
  const totalPages = Math.ceil(stories.length / 3);
  const visibleStories = stories.slice(currentPage * 3, (currentPage + 1) * 3);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section 
      id="stories" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="section-title">
              Histórias Ancestrais
            </h2>
            <p className="text-lg text-earth-700 max-w-2xl">
              Conheça as experiências e narrativas de pessoas e comunidades que mantêm vivas as tradições e a conexão com seus territórios.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-earth-200 flex items-center justify-center hover:bg-terracotta-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-earth-200 flex items-center justify-center hover:bg-terracotta-500 hover:text-white transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Desktop view - all stories */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard
              key={index}
              image={story.image}
              title={story.title}
              territory={story.territory}
              excerpt={story.excerpt}
              isInView={isInView}
              delay={(index % 3) * 100}
            />
          ))}
        </div>
        
        {/* Mobile view - paginated stories */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
          {visibleStories.map((story, index) => (
            <StoryCard
              key={index}
              image={story.image}
              title={story.title}
              territory={story.territory}
              excerpt={story.excerpt}
              isInView={isInView}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* Mobile pagination controls */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            <button 
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-earth-200 flex items-center justify-center hover:bg-terracotta-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center px-4">
              <span className="text-earth-700">{currentPage + 1} de {totalPages}</span>
            </div>
            <button 
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-earth-200 flex items-center justify-center hover:bg-terracotta-500 hover:text-white transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;