import React, { useRef } from 'react';
import { Map as MapIcon, Navigation } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TerritoryMarkerProps {
  name: string;
  description: string;
  top: string;
  left: string;
  isActive: boolean;
  onClick: () => void;
}

const TerritoryMarker: React.FC<TerritoryMarkerProps> = ({
  name,
  description,
  top,
  left,
  isActive,
  onClick
}) => {
  return (
    <div 
      className={`absolute cursor-pointer transition-all duration-300 ${isActive ? 'z-20' : 'z-10'}`}
      style={{ top, left }}
      onClick={onClick}
    >
      <div className={`flex flex-col items-center`}>
        <div 
          className={`w-6 h-6 rounded-full flex items-center justify-center 
            ${isActive ? 'bg-terracotta-500' : 'bg-spirit-500'} shadow-md
            transition-all duration-300 hover:scale-110
          `}
        >
          <Navigation className="w-3 h-3 text-white" />
        </div>
        {isActive && (
          <div className="absolute top-8 -left-40 w-80 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
            <h3 className="font-bold text-earth-800 mb-1">{name}</h3>
            <p className="text-sm text-earth-700">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Map: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeTerritory, setActiveTerritory] = React.useState<number | null>(null);
  
  const territories = [
    {
      name: "Terras Indígenas do Xingu",
      description: "Território ancestral que abriga diversas etnias indígenas, preservando práticas culturais e conhecimentos tradicionais sobre a floresta.",
      top: "30%",
      left: "45%"
    },
    {
      name: "Quilombo dos Palmares",
      description: "Símbolo da resistência e preservação da cultura afro-brasileira, mantendo viva a conexão com as raízes africanas através de rituais e práticas culturais.",
      top: "55%",
      left: "80%"
    },
    {
      name: "Comunidades Ribeirinhas do Amazonas",
      description: "Povos que vivem em profunda conexão com os rios e a floresta, desenvolvendo técnicas sustentáveis de manejo dos recursos naturais.",
      top: "20%",
      left: "30%"
    },
    {
      name: "Sertão Nordestino",
      description: "Região onde comunidades tradicionais desenvolveram profundos conhecimentos sobre a convivência com a seca e a caatinga.",
      top: "40%",
      left: "75%"
    },
    {
      name: "Pantanal Mato-grossense",
      description: "Área onde as práticas culturais são moldadas pelo ciclo das águas, criando uma profunda conexão com os ciclos naturais do território.",
      top: "60%",
      left: "45%"
    }
  ];
  
  const toggleTerritory = (index: number) => {
    if (activeTerritory === index) {
      setActiveTerritory(null);
    } else {
      setActiveTerritory(index);
    }
  };

  return (
    <section 
      id="map" 
      ref={sectionRef}
      className="section-padding bg-forest-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            <div className="flex items-center mb-4">
              <MapIcon className="w-8 h-8 text-forest-500 mr-3" />
              <h2 className="section-title">
                Mapa Territorial
              </h2>
            </div>
            <p className="text-lg text-earth-700 mb-6">
              Explore os territórios ancestrais e suas histórias. Cada região carrega memórias, conhecimentos e práticas culturais que foram transmitidas através de gerações.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-forest-500 mb-6">
              <h3 className="text-xl font-bold text-earth-800 mb-2">Legenda</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-terracotta-500 mr-2"></div>
                  <span className="text-earth-700">Territórios Indígenas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-spirit-500 mr-2"></div>
                  <span className="text-earth-700">Comunidades Tradicionais</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">
              Ver mapa detalhado
            </button>
          </div>
          
          <div 
            className={`relative h-96 lg:h-[500px] bg-earth-200 rounded-lg overflow-hidden transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
            }`}
          >
            {/* Map background */}
            <img 
              src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Mapa do Brasil"
              className="w-full h-full object-cover opacity-60"
            />
            
            {/* Territory markers */}
            {territories.map((territory, index) => (
              <TerritoryMarker
                key={index}
                name={territory.name}
                description={territory.description}
                top={territory.top}
                left={territory.left}
                isActive={activeTerritory === index}
                onClick={() => toggleTerritory(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;