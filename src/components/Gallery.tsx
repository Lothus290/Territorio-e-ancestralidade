import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface GalleryImage {
  url: string;
  title: string;
  location: string;
}

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const images: GalleryImage[] = [
    {
      url: "https://images.pexels.com/photos/1058401/pexels-photo-1058401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tradições Manuais",
      location: "Comunidade Artesã do Norte"
    },
    {
      url: "https://images.pexels.com/photos/5253695/pexels-photo-5253695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Plantio Ancestral",
      location: "Vale do Ribeira"
    },
    {
      url: "https://images.pexels.com/photos/6040190/pexels-photo-6040190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Territórios Sagrados",
      location: "Serra da Mantiqueira"
    },
    {
      url: "https://images.pexels.com/photos/2746181/pexels-photo-2746181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Celebração da Colheita",
      location: "Planície Central"
    },
    {
      url: "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Paisagem Ancestral",
      location: "Chapada dos Veadeiros"
    },
    {
      url: "https://images.pexels.com/photos/2646531/pexels-photo-2646531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Conexão Espiritual",
      location: "Floresta Amazônica"
    },
    {
      url: "https://images.pexels.com/photos/14839342/pexels-photo-14839342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Preparando Alimentos Tradicionais",
      location: "Comunidade Quilombola"
    },
    {
      url: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Caminhos Ancestrais",
      location: "Cordilheira do Sul"
    }
  ];
  
  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="section-padding bg-earth-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-16">
          Galeria de Territórios
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-700 delay-${index % 4 * 100} ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              onClick={() => openImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{image.title}</h3>
                  <p className="text-sm text-earth-100">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-earth-900 bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 bg-earth-900 bg-opacity-50 rounded-full p-2 text-white hover:bg-terracotta-500 transition-colors"
              onClick={closeImage}
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-earth-800 p-4 rounded-b-lg">
              <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-earth-200">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;