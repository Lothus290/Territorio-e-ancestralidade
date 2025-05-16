import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-earth-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-7 w-7 text-terracotta-500" />
              <span className="ml-2 text-2xl font-serif font-bold text-white">
                Terra<span className="text-terracotta-500">Ancestral</span>
              </span>
            </div>
            <p className="text-earth-300 mb-6">
              Preservando a conexão entre povos, territórios e memórias ancestrais para as gerações futuras.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">Sobre</FooterLink>
              <FooterLink href="#timeline">Linha do Tempo</FooterLink>
              <FooterLink href="#stories">Histórias</FooterLink>
              <FooterLink href="#gallery">Galeria</FooterLink>
              <FooterLink href="#map">Mapa</FooterLink>
              <FooterLink href="#resources">Recursos</FooterLink>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-terracotta-400 mt-1 mr-3" />
                <span className="text-earth-300">Av. das Culturas, 123<br/>Centro, Rio de Janeiro - RJ</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-terracotta-400 mr-3" />
                <a href="mailto:contato@terraancestral.org" className="text-earth-300 hover:text-terracotta-400 transition-colors">contato@terraancestral.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-terracotta-400 mr-3" />
                <a href="tel:+551199999999" className="text-earth-300 hover:text-terracotta-400 transition-colors">(11) 9999-9999</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Boletim Informativo</h3>
            <p className="text-earth-300 mb-4">
              Receba novidades e atualizações sobre territórios e projetos culturais.
            </p>
            <form>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="px-4 py-2 bg-earth-800 text-white rounded-md border border-earth-700 focus:outline-none focus:border-terracotta-500 transition-colors"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-terracotta-500 text-white rounded-md hover:bg-terracotta-600 transition-colors"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="border-earth-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-earth-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TerraAncestral. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-earth-400 text-sm hover:text-terracotta-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-earth-400 text-sm hover:text-terracotta-400 transition-colors">Termos de Uso</a>
            <a href="#" className="text-earth-400 text-sm hover:text-terracotta-400 transition-colors">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <li>
      <a 
        href={href}
        className="text-earth-300 hover:text-terracotta-400 transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-9 h-9 rounded-full bg-earth-800 flex items-center justify-center hover:bg-terracotta-500 transition-colors text-white"
    >
      {icon}
    </a>
  );
};

export default Footer;